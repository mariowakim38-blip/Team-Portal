'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import ProgressBar from '@/components/ProgressBar'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'
import type { Athlete, Coach, Team, Level } from '@/lib/types'

export default function Athletes() {
  const router = useRouter()
  const [role, setRole] = useState('coach')
  const [athletes, setAthletes] = useState<Athlete[]>([])
  const [coaches, setCoaches] = useState<Coach[]>([])
  const [teams, setTeams] = useState<Team[]>([])
  const [levels, setLevels] = useState<Level[]>([])
  const [readiness, setReadiness] = useState<Record<string, number>>({})
  const [form, setForm] = useState<any>({})

  useEffect(() => { load() }, [])

  async function load() {
    const { user, profile, teamIds } = await getCurrentUserProfile()
    if (!user) return router.push('/login')

    setRole(profile?.role || 'coach')
    const safeTeamIds = teamIds.length ? teamIds : [EMPTY_UUID]

    let athletesQuery = supabase.from('athletes').select('*,teams(name),levels(name),coaches(full_name)').order('created_at', { ascending: false })
    let teamsQuery = supabase.from('teams').select('*').order('name')

    if (profile?.role === 'coach') {
      athletesQuery = athletesQuery.in('team_id', safeTeamIds)
      teamsQuery = teamsQuery.in('id', safeTeamIds)
    }

    const [{ data: a }, { data: c }, { data: t }, { data: l }, { data: r }] = await Promise.all([
      athletesQuery,
      supabase.from('coaches').select('*').order('full_name'),
      teamsQuery,
      supabase.from('levels').select('*').order('name'),
      supabase.rpc('athlete_readiness'),
    ])

    setAthletes(a || [])
    setCoaches(c || [])
    setTeams(t || [])
    setLevels(l || [])

    const map: Record<string, number> = {}
    ;(r || []).forEach((x: any) => { map[x.athlete_id] = Number(x.readiness) })
    setReadiness(map)
  }

  async function add(e: React.FormEvent) {
    e.preventDefault()
    if (role !== 'admin') return alert('Only admin can add athletes.')
    await supabase.from('athletes').insert(form)
    setForm({})
    load()
  }

  async function remove(id: string) {
    if (role !== 'admin') return alert('Only admin can delete athletes.')
    if (confirm('Delete athlete?')) {
      await supabase.from('athletes').delete().eq('id', id)
      load()
    }
  }

  return (
    <AppShell>
      <h1 className="title">{role === 'admin' ? 'Athletes' : 'My Athletes'}</h1>
      <p className="muted">{role === 'admin' ? 'Create athletes, assign coach, team, and level.' : 'View athletes in your assigned teams.'}</p>

      {role === 'admin' && (
        <div className="card mb">
          <h2>Add Athlete</h2>
          <form onSubmit={add} className="form-grid">
            <label>First name<input required value={form.first_name || ''} onChange={(e) => setForm({ ...form, first_name: e.target.value })} /></label>
            <label>Last name<input required value={form.last_name || ''} onChange={(e) => setForm({ ...form, last_name: e.target.value })} /></label>
            <label>Birth date<input type="date" value={form.birth_date || ''} onChange={(e) => setForm({ ...form, birth_date: e.target.value })} /></label>
            <label>Team<select value={form.team_id || ''} onChange={(e) => setForm({ ...form, team_id: e.target.value || null })}><option value="">None</option>{teams.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}</select></label>
            <label>Level<select value={form.level_id || ''} onChange={(e) => setForm({ ...form, level_id: e.target.value || null })}><option value="">None</option>{levels.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}</select></label>
            <label>Coach<select value={form.coach_id || ''} onChange={(e) => setForm({ ...form, coach_id: e.target.value || null })}><option value="">None</option>{coaches.map((x) => <option key={x.id} value={x.id}>{x.full_name}</option>)}</select></label>
            <label>Parent name<input value={form.parent_name || ''} onChange={(e) => setForm({ ...form, parent_name: e.target.value })} /></label>
            <label>Parent phone<input value={form.parent_phone || ''} onChange={(e) => setForm({ ...form, parent_phone: e.target.value })} /></label>
            <button className="btn">Add Athlete</button>
          </form>
        </div>
      )}

      <table>
        <thead><tr><th>Name</th><th>Team</th><th>Level</th><th>Coach</th><th>Readiness</th>{role === 'admin' && <th></th>}</tr></thead>
        <tbody>{athletes.map((a) => <tr key={a.id}><td>{a.first_name} {a.last_name}</td><td>{a.teams?.name || '-'}</td><td>{a.levels?.name || '-'}</td><td>{a.coaches?.full_name || '-'}</td><td><ProgressBar value={readiness[a.id] || 0} /></td>{role === 'admin' && <td><button className="btn danger" onClick={() => remove(a.id)}>Delete</button></td>}</tr>)}</tbody>
      </table>
    </AppShell>
  )
}
