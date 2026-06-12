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
  const [search, setSearch] = useState('')
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
    const q = search.trim().toLowerCase()

    return rows.filter((r) => {
      const teamOk = teamFilter ? r.team_name === teamFilter : true
      const coachOk = coachFilter ? r.coach_name === coachFilter : true
      const searchable = [
        r.athlete_name,
        r.team_name,
        r.coach_name,
        r.program_name,
        r.level_name,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()

      const searchOk = q ? searchable.includes(q) : true
      return teamOk && coachOk && searchOk
    })
  }, [rows, teamFilter, coachFilter, search])

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

    const colors = {
      black: [2, 6, 23] as [number, number, number],
      navy: [7, 19, 39] as [number, number, number],
      blue: [0, 132, 255] as [number, number, number],
      cyan: [0, 194, 255] as [number, number, number],
      text: [15, 23, 42] as [number, number, number],
      muted: [100, 116, 139] as [number, number, number],
      line: [226, 232, 240] as [number, number, number],
      soft: [248, 250, 252] as [number, number, number],
      green: [22, 163, 74] as [number, number, number],
      amber: [217, 119, 6] as [number, number, number],
      red: [220, 38, 38] as [number, number, number],
    }

    function setColor(rgb: [number, number, number], type: 'text' | 'fill' | 'draw' = 'text') {
      if (type === 'text') doc.setTextColor(rgb[0], rgb[1], rgb[2])
      if (type === 'fill') doc.setFillColor(rgb[0], rgb[1], rgb[2])
      if (type === 'draw') doc.setDrawColor(rgb[0], rgb[1], rgb[2])
    }

    function safe(value: any) {
      return String(value ?? '-').replace(/\s+/g, ' ').trim() || '-'
    }

    function addFooter() {
      const pages = doc.getNumberOfPages()
      setColor(colors.line, 'draw')
      doc.line(margin, pageHeight - 42, pageWidth - margin, pageHeight - 42)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      setColor(colors.muted)
      doc.text('Generated by GymTrack Coach Portal', margin, pageHeight - 24)
      doc.text(`Page ${pages}`, pageWidth - margin, pageHeight - 24, { align: 'right' })
    }

    function newPage() {
      addFooter()
      doc.addPage()
      y = margin
    }

    function ensureSpace(height: number) {
      if (y + height > pageHeight - 60) newPage()
    }

    async function getLogoDataUrl() {
      try {
        const response = await fetch('/gymtrack-logo-final.png')
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

    function sectionTitle(title: string, subtitle?: string) {
      ensureSpace(subtitle ? 52 : 36)
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(18)
      setColor(colors.text)
      doc.text(title, margin, y)
      y += 18
      if (subtitle) {
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(9.5)
        setColor(colors.muted)
        doc.text(doc.splitTextToSize(subtitle, contentWidth), margin, y)
        y += 20
      } else {
        y += 12
      }
    }

    function infoCard(x: number, yPos: number, w: number, h: number, title: string, value: string) {
      setColor(colors.line, 'draw')
      setColor(colors.soft, 'fill')
      doc.roundedRect(x, yPos, w, h, 10, 10, 'FD')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      setColor(colors.muted)
      doc.text(title.toUpperCase(), x + 12, yPos + 18)
      doc.setFontSize(14)
      setColor(colors.text)
      const lines = doc.splitTextToSize(safe(value), w - 24)
      doc.text(lines.slice(0, 2), x + 12, yPos + 40)
    }

    function darkMetric(x: number, yPos: number, w: number, h: number, title: string, value: string) {
      setColor([23, 37, 63], 'draw')
      setColor(colors.navy, 'fill')
      doc.roundedRect(x, yPos, w, h, 12, 12, 'FD')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      setColor([148, 163, 184])
      doc.text(title.toUpperCase(), x + 12, yPos + 20)
      doc.setFontSize(20)
      setColor([248, 250, 252])
      doc.text(safe(value), x + 12, yPos + 48)
    }

    function statusColors(status: string) {
      if (status === 'achieved') return { fill: [220, 252, 231] as [number, number, number], text: [22, 101, 52] as [number, number, number], border: [187, 247, 208] as [number, number, number] }
      if (status === 'almost') return { fill: [254, 243, 199] as [number, number, number], text: [146, 64, 14] as [number, number, number], border: [253, 230, 138] as [number, number, number] }
      return { fill: [254, 226, 226] as [number, number, number], text: [153, 27, 27] as [number, number, number], border: [252, 165, 165] as [number, number, number] }
    }

    function pill(text: string, status: string, x: number, yPos: number, width = 74) {
      const c = statusColors(status)
      setColor(c.border, 'draw')
      setColor(c.fill, 'fill')
      doc.roundedRect(x, yPos - 13, width, 20, 10, 10, 'FD')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(8)
      setColor(c.text)
      doc.text(text, x + width / 2, yPos, { align: 'center' })
    }

    function progressBar(x: number, yPos: number, w: number, value: number) {
      setColor([226, 232, 240], 'fill')
      doc.roundedRect(x, yPos, w, 12, 6, 6, 'F')
      const progressWidth = value > 0 ? Math.max(5, (w * value) / 100) : 0
      if (progressWidth > 0) {
        setColor(colors.blue, 'fill')
        doc.roundedRect(x, yPos, progressWidth, 12, 6, 6, 'F')
      }
    }

    // Cover header - black GymTrack brand block
    setColor(colors.black, 'fill')
    doc.rect(0, 0, pageWidth, 142, 'F')
    setColor(colors.blue, 'fill')
    doc.rect(0, 138, pageWidth, 4, 'F')

    const logoData = await getLogoDataUrl()
    if (logoData) {
      doc.addImage(logoData, 'PNG', margin, 34, 180, 54, undefined, 'FAST')
    } else {
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(24)
      setColor([255, 255, 255])
      doc.text('GYM', margin, 64)
      setColor(colors.blue)
      doc.text('TRACK', margin + 62, 64)
    }

    doc.setFont('helvetica', 'bold')
    doc.setFontSize(26)
    setColor([255, 255, 255])
    doc.text('Athlete Progress Report', margin, 112)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    setColor([203, 213, 225])
    doc.text('Track Progress. Build Champions.', margin, 128)
    doc.text(`Generated: ${generatedDate}`, pageWidth - margin, 58, { align: 'right' })

    y = 174

    const cardW = (contentWidth - 24) / 4
    infoCard(margin, y, cardW, 74, 'Athlete', athleteName)
    infoCard(margin + cardW + 8, y, cardW, 74, 'Team', team)
    infoCard(margin + (cardW + 8) * 2, y, cardW, 74, 'Level', `${program} - ${level}`)
    infoCard(margin + (cardW + 8) * 3, y, cardW, 74, 'Coach', coach)
    y += 104

    sectionTitle('Progress Summary')

    const summaryW = (contentWidth - 24) / 4
    darkMetric(margin, y, summaryW, 70, 'Total Skills', String(selectedMetrics.total))
    darkMetric(margin + summaryW + 8, y, summaryW, 70, 'Achieved', String(selectedMetrics.achieved))
    darkMetric(margin + (summaryW + 8) * 2, y, summaryW, 70, 'Almost', String(selectedMetrics.almost))
    darkMetric(margin + (summaryW + 8) * 3, y, summaryW, 70, 'Readiness', `${selectedMetrics.readiness}%`)
    y += 90

    progressBar(margin, y, contentWidth, selectedMetrics.readiness)
    y += 40

    sectionTitle('Apparatus Summary', 'Skills achieved, total skills, and readiness by apparatus.')

    const apparatusCards = Object.keys(grouped)
    const appW = (contentWidth - 12) / 2
    apparatusCards.forEach((apparatus, index) => {
      const items = grouped[apparatus]
      const achieved = items.filter((item) => item.status === 'achieved').length
      const readiness = apparatusReadiness(items)
      const x = margin + (index % 2) * (appW + 12)
      if (index % 2 === 0 && index !== 0) y += 74
      ensureSpace(74)
      setColor(colors.line, 'draw')
      setColor(colors.soft, 'fill')
      doc.roundedRect(x, y, appW, 62, 10, 10, 'FD')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(12)
      setColor(colors.text)
      doc.text(apparatusLabel(apparatus), x + 12, y + 22)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      setColor(colors.muted)
      doc.text(`${achieved} / ${items.length} achieved`, x + 12, y + 42)
      doc.setFont('helvetica', 'bold')
      setColor(readiness >= 90 ? colors.green : readiness >= 75 ? colors.amber : colors.red)
      doc.text(`${readiness}%`, x + appW - 12, y + 42, { align: 'right' })
    })
    y += apparatusCards.length > 2 ? 92 : 78

    // Detail per apparatus
    Object.keys(grouped).forEach((apparatus) => {
      const items = grouped[apparatus]
      const achieved = items.filter((item) => item.status === 'achieved').length
      ensureSpace(90)
      setColor(colors.black, 'fill')
      doc.roundedRect(margin, y, contentWidth, 50, 12, 12, 'F')
      doc.setFont('helvetica', 'bold')
      doc.setFontSize(16)
      setColor([255, 255, 255])
      doc.text(`${apparatusLabel(apparatus)} Detail`, margin + 16, y + 22)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(9)
      setColor([203, 213, 225])
      doc.text(`${achieved} / ${items.length} skills achieved - ${apparatusReadiness(items)}% readiness`, margin + 16, y + 39)
      y += 68

      items.forEach((item) => {
        const status = getSkillStatus(item.status)
        const issue = item.main_issue || (item.status === 'achieved' ? 'No issue' : 'Not written yet')
        const focus = item.correction_focus || '-'
        const note = item.coach_note || '-'
        const meta = [
          `Main issue: ${issue}`,
          `Correction focus: ${focus}`,
          `Coach note: ${note}`,
        ].join('   |   ')

        const titleLines = doc.splitTextToSize(`${item.order_number || ''}. ${item.element_name || ''}`, contentWidth - 120)
        const metaLines = doc.splitTextToSize(meta, contentWidth - 28)
        const blockH = Math.max(58, 34 + titleLines.length * 12 + metaLines.length * 10)
        ensureSpace(blockH + 8)

        const c = statusColors(item.status)
        setColor(c.border, 'draw')
        setColor(item.status === 'achieved' ? [248, 253, 250] : [255, 250, 250], 'fill')
        doc.roundedRect(margin, y, contentWidth, blockH, 10, 10, 'FD')

        doc.setFont('helvetica', 'bold')
        doc.setFontSize(10)
        setColor(colors.text)
        doc.text(titleLines, margin + 12, y + 22)
        pill(status.label, item.status, pageWidth - margin - 86, y + 22, 74)

        doc.setFont('helvetica', 'normal')
        doc.setFontSize(8.5)
        setColor(colors.muted)
        doc.text(metaLines, margin + 12, y + 22 + titleLines.length * 13)
        y += blockH + 10
      })

      y += 8
    })

    if (notesForAthlete.length) {
      sectionTitle('Latest Weekly Notes')
      notesForAthlete.forEach((note) => {
        const text = `Effort: ${note.effort || '-'} | Improvement: ${note.improvement || '-'} | Correction: ${note.correction || '-'} | Next Focus: ${note.next_focus || '-'} | Coach Note: ${note.note || '-'}`
        const lines = doc.splitTextToSize(text, contentWidth - 24)
        const blockH = 42 + lines.length * 11
        ensureSpace(blockH)
        setColor(colors.line, 'draw')
        setColor(colors.soft, 'fill')
        doc.roundedRect(margin, y, contentWidth, blockH - 8, 10, 10, 'FD')
        doc.setFont('helvetica', 'bold')
        doc.setFontSize(10)
        setColor(colors.text)
        doc.text(note.week_start_date || 'Weekly Note', margin + 12, y + 20)
        doc.setFont('helvetica', 'normal')
        doc.setFontSize(8.5)
        setColor(colors.muted)
        doc.text(lines, margin + 12, y + 38)
        y += blockH
      })
    }

    addFooter()

    const fileName = `GymTrack_Report_${athleteName.replace(/[^a-z0-9]+/gi, '_')}_${new Date().toISOString().slice(0, 10)}.pdf`
    const pdfBlob = doc.output('blob')

    try {
      const pdfFile = new File([pdfBlob], fileName, { type: 'application/pdf' })
      const mobileNavigator = navigator as Navigator & {
        canShare?: (data: { files?: File[] }) => boolean
        share?: (data: { files?: File[]; title?: string; text?: string }) => Promise<void>
      }

      if (mobileNavigator.share && mobileNavigator.canShare?.({ files: [pdfFile] })) {
        await mobileNavigator.share({
          files: [pdfFile],
          title: 'GymTrack Athlete Report',
          text: `${athleteName} - GymTrack progress report`,
        })
        return
      }
    } catch {
      // If mobile file sharing is unavailable or cancelled, continue to normal download.
    }

    const url = URL.createObjectURL(pdfBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = fileName
    link.rel = 'noopener'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setTimeout(() => URL.revokeObjectURL(url), 1500)
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
            Search reports
            <input
              placeholder="Search by athlete, team, coach, program, or level..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

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
              setSearch('')
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
                  Download / Share PDF
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
