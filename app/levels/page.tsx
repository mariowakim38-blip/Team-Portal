'use client'

import { useEffect, useState } from 'react'
import AppShell from '@/components/AppShell'
import { supabase } from '@/lib/supabaseClient'
import type { Level, Skill, Athlete, Profile } from '@/lib/types'

const statuses = [
  ['not_started', 'Not started'],
  ['learning', 'Learning'],
  ['almost', 'Almost'],
  ['achieved', 'Achieved'],
  ['excellent', 'Excellent'],
]

export default function Levels() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [coachId, setCoachId] = useState<string | null>(null)
  const [levels, setLevels] = useState<Level[]>([])
  const [skills, setSkills] = useState<Skill[]>([])
  const [athletes, setAthletes] = useState<Athlete[]>([])
  const [levelForm, setLevelForm] = useState<any>({})
  const [skillForm, setSkillForm] = useState<any>({ apparatus: 'Floor' })
  const [selectedAthlete, setSelectedAthlete] = useState('')
  const [athleteSkills, setAthleteSkills] = useState<Record<string, string>>({})

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    loadAthleteSkills()
  }, [selectedAthlete])

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

    if (p?.role === 'coach') {
      const { data: coach } = await supabase
        .from('coaches')
        .select('*')
        .eq('profile_id', user.id)
        .single()

      currentCoachId = coach?.id || null
      setCoachId(currentCoachId)
    }

    const athletesQuery = supabase
      .from('athletes')
      .select('*')
      .order('first_name')

    if (p?.role === 'coach' && currentCoachId) {
      athletesQuery.eq('coach_id', currentCoachId)
    }

    const [{ data: l }, { data: s }, { data: a }] = await Promise.all([
      supabase.from('levels').select('*').order('name'),
      supabase.from('skills').select('*').order('apparatus').order('order_number'),
      athletesQuery,
    ])

    setLevels(l || [])
    setSkills(s || [])
    setAthletes(a || [])
  }

  async function addLevel(e: React.FormEvent) {
    e.preventDefault()
    if (profile?.role !== 'admin') return alert('Only admin can add levels.')

    await supabase.from('levels').insert(levelForm)
    setLevelForm({})
    load()
  }

  async function addSkill(e: React.FormEvent) {
    e.preventDefault()
    if (profile?.role !== 'admin') return alert('Only admin can add skills.')

    await supabase.from('skills').insert(skillForm)
    setSkillForm({ apparatus: 'Floor' })
    load()
  }

  async function loadAthleteSkills() {
    if (!selectedAthlete) return

    const { data } = await supabase
      .from('athlete_skills')
      .select('skill_id,status')
      .eq('athlete_id', selectedAthlete)

    const map: Record<string, string> = {}
    ;(data || []).forEach((x: any) => (map[x.skill_id] = x.status))

    setAthleteSkills(map)
  }

  async function updateSkill(skillId: string, status: string) {
    if (!selectedAthlete) return alert('Choose athlete first')

    const { data: userData } = await supabase.auth.getUser()
    const user = userData.user

    await supabase.from('athlete_skills').upsert(
      {
        athlete_id: selectedAthlete,
        skill_id: skillId,
        status,
        updated_by: user?.id || null,
      },
      { onConflict: 'athlete_id,skill_id' }
    )

    setAthleteSkills({ ...athleteSkills, [skillId]: status })
  }

  return (
    <AppShell>
      <h1 className="title">Levels & Skills</h1>

      {profile?.role === 'admin' && (
        <div className="grid-2 mb">
          <div className="card">
            <h2>Add Level</h2>
            <form onSubmit={addLevel}>
              <label>
                Level name
                <input
                  required
                  placeholder="Level 1"
                  value={levelForm.name || ''}
                  onChange={(e) => setLevelForm({ ...levelForm, name: e.target.value })}
                />
              </label>

              <label>
                Description
                <textarea
                  value={levelForm.description || ''}
                  onChange={(e) =>
                    setLevelForm({ ...levelForm, description: e.target.value })
                  }
                />
              </label>

              <button className="btn mt">Add Level</button>
            </form>
          </div>

          <div className="card">
            <h2>Add Skill</h2>
            <form onSubmit={addSkill} className="form-grid">
              <label>
                Level
                <select
                  required
                  value={skillForm.level_id || ''}
                  onChange={(e) => setSkillForm({ ...skillForm, level_id: e.target.value })}
                >
                  <option value="">Choose</option>
                  {levels.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.name}
                    </option>
                  ))}
                </select>
              </label>

              <label>
                Apparatus
                <select
                  value={skillForm.apparatus || 'Floor'}
                  onChange={(e) => setSkillForm({ ...skillForm, apparatus: e.target.value })}
                >
                  {['Floor', 'Beam', 'Bars', 'Vault', 'Conditioning', 'Flexibility'].map(
                    (x) => (
                      <option key={x}>{x}</option>
                    )
                  )}
                </select>
              </label>

              <label>
                Skill name
                <input
                  required
                  value={skillForm.skill_name || ''}
                  onChange={(e) => setSkillForm({ ...skillForm, skill_name: e.target.value })}
                />
              </label>

              <label>
                Order
                <input
                  type="number"
                  value={skillForm.order_number || ''}
                  onChange={(e) =>
                    setSkillForm({ ...skillForm, order_number: Number(e.target.value) })
                  }
                />
              </label>

              <button className="btn">Add Skill</button>
            </form>
          </div>
        </div>
      )}

      <div className="card mb">
        <label>
          Update skills for athlete
          <select
            value={selectedAthlete}
            onChange={(e) => setSelectedAthlete(e.target.value)}
          >
            <option value="">Choose athlete</option>
            {athletes.map((a) => (
              <option key={a.id} value={a.id}>
                {a.first_name} {a.last_name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <table>
        <thead>
          <tr>
            <th>Level</th>
            <th>Apparatus</th>
            <th>Skill</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {skills.map((s) => (
            <tr key={s.id}>
              <td>{levels.find((l) => l.id === s.level_id)?.name || '-'}</td>
              <td>
                <span className="badge">{s.apparatus}</span>
              </td>
              <td>{s.skill_name}</td>
              <td>
                <select
                  value={athleteSkills[s.id] || 'not_started'}
                  onChange={(e) => updateSkill(s.id, e.target.value)}
                >
                  {statuses.map(([v, l]) => (
                    <option key={v} value={v}>
                      {l}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AppShell>
  )
}
