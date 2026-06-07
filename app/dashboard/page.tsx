'use client'

import { useEffect, useState } from 'react'
import AppShell from '@/components/AppShell'
import { supabase } from '@/lib/supabaseClient'
import { getAthleteReadinessRows } from '@/lib/readiness'

export default function Dashboard() {
  const [stats, setStats] = useState({ athletes: 0, coaches: 0, teams: 0, notes: 0, ready: 0 })

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const [{ count: athletes }, { count: coaches }, { count: teams }, { count: notes }] =
      await Promise.all([
        supabase.from('athletes').select('*', { count: 'exact', head: true }),
        supabase.from('coaches').select('*', { count: 'exact', head: true }),
        supabase.from('teams').select('*', { count: 'exact', head: true }),
        supabase.from('weekly_notes').select('*', { count: 'exact', head: true }),
      ])

    const readiness = await getAthleteReadinessRows()

    setStats({
      athletes: athletes || 0,
      coaches: coaches || 0,
      teams: teams || 0,
      notes: notes || 0,
      ready: readiness.filter((r: any) => Number(r.readiness) >= 85).length,
    })
  }

  return (
    <AppShell>
      <div className="topbar">
        <div>
          <h1 className="title">GymTrack Dashboard</h1>
          <p className="muted">Premium competition-team progress overview.</p>
        </div>
      </div>

      <div className="grid mb">
        <Stat label="Athletes" value={stats.athletes} />
        <Stat label="Coaches" value={stats.coaches} />
        <Stat label="Teams" value={stats.teams} />
        <Stat label="Weekly Notes" value={stats.notes} />
      </div>

      <div className="grid-2">
        <div className="card">
          <p className="muted">Evaluation Status</p>
          <h2>Ready for Evaluation</h2>
          <p className="stat">{stats.ready}</p>
          <p className="muted">Athletes with 85%+ readiness based on tracked routine elements.</p>
        </div>

        <div className="card">
          <p className="muted">Brand</p>
          <h2>Track Progress. Build Champions.</h2>
          <p className="muted">
            Assign athletes to USAG or FIG High Performance levels, then track every apparatus element with coach notes and correction focus.
          </p>
        </div>
      </div>
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
