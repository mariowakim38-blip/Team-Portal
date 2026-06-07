'use client'

import { useEffect, useState } from 'react'
import AppShell from '@/components/AppShell'
import { supabase } from '@/lib/supabaseClient'
import type { Athlete, Coach, WeeklyNote, Profile } from '@/lib/types'

const EMPTY_UUID = '00000000-0000-0000-0000-000000000000'

export default function WeeklyNotes() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [coachId, setCoachId] = useState<string | null>(null)
  const [athletes, setAthletes] = useState<Athlete[]>([])
  const [coaches, setCoaches] = useState<Coach[]>([])
  const [notes, setNotes] = useState<WeeklyNote[]>([])
  const [form, setForm] = useState<any>({ effort: 'Good' })

  useEffect(() => {
    load()
  }, [])

  async function getAssignedTeamIds(currentCoachId: string) {
    const { data } = await supabase
      .from('coach_teams')
      .select('team_id')
      .eq('coach_id', currentCoachId)

    return (data || []).map((x: any) => x.team_id)
  }

  async function load() {
    const { data: userData } = await supabase.auth.getUser()
    const user = userData.user
    if (!user) return

    const { data: p } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    setProfile(p)

    let currentCoachId: string | null = null
    let teamIds: string[] = []

    if (p?.role === 'coach') {
      const { data: coach } = await supabase
        .from('coaches')
        .select('*')
        .eq('profile_id', user.id)
        .single()

      currentCoachId = coach?.id || null
      setCoachId(currentCoachId)

      if (currentCoachId) {
        teamIds = await getAssignedTeamIds(currentCoachId)
      }
    }

    let athletesQuery = supabase
      .from('athletes')
      .select('*,teams(name),levels(name),coaches(full_name)')
      .order('first_name')

    if (p?.role === 'coach') {
      athletesQuery = athletesQuery.in('team_id', teamIds.length ? teamIds : [EMPTY_UUID])
    }

    let notesQuery = supabase
      .from('weekly_notes')
      .select('*,athletes(first_name,last_name,team_id),coaches(full_name)')
      .order('week_start_date', { ascending: false })

    if (p?.role === 'coach') {
      notesQuery = notesQuery.in('athletes.team_id', teamIds.length ? teamIds : [EMPTY_UUID])
    }

    const [{ data: a }, { data: c }, { data: n }] = await Promise.all([
      athletesQuery,
      supabase.from('coaches').select('*').order('full_name'),
      notesQuery,
    ])

    setAthletes(a || [])
    setCoaches(c || [])
    setNotes(n || [])

    if (p?.role === 'coach' && currentCoachId) {
      setForm((old: any) => ({ ...old, coach_id: currentCoachId }))
    }
  }

  async function add(e: React.FormEvent) {
    e.preventDefault()

    const payload = {
      ...form,
      coach_id: profile?.role === 'coach' ? coachId : form.coach_id || null,
    }

    await supabase.from('weekly_notes').insert(payload)

    setForm(
      profile?.role === 'coach'
        ? { effort: 'Good', coach_id: coachId }
        : { effort: 'Good' }
    )

    load()
  }

  async function del(id: string) {
    if (!confirm('Delete note?')) return
    await supabase.from('weekly_notes').delete().eq('id', id)
    load()
  }

  return (
    <AppShell>
      <h1 className="title">Weekly Notes</h1>
      <p className="muted">Coach note, effort, attendance, correction and next focus.</p>

      <div className="card mb">
        <form onSubmit={add} className="form-grid">
          <label>
            Athlete
            <select
              required
              value={form.athlete_id || ''}
              onChange={(e) => setForm({ ...form, athlete_id: e.target.value })}
            >
              <option value="">Choose</option>
              {athletes.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.first_name} {a.last_name} {a.teams?.name ? `- ${a.teams.name}` : ''}
                </option>
              ))}
            </select>
          </label>

          {profile?.role === 'admin' && (
            <label>
              Coach
              <select
                value={form.coach_id || ''}
                onChange={(e) => setForm({ ...form, coach_id: e.target.value || null })}
              >
                <option value="">Choose</option>
                {coaches.map((c) => (
                  <option key={c.id} value={c.id}>{c.full_name}</option>
                ))}
              </select>
            </label>
          )}

          <label>
            Week start date
            <input
              required
              type="date"
              value={form.week_start_date || ''}
              onChange={(e) => setForm({ ...form, week_start_date: e.target.value })}
            />
          </label>

          <label>
            Attendance
            <input
              placeholder="3/3"
              value={form.attendance || ''}
              onChange={(e) => setForm({ ...form, attendance: e.target.value })}
            />
          </label>

          <label>
            Effort
            <select
              value={form.effort || 'Good'}
              onChange={(e) => setForm({ ...form, effort: e.target.value })}
            >
              {['Low', 'Good', 'Very Good', 'Excellent'].map((x) => (
                <option key={x}>{x}</option>
              ))}
            </select>
          </label>

          <label>
            Best improvement
            <textarea value={form.improvement || ''} onChange={(e) => setForm({ ...form, improvement: e.target.value })} />
          </label>

          <label>
            Main correction
            <textarea value={form.correction || ''} onChange={(e) => setForm({ ...form, correction: e.target.value })} />
          </label>

          <label>
            Next week focus
            <textarea value={form.next_focus || ''} onChange={(e) => setForm({ ...form, next_focus: e.target.value })} />
          </label>

          <label style={{ gridColumn: '1/-1' }}>
            Coach note
            <textarea value={form.note || ''} onChange={(e) => setForm({ ...form, note: e.target.value })} />
          </label>

          <button className="btn">Save Weekly Note</button>
        </form>
      </div>

      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Athlete</th>
            <th>Coach</th>
            <th>Effort</th>
            <th>Next Focus</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {notes.map((n) => (
            <tr key={n.id}>
              <td>{n.week_start_date}</td>
              <td>{n.athletes?.first_name} {n.athletes?.last_name}</td>
              <td>{n.coaches?.full_name || '-'}</td>
              <td>{n.effort || '-'}</td>
              <td>{n.next_focus || '-'}</td>
              <td>
                <button className="btn danger" onClick={() => del(n.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AppShell>
  )
}
