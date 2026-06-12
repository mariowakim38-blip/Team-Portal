'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import jsPDF from 'jspdf'
import AppShell from '@/components/AppShell'
import ApparatusIcon from '@/components/ApparatusIcon'
import FigValueBadge from '@/components/FigValueBadge'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'

type Apparatus = 'VT' | 'UB' | 'BB' | 'FX'
type FigValue = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J'

type AthleteRow = {
  id: string
  first_name: string
  last_name: string
  team_id: string | null
  coach_id: string | null
  teams?: { name: string } | null
  coaches?: { full_name: string } | null
  programs?: { name: string } | null
  program_levels?: { name: string } | null
}

type FigElement = {
  id: string
  apparatus: Apparatus
  code: string
  name: string
  group: string
  value: FigValue
  dv: number
  tags: string[]
  note?: string
}

type RoutineItem = FigElement & {
  status: 'planned' | 'learning' | 'consistent' | 'competition_ready'
  coachNote?: string
}

type Requirement = {
  id: string
  label: string
  check: (routine: RoutineItem[]) => boolean
  recommend: string[]
}

const valuePoints: Record<FigValue, number> = {
  A: 0.1,
  B: 0.2,
  C: 0.3,
  D: 0.4,
  E: 0.5,
  F: 0.6,
  G: 0.7,
  H: 0.8,
  I: 0.9,
  J: 1.0,
}

const apparatusNames: Record<Apparatus, string> = {
  VT: 'Vault',
  UB: 'Uneven Bars',
  BB: 'Beam',
  FX: 'Floor',
}

const apparatusForIcon: Record<Apparatus, string> = {
  VT: 'Vault',
  UB: 'Uneven Bars',
  BB: 'Beam',
  FX: 'Floor',
}

