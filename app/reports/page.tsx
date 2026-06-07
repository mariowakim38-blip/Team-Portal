'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import ProgressBar from '@/components/ProgressBar'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'

export default function Reports() {
  const router = useRouter()

  const [role, setRole] = useState('coach')
  const [rows, setRows] = useState<any[]>([])
  const [notes, setNotes] = useState<any[]>([])
  const [teamFilter, setTeamFilter] = useState('')
  const [coachFilter, setCoachFilter] = useState('')
  const [selected, setSelected] = useState<any | null>(null)

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

  function getStatus(readiness: number) {
    if (readiness >= 90) return { label: 'Ready', className: 'status-ready' }
    if (readiness >= 75) return { label: 'Almost Ready', className: 'status-almost' }
    return { label: 'Needs Work', className: 'status-work' }
  }

  function getAthleteNotes(athleteId: string) {
    return notes.filter((n) => n.athlete_id === athleteId).slice(0, 5)
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

              <button className="btn mt" onClick={() => setSelected(r)}>
                View Full Report
              </button>
            </div>
          )
        })}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="report-card-header">
              <div>
                <h2>{selected.athlete_name}</h2>
                <p className="muted">
                  {selected.team_name || 'No team'} · {selected.level_name || 'No level'}
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
