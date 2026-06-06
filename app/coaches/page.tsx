'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import ProgressBar from '@/components/ProgressBar'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'

export default function Reports() {
  const router = useRouter()
  const [role, setRole] = useState('coach')
  const [rows, setRows] = useState<any[]>([])

  useEffect(() => { load() }, [])

  async function load() {
    const { user, profile, teamIds } = await getCurrentUserProfile()
    if (!user) return router.push('/login')
    setRole(profile?.role || 'coach')
    const safeTeamIds = teamIds.length ? teamIds : [EMPTY_UUID]
    const { data } = await supabase.rpc('athlete_readiness')
    setRows(profile?.role === 'coach' ? (data || []).filter((r: any) => safeTeamIds.includes(r.team_id)) : (data || []))
  }

  return (
    <AppShell>
      <h1 className="title">Reports</h1>
      <p className="muted">{role === 'admin' ? 'All athletes readiness.' : 'Readiness for your assigned teams.'}</p>
      <div className="card">
        <table><thead><tr><th>Athlete</th><th>Team</th><th>Level</th><th>Achieved</th><th>Total</th><th>Readiness</th></tr></thead>
        <tbody>{rows.map((r) => <tr key={r.athlete_id}><td>{r.athlete_name}</td><td>{r.team_name || '-'}</td><td>{r.level_name || '-'}</td><td>{r.achieved_skills}</td><td>{r.total_skills}</td><td><ProgressBar value={Number(r.readiness || 0)} /></td></tr>)}</tbody></table>
      </div>
    </AppShell>
  )
}
