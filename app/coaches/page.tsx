'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile } from '@/lib/roleAccess'
import type { Coach, Team } from '@/lib/types'

export default function Coaches() {
  const router = useRouter()
  const [coaches, setCoaches] = useState<Coach[]>([])
  const [teams, setTeams] = useState<Team[]>([])
  const [coachTeams, setCoachTeams] = useState<any[]>([])
  const [form, setForm] = useState<any>({})
  const [assignForm, setAssignForm] = useState<any>({})

  useEffect(() => { load() }, [])

  async function load() {
    const { user, profile } = await getCurrentUserProfile()
    if (!user) return router.push('/login')
    if (profile?.role !== 'admin') return router.push('/dashboard')

    const [{ data: c }, { data: t }, { data: ct }] = await Promise.all([
      supabase.from('coaches').select('*').order('full_name'),
      supabase.from('teams').select('*').order('name'),
      supabase.from('coach_teams').select('*,coaches(full_name),teams(name)').order('created_at', { ascending: false }),
    ])
    setCoaches(c || [])
    setTeams(t || [])
    setCoachTeams(ct || [])
  }

  async function addCoach(e: React.FormEvent) {
    e.preventDefault()
    await supabase.from('coaches').insert({ full_name: form.full_name, phone: form.phone || null, username: form.username || null })
    setForm({})
    load()
  }

  async function assignTeam(e: React.FormEvent) {
    e.preventDefault()
    await supabase.from('coach_teams').upsert({ coach_id: assignForm.coach_id, team_id: assignForm.team_id }, { onConflict: 'coach_id,team_id' })
    setAssignForm({})
    load()
  }

  async function removeAssignment(id: string) {
    if (!confirm('Remove this team from coach?')) return
    await supabase.from('coach_teams').delete().eq('id', id)
    load()
  }

  async function delCoach(id: string) {
    if (!confirm('Delete coach?')) return
    await supabase.from('coaches').delete().eq('id', id)
    load()
  }

  return (
    <AppShell>
      <h1 className="title">Coaches</h1>
      <p className="muted">Create coaches and assign teams to each coach.</p>
      <div className="grid-2 mb">
        <div className="card"><h2>Add Coach</h2><form onSubmit={addCoach} className="form-grid">
          <label>Full name<input required value={form.full_name || ''} onChange={(e) => setForm({ ...form, full_name: e.target.value })} /></label>
          <label>Username<input placeholder="coach1" value={form.username || ''} onChange={(e) => setForm({ ...form, username: e.target.value })} /></label>
          <label>Phone<input value={form.phone || ''} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label>
          <button className="btn">Add Coach</button>
        </form></div>

        <div className="card"><h2>Assign Team to Coach</h2><form onSubmit={assignTeam} className="form-grid">
          <label>Coach<select required value={assignForm.coach_id || ''} onChange={(e) => setAssignForm({ ...assignForm, coach_id: e.target.value })}><option value="">Choose coach</option>{coaches.map((c) => <option key={c.id} value={c.id}>{c.full_name}</option>)}</select></label>
          <label>Team<select required value={assignForm.team_id || ''} onChange={(e) => setAssignForm({ ...assignForm, team_id: e.target.value })}><option value="">Choose team</option>{teams.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}</select></label>
          <button className="btn">Assign Team</button>
        </form></div>
      </div>

      <div className="card mb"><h2>Coach Team Assignments</h2><table><thead><tr><th>Coach</th><th>Team</th><th></th></tr></thead><tbody>{coachTeams.map((x) => <tr key={x.id}><td>{x.coaches?.full_name || '-'}</td><td>{x.teams?.name || '-'}</td><td><button className="btn danger" onClick={() => removeAssignment(x.id)}>Remove</button></td></tr>)}</tbody></table></div>
      <table><thead><tr><th>Coach</th><th>Username</th><th>Phone</th><th></th></tr></thead><tbody>{coaches.map((c: any) => <tr key={c.id}><td>{c.full_name}</td><td>{c.username || '-'}</td><td>{c.phone || '-'}</td><td><button className="btn danger" onClick={() => delCoach(c.id)}>Delete</button></td></tr>)}</tbody></table>
    </AppShell>
  )
}
