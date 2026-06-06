import { supabase } from '@/lib/supabaseClient'

export const EMPTY_UUID = '00000000-0000-0000-0000-000000000000'

export async function getCurrentUserProfile() {
  const { data: userData } = await supabase.auth.getUser()
  const user = userData.user

  if (!user) {
    return { user: null, profile: null, coach: null, teamIds: [] as string[] }
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  let coach: any = null
  let teamIds: string[] = []

  if (profile?.role === 'coach') {
    const { data: coachData } = await supabase
      .from('coaches')
      .select('*')
      .eq('profile_id', user.id)
      .single()

    coach = coachData || null

    if (coach?.id) {
      const { data: assignedTeams } = await supabase
        .from('coach_teams')
        .select('team_id')
        .eq('coach_id', coach.id)

      teamIds = (assignedTeams || []).map((x: any) => x.team_id)
    }
  }

  return { user, profile, coach, teamIds }
}