const figElements: FigElement[] = [
  // VAULT starter COP library
  e('VT-101', 'VT', '1.101', 'Handspring forward', 'Group 1 - Handspring/Yamashita', 'A', ['vault', 'handspring', 'forward']),
  e('VT-201', 'VT', '2.201', 'Handspring forward salto tucked', 'Group 2 - Handspring salto fwd/bwd', 'B', ['vault', 'handspring', 'forward', 'salto']),
  e('VT-301', 'VT', '3.301', 'Tsukahara tucked', 'Group 3 - Tsukahara', 'C', ['vault', 'tsukahara', 'backward', 'salto']),
  e('VT-401', 'VT', '4.401', 'Yurchenko tucked', 'Group 4 - Yurchenko', 'D', ['vault', 'yurchenko', 'backward', 'salto']),
  e('VT-501', 'VT', '5.501', 'Round-off 1/2 on, salto forward tucked', 'Group 5 - Round-off 1/2 on', 'E', ['vault', 'roundoff', 'half on', 'forward', 'salto']),

  // UB starter COP library
  e('UB-101', 'UB', '1.101', 'Glide kip', '1.000 Mounts', 'A', ['mount', 'kip', 'close bar']),
  e('UB-102', 'UB', '1.102', 'Jump to high bar', '1.000 Mounts', 'A', ['mount', 'high bar']),
  e('UB-201', 'UB', '2.201', 'Cast to handstand', '2.000 Casts and clear hip circles', 'B', ['cast', 'handstand', 'same bar']),
  e('UB-202', 'UB', '2.202', 'Clear hip circle to handstand', '2.000 Casts and clear hip circles', 'B', ['clear hip', 'handstand', 'close bar', 'same bar']),
  e('UB-301', 'UB', '3.301', 'Giant circle backward', '3.000 Giant circles', 'C', ['giant', 'same bar', 'backward', '360']),
  e('UB-302', 'UB', '3.302', 'Giant circle forward', '3.000 Giant circles', 'C', ['giant', 'same bar', 'forward', '360']),
  e('UB-401', 'UB', '4.401', 'Stalder circle to handstand', '4.000 Stalder circles', 'D', ['stalder', 'close bar', 'same bar', '360']),
  e('UB-402', 'UB', '4.402', 'Piked stalder to handstand', '4.000 Stalder circles', 'D', ['stalder', 'pike', 'close bar', 'same bar']),
  e('UB-403', 'UB', '4.403', 'Toe-on circle to handstand', '5.000 Pike circles', 'D', ['toe on', 'close bar', 'same bar', '360']),
  e('UB-501', 'UB', '5.501', 'Maloney', 'Flight element', 'E', ['flight', 'low to high', 'transition', 'same bar']),
  e('UB-502', 'UB', '5.502', 'Pak salto', 'Flight element', 'E', ['flight', 'high to low', 'transition']),
  e('UB-503', 'UB', '5.503', 'Van Leeuwen', 'Flight element', 'E', ['flight', 'transition', 'turn']),
  e('UB-601', 'UB', '6.301', 'Flyaway tucked', '6.000 Dismounts', 'C', ['dismount', 'salto', 'backward']),
  e('UB-602', 'UB', '6.401', 'Double back tucked dismount', '6.000 Dismounts', 'D', ['dismount', 'double salto', 'backward']),
  e('UB-603', 'UB', '6.501', 'Full twisting double back dismount', '6.000 Dismounts', 'E', ['dismount', 'double salto', 'twist', 'backward']),

  // BB starter COP library
  e('BB-101', 'BB', '1.101', 'Jump to front support mount', '1.000 Mounts', 'A', ['mount']),
  e('BB-201', 'BB', '2.101', 'Split jump', '2.000 Leaps, jumps and hops', 'A', ['dance', 'jump', 'split 180']),
  e('BB-202', 'BB', '2.102', 'Wolf jump', '2.000 Leaps, jumps and hops', 'A', ['dance', 'jump']),
  e('BB-203', 'BB', '2.201', 'Sissone', '2.000 Leaps, jumps and hops', 'B', ['dance', 'jump', 'split 180']),
  e('BB-204', 'BB', '2.301', 'Switch leap', '2.000 Leaps, jumps and hops', 'C', ['dance', 'leap', 'split 180']),
  e('BB-205', 'BB', '2.401', 'Switch leap 1/2', '2.000 Leaps, jumps and hops', 'D', ['dance', 'leap', 'turn', 'split 180']),
  e('BB-206', 'BB', '2.501', 'Switch ring leap', '2.000 Leaps, jumps and hops', 'E', ['dance', 'leap', 'ring', 'split 180']),
  e('BB-301', 'BB', '3.101', 'Full turn', '3.000 Turns', 'A', ['turn', '360']),
  e('BB-302', 'BB', '3.301', 'Double turn', '3.000 Turns', 'C', ['turn', '720']),
  e('BB-401', 'BB', '4.101', 'Handstand', '4.000 Holds and acro non-flight', 'A', ['acro', 'non-flight', 'handstand']),
  e('BB-402', 'BB', '4.201', 'Back walkover', '4.000 Holds and acro non-flight', 'B', ['acro', 'non-flight', 'backward']),
  e('BB-501', 'BB', '5.201', 'Back handspring', '5.000 Acrobatic flight', 'B', ['acro', 'flight', 'backward', 'series']),
  e('BB-502', 'BB', '5.301', 'Layout stepout', '5.000 Acrobatic flight', 'C', ['acro', 'flight', 'backward', 'series']),
  e('BB-503', 'BB', '5.401', 'Front aerial', '5.000 Acrobatic flight', 'D', ['acro', 'flight', 'forward']),
  e('BB-504', 'BB', '5.401s', 'Side aerial', '5.000 Acrobatic flight', 'D', ['acro', 'flight', 'sideward']),
  e('BB-505', 'BB', '5.501', 'Onodi', '5.000 Acrobatic flight', 'E', ['acro', 'flight', 'backward', 'forward']),
  e('BB-601', 'BB', '6.201', 'Round-off dismount', '6.000 Dismounts', 'B', ['dismount', 'acro']),
  e('BB-602', 'BB', '6.301', 'Layout dismount', '6.000 Dismounts', 'C', ['dismount', 'salto']),
  e('BB-603', 'BB', '6.401', 'Double twist dismount', '6.000 Dismounts', 'D', ['dismount', 'twist']),
  e('BB-604', 'BB', '6.501', 'Double back tucked dismount', '6.000 Dismounts', 'E', ['dismount', 'double salto']),

  // FX starter COP library
  e('FX-101', 'FX', '1.101', 'Split leap', '1.000 Leaps, jumps and hops', 'A', ['dance', 'leap', 'split 180']),
  e('FX-102', 'FX', '1.102', 'Straddle jump', '1.000 Leaps, jumps and hops', 'A', ['dance', 'jump']),
  e('FX-201', 'FX', '1.201', 'Switch leap', '1.000 Leaps, jumps and hops', 'B', ['dance', 'leap', 'split 180']),
  e('FX-202', 'FX', '1.301', 'Switch leap 1/2', '1.000 Leaps, jumps and hops', 'C', ['dance', 'leap', 'turn', 'split 180']),
  e('FX-203', 'FX', '1.401', 'Switch ring leap', '1.000 Leaps, jumps and hops', 'D', ['dance', 'leap', 'ring', 'split 180']),
  e('FX-301', 'FX', '2.101', 'Full turn', '2.000 Turns', 'A', ['turn', '360']),
  e('FX-302', 'FX', '2.301', 'Double turn', '2.000 Turns', 'C', ['turn', '720']),
  e('FX-401', 'FX', '4.101', 'Front tuck', '4.000 Saltos forward and sideward', 'A', ['acro', 'salto', 'forward']),
  e('FX-402', 'FX', '4.201', 'Front layout', '4.000 Saltos forward and sideward', 'B', ['acro', 'salto', 'forward']),
  e('FX-403', 'FX', '4.301', 'Front full twist', '4.000 Saltos forward and sideward', 'C', ['acro', 'salto', 'forward', 'twist']),
  e('FX-404', 'FX', '4.401', 'Front double full', '4.000 Saltos forward and sideward', 'D', ['acro', 'salto', 'forward', 'twist']),
  e('FX-405', 'FX', '4.501', 'Double Arabian tucked', '4.000 Saltos forward and sideward', 'E', ['acro', 'double salto', 'forward']),
  e('FX-501', 'FX', '5.101', 'Back tuck', '5.000 Saltos backward', 'A', ['acro', 'salto', 'backward']),
  e('FX-502', 'FX', '5.201', 'Back layout', '5.000 Saltos backward', 'B', ['acro', 'salto', 'backward']),
  e('FX-503', 'FX', '5.301', 'Full twisting layout', '5.000 Saltos backward', 'C', ['acro', 'salto', 'backward', 'twist']),
  e('FX-504', 'FX', '5.401', 'Double twist', '5.000 Saltos backward', 'D', ['acro', 'salto', 'backward', 'twist']),
  e('FX-505', 'FX', '5.401d', 'Double back tucked', '5.000 Saltos backward', 'D', ['acro', 'double salto', 'backward']),
  e('FX-506', 'FX', '5.501', 'Double back piked', '5.000 Saltos backward', 'E', ['acro', 'double salto', 'backward']),
  e('FX-507', 'FX', '5.601', 'Double layout', '5.000 Saltos backward', 'F', ['acro', 'double salto', 'backward']),
]

