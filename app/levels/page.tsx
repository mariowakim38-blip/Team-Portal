'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'
import type { Athlete, Profile } from '@/lib/types'

const statuses = [
  ['not_achieved', '✕ Not Achieved'],
  ['almost', '◐ Almost'],
  ['achieved', '✓ Achieved'],
]

const apparatusOrder = [
  'Vault',
  'Bars',
  'Beam',
  'Floor',
  'Physical Preparation',
]

export default function Levels() {
  const router = useRouter()

  const [profile, setProfile] = useState<Profile | null>(null)
  const [athletes, setAthletes] = useState<Athlete[]>([])
  const [selectedAthleteId, setSelectedAthleteId] = useState('')
  const [selectedAthlete, setSelectedAthlete] = useState<any | null>(null)
  const [elements, setElements] = useState<any[]>([])
  const [progress, setProgress] = useState<Record<string, any>>({})
  const [saving, setSaving] = useState<string>('')

  useEffect(() => {
    loadAthletes()
  }, [])

  useEffect(() => {
    if (selectedAthleteId) {
      loadAthleteRoutine(selectedAthleteId)
    } else {
      setSelectedAthlete(null)
      setElements([])
      setProgress({})
    }
  }, [selectedAthleteId])

  async function loadAthletes() {
    const { user, profile: p, teamIds } = await getCurrentUserProfile()

    if (!user) {
      router.push('/login')
      return
    }

    setProfile(p)

    const safeTeamIds = teamIds.length ? teamIds : [EMPTY_UUID]

    let athletesQuery = supabase
      .from('athletes')
      .select(`
        *,
        teams(name),
        coaches(full_name),
        programs(name),
        program_levels(name)
      `)
      .order('first_name')

    if (p?.role === 'coach') {
      athletesQuery = athletesQuery.in('team_id', safeTeamIds)
    }

    const { data } = await athletesQuery
    setAthletes(data || [])
  }

  async function loadAthleteRoutine(athleteId: string) {
    const athlete = athletes.find((a: any) => a.id === athleteId)
    setSelectedAthlete(athlete || null)

    if (!athlete?.program_level_id) {
      setElements([])
      setProgress({})
      return
    }

    const [{ data: routineElements }, { data: athleteProgress }] = await Promise.all([
      supabase
        .from('routine_elements')
        .select('*')
        .eq('level_id', athlete.program_level_id)
        .order('apparatus')
        .order('order_number'),

      supabase
        .from('athlete_element_progress')
        .select('*')
        .eq('athlete_id', athleteId),
    ])

    setElements(routineElements || [])

    const map: Record<string, any> = {}

    ;(athleteProgress || []).forEach((p: any) => {
      map[p.element_id] = p
    })

    setProgress(map)
  }

  const groupedElements = useMemo(() => {
    const grouped: Record<string, any[]> = {}

    elements.forEach((el) => {
      if (!grouped[el.apparatus]) grouped[el.apparatus] = []
      grouped[el.apparatus].push(el)
    })

    const ordered: Record<string, any[]> = {}

    apparatusOrder.forEach((apparatus) => {
      if (grouped[apparatus]) ordered[apparatus] = grouped[apparatus]
    })

    Object.keys(grouped).forEach((apparatus) => {
      if (!ordered[apparatus]) ordered[apparatus] = grouped[apparatus]
    })

    return ordered
  }, [elements])

  function getStatusIcon(status: string) {
    if (status === 'achieved') return '✓'
    if (status === 'almost') return '◐'
    return '✕'
  }

  function getStatusClass(status: string) {
    if (status === 'achieved') return 'status-ready'
    if (status === 'almost') return 'status-almost'
    return 'status-work'
  }

  function apparatusReadiness(items: any[]) {
    if (!items.length) return 0

    const achieved = items.filter((el) => {
      return progress[el.id]?.status === 'achieved'
    }).length

    return Math.round((achieved / items.length) * 100)
  }

  async function updateProgress(elementId: string, field: string, value: string) {
    if (!selectedAthleteId) return

    setProgress((old) => ({
      ...old,
      [elementId]: {
        ...old[elementId],
        athlete_id: selectedAthleteId,
        element_id: elementId,
        [field]: value,
      },
    }))

    setSaving(elementId)

    const { data: userData } = await supabase.auth.getUser()
    const user = userData.user

    const current = progress[elementId] || {}

    await supabase.from('athlete_element_progress').upsert(
      {
        athlete_id: selectedAthleteId,
        element_id: elementId,
        status: field === 'status' ? value : current.status || 'not_achieved',
        coach_note: field === 'coach_note' ? value : current.coach_note || '',
        main_issue: field === 'main_issue' ? value : current.main_issue || '',
        correction_focus: field === 'correction_focus' ? value : current.correction_focus || '',
        updated_by: user?.id || null,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: 'athlete_id,element_id',
      }
    )

    setSaving('')
  }

  return (
    <AppShell>
      <div className="topbar">
        <div>
          <h1 className="title">Levels & Skills</h1>
          <p className="muted">
            Select an athlete. The system automatically loads the correct routine elements from the assigned level.
          </p>
        </div>
      </div>

      <div className="card mb">
        <label>
          Athlete
          <select
            value={selectedAthleteId}
            onChange={(e) => setSelectedAthleteId(e.target.value)}
          >
            <option value="">Choose athlete</option>
            {athletes.map((a: any) => (
              <option key={a.id} value={a.id}>
                {a.first_name} {a.last_name}
                {a.teams?.name ? ` - ${a.teams.name}` : ''}
                {a.program_levels?.name ? ` - ${a.program_levels.name}` : ''}
              </option>
            ))}
          </select>
        </label>
      </div>

      {selectedAthlete && (
        <div className="card mb">
          <div className="report-card-header">
            <div>
              <h2>{selectedAthlete.first_name} {selectedAthlete.last_name}</h2>
              <p className="muted">
                {selectedAthlete.programs?.name || 'No program'} ·{' '}
                {selectedAthlete.program_levels?.name || 'No level'} ·{' '}
                {selectedAthlete.teams?.name || 'No team'}
              </p>
            </div>

            <span className="badge">
              Coach: {selectedAthlete.coaches?.full_name || '-'}
            </span>
          </div>
        </div>
      )}

      {selectedAthlete && !selectedAthlete.program_level_id && (
        <div className="card">
          <h2>No level assigned</h2>
          <p className="muted">
            This athlete does not have a program level yet. Assign a program and level from the Athletes page.
          </p>
        </div>
      )}

      {selectedAthlete && selectedAthlete.program_level_id && elements.length === 0 && (
        <div className="card">
          <h2>No routine elements found</h2>
          <p className="muted">
            This level has no routine elements yet. Import the USAG / FIG elements into routine_elements.
          </p>
        </div>
      )}

      <div class
