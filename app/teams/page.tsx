'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import { supabase } from '@/lib/supabaseClient'
import { getCurrentUserProfile, EMPTY_UUID } from '@/lib/roleAccess'
import type { Team } from '@/lib/types'

export default function Teams() {
  const router = useRouter()
  const [role, setRole] = useState('coach')
  const [teams, setTeams] = useState<Team[]>([])
  const [counts, setCounts] = useState<Record<string, number>>({})
  const [form, setForm] = useState<any>({})
  const [search, setSearch] = useState('')

  useEffect(() => { load() }, [])

  async function load() {
    const { user, profile, teamIds } = await getCurrentUserProfile()
    if (!user) return router.push('/login')

    setRole(profile?.role || 'coach')
    const safeTeamIds = teamIds.length ? teamIds : [EMPTY_UUID]

    let teamsQuery = supabase.from('teams').select('*').order('name')
    if (profile?.role === 'coach') teamsQuery = teamsQuery.in('id', safeTeamIds)

    const [{ data: t }, { data: athletes }] = await Promise.all([
      teamsQuery,
      supabase.from('athletes').select('id,team_id'),
    ])

    setTeams(t || [])

    const map: Record<string, number> = {}
    ;(athletes || []).forEach((a: any) => {
      if (a.team_id) map[a.team_id] = (map[a.team_id] || 0) + 1
    })
    setCounts(map)
  }

  const filteredTeams = useMemo(() => {
    const q = search.trim().toLowerCase()
    if (!q) return teams

    return teams.filter((team) =>
      [team.name, team.age_group, team.level_name]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(q)
    )
  }, [teams, search])

  async function add(e: React.FormEvent) {
    e.preventDefault()
    if (role !== 'admin') return alert('Only admin can create teams.')

    const { error } = await supabase.from('teams').insert(form)
    if (error) return alert(error.message)

    setForm({})
    load()
  }

  async function del(id: string) {
    if (role !== 'admin') return alert('Only admin can delete teams.')
    if (!confirm('Delete team?')) return
    await supabase.from('teams').delete().eq('id', id)
    load()
  }

  return (
    <AppShell>
      <h1 className="title">{role === 'admin' ? 'Teams' : 'My Teams'}</h1>
      <p className="muted">
        {role === 'admin'
          ? 'Create competition teams and assign athletes to teams.'
          : 'Only teams assigned to your coach account are shown.'}
      </p>

      {role === 'admin' && (
        <div className="card mb">
          <h2>Add Team</h2>
          <form onSubmit={add} className="form-grid">
            <label>
              Team name
              <input
                required
                placeholder="Mini Team 6-7"
                value={form.name || ''}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </label>
            <label>
              Age group
              <input
                placeholder="6-7"
                value={form.age_group || ''}
                onChange={(e) => setForm({ ...form, age_group: e.target.value })}
              />
            </label>
            <label>
              Level name
              <input
                placeholder="Level 1"
                value={form.level_name || ''}
                onChange={(e) => setForm({ ...form, level_name: e.target.value })}
              />
            </label>
            <button className="btn">Add Team</button>
          </form>
        </div>
      )}

      <div className="card mb">
        <label>
          Search teams
          <input
            placeholder="Search by team name, age group, or level..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Age Group</th>
            <th>Level</th>
            <th>Athletes</th>
            {role === 'admin' && <th></th>}
          </tr>
        </thead>
        <tbody>
          {filteredTeams.map((t) => (
            <tr key={t.id}>
              <td>{t.name}</td>
              <td>{t.age_group || '-'}</td>
              <td>{t.level_name || '-'}</td>
              <td>{counts[t.id] || 0}</td>
              {role === 'admin' && (
                <td><button className="btn danger" onClick={() => del(t.id)}>Delete</button></td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </AppShell>
  )
}
