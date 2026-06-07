export type Role = 'admin' | 'coach' | 'parent'

export type SkillStatus =
  | 'not_started'
  | 'learning'
  | 'almost'
  | 'achieved'
  | 'excellent'

export type Profile = {
  id: string
  email: string | null
  full_name: string | null
  role: Role
  created_at: string
}

export type Athlete = {
  id: string
  first_name: string
  last_name: string
  birth_date: string | null

  team_id: string | null
  level_id: string | null
  coach_id: string | null

  program_id: string | null
  program_level_id: string | null

  parent_name: string | null
  parent_phone: string | null

  created_at: string

  teams?: {
    name: string
  } | null

  levels?: {
    name: string
  } | null

  coaches?: {
    full_name: string
  } | null

  programs?: {
    name: string
  } | null

  program_levels?: {
    name: string
  } | null
}

export type Coach = {
  id: string
  profile_id: string | null
  full_name: string
  phone: string | null
  created_at: string
}

export type Team = {
  id: string
  name: string
  age_group: string | null
  level_name: string | null
  created_at: string
}

export type Level = {
  id: string
  name: string
  description: string | null
  created_at: string
}

export type Skill = {
  id: string
  level_id: string
  apparatus: string
  skill_name: string
  order_number: number | null
  created_at: string
}

export type RoutineElement = {
  id: string
  level_id: string
  apparatus: string
  element_name: string
  order_number: number | null
  element_type: string
  is_required: boolean
}

export type WeeklyNote = {
  id: string
  athlete_id: string
  coach_id: string | null

  week_start_date: string

  attendance: string | null
  effort: string | null

  improvement: string | null
  correction: string | null
  next_focus: string | null

  note: string | null

  created_at: string

  athletes?: {
    first_name: string
    last_name: string
  } | null

  coaches?: {
    full_name: string
  } | null
}
