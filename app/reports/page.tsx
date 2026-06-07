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

  async function exportPDF() {
    if (!selected) return

    const { jsPDF } = await import('jspdf')
    const doc = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' })

    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 34
    const contentWidth = pageWidth - margin * 2
    let y = margin

    const athleteName = selected.athlete_name || 'Athlete'
    const team = selectedAthlete?.teams?.name || selected.team_name || '-'
    const coach = selectedAthlete?.coaches?.full_name || selected.coach_name || '-'
    const program = selectedAthlete?.programs?.name || selected.program_name || '-'
    const level = selectedAthlete?.program_levels?.name || selected.level_name || '-'
    const notesForAthlete = getAthleteNotes(selected.athlete_id)
    const grouped = groupByApparatus(details)
    const generatedDate = new Date().toLocaleDateString()

    function ensureSpace(height: number) {
      if (y + height > pageHeight - 58) {
        addFooter()
        doc.addPage()
        y = margin
      }
    }

    function addFooter() {
      const pages = doc.getNumberOfPages()
      doc.setFontSize(8)
      doc.setTextColor(100, 116, 139)
      doc.text('Generated by GymTrack Coach Portal', margin, pageHeight - 24)
      doc.text(`Page ${pages}`, pageWidth - margin, pageHeight - 24, { align: 'right' })
    }

    function card(x: number, yPos: number, w: number, h: number, title: string, value: string) {
      doc.setDrawColor(219, 234, 254)
      doc.setFillColor(248, 251, 255)
      doc.roundedRect(x, yPos, w, h, 10, 10, 'FD')
      doc.setFontSize(8)
      doc.setTextColor(100, 116, 139)
      doc.text(title.toUpperCase(), x + 12, yPos + 18)
      doc.setFontSize(15)
      doc.setTextColor(15, 23, 42)
      doc.setFont('helvetica', 'bold')
      const lines = doc.splitTextToSize(value || '-', w - 24)
      doc.text(lines.slice(0, 2), x + 12, yPos + 40)
      doc.setFont('helvetica', 'normal')
    }

    function pill(text: string, status: string, x: number, yPos: number) {
      if (status === 'achieved') {
        doc.setFillColor(220, 252, 231)
        doc.setTextColor(22, 101, 52)
      } else if (status === 'almost') {
        doc.setFillColor(254, 243, 199)
        doc.setTextColor(146, 64, 14)
      } else {
        doc.setFillColor(254, 226, 226)
        doc.setTextColor(153, 27, 27)
      }
      doc.roundedRect(x, yPos - 12, 66, 18, 9, 9, 'F')
      doc.setFontSize(8)
      doc.setFont('helvetica', 'bold')
      doc.text(text, x + 33, yPos, { align: 'center' })
      doc.setFont('helvetica', 'normal')
    }

    function sectionTitle(title: string, subtitle?: string) {
      ensureSpace(42)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(16)
      doc.setTextColor(15, 23, 42)
      doc.text(title, margin, y)
      y += 16
      if (subtitle) {
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(9)
        doc.setTextColor(100, 116, 139)
        doc.text(subtitle, margin, y)
        y += 18
      } else {
        y += 10
      }
    }

    async function getLogoDataUrl() {
      try {
        const response = await fetch('/gymtrack-logo.png')
        const blob = await response.blob()
        return await new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onloadend = () => resolve(String(reader.result))
          reader.readAsDataURL(blob)
        })
      } catch {
        return ''
      }
    }

    // Header
    doc.setFillColor(2, 6, 23)
    doc.rect(0, 0, pageWidth, 145, 'F')
    doc.setFillColor(8, 47, 95)
    doc.rect(0, 78, pageWidth, 67, 'F')

    const logoData = await getLogoDataUrl()
    if (logoData) {
      doc.addImage(logoData, 'PNG', margin, 34, 190, 58, undefined, 'FAST')
    }

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(26)
    doc.setTextColor(255, 255, 255)
    doc.text('Athlete Progress Report', margin, 112)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.setTextColor(191, 219, 254)
    doc.text('Track Progress. Build Champions.', margin, 128)
    doc.setTextColor(219, 234, 254)
    doc.text(`Generated: ${generatedDate}`, pageWidth - margin, 58, { align: 'right' })

    y = 175

    const cardW = (contentWidth - 24) / 4
    card(margin, y, cardW, 74, 'Athlete', athleteName)
    card(margin + cardW + 8, y, cardW, 74, 'Team', team)
    card(margin + (cardW + 8) * 2, y, cardW, 74, 'Level', `${program} · ${level}`)
    card(margin + (cardW + 8) * 3, y, cardW, 74, 'Coach', coach)
    y += 96

    sectionTitle('Progress Summary')

    const summaryW = (contentWidth - 24) / 4
    card(margin, y, summaryW, 68, 'Total Skills', String(selectedMetrics.total))
    card(margin + summaryW + 8, y, summaryW, 68, 'Achieved', String(selectedMetrics.achieved))
    card(margin + (summaryW + 8) * 2, y, summaryW, 68, 'Almost', String(selectedMetrics.almost))
    card(margin + (summaryW + 8) * 3, y, summaryW, 68, 'Readiness', `${selectedMetrics.readiness}%`)
    y += 88

    doc.setFillColor(226, 232, 240)
    doc.roundedRect(margin, y, contentWidth, 12, 6, 6, 'F')
    doc.setFillColor(0, 194, 255)
    doc.roundedRect(margin, y, Math.max(3, (contentWidth * selectedMetrics.readiness) / 100), 12, 6, 6, 'F')
    y += 38

    // Apparatus summary
    sectionTitle('Apparatus Summary', 'Skills achieved, total skills, and readiness by apparatus.')
    Object.keys(grouped).forEach((apparatus) => {
      const items = grouped[apparatus]
      const achieved = items.filter((item) => item.status === 'achieved').length
      const readiness = apparatusReadiness(items)
      ensureSpace(34)
      doc.setDrawColor(219, 234, 254)
      doc.setFillColor(248, 251, 255)
      doc.roundedRect(margin, y, contentWidth, 30, 8, 8, 'FD')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(11)
      doc.setTextColor(15, 23, 42)
      doc.text(apparatusLabel(apparatus), margin + 12, y + 20)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(100, 116, 139)
      doc.text(`${achieved} / ${items.length} achieved`, margin + 180, y + 20)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(11, 107, 255)
      doc.text(`${readiness}% readiness`, pageWidth - margin - 12, y + 20, { align: 'right' })
      y += 40
    })

    // Detail per apparatus
    Object.keys(grouped).forEach((apparatus) => {
      const items = grouped[apparatus]
      const achieved = items.filter((item) => item.status === 'achieved').length
      sectionTitle(`${apparatusLabel(apparatus)} Detail`, `${achieved} / ${items.length} skills achieved · ${apparatusReadiness(items)}% readiness`)

      items.forEach((item) => {
        const status = getSkillStatus(item.status)
        const issue = item.main_issue || (item.status === 'achieved' ? 'No issue' : 'Not written yet')
        const focus = item.correction_focus || '-'
        const note = item.coach_note || '-'
        const text = [
          `Main issue: ${issue}`,
          `Correction focus: ${focus}`,
          `Coach note: ${note}`,
        ].join('   |   ')
        const lines = doc.splitTextToSize(text, contentWidth - 28)
        const blockH = 52 + lines.length * 11
        ensureSpace(blockH)

        doc.setDrawColor(item.status === 'achieved' ? 187 : 254, item.status === 'achieved' ? 247 : 202, item.status === 'achieved' ? 208 : 202)
        doc.setFillColor(item.status === 'achieved' ? 248 : 255, item.status === 'achieved' ? 253 : 247, item.status === 'achieved' ? 250 : 247)
        doc.roundedRect(margin, y, contentWidth, blockH - 8, 10, 10, 'FD')

        doc.setFont('helvetica', 'bold')
        doc.setFontSize(10)
        doc.setTextColor(15, 23, 42)
        doc.text(`${item.order_number || ''}. ${item.element_name || ''}`, margin + 12, y + 22)
        pill(status.label, item.status, pageWidth - margin - 78, y + 22)

        doc.setFont('helvetica', 'normal')
        doc.setFontSize(8.5)
        doc.setTextColor(71, 85, 105)
        doc.text(lines, margin + 12, y + 42)
        y += blockH
      })
    })

    if (notesForAthlete.length) {
      sectionTitle('Latest Weekly Notes')
      notesForAthlete.forEach((note) => {
        const text = `Effort: ${note.effort || '-'} | Improvement: ${note.improvement || '-'} | Correction: ${note.correction || '-'} | Next Focus: ${note.next_focus || '-'} | Coach Note: ${note.note || '-'}`
        const lines = doc.splitTextToSize(text, contentWidth - 24)
        const blockH = 38 + lines.length * 11
        ensureSpace(blockH)
        doc.setDrawColor(226, 232, 240)
        doc.setFillColor(248, 250, 252)
        doc.roundedRect(margin, y, contentWidth, blockH - 8, 10, 10, 'FD')
        doc.setFont('helvetica', 'bold')
        doc.setTextColor(15, 23, 42)
        doc.setFontSize(10)
        doc.text(note.week_start_date || 'Weekly Note', margin + 12, y + 20)
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(8.5)
        doc.setTextColor(71, 85, 105)
        doc.text(lines, margin + 12, y + 38)
        y += blockH
      })
    }

    addFooter()
    doc.save(`GymTrack_Report_${athleteName.replace(/[^a-z0-9]+/gi, '_')}.pdf`)
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
