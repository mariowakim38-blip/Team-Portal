'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'

export default function Dashboard() {
  const router = useRouter()
  const [role, setRole] = useState('coach')
  const [stats, setStats] = useState({ athletes: 0, coaches: 0, teams: 0, notes: 0, ready: 0 })

  useEffect(() => { load() }, [])

  async function load() {
    const { user, profile, teamIds } = await getCurrentUserProfile()
    if (!user) return router.push('/login')

    setRole(profile?.role || 'coach')

    if (profile?.role === 'admin') {
      const [{ count: athletes }, { count: coaches }, { count: teams }, { count: notes }] = await Promise.all([
        supabase.from('athletes').select('*', { count: 'exact', head: true }),
        supabase.from('coaches').select('*', { count: 'exact', head: true }),
        supabase.from('teams').select('*', { count: 'exact', head: true }),
        supabase.from('weekly_notes').select('*', { count: 'exact', head: true }),
      ])

      const { data: readiness } = await supabase.rpc('athlete_readiness')

      setStats({
        athletes: athletes || 0,
        coaches: coaches || 0,
        teams: teams || 0,
        notes: notes || 0,
        ready: (readiness || []).filter((r: any) => Number(r.readiness) >= 85).length,
      })
      return
    }

    const safeTeamIds = teamIds.length ? teamIds : [EMPTY_UUID]

    const [{ count: athletes }, { count: teams }, { count: notes }, { data: readiness }] = await Promise.all([
      supabase.from('athletes').select('*', { count: 'exact', head: true }).in('team_id', safeTeamIds),
      supabase.from('teams').select('*', { count: 'exact', head: true }).in('id', safeTeamIds),
      supabase.from('weekly_notes').select('*,athletes!inner(team_id)', { count: 'exact', head: true }).in('athletes.team_id', safeTeamIds),
      supabase.rpc('athlete_readiness'),
    ])

    setStats({
      athletes: athletes || 0,
      coaches: 1,
      teams: teams || 0,
      notes: notes || 0,
      ready: (readiness || []).filter((r: any) => safeTeamIds.includes(r.team_id) && Number(r.readiness) >= 85).length,
    })
  }

  return (
    <AppShell>
      <div className="topbar">
        <div>
          <h1 className="title">Dashboard</h1>
          <p className="muted">{role === 'admin' ? 'Admin overview for all competition teams.' : 'Coach overview for your assigned teams.'}</p>
        </div>
      </div>

      <div className="grid">
        <Stat label={role === 'admin' ? 'Athletes' : 'My Athletes'} value={stats.athletes} />
        <Stat label={role === 'admin' ? 'Coaches' : 'My Coach Account'} value={stats.coaches} />
        <Stat label={role === 'admin' ? 'Teams' : 'My Teams'} value={stats.teams} />
        <Stat label="Weekly Notes" value={stats.notes} />
      </div>

      <div className="card mt">
        <h2>Ready for Evaluation</h2>
        <p className="stat">{stats.ready}</p>
        <p className="muted">Athletes with 85%+ skill readiness.</p>
      </div>
    </AppShell>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return <div className="card"><p className="muted">{label}</p><div className="stat">{value}</div></div>
}
