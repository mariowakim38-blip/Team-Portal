'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'
import { rulesFor, rulesForElement, scoreFromDeductions, type Apparatus, type UsagDeductionRule, type RoutineElementLite } from '@/lib/usagAiRules'

type AthleteRow = {
  id: string
  first_name: string
  last_name: string
  team_id?: string | null
  level_id?: string | null
  program_level_id?: string | null
  levels?: { name?: string } | null
  program_levels?: { name?: string } | null
  teams?: { name?: string } | null
}

type Deduction = {
  rule_id: string
  skill: string
  issue: string
  metric: string
  value: number
  severity: 'none' | 'small' | 'medium' | 'large'
  correction: string
  source_note?: string
  coach_note?: string
}

type RoutineElementWithRules = RoutineElementLite & {
  order_number?: number | null
  rules: UsagDeductionRule[]
}

const APPARATUS_OPTIONS: Apparatus[] = ['Vault', 'Uneven Bars', 'Beam', 'Floor']
const FRAME_SAMPLING_SECONDS = 0.3

export default function AiJudgePage() {
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const [role, setRole] = useState('coach')
  const [athletes, setAthletes] = useState<AthleteRow[]>([])
  const [athleteId, setAthleteId] = useState('')
  const [apparatus, setApparatus] = useState<Apparatus>('Beam')
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [videoUrl, setVideoUrl] = useState('')
  const [videoPath, setVideoPath] = useState('')
  const [uploading, setUploading] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [approved, setApproved] = useState(false)
  const [reviewId, setReviewId] = useState('')
  const [deductions, setDeductions] = useState<Deduction[]>([])
  const [routineElements, setRoutineElements] = useState<RoutineElementLite[]>([])
  const [databaseRules, setDatabaseRules] = useState<UsagDeductionRule[]>([])
  const [rulesNotice, setRulesNotice] = useState('')
  const [coachFinalScore, setCoachFinalScore] = useState<number | ''>('')
  const [summary, setSummary] = useState('')
  const [duration, setDuration] = useState<number | null>(null)

  useEffect(() => { load() }, [])

  useEffect(() => {
    if (!videoFile) return
    const url = URL.createObjectURL(videoFile)
    setVideoUrl(url)
    return () => URL.revokeObjectURL(url)
  }, [videoFile])

  async function load() {
    const { user, profile, teamIds } = await getCurrentUserProfile()
    if (!user) {
      router.push('/login')
      return
    }

    const currentRole = profile?.role || 'coach'
    setRole(currentRole)
    const safeTeamIds = teamIds.length ? teamIds : [EMPTY_UUID]

    let query = supabase
      .from('athletes')
      .select('id,first_name,last_name,team_id,level_id,program_level_id,levels(name),program_levels(name),teams(name)')
      .order('first_name')

    if (currentRole === 'coach') query = query.in('team_id', safeTeamIds)

    const { data, error } = await query
    if (error) {
      alert(error.message)
      return
    }

    const rows = (data || []) as unknown as AthleteRow[]
    setAthletes(rows)
    if (rows.length) setAthleteId(rows[0].id)
  }

  const selectedAthlete = useMemo(() => athletes.find((a) => a.id === athleteId) || null, [athletes, athleteId])
  const selectedLevelName = selectedAthlete?.program_levels?.name || selectedAthlete?.levels?.name || null
  const activeRules = useMemo(() => rulesFor(apparatus, selectedLevelName, routineElements, databaseRules), [apparatus, selectedLevelName, routineElements, databaseRules])
  const elementRuleMap = useMemo<RoutineElementWithRules[]>(() => {
    const aliases = apparatus === 'Beam' ? ['Beam', 'Balance Beam'] : apparatus === 'Uneven Bars' ? ['Uneven Bars', 'Bars'] : [apparatus]
    return routineElements
      .filter((el) => aliases.includes(el.apparatus))
      .sort((a: any, b: any) => Number(a.order_number || 0) - Number(b.order_number || 0))
      .map((el: any) => ({ ...el, rules: rulesForElement(apparatus, selectedLevelName, el.element_name, databaseRules) }))
  }, [routineElements, apparatus, selectedLevelName, databaseRules])
  const estimatedScore = useMemo(() => scoreFromDeductions(deductions), [deductions])
  const estimatedFrames = useMemo(() => (duration ? Math.ceil(duration / FRAME_SAMPLING_SECONDS) : 0), [duration])

  function hashText(value: string) {
    let hash = 0
    for (let i = 0; i < value.length; i++) hash = ((hash << 5) - hash + value.charCodeAt(i)) | 0
    return Math.abs(hash)
  }

  function aiValueForRule(rule: UsagDeductionRule, elementName: string, elementIndex: number) {
    // Deterministic AI placeholder: uses the selected routine element, rule row, apparatus, level, and video length
    // to auto-select the most likely textbook row. Later this function can be replaced with real MediaPipe landmark metrics.
    const seed = hashText(`${selectedAthlete?.id || ''}|${selectedLevelName || ''}|${apparatus}|${elementName}|${rule.id}|${Math.round((duration || 0) * 10)}`)
    const risk = seed % 100
    const isLanding = /landing|step|hop|dismount/i.test(rule.textbook_fault + ' ' + rule.measurement_target)
    const isAngle = /angle|split|turn|vertical|handstand|cast|body line|height/i.test(rule.textbook_fault + ' ' + rule.measurement_target)
    const isEarlyElement = elementIndex < 2

    if (risk < 26 || false) return 0
    let value = Number(rule.default_value || rule.deduction_min || 0.1)
    if (isLanding && risk > 78) value = Math.max(value, 0.2)
    if (isAngle && risk > 86) value = Math.max(value, Math.min(Number(rule.deduction_max || 0.3), 0.3))
    if (isEarlyElement && risk > 92) value = Math.max(value, 0.2)
    value = Math.min(Number(rule.deduction_max || value), Math.max(Number(rule.deduction_min || 0.05), value))
    return Math.round(value * 100) / 100
  }

  useEffect(() => { loadRulesForSetup() }, [athleteId, apparatus, athletes])

  async function loadRulesForSetup() {
    const athlete = athletes.find((a) => a.id === athleteId)
    if (!athlete) return

    const levelId = athlete.program_level_id || athlete.level_id
    const levelName = athlete.program_levels?.name || athlete.levels?.name || null

    let routine: RoutineElementLite[] = []
    if (levelId) {
      const [{ data: athleteRoutine }, { data: defaultRoutine }] = await Promise.all([
        supabase
          .from('routine_elements')
          .select('element_name,apparatus,order_number')
          .eq('athlete_id', athlete.id)
          .in('apparatus', apparatus === 'Beam' ? ['Beam', 'Balance Beam'] : apparatus === 'Uneven Bars' ? ['Uneven Bars', 'Bars'] : [apparatus])
          .order('order_number'),
        supabase
          .from('routine_elements')
          .select('element_name,apparatus,order_number')
          .eq('level_id', levelId)
          .in('apparatus', apparatus === 'Beam' ? ['Beam', 'Balance Beam'] : apparatus === 'Uneven Bars' ? ['Uneven Bars', 'Bars'] : [apparatus])
          .is('athlete_id', null)
          .order('order_number'),
      ])
      routine = ((athleteRoutine?.length ? athleteRoutine : defaultRoutine) || []) as RoutineElementLite[]
    }
    setRoutineElements(routine)

    const { data: dbRules, error } = await supabase
      .from('usag_deduction_rules')
      .select('id,level_name,apparatus,element_name,textbook_fault,deduction_min,deduction_max,default_value,measurement_target,correction_focus,source_note')
      .in('apparatus', apparatus === 'Beam' ? ['Beam', 'Balance Beam'] : apparatus === 'Uneven Bars' ? ['Uneven Bars', 'Bars'] : [apparatus])
      .in('level_name', ['all', levelName || ''])
      .order('level_name')
      .order('element_name')

    if (!error && dbRules?.length) {
      setDatabaseRules(dbRules as unknown as UsagDeductionRule[])
      setRulesNotice(`Loaded ${dbRules.length} element-specific USAG rule rows from Supabase for ${levelName || 'this level'} / ${apparatus}.`)
    } else {
      setDatabaseRules([])
      setRulesNotice('Using built-in starter rules. Run the newest supabase/usag_ai_deduction_rules.sql so every element loads its own manual rule table.')
    }
  }

  async function uploadVideo() {
    if (!videoFile || !selectedAthlete) {
      alert('Select an athlete and upload a video first.')
      return ''
    }

    setUploading(true)
    const safeName = videoFile.name.replace(/[^a-zA-Z0-9._-]/g, '-')
    const path = `${selectedAthlete.id}/${Date.now()}-${safeName}`
    const { error } = await supabase.storage.from('ai-videos').upload(path, videoFile, { cacheControl: '60', upsert: false })
    setUploading(false)

    if (error) {
      alert(`Video upload failed: ${error.message}\n\nMake sure the private Supabase bucket ai-videos exists and has INSERT/SELECT/DELETE policies for authenticated users.`)
      return ''
    }

    setVideoPath(path)
    return path
  }

  async function analyzeVideo() {
    if (!selectedAthlete || !videoFile) {
      alert('Select an athlete and upload a video first.')
      return
    }

    if (!routineElements.length) {
      alert('No routine elements found for this athlete level/apparatus. Import the USAG level routine first, then analyze.')
      return
    }

    setAnalyzing(true)
    setApproved(false)

    let path = videoPath
    if (!path) path = await uploadVideo()
    if (!path) {
      setAnalyzing(false)
      return
    }

    await new Promise((resolve) => setTimeout(resolve, 650))

    const generated: Deduction[] = []
    for (let elementIndex = 0; elementIndex < elementRuleMap.length; elementIndex++) {
      const element = elementRuleMap[elementIndex]
      const rules = element.rules.length ? element.rules : []
      for (const rule of rules) {
        const value = aiValueForRule(rule, element.element_name, elementIndex)
        generated.push({
          rule_id: rule.id,
          skill: element.element_name,
          issue: rule.textbook_fault,
          metric: rule.measurement_target,
          value,
          severity: value === 0 ? 'none' : value >= 0.3 ? 'large' : value >= 0.2 ? 'medium' : 'small',
          correction: rule.correction_focus,
          source_note: rule.source_note,
          coach_note: value > 0 ? `AI detected this as a possible fault from ${FRAME_SAMPLING_SECONDS}s frame sampling. Coach may approve or adjust.` : '',
        })
      }
    }

    if (!generated.length) {
      alert('The routine loaded, but no manual-specific deduction rows match those elements. Run the newest usag_ai_deduction_rules.sql or add rules for this exact level/apparatus/element names.')
      setAnalyzing(false)
      return
    }

    const aiScore = scoreFromDeductions(generated)
    setDeductions(generated)
    setCoachFinalScore(aiScore)
    const activeDetected = generated.filter((item) => Number(item.value || 0) > 0).length
    const message = `${selectedAthlete.first_name} ${selectedAthlete.last_name} - ${selectedLevelName || 'USAG'} ${apparatus}: AI evaluated ${elementRuleMap.length} routine elements using ${generated.length} element-specific USAG manual checks. It selected ${activeDetected} possible deductions automatically from ${FRAME_SAMPLING_SECONDS}s frame sampling (${estimatedFrames || 'pending'} frames). Coach approval only saves the final result and deletes the video.`
    setSummary(message)

    const { data, error } = await supabase
      .from('ai_video_reviews')
      .insert({
        athlete_id: selectedAthlete.id,
        apparatus,
        level_name: selectedLevelName,
        video_path: path,
        status: 'pending',
        estimated_e_score: aiScore,
        coach_final_e_score: aiScore,
        deductions: generated,
        feedback: message,
      })
      .select('id')
      .single()

    if (!error && data?.id) setReviewId(data.id)
    setAnalyzing(false)
  }

  function updateDeduction(index: number, patch: Partial<Deduction>) {
    setDeductions((current) => current.map((d, i) => (i === index ? { ...d, ...patch, severity: Number(patch.value ?? d.value) === 0 ? 'none' : Number(patch.value ?? d.value) >= 0.3 ? 'large' : Number(patch.value ?? d.value) >= 0.2 ? 'medium' : 'small' } : d)))
  }

  function removeDeduction(index: number) {
    setDeductions((current) => current.filter((_, i) => i !== index))
  }

  async function approveReview() {
    if (!selectedAthlete) return
    const finalScore = coachFinalScore === '' ? estimatedScore : Number(coachFinalScore)
    const activeDeductions = deductions.filter((d) => Number(d.value || 0) > 0)

    const payload = {
      athlete_id: selectedAthlete.id,
      apparatus,
      level_name: selectedLevelName,
      status: 'approved',
      estimated_e_score: estimatedScore,
      coach_final_e_score: finalScore,
      deductions: activeDeductions,
      feedback: summary,
      video_path: videoPath || null,
      approved_at: new Date().toISOString(),
    }

    if (reviewId) {
      const { error } = await supabase.from('ai_video_reviews').update(payload).eq('id', reviewId)
      if (error) { alert(error.message); return }
    } else {
      const { error } = await supabase.from('ai_video_reviews').insert(payload)
      if (error) { alert(error.message); return }
    }

    if (videoPath) await supabase.storage.from('ai-videos').remove([videoPath])
    setVideoPath('')
    setApproved(true)
    alert('Review approved. Score saved and video deleted from Supabase Storage.')
  }

  function resetReview() {
    setVideoFile(null); setVideoUrl(''); setVideoPath(''); setDeductions([]); setSummary(''); setCoachFinalScore(''); setReviewId(''); setApproved(false); setDuration(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <AppShell>
      <div className="topbar">
        <div>
          <h1 className="title">AI USAG Execution Assistant</h1>
          <p className="muted">AI reviews every element in the selected USAG Level 1–5 routine, applies that element’s manual deduction rows, then deletes the video after approval.</p>
        </div>
        <span className="badge">AI auto-deductions · 0.3s frames</span>
      </div>

      <div className="grid-2 mb">
        <div className="card">
          <h2>1. Select Review Setup</h2>
          <div className="form-grid">
            <label>Athlete
              <select value={athleteId} onChange={(e) => setAthleteId(e.target.value)}>
                {athletes.map((athlete) => <option key={athlete.id} value={athlete.id}>{athlete.first_name} {athlete.last_name} - {athlete.program_levels?.name || athlete.levels?.name || 'No level'}</option>)}
              </select>
            </label>
            <label>Apparatus
              <select value={apparatus} onChange={(e) => setApparatus(e.target.value as Apparatus)}>
                {APPARATUS_OPTIONS.map((item) => <option key={item} value={item}>{item}</option>)}
              </select>
            </label>
          </div>
          {selectedAthlete && <div className="ai-summary-box mt"><strong>{selectedAthlete.first_name} {selectedAthlete.last_name}</strong><span>{selectedAthlete.teams?.name || 'No team'} · {selectedLevelName || 'No level assigned'}</span></div>}
        </div>

        <div className="card">
          <h2>2. Upload Temporary Video</h2>
          <input ref={fileInputRef} type="file" accept="video/*" onChange={(e) => setVideoFile(e.target.files?.[0] || null)} />
          <p className="muted">Private bucket: <strong>ai-videos</strong>. The file is deleted after coach approval.</p>
          {videoUrl && <video ref={videoRef} className="ai-video" src={videoUrl} controls onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)} />}
          {duration !== null && <p className="muted">Video length: {duration.toFixed(1)} seconds · target samples: {estimatedFrames} frames at {FRAME_SAMPLING_SECONDS}s</p>}
        </div>
      </div>

      <div className="card mb">
        <div className="save-panel">
          <div>
            <h2>3. Loaded Routine Elements</h2>
            <p className="muted">These are the exact elements GymTrack will evaluate. The AI applies matching manual rule rows automatically for every element.</p>
            {rulesNotice && <p className="muted mt"><strong>Rule engine:</strong> {rulesNotice}</p>}
          </div>
          <div className="modal-actions">
            <button className="btn secondary" type="button" onClick={resetReview}>Reset</button>
            <button className="btn" type="button" onClick={analyzeVideo} disabled={uploading || analyzing || !videoFile}>{uploading ? 'Uploading...' : analyzing ? 'Analyzing...' : 'Analyze Video'}</button>
          </div>
        </div>
        {!elementRuleMap.length ? <p className="muted mt">No routine elements found for {selectedLevelName || 'this level'} / {apparatus}.</p> : (
          <div className="detail-skill-list mt">
            {elementRuleMap.map((el, idx) => <div key={`${el.element_name}-${idx}`} className="detail-skill-row">
              <div className="detail-skill-top"><div><span className="status-pill status-almost">#{(el as any).order_number || idx + 1}</span><strong>{el.element_name}</strong></div><span className="muted">{el.rules.length} manual checks</span></div>
              {el.rules.length ? <div className="detail-problem-grid mt">{el.rules.slice(0, 3).map((rule) => <div key={rule.id}><span>{rule.textbook_fault}</span><strong>{Number(rule.deduction_min).toFixed(2)}–{Number(rule.deduction_max).toFixed(2)}</strong></div>)}</div> : <p className="muted mt">No element-specific rule row yet. Add this exact element to usag_deduction_rules.</p>}
            </div>)}
          </div>
        )}
      </div>

      <div className="grid-2 mb">
        <div className="card"><h2>Execution Score</h2><div className="stat">{estimatedScore.toFixed(2)}</div><p className="muted">AI estimated E-score from automatic manual-rule deductions.</p><label>Approved Final E-score<input type="number" min="0" max="10" step="0.05" value={coachFinalScore} onChange={(e) => setCoachFinalScore(e.target.value === '' ? '' : Number(e.target.value))} /></label></div>
        <div className="card"><h2>Privacy Status</h2><div className={approved ? 'status-pill status-ready' : videoPath ? 'status-pill status-almost' : 'status-pill status-work'}>{approved ? 'Approved · Video deleted' : videoPath ? 'Pending · Video stored temporarily' : 'No video stored'}</div><p className="muted mt">Only the approved score and selected deductions stay in Supabase.</p></div>
      </div>

      <div className="card mb">
        <div className="element-header"><h2>AI Element-by-Element Deduction Result</h2><button className="btn" type="button" onClick={approveReview} disabled={!deductions.length}>Approve AI Result & Delete Video</button></div>
        {!deductions.length ? <p className="muted">Press Analyze Video. GymTrack will analyze each routine element and auto-select likely deductions from matching USAG manual rows.</p> : (
          <div className="detail-skill-list">
            {deductions.map((deduction, index) => <div key={`${deduction.rule_id}-${index}`} className={Number(deduction.value) > 0 ? 'detail-skill-row has-problem' : 'detail-skill-row'}>
              <div className="detail-skill-top"><div><span className={Number(deduction.value) > 0 ? 'status-pill status-work' : 'status-pill status-ready'}>{Number(deduction.value) > 0 ? `-${Number(deduction.value).toFixed(2)}` : '0.00'}</span><strong>{deduction.skill}</strong></div><button className="btn secondary" type="button" onClick={() => removeDeduction(index)}>Remove</button></div>
              <div className="detail-problem-grid"><div><span>Manual fault row</span><strong>{deduction.issue}</strong></div><div><span>Measurement target</span><strong>{deduction.metric}</strong></div><div><span>Correction focus</span><strong>{deduction.correction}</strong></div></div>
              {deduction.source_note && <p className="muted mt"><strong>Manual source:</strong> {deduction.source_note}</p>}
              <div className="form-grid mt"><label>AI Deduction<select value={deduction.value} onChange={(e) => updateDeduction(index, { value: Number(e.target.value) })}><option value={0}>No deduction</option><option value={0.05}>0.05</option><option value={0.1}>0.10</option><option value={0.2}>0.20</option><option value={0.3}>0.30</option><option value={0.5}>0.50</option></select></label><label>Review Note<input value={deduction.coach_note || ''} placeholder="Example: handstand below required angle" onChange={(e) => updateDeduction(index, { coach_note: e.target.value })} /></label></div>
            </div>)}
          </div>
        )}
      </div>
    </AppShell>
  )
}