function e(
  id: string,
  apparatus: Apparatus,
  code: string,
  name: string,
  group: string,
  value: FigValue,
  tags: string[],
  note?: string,
): FigElement {
  return { id, apparatus, code, name, group, value, dv: valuePoints[value], tags, note }
}

const requirements: Record<Apparatus, Requirement[]> = {
  VT: [
    { id: 'vt-one', label: 'Select one competition vault', check: (r) => r.length >= 1, recommend: ['Choose a vault that matches the gymnast current safe competition level.'] },
  ],
  UB: [
    { id: 'ub-flight', label: 'Flight element', check: (r) => hasTag(r, 'flight'), recommend: ['Maloney', 'Pak salto', 'Van Leeuwen'] },
    { id: 'ub-transition', label: 'Transition between bars', check: (r) => hasTag(r, 'transition') || hasTag(r, 'low to high') || hasTag(r, 'high to low'), recommend: ['Maloney', 'Pak salto'] },
    { id: 'ub-close-bar', label: 'Close bar / circle element', check: (r) => hasTag(r, 'close bar'), recommend: ['Clear hip circle to handstand', 'Stalder circle to handstand', 'Toe-on circle to handstand'] },
    { id: 'ub-360', label: 'Circle/turn minimum 360°', check: (r) => hasTag(r, '360') || hasTag(r, 'giant'), recommend: ['Giant circle backward', 'Giant circle forward'] },
    { id: 'ub-dmt', label: 'Dismount', check: (r) => hasTag(r, 'dismount'), recommend: ['Double back tucked dismount', 'Full twisting double back dismount'] },
  ],
  BB: [
    { id: 'bb-dance-series', label: 'Dance series with 2 different elements, one 180° split', check: (r) => countTag(r, 'dance') >= 2 && hasTag(r, 'split 180'), recommend: ['Split jump', 'Sissone', 'Switch leap'] },
    { id: 'bb-acro-series', label: 'Acro series with minimum 2 flight elements', check: (r) => countBoth(r, 'acro', 'flight') >= 2, recommend: ['Back handspring + Layout stepout', 'Back handspring + Back handspring'] },
    { id: 'bb-direction', label: 'Acro elements in different directions', check: (r) => hasTag(r, 'forward') && (hasTag(r, 'backward') || hasTag(r, 'sideward')), recommend: ['Front aerial', 'Side aerial', 'Back handspring'] },
    { id: 'bb-turn', label: 'Turn requirement', check: (r) => hasTag(r, 'turn'), recommend: ['Full turn', 'Double turn'] },
    { id: 'bb-dmt', label: 'Dismount', check: (r) => hasTag(r, 'dismount'), recommend: ['Double twist dismount', 'Double back tucked dismount'] },
  ],
  FX: [
    { id: 'fx-dance-passage', label: 'Dance passage with 2 different leaps/hops, one 180° split', check: (r) => countTag(r, 'dance') >= 2 && hasTag(r, 'split 180'), recommend: ['Split leap', 'Switch leap', 'Switch leap 1/2'] },
    { id: 'fx-salto-twist', label: 'Salto with longitudinal axis turn', check: (r) => hasTag(r, 'salto') && hasTag(r, 'twist'), recommend: ['Full twisting layout', 'Double twist', 'Front full twist'] },
    { id: 'fx-double-salto', label: 'Double salto', check: (r) => hasTag(r, 'double salto'), recommend: ['Double back tucked', 'Double back piked', 'Double Arabian tucked'] },
    { id: 'fx-forward', label: 'Forward/sideward salto', check: (r) => hasTag(r, 'forward') || hasTag(r, 'sideward'), recommend: ['Front layout', 'Front full twist', 'Double Arabian tucked'] },
    { id: 'fx-backward', label: 'Backward salto', check: (r) => hasTag(r, 'backward'), recommend: ['Back layout', 'Double twist', 'Double back tucked'] },
  ],
}

