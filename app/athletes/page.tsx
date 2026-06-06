'use client'

import { useEffect, useMemo, useState } from 'react'
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
  const [teamFilter, setTeamFilter] = useState('')
  const [selected, setSelected] = useState<Athlete | null>(null)

  useEffect(() => {
    load()
  }, [])

  async function load() {
    const { user, profile, teamIds } = await getCurrentUserProfile()
    if (!user) return router.push('/login')

    setRole(profile?.role || 'coach')
    const safeTeamIds = teamIds.length ? teamIds : [EMPTY_UUID]

    let athletesQuery = supabase
      .from('athletes')
      .select('*,teams(name),levels(name),coaches(full_name)')
      .order('created_at', { ascending: false })

    let teamsQuery = supabase.from('teams').select('*').order('name')

    if (profile?.role === 'coach') {
      athletesQuery = athletesQuery.in('team_id', safeTeamIds)
      teamsQuery = teamsQuery.in('id', safeTeamIds)
    }

    const [{ data: a }, { data: c }, { data: t }, { data: l }, { data: r }] =
      await Promise.all([
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
    ;(r || []).forEach((x: any) => {
      map[x.athlete_id] = Number(x.readiness)
    })
    setReadiness(map)
  }

  const filteredAthletes = useMemo(() => {
    return athletes.filter((a) => {
      return teamFilter ? a.teams?.name === teamFilter : true
    })
  }, [athletes, teamFilter])

  function statusLabel(value: number) {
    if (value >= 90) return { text: 'Ready', cls: 'status-ready' }
    if (value >= 75) return { text: 'Almost Ready', cls: 'status-almost' }
    return { text: 'Needs Work', cls: 'status-work' }
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
      setSelected(null)
      load()
    }
  }

  return (
    <AppShell>
      <div className="topbar">
        <div>
          <h1 className="title">{role === 'admin' ? 'Athletes' : 'My Athletes'}</h1>
          <p className="muted">
            {role === 'admin'
              ? 'Create athletes, assign coach, team, and level.'
              : 'View athletes in your assigned teams.'}
          </p>
        </div>
      </div>

      <div className="grid mb">
        <Stat label="Shown Athletes" value={filteredAthletes.length} />
        <Stat label="Ready" value={filteredAthletes.filter((a) => (readiness[a.id] || 0) >= 90).length} />
        <Stat label="Almost Ready" value={filteredAthletes.filter((a) => (readiness[a.id] || 0) >= 75 && (readiness[a.id] || 0) < 90).length} />
        <Stat label="Needs Work" value={filteredAthletes.filter((a) => (readiness[a.id] || 0) < 75).length} />
      </div>

      {role === 'admin' && (
        <div className="card mb">
          <h2>Add Athlete</h2>

          <form onSubmit={add} className="form-grid">
            <label>
              First name
              <input required value={form.first_name || ''} onChange={(e) => setForm({ ...form, first_name: e.target.value })} />
            </label>

            <label>
              Last name
              <input required value={form.last_name || ''} onChange={(e) => setForm({ ...form, last_name: e.target.value })} />
            </label>

            <label>
              Birth date
              <input type="date" value={form.birth_date || ''} onChange={(e) => setForm({ ...form, birth_date: e.target.value })} />
            </label>

            <label>
              Team
              <select value={form.team_id || ''} onChange={(e) => setForm({ ...form, team_id: e.target.value || null })}>
                <option value="">None</option>
                {teams.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}
              </select>
            </label>

            <label>
              Level
              <select value={form.level_id || ''} onChange={(e) => setForm({ ...form, level_id: e.target.value || null })}>
                <option value="">None</option>
                {levels.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}
              </select>
            </label>

            <label>
              Coach
              <select value={form.coach_id || ''} onChange={(e) => setForm({ ...form, coach_id: e.target.value || null })}>
                <option value="">None</option>
                {coaches.map((x) => <option key={x.id} value={x.id}>{x.full_name}</option>)}
              </select>
            </label>

            <label>
              Parent name
              <input value={form.parent_name || ''} onChange={(e) => setForm({ ...form, parent_name: e.target.value })} />
            </label>

            <label>
              Parent phone
              <input value={form.parent_phone || ''} onChange={(e) => setForm({ ...form, parent_phone: e.target.value })} />
            </label>

            <button className="btn">Add Athlete</button>
          </form>
        </div>
      )}

      <div className="card mb">
        <div className="form-grid">
          <label>
            Filter by team
            <select value={teamFilter} onChange={(e) => setTeamFilter(e.target.value)}>
              <option value="">All teams</option>
              {teams.map((t) => <option key={t.id} value={t.name}>{t.name}</option>)}
            </select>
          </label>

          <button className="btn secondary" type="button" onClick={() => setTeamFilter('')}>
            Clear Filter
          </button>
        </div>
      </div>

      <div className="athlete-card-grid">
        {filteredAthletes.map((a) => {
          const value = readiness[a.id] || 0
          const status = statusLabel(value)

          return (
            <div key={a.id} className="athlete-card">
              <div className="athlete-avatar">
                {a.first_name?.[0]}{a.last_name?.[0]}
              </div>

              <div className="athlete-card-header">
                <div>
                  <h2>{a.first_name} {a.last_name}</h2>
                  <p className="muted">{a.teams?.name || 'No team'} · {a.levels?.name || 'No level'}</p>
                </div>

                <span className={`status-pill ${status.cls}`}>{status.text}</span>
              </div>

              <ProgressBar value={value} />

              <div className="athlete-meta">
                <div>
                  <span>Coach</span>
                  <strong>{a.coaches?.full_name || '-'}</strong>
                </div>
                <div>
                  <span>Parent</span>
                  <strong>{a.parent_name || '-'}</strong>
                </div>
              </div>

              <button className="btn mt" onClick={() => setSelected(a)}>
                View Profile
              </button>
            </div>
          )
        })}
      </div>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="report-card-header">
              <div>
                <h2>{selected.first_name} {selected.last_name}</h2>
                <p className="muted">{selected.teams?.name || 'No team'} · {selected.levels?.name || 'No level'}</p>
              </div>

              <button className="btn secondary" onClick={() => setSelected(null)}>Close</button>
            </div>

            <div className="card mb">
              <h3>Readiness</h3>
              <ProgressBar value={readiness[selected.id] || 0} />

              <div className="report-mini-grid mt">
                <div><span className="muted">Team</span><strong>{selected.teams?.name || '-'}</strong></div>
                <div><span className="muted">Level</span><strong>{selected.levels?.name || '-'}</strong></div>
                <div><span className="muted">Coach</span><strong>{selected.coaches?.full_name || '-'}</strong></div>
              </div>
            </div>

            <div className="card">
              <h3>Parent Contact</h3>
              <p><b>Parent:</b> {selected.parent_name || '-'}</p>
              <p><b>Phone:</b> {selected.parent_phone || '-'}</p>

              {role === 'admin' && (
                <button className="btn danger mt" onClick={() => remove(selected.id)}>
                  Delete Athlete
                </button>
              )}
            </div>
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
