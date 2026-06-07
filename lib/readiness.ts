import { supabase } from './supabaseClient'

export type ReadinessRow = {
  athlete_id: string
  athlete_name: string
  team_id: string | null
  team_name: string | null
  coach_id: string | null
  coach_name: string | null
  program_name: string | null
  level_name: string | null
  program_level_id: string | null
  total_skills: number
  achieved_skills: number
  almost_skills: number
  not_achieved_skills: number
  readiness: number
}

export async function getAthleteReadinessRows(teamIds?: string[]) {
  let athletesQuery = supabase
    .from('athletes')
    .select('id,first_name,last_name,team_id,coach_id,program_level_id,teams(name),coaches(full_name),programs(name),program_levels(name)')
    .order('first_name')

  if (teamIds?.length) athletesQuery = athletesQuery.in('team_id', teamIds)

  const { data: athletes, error: athleteError } = await athletesQuery
  if (athleteError) throw athleteError

  const levelIds = Array.from(new Set((athletes || []).map((a: any) => a.program_level_id).filter(Boolean)))
  const athleteIds = (athletes || []).map((a: any) => a.id)

  const [{ data: elements, error: elementsError }, { data: progress, error: progressError }] = await Promise.all([
    levelIds.length
      ? supabase.from('routine_elements').select('id,level_id').in('level_id', levelIds)
      : Promise.resolve({ data: [], error: null } as any),
    athleteIds.length
      ? supabase.from('athlete_element_progress').select('athlete_id,element_id,status').in('athlete_id', athleteIds)
      : Promise.resolve({ data: [], error: null } as any),
  ])

  if (elementsError) throw elementsError
  if (progressError) throw progressError

  const elementsByLevel: Record<string, any[]> = {}
  ;(elements || []).forEach((el: any) => {
    if (!elementsByLevel[el.level_id]) elementsByLevel[el.level_id] = []
    elementsByLevel[el.level_id].push(el)
  })

  const progressByAthleteElement: Record<string, string> = {}
  ;(progress || []).forEach((p: any) => {
    progressByAthleteElement[`${p.athlete_id}:${p.element_id}`] = p.status || 'not_achieved'
  })

  return (athletes || []).map((a: any) => {
    const levelElements = a.program_level_id ? elementsByLevel[a.program_level_id] || [] : []
    const total = levelElements.length
    const achieved = levelElements.filter((el: any) => progressByAthleteElement[`${a.id}:${el.id}`] === 'achieved').length
    const almost = levelElements.filter((el: any) => progressByAthleteElement[`${a.id}:${el.id}`] === 'almost').length
    const notAchieved = Math.max(total - achieved - almost, 0)
    const readiness = total ? Math.round((achieved / total) * 100) : 0

    return {
      athlete_id: a.id,
      athlete_name: `${a.first_name || ''} ${a.last_name || ''}`.trim(),
      team_id: a.team_id,
      team_name: a.teams?.name || null,
      coach_id: a.coach_id,
      coach_name: a.coaches?.full_name || null,
      program_name: a.programs?.name || null,
      level_name: a.program_levels?.name || null,
      program_level_id: a.program_level_id,
      total_skills: total,
      achieved_skills: achieved,
      almost_skills: almost,
      not_achieved_skills: notAchieved,
      readiness,
    } satisfies ReadinessRow
  })
}
