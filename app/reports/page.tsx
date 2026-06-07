'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import ProgressBar from '@/components/ProgressBar'
import ApparatusIcon, { apparatusLabel } from '@/components/ApparatusIcon'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'
import { getAthleteReadinessRows, type ReadinessRow } from '@/lib/readiness'

const apparatusOrder = ['Vault', 'Bars', 'Beam', 'Floor', 'Physical Preparation']

export default function Reports() {
  const router = useRouter()

  const [role, setRole] = useState('coach')
  const [rows, setRows] = useState<ReadinessRow[]>([])
  const [notes, setNotes] = useState<any[]>([])
  const [teamFilter, setTeamFilter] = useState('')
  const [coachFilter, setCoachFilter] = useState('')
  const [selected, setSelected] = useState<ReadinessRow | null>(null)
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
    const reportRows = await getAthleteReadinessRows(profile?.role === 'coach' ? safeTeamIds : undefined)

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

  const groupedDetails = useMemo(() => groupByApparatus(details), [details])
  const apparatusNames = Object.keys(groupedDetails)
  const activeDetails = activeApparatus ? groupedDetails[activeApparatus] || [] : []

  const selectedMetrics = useMemo(() => {
    const total = details.length || selected?.total_skills || 0
    const achieved = details.length
      ? details.filter((item) => item.status === 'achieved').length
      : selected?.achieved_skills || 0
    const almost = details.length
      ? details.filter((item) => item.status === 'almost').length
      : selected?.almost_skills || 0
    const readiness = total ? Math.round((achieved / total) * 100) : 0
    return { total, achieved, almost, readiness, needsWork: Math.max(total - achieved - almost, 0) }
  }, [details, selected])

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

  async function openFullReport(row: ReadinessRow) {
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

  function exportPDF() {
    if (!selected) return

    const grouped = groupByApparatus(details)
    const logoUrl = `${window.location.origin}/gymtrack-logo.png`
    const date = new Date().toLocaleDateString()
    const athleteName = selected.athlete_name
    const team = selectedAthlete?.teams?.name || selected.team_name || '-'
    const coach = selectedAthlete?.coaches?.full_name || selected.coach_name || '-'
    const program = selectedAthlete?.programs?.name || selected.program_name || '-'
    const level = selectedAthlete?.program_levels?.name || selected.level_name || '-'
    const notesForAthlete = getAthleteNotes(selected.athlete_id)

    const apparatusHtml = Object.keys(grouped)
      .map((apparatus) => {
        const items = grouped[apparatus]
        const achieved = items.filter((item) => item.status === 'achieved').length
        const readiness = apparatusReadiness(items)
        const rows = items.map((item) => {
          const status = getSkillStatus(item.status)
          return `
            <tr>
              <td>${item.order_number || ''}. ${escapeHtml(item.element_name || '')}</td>
              <td><span class="pill ${pdfStatusClass(item.status)}">${escapeHtml(status.label)}</span></td>
              <td>${escapeHtml(item.main_issue || '-')}</td>
              <td>${escapeHtml(item.correction_focus || '-')}</td>
              <td>${escapeHtml(item.coach_note || '-')}</td>
            </tr>
          `
        }).join('')

        return `
          <section class="apparatus-section">
            <div class="section-head">
              <div>
                <h2>${escapeHtml(apparatusLabel(apparatus))}</h2>
                <p>${achieved} / ${items.length} skills achieved</p>
              </div>
              <div class="readiness-badge">${readiness}%</div>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Skill</th>
                  <th>Status</th>
                  <th>Main Issue</th>
                  <th>Correction Focus</th>
                  <th>Coach Note</th>
                </tr>
              </thead>
              <tbody>${rows}</tbody>
            </table>
          </section>
        `
      }).join('')

    const weeklyHtml = notesForAthlete.length
      ? notesForAthlete.map((note) => `
          <div class="note">
            <strong>${escapeHtml(note.week_start_date || '')}</strong>
            <p><b>Effort:</b> ${escapeHtml(note.effort || '-')}</p>
            <p><b>Improvement:</b> ${escapeHtml(note.improvement || '-')}</p>
            <p><b>Correction:</b> ${escapeHtml(note.correction || '-')}</p>
            <p><b>Next Focus:</b> ${escapeHtml(note.next_focus || '-')}</p>
            <p><b>Coach Note:</b> ${escapeHtml(note.note || '-')}</p>
          </div>
        `).join('')
      : '<p class="muted-pdf">No weekly notes yet.</p>'

    const html = `
      <!doctype html>
      <html>
        <head>
          <title>${escapeHtml(athleteName)} - GymTrack Report</title>
          <style>
            * { box-sizing: border-box; }
            body { margin: 0; padding: 34px; background: #f5f8ff; color: #0f172a; font-family: Arial, Helvetica, sans-serif; }
            .report { max-width: 1080px; margin: 0 auto; background: white; border-radius: 26px; overflow: hidden; box-shadow: 0 24px 70px rgba(15, 23, 42, 0.15); }
            .header { background: linear-gradient(135deg, #020617, #082f5f); padding: 34px; color: white; display: flex; justify-content: space-between; gap: 24px; align-items: flex-start; }
            .header img { width: 230px; height: auto; object-fit: contain; }
            .header h1 { margin: 20px 0 8px; font-size: 36px; letter-spacing: -1.5px; }
            .header p { margin: 0; color: #bfdbfe; font-size: 15px; }
            .date { text-align: right; font-weight: 700; color: #dbeafe; }
            .content { padding: 32px; }
            .summary-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 26px; }
            .summary-card { border: 1px solid #dbeafe; border-radius: 18px; padding: 18px; background: #f8fbff; }
            .summary-card span { display: block; color: #64748b; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: .06em; }
            .summary-card strong { font-size: 26px; }
            .bar { height: 14px; border-radius: 99px; background: #e2e8f0; overflow: hidden; margin: 8px 0 28px; }
            .bar-fill { height: 100%; width: ${selectedMetrics.readiness}%; background: linear-gradient(90deg, #0b6bff, #00c2ff); }
            .section-head { display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-bottom: 14px; }
            .section-head h2 { margin: 0; font-size: 24px; }
            .section-head p { margin: 5px 0 0; color: #64748b; }
            .readiness-badge { background: #0b6bff; color: white; border-radius: 999px; padding: 10px 16px; font-weight: 900; }
            .apparatus-section { border: 1px solid #dbeafe; border-radius: 22px; padding: 22px; margin-bottom: 22px; page-break-inside: avoid; }
            table { width: 100%; border-collapse: collapse; font-size: 12px; }
            th { text-align: left; background: #eff6ff; color: #1e3a8a; padding: 10px; }
            td { border-bottom: 1px solid #e2e8f0; padding: 10px; vertical-align: top; }
            .pill { border-radius: 999px; padding: 5px 9px; font-weight: 800; white-space: nowrap; font-size: 11px; display: inline-block; }
            .ready { background: #dcfce7; color: #166534; }
            .almost { background: #fef3c7; color: #92400e; }
            .work { background: #fee2e2; color: #991b1b; }
            .note { border: 1px solid #e2e8f0; border-radius: 16px; padding: 14px; margin-bottom: 10px; background: #f8fafc; }
            .note p { margin: 6px 0; }
            .muted-pdf { color: #64748b; }
            .footer { padding: 24px 32px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px; display: flex; justify-content: space-between; }
            @media print {
              body { background: white; padding: 0; }
              .report { box-shadow: none; border-radius: 0; }
              .apparatus-section { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <main class="report">
            <header class="header">
              <div>
                <img src="${logoUrl}" alt="GymTrack" />
                <h1>Athlete Progress Report</h1>
                <p>Track Progress. Build Champions.</p>
              </div>
              <div class="date">Generated<br />${escapeHtml(date)}</div>
            </header>
            <section class="content">
              <div class="summary-grid">
                <div class="summary-card"><span>Athlete</span><strong>${escapeHtml(athleteName)}</strong></div>
                <div class="summary-card"><span>Team</span><strong>${escapeHtml(team)}</strong></div>
                <div class="summary-card"><span>Program / Level</span><strong>${escapeHtml(program)} · ${escapeHtml(level)}</strong></div>
                <div class="summary-card"><span>Coach</span><strong>${escapeHtml(coach)}</strong></div>
                <div class="summary-card"><span>Total Skills</span><strong>${selectedMetrics.total}</strong></div>
                <div class="summary-card"><span>Achieved</span><strong>${selectedMetrics.achieved}</strong></div>
                <div class="summary-card"><span>Almost</span><strong>${selectedMetrics.almost}</strong></div>
                <div class="summary-card"><span>Readiness</span><strong>${selectedMetrics.readiness}%</strong></div>
              </div>
              <div class="bar"><div class="bar-fill"></div></div>
              ${apparatusHtml || '<p class="muted-pdf">No apparatus data found.</p>'}
              <section class="apparatus-section">
                <div class="section-head"><h2>Latest Weekly Notes</h2></div>
                ${weeklyHtml}
              </section>
            </section>
            <footer class="footer">
              <span>GymTrack Coach Portal</span>
              <span>Professional athlete progress report</span>
            </footer>
          </main>
          <script>
            window.onload = function() { setTimeout(function() { window.print(); }, 450); };
          </script>
        </body>
      </html>
    `

    const printWindow = window.open('', '_blank', 'width=1100,height=900')
    if (!printWindow) {
      alert('Please allow pop-ups to export the PDF.')
      return
    }
    printWindow.document.open()
    printWindow.document.write(html)
    printWindow.document.close()
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
                    {r.team_name || 'No team'} · {r.program_name || 'No program'} · {r.level_name || 'No level'}
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
                  {selectedAthlete?.programs?.name || selected.program_name || 'No program'} ·{' '}
                  {selectedAthlete?.program_levels?.name || selected.level_name || 'No level'}
                </p>
              </div>

              <div className="modal-actions">
                <button className="btn" onClick={exportPDF} disabled={loadingDetails || details.length === 0}>
                  Export PDF
                </button>
                <button className="btn secondary" onClick={() => setSelected(null)}>
                  Close
                </button>
              </div>
            </div>

            <div className="card mb">
              <h3>Progress Summary</h3>
              <ProgressBar value={selectedMetrics.readiness} />

              <div className="report-mini-grid mt">
                <div>
                  <span className="muted">Achieved Skills</span>
                  <strong>{selectedMetrics.achieved}</strong>
                </div>

                <div>
                  <span className="muted">Total Skills</span>
                  <strong>{selectedMetrics.total}</strong>
                </div>

                <div>
                  <span className="muted">Readiness</span>
                  <strong>{selectedMetrics.readiness}%</strong>
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

                      return (
                        <button
                          key={apparatus}
                          type="button"
                          className={`apparatus-tab ${activeApparatus === apparatus ? 'active' : ''}`}
                          onClick={() => setActiveApparatus(apparatus)}
                        >
                          <ApparatusIcon apparatus={apparatus} />
                          <span className="apparatus-tab-text">
                            <strong>{apparatusLabel(apparatus)}</strong>
                            <small>{readiness}% ready · {issues} problem{issues === 1 ? '' : 's'}</small>
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  <div className="apparatus-report-panel mt">
                    <div className="report-card-header">
                      <div>
                        <h3>{apparatusLabel(activeApparatus)}</h3>
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

function groupByApparatus(items: any[]) {
  const grouped: Record<string, any[]> = {}

  items.forEach((item) => {
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
}

function ReportStat({ label, value }: { label: string; value: number }) {
  return (
    <div className="card">
      <p className="muted">{label}</p>
      <div className="stat">{value}</div>
    </div>
  )
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

function pdfStatusClass(status: string) {
  if (status === 'achieved') return 'ready'
  if (status === 'almost') return 'almost'
  return 'work'
}