function hasTag(routine: RoutineItem[], tag: string) {
  return routine.some((item) => item.tags.includes(tag))
}
function countTag(routine: RoutineItem[], tag: string) {
  return routine.filter((item) => item.tags.includes(tag)).length
}
function countBoth(routine: RoutineItem[], a: string, b: string) {
  return routine.filter((item) => item.tags.includes(a) && item.tags.includes(b)).length
}

export default function FigElitePage() {
  const router = useRouter()
  const [athletes, setAthletes] = useState<AthleteRow[]>([])
  const [selectedAthleteId, setSelectedAthleteId] = useState('')
  const [apparatus, setApparatus] = useState<Apparatus>('BB')
  const [query, setQuery] = useState('')
  const [valueFilter, setValueFilter] = useState<'all' | FigValue>('all')
  const [groupFilter, setGroupFilter] = useState('all')
  const [routine, setRoutine] = useState<RoutineItem[]>([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    loadAthletes()
  }, [])

  useEffect(() => {
    loadRoutine()
  }, [selectedAthleteId, apparatus])

  async function loadAthletes() {
    const { user, profile, teamIds } = await getCurrentUserProfile()
    if (!user) return router.push('/login')

    const safeTeamIds = teamIds.length ? teamIds : [EMPTY_UUID]
    let queryBuilder = supabase
      .from('athletes')
      .select('id,first_name,last_name,team_id,coach_id,teams(name),coaches(full_name),programs(name),program_levels(name)')
      .order('first_name')

    if (profile?.role === 'coach') queryBuilder = queryBuilder.in('team_id', safeTeamIds)

    const { data } = await queryBuilder
    const rows = (data || []) as any[]
    setAthletes(rows)
    if (rows.length) setSelectedAthleteId(rows[0].id)
  }

  function storageKey() {
    return `fig-routine:${selectedAthleteId}:${apparatus}`
  }

  function loadRoutine() {
    if (!selectedAthleteId) {
      setRoutine([])
      return
    }
    const raw = window.localStorage.getItem(storageKey())
    setRoutine(raw ? JSON.parse(raw) : [])
  }

  function saveRoutine(nextRoutine = routine) {
    if (!selectedAthleteId) return
    window.localStorage.setItem(storageKey(), JSON.stringify(nextRoutine))
    setMessage('Routine saved. Reports and PDF will use the updated routine plan.')
    setTimeout(() => setMessage(''), 2600)
  }

  function addElement(element: FigElement) {
    if (apparatus === 'VT') {
      const next = [{ ...element, status: 'planned' as const }]
      setRoutine(next)
      saveRoutine(next)
      return
    }
    const next = [...routine, { ...element, status: 'planned' as const }]
    setRoutine(next)
    saveRoutine(next)
  }

  function removeElement(index: number) {
    const next = routine.filter((_, i) => i !== index)
    setRoutine(next)
    saveRoutine(next)
  }

  function updateStatus(index: number, status: RoutineItem['status']) {
    const next = routine.map((item, i) => (i === index ? { ...item, status } : item))
    setRoutine(next)
  }

  function updateNote(index: number, coachNote: string) {
    const next = routine.map((item, i) => (i === index ? { ...item, coachNote } : item))
    setRoutine(next)
  }

  const selectedAthlete = athletes.find((a) => a.id === selectedAthleteId)
  const groups = Array.from(new Set(figElements.filter((x) => x.apparatus === apparatus).map((x) => x.group)))
  const filtered = useMemo(() => {
    const text = query.trim().toLowerCase()
    return figElements
      .filter((x) => x.apparatus === apparatus)
      .filter((x) => valueFilter === 'all' || x.value === valueFilter)
      .filter((x) => groupFilter === 'all' || x.group === groupFilter)
      .filter((x) => !text || [x.name, x.code, x.group, x.value, x.tags.join(' ')].join(' ').toLowerCase().includes(text))
      .slice(0, 80)
  }, [apparatus, query, valueFilter, groupFilter])

  const topDvElements = [...routine].sort((a, b) => b.dv - a.dv).slice(0, apparatus === 'VT' ? 1 : 8)
  const dvScore = topDvElements.reduce((sum, item) => sum + item.dv, 0)
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
    doc.setFontSize(22)
    doc.text('GymTrack FIG Elite Routine Plan', 14, 18)
    doc.setFontSize(11)
    doc.text(`${athleteName} • ${apparatusNames[apparatus]} • ${new Date().toLocaleDateString()}`, 14, 28)

    doc.setTextColor(15, 23, 42)
    doc.setFontSize(14)
    doc.text('Routine Summary', 14, 50)
    doc.setFontSize(10)
    doc.text(`Estimated D-score: ${estimatedD.toFixed(2)}`, 14, 60)
    doc.text(`DV: ${dvScore.toFixed(2)} | CR: ${crScore.toFixed(2)} | Readiness: ${readiness}%`, 14, 67)

    let y = 80
    doc.setFontSize(12)
    doc.text('Elements', 14, y)
    y += 8
    doc.setFontSize(9)
    routine.forEach((item, index) => {
      if (y > 275) {
        doc.addPage()
        y = 20
      }
      doc.text(`${index + 1}. ${item.name} (${item.value}) - ${item.status.replaceAll('_', ' ')}`, 14, y)
      y += 6
      if (item.coachNote) {
        doc.setTextColor(80, 90, 110)
        doc.text(`Note: ${item.coachNote}`, 18, y)
        doc.setTextColor(15, 23, 42)
        y += 6
      }
    })

    y += 6
    if (y > 250) {
      doc.addPage()
      y = 20
    }
    doc.setFontSize(12)
    doc.text('Requirements', 14, y)
    y += 8
    doc.setFontSize(9)
    requirements[apparatus].forEach((req) => {
      doc.text(`${req.check(routine) ? '✓' : '✗'} ${req.label}`, 14, y)
      y += 6
    })

    doc.save(`GymTrack_FIG_Routine_${athleteName.replaceAll(' ', '_')}_${apparatus}.pdf`)
  }

  return (
    <AppShell>
      <div className="topbar">
        <div>
          <h1 className="title">FIG Elite Builder</h1>
          <p className="muted">Build smart FIG routines, search by value/group, track missing CR, and export professional routine plans.</p>
        </div>
        <button className="btn" onClick={exportPdf} disabled={!selectedAthleteId}>Export FIG PDF</button>
      </div>

      <div className="card mb fig-hero-card">
        <div className="form-grid">
          <label>
            Athlete
            <select value={selectedAthleteId} onChange={(e) => setSelectedAthleteId(e.target.value)}>
              {athletes.map((a) => (
                <option key={a.id} value={a.id}>{a.first_name} {a.last_name} {a.program_levels?.name ? `- ${a.program_levels.name}` : ''}</option>
              ))}
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
            <span>{figElements.filter((x) => x.apparatus === app).length} elements loaded</span>
          </button>
        ))}
      </div>

      <div className="grid-2 mb">
        <div className="card">
          <p className="muted">Selected Athlete</p>
          <h2>{selectedAthlete ? `${selectedAthlete.first_name} ${selectedAthlete.last_name}` : 'No athlete selected'}</h2>
          <p className="muted">{selectedAthlete?.teams?.name || 'No team'} • {selectedAthlete?.programs?.name || 'Program not set'} • {selectedAthlete?.program_levels?.name || 'Level not set'}</p>
        </div>
        <div className="card fig-score-card">
          <div>
            <span>Estimated D-score</span>
            <strong>{estimatedD.toFixed(2)}</strong>
          </div>
          <div>
            <span>DV</span>
            <strong>{dvScore.toFixed(2)}</strong>
          </div>
          <div>
            <span>CR</span>
            <strong>{crScore.toFixed(2)}</strong>
          </div>
          <div>
            <span>Ready</span>
            <strong>{readiness}%</strong>
          </div>
        </div>
      </div>

      <div className="grid-2 mb fig-builder-grid">
        <div className="card">
          <h2>FIG Element Library</h2>
          <p className="muted">Search instead of scrolling through huge dropdowns.</p>

          <div className="fig-filter-row">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search: aerial, switch, double, dismount..." />
            <select value={valueFilter} onChange={(e) => setValueFilter(e.target.value as any)}>
              <option value="all">All values</option>
              {(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'] as FigValue[]).map((v) => <option key={v} value={v}>{v} value</option>)}
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
                  <div className="fig-element-title"><FigValueBadge value={element.value} /> <strong>{element.name}</strong></div>
                  <p className="muted">{element.code} • {element.group}</p>
                  <p className="fig-tags">{element.tags.join(' • ')}</p>
                </div>
                <button className="btn secondary" onClick={() => addElement(element)}>{apparatus === 'VT' ? 'Select' : '+ Add'}</button>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="report-card-header">
            <div>
              <h2>{apparatusNames[apparatus]} Routine</h2>
              <p className="muted">{routine.length} selected element{routine.length === 1 ? '' : 's'}</p>
            </div>
            <button className="btn" onClick={() => saveRoutine()}>Save Routine</button>
          </div>

          {message && <p className="fig-save-message">{message}</p>}

          <div className="fig-routine-list">
            {routine.length ? routine.map((item, index) => (
              <div key={`${item.id}-${index}`} className="fig-routine-item">
                <div className="fig-routine-top">
                  <div>
                    <div className="fig-element-title"><FigValueBadge value={item.value} /> <strong>{index + 1}. {item.name}</strong></div>
                    <p className="muted">{item.code} • {item.group}</p>
                  </div>
                  <button className="btn danger" onClick={() => removeElement(index)}>Remove</button>
                </div>
                <div className="form-grid">
                  <label>
                    Status
                    <select value={item.status} onChange={(e) => updateStatus(index, e.target.value as RoutineItem['status'])}>
                      <option value="planned">Planned</option>
                      <option value="learning">Learning</option>
                      <option value="consistent">Consistent</option>
                      <option value="competition_ready">Competition Ready</option>
                    </select>
                  </label>
                  <label>
                    Coach note
                    <input value={item.coachNote || ''} onChange={(e) => updateNote(index, e.target.value)} placeholder="Technique focus, connection note, risk..." />
                  </label>
                </div>
              </div>
            )) : <p className="muted">No elements selected yet. Search and add elements from the library.</p>}
          </div>
        </div>
      </div>

      <div className="card mb">
        <h2>Smart Requirements & Recommendations</h2>
        <p className="muted">GymTrack checks the planned routine and recommends missing element types.</p>
        <div className="fig-requirements-grid">
          {requirements[apparatus].map((req) => {
            const done = req.check(routine)
            return (
              <div key={req.id} className={`fig-requirement ${done ? 'done' : 'missing'}`}>
                <strong>{done ? '✓' : '✗'} {req.label}</strong>
                {!done && <p>Recommendations: {req.recommend.join(', ')}</p>}
              </div>
            )
          })}
        </div>
      </div>

      <div className="card">
        <h2>Implementation Note</h2>
        <p className="muted">
          This module includes a working starter FIG element library and smart routine logic. The full FIG COP database can be expanded by adding more elements from the official 2025-2028 table of elements.
        </p>
      </div>
    </AppShell>
  )
}
