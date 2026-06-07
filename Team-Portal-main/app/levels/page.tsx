'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'
import type { Athlete, Profile, Team } from '@/lib/types'

const statuses = [
  ['not_achieved', '✕ Not Achieved'],
  ['almost', '◐ Almost'],
  ['achieved', '✓ Achieved'],
]

const apparatusOrder = ['Vault', 'Bars', 'Beam', 'Floor', 'Physical Preparation']

export default function Levels() {
  const router = useRouter()

  const [profile, setProfile] = useState<Profile | null>(null)
  const [teams, setTeams] = useState<Team[]>([])
  const [athletes, setAthletes] = useState<Athlete[]>([])
  const [selectedTeamId, setSelectedTeamId] = useState('')
  const [selectedAthleteId, setSelectedAthleteId] = useState('')
  const [selectedAthlete, setSelectedAthlete] = useState<any | null>(null)
  const [elements, setElements] = useState<any[]>([])
  const [progress, setProgress] = useState<Record<string, any>>({})
  const [saving, setSaving] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    setSelectedAthleteId('')
    setSelectedAthlete(null)
    setElements([])
    setProgress({})
  }, [selectedTeamId])

  useEffect(() => {
    if (selectedAthleteId) loadAthleteRoutine(selectedAthleteId)
  }, [selectedAthleteId])

  async function loadData() {
    const { user, profile: p, teamIds } = await getCurrentUserProfile()

    if (!user) {
      router.push('/login')
      return
    }

    setProfile(p)

    const safeTeamIds = teamIds.length ? teamIds : [EMPTY_UUID]

    let teamsQuery = supabase.from('teams').select('*').order('name')

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
      teamsQuery = teamsQuery.in('id', safeTeamIds)
      athletesQuery = athletesQuery.in('team_id', safeTeamIds)
    }

    const [{ data: t }, { data: a }] = await Promise.all([
      teamsQuery,
      athletesQuery,
    ])

    setTeams(t || [])
    setAthletes(a || [])
  }

  const teamAthletes = useMemo(() => {
    if (!selectedTeamId) return []
    return athletes.filter((a) => a.team_id === selectedTeamId)
  }, [athletes, selectedTeamId])

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
    const achieved = items.filter((el) => progress[el.id]?.status === 'achieved').length
    return Math.round((achieved / items.length) * 100)
  }

  async function updateProgress(elementId: string, field: string, value: string) {
    if (!selectedAthleteId) return

    const current = progress[elementId] || {}

    const updated = {
      ...current,
      athlete_id: selectedAthleteId,
      element_id: elementId,
      status: field === 'status' ? value : current.status || 'not_achieved',
      coach_note: field === 'coach_note' ? value : current.coach_note || '',
      main_issue: field === 'main_issue' ? value : current.main_issue || '',
      correction_focus: field === 'correction_focus' ? value : current.correction_focus || '',
      updated_at: new Date().toISOString(),
    }

    setProgress((old) => ({
      ...old,
      [elementId]: updated,
    }))

    setSaving(elementId)

    const { data: userData } = await supabase.auth.getUser()

    await supabase.from('athlete_element_progress').upsert(
      {
        ...updated,
        updated_by: userData.user?.id || null,
      },
      { onConflict: 'athlete_id,element_id' }
    )

    setSaving('')
  }

  return (
    <AppShell>
      <div className="topbar">
        <div>
          <h1 className="title">Levels & Skills</h1>
          <p className="muted">
            Choose team first, then choose athlete. The athlete level loads the correct routine automatically.
          </p>
        </div>
      </div>

      <div className="card mb">
        <div className="form-grid">
          <label>
            Team
            <select value={selectedTeamId} onChange={(e) => setSelectedTeamId(e.target.value)}>
              <option value="">Choose team</option>
              {teams.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Athlete
            <select
              value={selectedAthleteId}
              onChange={(e) => setSelectedAthleteId(e.target.value)}
              disabled={!selectedTeamId}
            >
              <option value="">
                {selectedTeamId ? 'Choose athlete' : 'Choose team first'}
              </option>
              {teamAthletes.map((a: any) => (
                <option key={a.id} value={a.id}>
                  {a.first_name} {a.last_name}
                  {a.program_levels?.name ? ` - ${a.program_levels.name}` : ''}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      {selectedTeamId && teamAthletes.length === 0 && (
        <div className="card">
          <h2>No athletes in this team</h2>
          <p className="muted">Assign athletes to this team from the admin Athletes page.</p>
        </div>
      )}

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
            <span className="badge">Coach: {selectedAthlete.coaches?.full_name || '-'}</span>
          </div>
        </div>
      )}

      {selectedAthlete && !selectedAthlete.program_level_id && (
        <div className="card">
          <h2>No level assigned</h2>
          <p className="muted">Assign program and level from the admin Athletes page.</p>
        </div>
      )}

      {selectedAthlete && selectedAthlete.program_level_id && elements.length === 0 && (
        <div className="card">
          <h2>No routine elements found</h2>
          <p className="muted">Import routine elements for this level first.</p>
        </div>
      )}

      {selectedAthlete && elements.length > 0 && (
        <div className="apparatus-sections">
          {Object.entries(groupedElements).map(([apparatus, items]) => {
            const readiness = apparatusReadiness(items)

            return (
              <div key={apparatus} className="card mb">
                <div className="report-card-header">
                  <div>
                    <h2>{apparatus}</h2>
                    <p className="muted">{items.length} elements</p>
                  </div>
                  <span className="status-pill status-ready">{readiness}% readiness</span>
                </div>

                <div className="element-list">
                  {items.map((el) => {
                    const itemProgress = progress[el.id] || {}
                    const status = itemProgress.status || 'not_achieved'

                    return (
                      <div key={el.id} className="element-card">
                        <div className="element-header">
                          <div>
                            <span className={`status-pill ${getStatusClass(status)}`}>
                              {getStatusIcon(status)}
                            </span>
                            <strong>{el.element_name}</strong>
                          </div>
                          {saving === el.id && <span className="muted">Saving...</span>}
                        </div>

                        <div className="form-grid mt">
                          <label>
                            Status
                            <select
                              value={status}
                              onChange={(e) => updateProgress(el.id, 'status', e.target.value)}
                            >
                              {statuses.map(([value, label]) => (
                                <option key={value} value={value}>{label}</option>
                              ))}
                            </select>
                          </label>

                          <label>
                            Main issue
                            <input
                              value={itemProgress.main_issue || ''}
                              onChange={(e) => updateProgress(el.id, 'main_issue', e.target.value)}
                            />
                          </label>

                          <label>
                            Correction focus
                            <input
                              value={itemProgress.correction_focus || ''}
                              onChange={(e) => updateProgress(el.id, 'correction_focus', e.target.value)}
                            />
                          </label>

                          <label>
                            Coach note
                            <input
                              value={itemProgress.coach_note || ''}
                              onChange={(e) => updateProgress(el.id, 'coach_note', e.target.value)}
                            />
                          </label>
                        </div>

                        {itemProgress.updated_at && (
                          <p className="muted">
                            Last update: {new Date(itemProgress.updated_at).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      )}
    </AppShell>
  )
}
