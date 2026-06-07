'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import ProgressBar from '@/components/ProgressBar'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'

const apparatusOrder = ['Vault', 'Bars', 'Beam', 'Floor', 'Physical Preparation']

const apparatusMeta: Record<string, { icon: string; label: string }> = {
  Vault: { icon: 'V', label: 'Vault' },
  Bars: { icon: 'UB', label: 'Bars' },
  Beam: { icon: 'BB', label: 'Beam' },
  Floor: { icon: 'FX', label: 'Floor' },
  'Physical Preparation': { icon: 'PP', label: 'Physical Prep' },
}

export default function Reports() {
  const router = useRouter()

  const [role, setRole] = useState('coach')
  const [rows, setRows] = useState<any[]>([])
  const [notes, setNotes] = useState<any[]>([])
  const [teamFilter, setTeamFilter] = useState('')
  const [coachFilter, setCoachFilter] = useState('')
  const [selected, setSelected] = useState<any | null>(null)
  const [selectedAthlete, setSelectedAthlete] = useState<any | null>(null)
  const [details, setDetails] = useState<any[]>([])
  const [activeApparatus, setActiveApparatus] = useState('')
  const [loadingDetails, setLoadingDetails] = useState(false)

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const { user, profile, teamIds } = await getCurrentUserProfile()

    if (!user) {
      router.push('/login')
      return
    }

    setRole(profile?.role || 'coach')

    const safeTeamIds = teamIds.length ? teamIds : [EMPTY_UUID]

    const { data: readiness } = await supabase.rpc('athlete_readiness')

    let reportRows = readiness || []

    if (profile?.role === 'coach') {
      reportRows = reportRows.filter((r: any) => safeTeamIds.includes(r.team_id))
    }

    let notesQuery = supabase
      .from('weekly_notes')
      .select('*,athletes!inner(id,first_name,last_name,team_id),coaches(full_name)')
      .order('week_start_date', { ascending: false })

    if (profile?.role === 'coach') {
      notesQuery = notesQuery.in('athletes.team_id', safeTeamIds)
    }

    const { data: weeklyNotes } = await notesQuery

    setRows(reportRows)
    setNotes(weeklyNotes || [])
  }

  const filteredRows = useMemo(() => {
    return rows.filter((r) => {
      const teamOk = teamFilter ? r.team_name === teamFilter : true
      const coachOk = coachFilter ? r.coach_name === coachFilter : true
      return teamOk && coachOk
    })
  }, [rows, teamFilter, coachFilter])

  const teams = Array.from(new Set(rows.map((r) => r.team_name).filter(Boolean)))
  const coaches = Array.from(new Set(rows.map((r) => r.coach_name).filter(Boolean)))

  const groupedDetails = useMemo(() => {
    const grouped: Record<string, any[]> = {}

    details.forEach((item) => {
      if (!grouped[item.apparatus]) grouped[item.apparatus] = []
      grouped[item.apparatus].push(item)
    })

    const ordered: Record<string, any[]> = {}

    apparatusOrder.forEach((apparatus) => {
      if (grouped[apparatus]) ordered[apparatus] = grouped[apparatus]
    })

    Object.keys(grouped).forEach((apparatus) => {
      if (!ordered[apparatus]) ordered[apparatus] = grouped[apparatus]
    })

    return ordered
  }, [details])

  const apparatusNames = Object.keys(groupedDetails)
  const activeDetails = activeApparatus ? groupedDetails[activeApparatus] || [] : []

  function getStatus(readiness: number) {
    if (readiness >= 90) return { label: 'Ready', className: 'status-ready' }
    if (readiness >= 75) return { label: 'Almost Ready', className: 'status-almost' }
    return { label: 'Needs Work', className: 'status-work' }
  }

  function getSkillStatus(status: string) {
    if (status === 'achieved') return { label: 'Achieved', icon: '✓', className: 'status-ready' }
    if (status === 'almost') return { label: 'Almost', icon: '◐', className: 'status-almost' }
    return { label: 'Needs Work', icon: '✕', className: 'status-work' }
  }

  function getAthleteNotes(athleteId: string) {
    return notes.filter((n) => n.athlete_id === athleteId).slice(0, 5)
  }

  function apparatusReadiness(items: any[]) {
    if (!items.length) return 0
    const achieved = items.filter((item) => item.status === 'achieved').length
    return Math.round((achieved / items.length) * 100)
  }

  function issueCount(items: any[]) {
    return items.filter((item) => item.status !== 'achieved').length
  }

  async function openFullReport(row: any) {
    setSelected(row)
    setSelectedAthlete(null)
    setDetails([])
    setActiveApparatus('')
    setLoadingDetails(true)

    const { data: athlete } = await supabase
      .from('athletes')
      .select('*,teams(name),coaches(full_name),programs(name),program_levels(name)')
      .eq('id', row.athlete_id)
      .single()

    setSelectedAthlete(athlete || null)

    if (!athlete?.program_level_id) {
      setLoadingDetails(false)
      return
    }

    const [{ data: routineElements }, { data: progressRows }] = await Promise.all([
      supabase
        .from('routine_elements')
        .select('*')
        .eq('level_id', athlete.program_level_id)
        .order('apparatus')
        .order('order_number'),

      supabase
        .from('athlete_element_progress')
        .select('*')
        .eq('athlete_id', row.athlete_id),
    ])

    const progressMap: Record<string, any> = {}
    ;(progressRows || []).forEach((progress: any) => {
      progressMap[progress.element_id] = progress
    })

    const merged = (routineElements || []).map((element: any) => {
      const progress = progressMap[element.id] || {}
      return {
        ...element,
        status: progress.status || 'not_achieved',
        main_issue: progress.main_issue || '',
        correction_focus: progress.correction_focus || '',
        coach_note: progress.coach_note || '',
        updated_at: progress.updated_at || null,
      }
    })

    setDetails(merged)

    const firstApparatus = apparatusOrder.find((apparatus) =>
      merged.some((item: any) => item.apparatus === apparatus)
    ) || merged[0]?.apparatus || ''

    setActiveApparatus(firstApparatus)
    setLoadingDetails(false)
  }

  return (
    <AppShell>
      <div className="topbar">
        <div>
          <h1 className="title">Reports</h1>
          <p className="muted">
            {role === 'admin'
              ? 'Admin report overview for all athletes.'
              : 'Reports for your assigned athletes only.'}
          </p>
        </div>
      </div>

      <div className="grid mb">
        <ReportStat label="Athletes" value={filteredRows.length} />
        <ReportStat
          label="Ready"
          value={filteredRows.filter((r) => Number(r.readiness) >= 90).length}
        />
        <ReportStat
          label="Almost Ready"
          value={filteredRows.filter((r) => Number(r.readiness) >= 75 && Number(r.readiness) < 90).length}
        />
        <ReportStat
          label="Needs Work"
          value={filteredRows.filter((r) => Number(r.readiness) < 75).length}
        />
      </div>

      <div className="card mb">
        <h2>Filters</h2>

        <div className="form-grid">
          <label>
            Team
            <select value={teamFilter} onChange={(e) => setTeamFilter(e.target.value)}>
              <option value="">All teams</option>
              {teams.map((team: any) => (
                <option key={team} value={team}>
                  {team}
                </option>
              ))}
            </select>
          </label>

          {role === 'admin' && (
            <label>
              Coach
              <select value={coachFilter} onChange={(e) => setCoachFilter(e.target.value)}>
                <option value="">All coaches</option>
                {coaches.map((coach: any) => (
                  <option key={coach} value={coach}>
                    {coach}
                  </option>
                ))}
              </select>
            </label>
          )}

          <button
            className="btn secondary"
            type="button"
            onClick={() => {
              setTeamFilter('')
              setCoachFilter('')
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="reports-grid">
        {filteredRows.map((r) => {
          const readiness = Number(r.readiness || 0)
          const status = getStatus(readiness)

          return (
            <div key={r.athlete_id} className="athlete-report-card">
              <div className="report-card-header">
                <div>
                  <h2>{r.athlete_name}</h2>
                  <p className="muted">
                    {r.team_name || 'No team'} · {r.level_name || 'No level'}
                  </p>
                </div>

                <span className={`status-pill ${status.className}`}>
                  {status.label}
                </span>
              </div>

              <ProgressBar value={readiness} />

              <div className="report-mini-grid">
                <div>
                  <span className="muted">Achieved</span>
                  <strong>{r.achieved_skills}</strong>
                </div>

                <div>
                  <span className="muted">Total Skills</span>
                  <strong>{r.total_skills}</strong>
                </div>

                <div>
                  <span className="muted">Readiness</span>
                  <strong>{readiness}%</strong>
                </div>
              </div>

              <button className="btn mt" onClick={() => openFullReport(r)}>
                View Full Report
              </button>
            </div>
          )
        })}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal-card modal-card-wide" onClick={(e) => e.stopPropagation()}>
            <div className="report-card-header">
              <div>
                <h2>{selected.athlete_name}</h2>
                <p className="muted">
                  {selectedAthlete?.teams?.name || selected.team_name || 'No team'} ·{' '}
                  {selectedAthlete?.programs?.name || 'No program'} ·{' '}
                  {selectedAthlete?.program_levels?.name || selected.level_name || 'No level'}
                </p>
              </div>

              <button className="btn secondary" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>

            <div className="card mb">
              <h3>Progress Summary</h3>
              <ProgressBar value={Number(selected.readiness || 0)} />

              <div className="report-mini-grid mt">
                <div>
                  <span className="muted">Achieved Skills</span>
                  <strong>{selected.achieved_skills}</strong>
                </div>

                <div>
                  <span className="muted">Total Skills</span>
                  <strong>{selected.total_skills}</strong>
                </div>

                <div>
                  <span className="muted">Readiness</span>
                  <strong>{Number(selected.readiness || 0)}%</strong>
                </div>
              </div>
            </div>

            <div className="card mb">
              <div className="report-card-header">
                <div>
                  <h3>Apparatus Detail</h3>
                  <p className="muted">Press an apparatus icon to see exact missing skills, issues, and correction focus.</p>
                </div>
              </div>

              {loadingDetails && <p className="muted">Loading detailed report...</p>}

              {!loadingDetails && details.length === 0 && (
                <p className="muted">No routine details found. Assign a program level and import routine elements first.</p>
              )}

              {!loadingDetails && details.length > 0 && (
                <>
                  <div className="apparatus-tabs report-tabs">
                    {apparatusNames.map((apparatus) => {
                      const items = groupedDetails[apparatus]
                      const readiness = apparatusReadiness(items)
                      const issues = issueCount(items)
                      const meta = apparatusMeta[apparatus] || { icon: apparatus.slice(0, 2).toUpperCase(), label: apparatus }

                      return (
                        <button
                          key={apparatus}
                          type="button"
                          className={`apparatus-tab ${activeApparatus === apparatus ? 'active' : ''}`}
                          onClick={() => setActiveApparatus(apparatus)}
                        >
                          <span className="apparatus-icon">{meta.icon}</span>
                          <span className="apparatus-tab-text">
                            <strong>{meta.label}</strong>
                            <small>{readiness}% ready · {issues} problem{issues === 1 ? '' : 's'}</small>
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  <div className="apparatus-report-panel mt">
                    <div className="report-card-header">
                      <div>
                        <h3>{activeApparatus}</h3>
                        <p className="muted">
                          {activeDetails.filter((item) => item.status === 'achieved').length} / {activeDetails.length} achieved
                        </p>
                      </div>
                      <span className={`status-pill ${apparatusReadiness(activeDetails) >= 90 ? 'status-ready' : apparatusReadiness(activeDetails) >= 75 ? 'status-almost' : 'status-work'}`}>
                        {apparatusReadiness(activeDetails)}% readiness
                      </span>
                    </div>

                    <div className="detail-skill-list">
                      {activeDetails.map((item) => {
                        const status = getSkillStatus(item.status)
                        const hasProblem = item.status !== 'achieved'

                        return (
                          <div key={item.id} className={`detail-skill-row ${hasProblem ? 'has-problem' : ''}`}>
                            <div className="detail-skill-top">
                              <div>
                                <span className={`status-pill ${status.className}`}>{status.icon}</span>
                                <strong>{item.order_number}. {item.element_name}</strong>
                              </div>
                              <span className={`status-pill ${status.className}`}>{status.label}</span>
                            </div>

                            <div className="detail-problem-grid">
                              <div>
                                <span>Main issue</span>
                                <strong>{item.main_issue || (hasProblem ? 'Not written yet' : 'No issue')}</strong>
                              </div>
                              <div>
                                <span>Correction focus</span>
                                <strong>{item.correction_focus || (hasProblem ? 'Add correction focus' : '-')}</strong>
                              </div>
                              <div>
                                <span>Coach note</span>
                                <strong>{item.coach_note || '-'}</strong>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="card">
              <h3>Latest Weekly Notes</h3>

              {getAthleteNotes(selected.athlete_id).length === 0 && (
                <p className="muted">No weekly notes yet.</p>
              )}

              {getAthleteNotes(selected.athlete_id).map((note) => (
                <div key={note.id} className="note-preview">
                  <strong>{note.week_start_date}</strong>
                  <p><b>Effort:</b> {note.effort || '-'}</p>
                  <p><b>Improvement:</b> {note.improvement || '-'}</p>
                  <p><b>Correction:</b> {note.correction || '-'}</p>
                  <p><b>Next Focus:</b> {note.next_focus || '-'}</p>
                  <p><b>Coach Note:</b> {note.note || '-'}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </AppShell>
  )
}

function ReportStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="card">
      <p className="muted">{label}</p>
      <div className="stat">{value}</div>
    </div>
  )
}
