use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import jsPDF from 'jspdf'
import AppShell from '@/components/AppShell'
import ApparatusIcon from '@/components/ApparatusIcon'
import FigValueBadge from '@/components/FigValueBadge'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'
import { FIG_ELEMENTS, type FigElement } from '@/lib/figElements'

type Apparatus = 'VT' | 'UB' | 'BB' | 'FX'
type RoutineStatus = 'planned' | 'learning' | 'consistent' | 'competition_ready'

type AthleteRow = {
  id: string
  first_name: string
  last_name: string
  team_id: string | null
  coach_id: string | null
  program_level_id: string | null
  teams?: { name: string } | null
  coaches?: { full_name: string } | null
  programs?: { name: string } | null
  program_levels?: { name: string } | null
}

type RoutineItem = FigElement & {
  status: RoutineStatus
  coachNote?: string
  mainIssue?: string
  correctionFocus?: string
}

type Requirement = {
  id: string
  label: string
  check: (routine: RoutineItem[]) => boolean
  recommend: string[]
}

const apparatusNames: Record<Apparatus, string> = {
  VT: 'Vault',
  UB: 'Uneven Bars',
  BB: 'Beam',
  FX: 'Floor',
}

const routineApparatusNames: Record<Apparatus, string> = {
  VT: 'Vault',
  UB: 'Bars',
  BB: 'Beam',
  FX: 'Floor',
}

const apparatusForIcon: Record<Apparatus, string> = {
  VT: 'Vault',
  UB: 'Uneven Bars',
  BB: 'Beam',
  FX: 'Floor',
}

const valueFilters = ['all', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'VT']

const requirements: Record<Apparatus, Requirement[]> = {
  VT: [
    { id: 'vt-one', label: 'Select one competition vault', check: (r) => r.length >= 1, recommend: ['Search Handspring, Yamashita, Tsukahara, Yurchenko, Round-off.'] },
  ],
  UB: [
    { id: 'ub-flight', label: 'Flight element', check: (r) => hasTag(r, 'flight'), recommend: ['Search: flight, release, Maloney, Pak, Jaeger, Tkatchev'] },
    { id: 'ub-transition', label: 'Transition between bars', check: (r) => hasTag(r, 'transition') || hasTag(r, 'low-to-high') || hasTag(r, 'high-to-low'), recommend: ['Search: low to high, high to low, transition'] },
    { id: 'ub-circle', label: 'Close bar / circle element', check: (r) => hasTag(r, 'close-bar') || hasTag(r, 'circle') || hasTag(r, 'stalder') || hasTag(r, 'toe') || hasTag(r, 'clear-hip'), recommend: ['Search: stalder, toe-on, clear hip, pike circle'] },
    { id: 'ub-turn', label: 'Element with 360° turn or giant/circle work', check: (r) => hasText(r, '360') || hasTag(r, 'giant') || hasTag(r, 'turn'), recommend: ['Search: 360, giant, turn'] },
    { id: 'ub-dmt', label: 'Dismount', check: (r) => hasTag(r, 'dismount'), recommend: ['Search: dismount, flyaway, double back'] },
  ],
  BB: [
    { id: 'bb-dance', label: 'Dance series with 2 elements, one leap/jump/hop with 180° split', check: (r) => countTag(r, 'dance') >= 2 && (hasText(r, '180') || hasTag(r, 'split')), recommend: ['Search: split, switch, ring, jump'] },
    { id: 'bb-acro-series', label: 'Acro series, minimum 2 flight elements', check: (r) => countBoth(r, 'acro', 'flight') >= 2, recommend: ['Search: flic, layout, aerial, salto'] },
    { id: 'bb-directions', label: 'Acro elements in different directions', check: (r) => (hasTag(r, 'forward') || hasTag(r, 'fwd')) && (hasTag(r, 'backward') || hasTag(r, 'bwd') || hasTag(r, 'sideward') || hasTag(r, 'swd')), recommend: ['Search: front aerial, side aerial, back handspring'] },
    { id: 'bb-turn', label: 'Turn requirement', check: (r) => hasTag(r, 'turn'), recommend: ['Search: full turn, 360, 720'] },
    { id: 'bb-dmt', label: 'Dismount', check: (r) => hasTag(r, 'dismount'), recommend: ['Search: dismount, double twist, double back'] },
  ],
  FX: [
    { id: 'fx-dance', label: 'Dance passage with 2 different leaps/hops, one 180° split', check: (r) => countTag(r, 'dance') >= 2 && (hasText(r, '180') || hasTag(r, 'split')), recommend: ['Search: split leap, switch leap, ring leap'] },
    { id: 'fx-twist', label: 'Salto with longitudinal axis turn', check: (r) => hasTag(r, 'salto') && (hasTag(r, 'twist') || hasText(r, '360') || hasText(r, '540') || hasText(r, '720')), recommend: ['Search: full, double twist, twist'] },
    { id: 'fx-double', label: 'Double salto', check: (r) => hasTag(r, 'double'), recommend: ['Search: double back, double layout, Arabian double'] },
    { id: 'fx-forward', label: 'Forward/sideward salto', check: (r) => hasTag(r, 'forward') || hasTag(r, 'fwd') || hasTag(r, 'sideward') || hasTag(r, 'swd'), recommend: ['Search: front, forward, Arabian, sideward'] },
    { id: 'fx-backward', label: 'Backward salto', check: (r) => hasTag(r, 'backward') || hasTag(r, 'bwd'), recommend: ['Search: back, backward, double back'] },
  ],
}

