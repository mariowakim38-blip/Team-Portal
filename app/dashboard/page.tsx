'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import { supabase } from '@/lib/supabaseClient'
import { getAthleteReadinessRows, type ReadinessRow } from '@/lib/readiness'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'

type DashboardStats = {
  athletes: number
  coaches: number
  teams: number
  notes: number
  ready: number
}

export default function Dashboard() {
  const router = useRouter()
  const [role, setRole] = useState<'admin' | 'coach'>('coach')
  const [stats, setStats] = useState<DashboardStats>({ athletes: 0, coaches: 0, teams: 0, notes: 0, ready: 0 })
  const [readinessRows, setReadinessRows] = useState<ReadinessRow[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    load()
  }, [])

  async function load() {
    setLoading(true)

    const { user, profile, teamIds } = await getCurrentUserProfile()

    if (!user) {
      router.push('/login')
      return
    }

    const currentRole = profile?.role === 'admin' ? 'admin' : 'coach'
    setRole(currentRole)

    if (currentRole === 'admin') {
      const [{ count: athletes }, { count: coaches }, { count: teams }, { count: notes }] = await Promise.all([
        supabase.from('athletes').select('*', { count: 'exact', head: true }),
        supabase.from('coaches').select('*', { count: 'exact', head: true }),
        supabase.from('teams').select('*', { count: 'exact', head: true }),
        supabase.from('weekly_notes').select('*', { count: 'exact', head: true }),
      ])

      const readiness = await getAthleteReadinessRows()
      setReadinessRows(readiness)
      setStats({
        athletes: athletes || 0,
        coaches: coaches || 0,
        teams: teams || 0,
        notes: notes || 0,
        ready: readiness.filter((r) => Number(r.readiness) >= 85).length,
      })
      setLoading(false)
      return
    }

    const safeTeamIds = teamIds.length ? teamIds : [EMPTY_UUID]

    const [{ count: notes }, readiness] = await Promise.all([
      supabase
        .from('weekly_notes')
        .select('*,athletes!inner(team_id)', { count: 'exact', head: true })
        .in('athletes.team_id', safeTeamIds),
      getAthleteReadinessRows(safeTeamIds),
    ])

    setReadinessRows(readiness)
    setStats({
      athletes: readiness.length,
      coaches: 0,
      teams: teamIds.length,
      notes: notes || 0,
      ready: readiness.filter((r) => Number(r.readiness) >= 85).length,
    })
    setLoading(false)
  }

  const readyRows = readinessRows.filter((r) => Number(r.readiness) >= 85).slice(0, 5)
  const teamSummary = readinessRows.reduce<Record<string, number>>((acc, row) => {
    const name = row.team_name || 'No team'
    acc[name] = (acc[name] || 0) + 1
    return acc
  }, {})

  return (
    <AppShell>
      <div className="topbar">
        <div>
          <h1 className="title">{role === 'admin' ? 'GymTrack Admin Dashboard' : 'Coach Dashboard'}</h1>
          <p className="muted">
            {role === 'admin'
              ? 'Full club overview across athletes, coaches, teams, and reports.'
              : 'Your assigned teams, athletes, and evaluation readiness.'}
          </p>
        </div>
      </div>

      <div className="grid mb">
        <Stat label={role === 'admin' ? 'Total Athletes' : 'My Athletes'} value={stats.athletes} />
        <Stat label={role === 'admin' ? 'Coaches' : 'My Teams'} value={role === 'admin' ? stats.coaches : stats.teams} />
        <Stat label="Ready for Evaluation" value={stats.ready} />
        <Stat label="Weekly Notes" value={stats.notes} />
      </div>

      {loading ? (
        <div className="card"><p className="muted">Loading dashboard...</p></div>
      ) : role === 'admin' ? (
        <div className="grid-2">
          <div className="card">
            <p className="muted">Evaluation Status</p>
            <h2>Ready for Evaluation</h2>
            <p className="stat">{stats.ready}</p>
            <p className="muted">Athletes with 85%+ readiness based on tracked routine elements.</p>
          </div>

          <div className="card dashboard-brand-card">
            <img src="/gymtrack-logo.png" alt="GymTrack" className="dashboard-brand-logo" />
            <h2>Track Progress. Build Champions.</h2>
            <p className="muted">
              Manage USAG and FIG High Performance progress, coach notes, apparatus readiness, and professional PDF reports.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid-2">
          <div className="card">
            <p className="muted">My Team Overview</p>
            <h2>Assigned Teams</h2>
            {Object.keys(teamSummary).length ? (
              <div className="dashboard-list">
                {Object.entries(teamSummary).map(([team, count]) => (
                  <div key={team} className="dashboard-list-row">
                    <strong>{team}</strong>
                    <span>{count} athlete{count === 1 ? '' : 's'}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="muted">No athletes assigned yet.</p>
            )}
          </div>

          <div className="card">
            <p className="muted">Evaluation Queue</p>
            <h2>Ready Athletes</h2>
            {readyRows.length ? (
              <div className="dashboard-list">
                {readyRows.map((row) => (
                  <div key={row.athlete_id} className="dashboard-list-row">
                    <strong>{row.athlete_name}</strong>
                    <span>{row.readiness}% ready</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="muted">No athlete is ready for evaluation yet.</p>
            )}
          </div>
        </div>
      )}
    </AppShell>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="card">
      <p className="muted">{label}</p>
      <div className="stat">{value}</div>
    </div>
  )
}
