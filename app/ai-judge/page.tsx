'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'
import { rulesFor, scoreFromDeductions, type Apparatus, type UsagDeductionRule, type RoutineElementLite } from '@/lib/usagAiRules'

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
  severity: 'small' | 'medium' | 'large'
  correction: string
  source_note?: string
  coach_note?: string
}

const APPARATUS_OPTIONS: Apparatus[] = ['Beam', 'Floor']

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

  useEffect(() => {
    load()
  }, [])

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

    if (currentRole === 'coach') {
      query = query.in('team_id', safeTeamIds)
    }

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
  const activeRules = useMemo(
    () => rulesFor(apparatus, selectedLevelName, routineElements, databaseRules),
    [apparatus, selectedLevelName, routineElements, databaseRules],
  )
  const estimatedScore = useMemo(() => scoreFromDeductions(deductions), [deductions])

  useEffect(() => {
    loadRulesForSetup()
  }, [athleteId, apparatus, athletes])

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
          .select('element_name,apparatus')
          .eq('athlete_id', athlete.id)
          .eq('apparatus', apparatus),
        supabase
          .from('routine_elements')
          .select('element_name,apparatus')
          .eq('level_id', levelId)
          .eq('apparatus', apparatus)
          .is('athlete_id', null),
      ])
      routine = ((athleteRoutine?.length ? athleteRoutine : defaultRoutine) || []) as RoutineElementLite[]
    }
    setRoutineElements(routine)

    const { data: dbRules, error } = await supabase
      .from('usag_deduction_rules')
      .select('id,level_name,apparatus,element_name,textbook_fault,deduction_min,deduction_max,default_value,measurement_target,correction_focus,source_note')
      .eq('apparatus', apparatus)
      .in('level_name', ['all', levelName || ''])
      .order('level_name')
      .order('element_name')

    if (!error && dbRules?.length) {
      setDatabaseRules(dbRules as unknown as UsagDeductionRule[])
      setRulesNotice(`Loaded ${dbRules.length} USAG textbook rule rows from Supabase for ${levelName || 'this level'} / ${apparatus}.`)
    } else {
      setDatabaseRules([])
      setRulesNotice(`Using built-in USAG textbook starter rules. Run supabase/usag_ai_deduction_rules.sql for the editable Supabase rules database.`)
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

    const { error } = await supabase.storage.from('ai-videos').upload(path, videoFile, {
      cacheControl: '60',
      upsert: false,
    })

    setUploading(false)

    if (error) {
      alert(`Video upload failed: ${error.message}\n\nMake sure you created a private Supabase bucket named ai-videos.`)
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

    setAnalyzing(true)
    setApproved(false)

    let path = videoPath
    if (!path) path = await uploadVideo()
    if (!path) {
      setAnalyzing(false)
      return
    }

    await new Promise((resolve) => setTimeout(resolve, 650))

    if (!activeRules.length) {
      alert('No USAG textbook rules were found for this athlete level and apparatus. Add rules in supabase/usag_ai_deduction_rules.sql first.')
      setAnalyzing(false)
      return
    }

    const generated = activeRules.map((rule) => {
      const range = Number(rule.deduction_max || 0) - Number(rule.deduction_min || 0)
      const severity = range >= 0.4 ? 'medium' : 'small'
      return {
        rule_id: rule.id,
        skill: rule.element_name,
        issue: rule.textbook_fault,
        metric: rule.measurement_target,
        value: Number(rule.default_value || rule.deduction_min || 0.1),
        severity: severity as 'small' | 'medium' | 'large',
        correction: rule.correction_focus,
        source_note: rule.source_note,
      }
    })

    setDeductions(generated)
    const score = scoreFromDeductions(generated)
    setCoachFinalScore(score)
    setSummary(
      `${selectedAthlete.first_name} ${selectedAthlete.last_name} - ${apparatus}: browser-side USAG execution assistant generated ${generated.length} coach-review deductions. Final score must be confirmed by the coach.`,
    )

    const { data, error } = await supabase
      .from('ai_video_reviews')
      .insert({
        athlete_id: selectedAthlete.id,
        apparatus,
        level_name: selectedAthlete.program_levels?.name || selectedAthlete.levels?.name || null,
        video_path: path,
        status: 'pending',
        estimated_e_score: score,
        coach_final_e_score: score,
        deductions: generated,
        feedback: `${selectedAthlete.first_name} ${selectedAthlete.last_name} - ${apparatus}: browser-side USAG execution assistant generated ${generated.length} coach-review deductions. Final score must be confirmed by the coach.`,
      })
      .select('id')
      .single()

    if (!error && data?.id) setReviewId(data.id)
    setAnalyzing(false)
  }

  function updateDeduction(index: number, patch: Partial<Deduction>) {
    setDeductions((current) => current.map((d, i) => (i === index ? { ...d, ...patch } : d)))
  }

  function removeDeduction(index: number) {
    setDeductions((current) => current.filter((_, i) => i !== index))
  }

  async function approveReview() {
    if (!selectedAthlete) return

    const finalScore = coachFinalScore === '' ? estimatedScore : Number(coachFinalScore)

    const payload = {
      athlete_id: selectedAthlete.id,
      apparatus,
      level_name: selectedAthlete.program_levels?.name || selectedAthlete.levels?.name || null,
      status: 'approved',
      estimated_e_score: estimatedScore,
      coach_final_e_score: finalScore,
      deductions,
      feedback: summary,
      video_path: videoPath || null,
      approved_at: new Date().toISOString(),
    }

    if (reviewId) {
      const { error } = await supabase.from('ai_video_reviews').update(payload).eq('id', reviewId)
      if (error) {
        alert(error.message)
        return
      }
    } else {
      const { error } = await supabase.from('ai_video_reviews').insert(payload)
      if (error) {
        alert(error.message)
        return
      }
    }

    if (videoPath) {
      await supabase.storage.from('ai-videos').remove([videoPath])
    }

    setVideoPath('')
    setApproved(true)
    alert('Review approved. Score saved and video deleted from Supabase Storage.')
  }

  function resetReview() {
    setVideoFile(null)
    setVideoUrl('')
    setVideoPath('')
    setDeductions([])
    setSummary('')
    setCoachFinalScore('')
    setReviewId('')
    setApproved(false)
    setDuration(null)
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  return (
    <AppShell>
      <div className="topbar">
        <div>
          <h1 className="title">AI USAG Execution Assistant</h1>
          <p className="muted">
            Upload a short Beam or Floor video, generate textbook-based deduction suggestions, approve the result, then the video is deleted.
          </p>
        </div>
        <span className="badge">Coach-approved only</span>
      </div>

      <div className="grid-2 mb">
        <div className="card">
          <h2>1. Select Review Setup</h2>
          <div className="form-grid">
            <label>
              Athlete
              <select value={athleteId} onChange={(e) => setAthleteId(e.target.value)}>
                {athletes.map((athlete) => (
                  <option key={athlete.id} value={athlete.id}>
                    {athlete.first_name} {athlete.last_name} - {athlete.program_levels?.name || athlete.levels?.name || 'No level'}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Apparatus
              <select value={apparatus} onChange={(e) => setApparatus(e.target.value as Apparatus)}>
                {APPARATUS_OPTIONS.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {selectedAthlete && (
            <div className="ai-summary-box mt">
              <strong>
                {selectedAthlete.first_name} {selectedAthlete.last_name}
              </strong>
              <span>{selectedAthlete.teams?.name || 'No team'} · {selectedAthlete.program_levels?.name || selectedAthlete.levels?.name || 'No level assigned'}</span>
            </div>
          )}
        </div>

        <div className="card">
          <h2>2. Upload Temporary Video</h2>
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
          />
          <p className="muted">
            Videos are uploaded to the private <strong>ai-videos</strong> bucket only while pending. After coach approval, GymTrack deletes the video and keeps only the review result.
          </p>
          {videoUrl && (
            <video
              ref={videoRef}
              className="ai-video"
              src={videoUrl}
              controls
              onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            />
          )}
          {duration !== null && <p className="muted">Video length: {duration.toFixed(1)} seconds</p>}
        </div>
      </div>

      <div className="card mb">
        <div className="save-panel">
          <div>
            <h2>3. Analyze Using USAG Rule Engine</h2>
            <p className="muted">
              GymTrack now loads element-specific USAG textbook rules for the athlete’s level and apparatus. MediaPipe/AI measurements should be matched only to these rules; the coach confirms the final score.
            </p>
            {rulesNotice && <p className="muted mt"><strong>Rule engine:</strong> {rulesNotice}</p>}
            {!!routineElements.length && (
              <p className="muted"><strong>Routine loaded:</strong> {routineElements.map((el) => el.element_name).join(' · ')}</p>
            )}
          </div>
          <div className="modal-actions">
            <button className="btn secondary" type="button" onClick={resetReview}>Reset</button>
            <button className="btn" type="button" onClick={analyzeVideo} disabled={uploading || analyzing || !videoFile}>
              {uploading ? 'Uploading...' : analyzing ? 'Analyzing...' : 'Analyze Video'}
            </button>
          </div>
        </div>
      </div>

      <div className="grid-2 mb">
        <div className="card">
          <h2>Execution Score</h2>
          <div className="stat">{estimatedScore.toFixed(2)}</div>
          <p className="muted">Estimated E-score before coach adjustment.</p>
          <label>
            Coach Final E-score
            <input
              type="number"
              min="0"
              max="10"
              step="0.05"
              value={coachFinalScore}
              onChange={(e) => setCoachFinalScore(e.target.value === '' ? '' : Number(e.target.value))}
            />
          </label>
        </div>

        <div className="card">
          <h2>Privacy Status</h2>
          <div className={approved ? 'status-pill status-ready' : videoPath ? 'status-pill status-almost' : 'status-pill status-work'}>
            {approved ? 'Approved · Video deleted' : videoPath ? 'Pending · Video stored temporarily' : 'No video stored'}
          </div>
          <p className="muted mt">
            Final saved results can be used in reports. The original video is removed after approval so storage does not get out of hand.
          </p>
        </div>
      </div>

      <div className="card mb">
        <div className="element-header">
          <h2>Deduction Suggestions</h2>
          <button className="btn" type="button" onClick={approveReview} disabled={!deductions.length}>
            Approve & Delete Video
          </button>
        </div>

        {!deductions.length ? (
          <p className="muted">No deductions generated yet. Upload a video and press Analyze Video.</p>
        ) : (
          <div className="detail-skill-list">
            {deductions.map((deduction, index) => (
              <div key={`${deduction.rule_id}-${index}`} className="detail-skill-row has-problem">
                <div className="detail-skill-top">
                  <div>
                    <span className="status-pill status-work">-{Number(deduction.value).toFixed(2)}</span>
                    <strong>{deduction.skill}</strong>
                  </div>
                  <button className="btn secondary" type="button" onClick={() => removeDeduction(index)}>Remove</button>
                </div>

                <div className="detail-problem-grid">
                  <div>
                    <span>Issue</span>
                    <strong>{deduction.issue}</strong>
                  </div>
                  <div>
                    <span>Measurement target</span>
                    <strong>{deduction.metric}</strong>
                  </div>
                  <div>
                    <span>Correction focus</span>
                    <strong>{deduction.correction}</strong>
                  </div>
                </div>
                {deduction.source_note && <p className="muted mt"><strong>Manual source:</strong> {deduction.source_note}</p>}

                <div className="form-grid mt">
                  <label>
                    Deduction Value
                    <select
                      value={deduction.value}
                      onChange={(e) => updateDeduction(index, { value: Number(e.target.value) })}
                    >
                      <option value={0.05}>0.05</option>
                      <option value={0.1}>0.10</option>
                      <option value={0.2}>0.20</option>
                      <option value={0.3}>0.30</option>
                      <option value={0.5}>0.50</option>
                    </select>
                  </label>
                  <label>
                    Coach Note
                    <input
                      value={deduction.coach_note || ''}
                      placeholder="Example: visible wobble after landing"
                      onChange={(e) => updateDeduction(index, { coach_note: e.target.value })}
                    />
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AppShell>
  )
}