function hasTag(routine: RoutineItem[], tag: string) {
  return routine.some((item) => item.tags?.includes(tag))
}
function countTag(routine: RoutineItem[], tag: string) {
  return routine.filter((item) => item.tags?.includes(tag)).length
}
function countBoth(routine: RoutineItem[], a: string, b: string) {
  return routine.filter((item) => item.tags?.includes(a) && item.tags?.includes(b)).length
}
function hasText(routine: RoutineItem[], text: string) {
  const q = text.toLowerCase()
  return routine.some((item) => `${item.name} ${item.code} ${item.tags?.join(' ')}`.toLowerCase().includes(q))
}
function normalizeStatus(status: RoutineStatus) {
  if (status === 'competition_ready') return 'achieved'
  if (status === 'consistent' || status === 'learning') return 'almost'
  return 'not_achieved'
}
function sortRoutine(items: RoutineItem[]) {
  return [...items].sort((a, b) => a.code.localeCompare(b.code, undefined, { numeric: true }))
}

export default function FigElitePage() {
  const router = useRouter()
  const [athletes, setAthletes] = useState<AthleteRow[]>([])
  const [selectedAthleteId, setSelectedAthleteId] = useState('')
  const [apparatus, setApparatus] = useState<Apparatus>('BB')
  const [query, setQuery] = useState('')
  const [valueFilter, setValueFilter] = useState('all')
  const [groupFilter, setGroupFilter] = useState('all')
  const [elementLibrary, setElementLibrary] = useState<FigElement[]>(FIG_ELEMENTS)
  const [routine, setRoutine] = useState<RoutineItem[]>([])
  const [message, setMessage] = useState('')
  const [saving, setSaving] = useState(false)

  useEffect(() => { loadInitial() }, [])
  useEffect(() => { if (selectedAthleteId) loadRoutine() }, [selectedAthleteId, apparatus])

  async function loadInitial() {
    const { user, profile, teamIds } = await getCurrentUserProfile()
    if (!user) return router.push('/login')

    const safeTeamIds = teamIds.length ? teamIds : [EMPTY_UUID]
    let queryBuilder = supabase
      .from('athletes')
      .select('id,first_name,last_name,team_id,coach_id,program_level_id,teams(name),coaches(full_name),programs(name),program_levels(name)')
      .order('first_name')

    if (profile?.role === 'coach') queryBuilder = queryBuilder.in('team_id', safeTeamIds)
    const [{ data: athleteRows }, { data: dbElements }] = await Promise.all([
      queryBuilder,
      supabase.from('fig_elements').select('*').order('apparatus').order('code'),
    ])

    const rows = (athleteRows || []) as any[]
    setAthletes(rows)
    if (rows.length) setSelectedAthleteId(rows[0].id)

    if (dbElements && dbElements.length) {
      setElementLibrary(dbElements.map((x: any) => ({
        id: x.id,
        apparatus: x.apparatus,
        code: x.code,
        name: x.name,
        element_group: x.element_group,
        value_letter: x.value_letter,
        dv: Number(x.dv || 0),
        tags: x.tags || [],
        note: x.note || '',
      })))
    }
  }

  async function loadRoutine() {
    const athlete = athletes.find((x) => x.id === selectedAthleteId)
    if (!athlete) return setRoutine([])

    const { data: savedElements } = await supabase
      .from('routine_elements')
      .select('*')
      .eq('athlete_id', selectedAthleteId)
      .eq('apparatus', routineApparatusNames[apparatus])
      .order('order_number')

    if (!savedElements?.length) {
      setRoutine([])
      return
    }

    const elementIds = savedElements.map((el: any) => el.fig_element_id).filter(Boolean)
    const libMap = new Map(elementLibrary.map((x) => [x.id, x]))
    let dbMap = new Map<string, FigElement>()
    if (elementIds.length) {
      const { data } = await supabase.from('fig_elements').select('*').in('id', elementIds)
      dbMap = new Map((data || []).map((x: any) => [x.id, {
        id: x.id,
        apparatus: x.apparatus,
        code: x.code,
        name: x.name,
        element_group: x.element_group,
        value_letter: x.value_letter,
        dv: Number(x.dv || 0),
        tags: x.tags || [],
        note: x.note || '',
      }]))
    }

    const { data: progressRows } = await supabase
      .from('athlete_element_progress')
      .select('*')
      .eq('athlete_id', selectedAthleteId)
      .in('element_id', savedElements.map((el: any) => el.id))

    const progressByElement = new Map((progressRows || []).map((p: any) => [p.element_id, p]))
    const next = savedElements.map((el: any) => {
      const source = (el.fig_element_id && (dbMap.get(el.fig_element_id) || libMap.get(el.fig_element_id))) || null
      const progress = progressByElement.get(el.id) as any
      return {
        id: source?.id || el.fig_element_id || el.id,
        apparatus,
        code: source?.code || el.fig_code || '',
        name: source?.name || el.element_name,
        element_group: source?.element_group || el.element_type || 'FIG routine',
        value_letter: source?.value_letter || el.fig_value || '',
        dv: Number(source?.dv || el.fig_dv || 0),
        tags: source?.tags || [],
        note: source?.note || '',
        status: progress?.status === 'achieved' ? 'competition_ready' : progress?.status === 'almost' ? 'consistent' : 'planned',
        coachNote: progress?.coach_note || '',
        mainIssue: progress?.main_issue || '',
        correctionFocus: progress?.correction_focus || '',
      } as RoutineItem
    })
    setRoutine(next)
  }

  function addElement(element: FigElement) {
    const item: RoutineItem = { ...element, status: 'planned' }
    if (apparatus === 'VT') setRoutine([item])
    else if (!routine.some((x) => x.id === element.id)) setRoutine([...routine, item])
  }

  function removeElement(index: number) {
    setRoutine(routine.filter((_, i) => i !== index))
  }

  function updateItem(index: number, patch: Partial<RoutineItem>) {
    setRoutine(routine.map((item, i) => i === index ? { ...item, ...patch } : item))
  }

  async function saveRoutine() {
    const athlete = athletes.find((x) => x.id === selectedAthleteId)
    if (!athlete?.program_level_id || !selectedAthleteId) {
      setMessage('Select an athlete with a program level first.')
      return
    }
    setSaving(true)
    setMessage('')

    const apparatusName = routineApparatusNames[apparatus]

    const { data: existing } = await supabase
      .from('routine_elements')
      .select('id')
      .eq('athlete_id', selectedAthleteId)
      .eq('apparatus', apparatusName)

    const existingIds = (existing || []).map((x: any) => x.id)
    if (existingIds.length) {
      await supabase.from('athlete_element_progress').delete().in('element_id', existingIds).eq('athlete_id', selectedAthleteId)
      await supabase.from('routine_elements').delete().in('id', existingIds)
    }

    const rows = routine.map((item, index) => ({
      athlete_id: selectedAthleteId,
      level_id: athlete.program_level_id,
      apparatus: apparatusName,
      element_name: `${item.code ? `${item.code} - ` : ''}${item.name}`,
      order_number: index + 1,
      element_type: item.element_group || 'FIG routine',
      is_required: true,
      fig_element_id: item.id,
      fig_code: item.code,
      fig_value: item.value_letter,
      fig_dv: item.dv,
      fig_apparatus: apparatus,
    }))

    if (rows.length) {
      const { data: inserted, error } = await supabase.from('routine_elements').insert(rows).select('id')
      if (error) {
        setMessage(`Save failed: ${error.message}`)
        setSaving(false)
        return
      }
      const progressRows = (inserted || []).map((el: any, index: number) => ({
        athlete_id: selectedAthleteId,
        element_id: el.id,
        status: normalizeStatus(routine[index].status),
        coach_note: routine[index].coachNote || '',
        main_issue: routine[index].mainIssue || '',
        correction_focus: routine[index].correctionFocus || '',
        updated_at: new Date().toISOString(),
      }))
      if (progressRows.length) await supabase.from('athlete_element_progress').upsert(progressRows, { onConflict: 'athlete_id,element_id' })
    }

    setMessage('Routine saved to Levels & Skills. Reports will now read this athlete routine.')
    setSaving(false)
    setTimeout(() => setMessage(''), 3600)
  }

  const selectedAthlete = athletes.find((a) => a.id === selectedAthleteId)
  const appElements = useMemo(() => elementLibrary.filter((x) => x.apparatus === apparatus), [elementLibrary, apparatus])
  const groups = Array.from(new Set(appElements.map((x) => x.element_group).filter(Boolean)))
  const filtered = useMemo(() => {
    const text = query.trim().toLowerCase()
    return appElements
      .filter((x) => valueFilter === 'all' || x.value_letter === valueFilter)
      .filter((x) => groupFilter === 'all' || x.element_group === groupFilter)
      .filter((x) => !text || [x.name, x.code, x.element_group, x.value_letter, x.tags?.join(' ')].join(' ').toLowerCase().includes(text))
      .slice(0, 120)
  }, [appElements, valueFilter, groupFilter, query])

  const topDvElements = sortRoutine(routine).sort((a, b) => Number(b.dv) - Number(a.dv)).slice(0, apparatus === 'VT' ? 1 : 8)
  const dvScore = apparatus === 'VT' ? (routine[0]?.dv || 0) : topDvElements.reduce((sum, item) => sum + Number(item.dv || 0), 0)
  const passedReqs = requirements[apparatus].filter((req) => req.check(routine))
  const crScore = apparatus === 'VT' ? 0 : passedReqs.length * 0.5
  const readyCount = routine.filter((item) => item.status === 'competition_ready').length
  const readiness = routine.length ? Math.round((readyCount / routine.length) * 100) : 0
  const estimatedD = apparatus === 'VT' ? dvScore : dvScore + crScore

  function exportPdf() {
    const athleteName = selectedAthlete ? `${selectedAthlete.first_name} ${selectedAthlete.last_name}` : 'Athlete'
    const doc = new jsPDF('p', 'mm', 'a4')
    doc.setFillColor(4, 10, 24)
    doc.rect(0, 0, 210, 38, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(20)
    doc.text('GymTrack FIG Elite Routine Plan', 14, 18)
    doc.setFontSize(10)
    doc.text(`${athleteName} • ${apparatusNames[apparatus]} • ${new Date().toLocaleDateString()}`, 14, 28)
    doc.setTextColor(15, 23, 42)
    doc.setFontSize(13)
    doc.text(`Estimated D-score: ${estimatedD.toFixed(2)}`, 14, 50)
    doc.setFontSize(9)
    doc.text(`DV: ${dvScore.toFixed(2)} | CR: ${crScore.toFixed(2)} | Routine Readiness: ${readiness}%`, 14, 58)
    let y = 72
    doc.setFontSize(11)
    doc.text('Routine Elements', 14, y)
    y += 8
    doc.setFontSize(8)
    routine.forEach((item, index) => {
      if (y > 275) { doc.addPage(); y = 20 }
      doc.text(`${index + 1}. ${item.code} ${item.name} (${item.value_letter}) - ${item.status.replaceAll('_', ' ')}`, 14, y)
      y += 5
      if (item.mainIssue || item.correctionFocus || item.coachNote) {
        doc.setTextColor(90, 100, 120)
        doc.text(`Issue: ${item.mainIssue || '-'} | Focus: ${item.correctionFocus || '-'} | Note: ${item.coachNote || '-'}`, 18, y)
        doc.setTextColor(15, 23, 42)
        y += 5
      }
    })
    y += 6
    if (y > 250) { doc.addPage(); y = 20 }
    doc.setFontSize(11)
    doc.text('Requirements', 14, y)
    y += 8
    doc.setFontSize(8)
    requirements[apparatus].forEach((req) => { doc.text(`${req.check(routine) ? '✓' : '✗'} ${req.label}`, 14, y); y += 5 })
    doc.save(`GymTrack_FIG_${athleteName.replaceAll(' ', '_')}_${apparatus}.pdf`)
  }

  return (
    <AppShell>
      <div className="topbar">
        <div>
          <h1 className="title">FIG Elite Builder</h1>
          <p className="muted">Build the athlete routine here. Press Save Routine to send it automatically to Levels & Skills and Reports.</p>
        </div>
        <div className="inline-actions">
          <button className="btn secondary" onClick={exportPdf} disabled={!selectedAthleteId}>Export Plan PDF</button>
          <button className="btn" onClick={saveRoutine} disabled={!selectedAthleteId || saving}>{saving ? 'Saving...' : 'Save Routine to Levels'}</button>
        </div>
      </div>

      <div className="card mb fig-hero-card">
        <div className="form-grid">
          <label>
            Athlete
            <select value={selectedAthleteId} onChange={(e) => setSelectedAthleteId(e.target.value)}>
              {athletes.map((a) => <option key={a.id} value={a.id}>{a.first_name} {a.last_name} {a.program_levels?.name ? `- ${a.program_levels.name}` : ''}</option>)}
            </select>
          </label>
          <label>
            Apparatus
            <select value={apparatus} onChange={(e) => setApparatus(e.target.value as Apparatus)}>
              <option value="VT">Vault</option>
              <option value="UB">Uneven Bars</option>
              <option value="BB">Balance Beam</option>
              <option value="FX">Floor Exercise</option>
            </select>
          </label>
        </div>
      </div>

      <div className="fig-apparatus-grid mb">
        {(['VT', 'UB', 'BB', 'FX'] as Apparatus[]).map((app) => (
          <button key={app} className={`fig-apparatus-card ${apparatus === app ? 'active' : ''}`} onClick={() => setApparatus(app)}>
            <ApparatusIcon apparatus={apparatusForIcon[app]} />
            <strong>{apparatusNames[app]}</strong>
            <span>{elementLibrary.filter((x) => x.apparatus === app).length} elements</span>
          </button>
        ))}
      </div>

      <div className="grid-2 mb">
        <div className="card">
          <p className="muted">Selected Athlete</p>
          <h2>{selectedAthlete ? `${selectedAthlete.first_name} ${selectedAthlete.last_name}` : 'No athlete selected'}</h2>
          <p className="muted">{selectedAthlete?.teams?.name || 'No team'} • {selectedAthlete?.programs?.name || 'Program not set'} • {selectedAthlete?.program_levels?.name || 'Level not set'}</p>
          {message && <p className="fig-save-message">{message}</p>}
        </div>
        <div className="card fig-score-card">
          <div><span>Estimated D</span><strong>{estimatedD.toFixed(2)}</strong></div>
          <div><span>DV</span><strong>{dvScore.toFixed(2)}</strong></div>
          <div><span>CR</span><strong>{crScore.toFixed(2)}</strong></div>
          <div><span>Ready</span><strong>{readiness}%</strong></div>
        </div>
      </div>

      <div className="grid-2 mb fig-builder-grid">
        <div className="card">
          <h2>FIG Element Library</h2>
          <p className="muted">Search by name, code, value, group, family, or tag. No huge dropdowns.</p>
          <div className="fig-filter-row">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search: handspring, Yamashita, aerial, switch, double..." />
            <select value={valueFilter} onChange={(e) => setValueFilter(e.target.value)}>
              {valueFilters.map((v) => <option key={v} value={v}>{v === 'all' ? 'All values' : `${v} value`}</option>)}
            </select>
          </div>
          <select value={groupFilter} onChange={(e) => setGroupFilter(e.target.value)}>
            <option value="all">All groups</option>
            {groups.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
          <div className="fig-element-results">
            {filtered.map((element) => (
              <div key={element.id} className="fig-element-row">
                <div>
                  <div className="fig-element-title"><FigValueBadge value={element.value_letter as any} /> <strong>{element.name}</strong></div>
                  <p className="muted">{element.code} • {element.element_group}</p>
                  <p className="fig-tags">{element.tags?.slice(0, 8).join(' • ')}</p>
                </div>
                <button className="btn secondary" onClick={() => addElement(element)}>{apparatus === 'VT' ? 'Select' : '+ Add'}</button>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="report-card-header">
            <div><h2>{apparatusNames[apparatus]} Routine</h2><p className="muted">{routine.length} selected element{routine.length === 1 ? '' : 's'}</p></div>
            <button className="btn" onClick={saveRoutine} disabled={saving}>{saving ? 'Saving...' : 'Save'}</button>
          </div>
          <div className="fig-routine-list">
            {routine.length ? routine.map((item, index) => (
              <div key={`${item.id}-${index}`} className="fig-routine-item">
                <div className="fig-routine-top">
                  <div><div className="fig-element-title"><FigValueBadge value={item.value_letter as any} /> <strong>{index + 1}. {item.name}</strong></div><p className="muted">{item.code} • {item.element_group}</p></div>
                  <button className="btn danger" onClick={() => removeElement(index)}>Remove</button>
                </div>
                <div className="form-grid">
                  <label>Status<select value={item.status} onChange={(e) => updateItem(index, { status: e.target.value as RoutineStatus })}><option value="planned">Planned</option><option value="learning">Learning</option><option value="consistent">Consistent</option><option value="competition_ready">Competition Ready</option></select></label>
                  <label>Main issue<input value={item.mainIssue || ''} onChange={(e) => updateItem(index, { mainIssue: e.target.value })} placeholder="Example: weak shoulder block" /></label>
                  <label>Correction focus<input value={item.correctionFocus || ''} onChange={(e) => updateItem(index, { correctionFocus: e.target.value })} placeholder="Example: faster snap, hollow shape" /></label>
                  <label>Coach note<input value={item.coachNote || ''} onChange={(e) => updateItem(index, { coachNote: e.target.value })} placeholder="Private coach note or score" /></label>
                </div>
              </div>
            )) : <p className="muted">No elements selected yet. Search and add elements from the FIG library.</p>}
          </div>
        </div>
      </div>

      <div className="card mb">
        <h2>Smart Requirements & Recommendations</h2>
        <p className="muted">GymTrack checks the planned routine and recommends missing element types.</p>
        <div className="fig-requirements-grid">
          {requirements[apparatus].map((req) => {
            const done = req.check(routine)
            return <div key={req.id} className={`fig-requirement ${done ? 'done' : 'missing'}`}><strong>{done ? '✓' : '✗'} {req.label}</strong>{!done && <p>Recommendations: {req.recommend.join(', ')}</p>}</div>
          })}
        </div>
      </div>
    </AppShell>
  )
}
