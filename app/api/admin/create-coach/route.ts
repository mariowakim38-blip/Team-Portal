import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const fullName = String(body.full_name || '').trim()
    const username = String(body.username || '')
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9._-]/g, '')
    const password = String(body.password || '')
    const phone = body.phone ? String(body.phone).trim() : null

    if (!fullName) return NextResponse.json({ error: 'Full name is required.' }, { status: 400 })
    if (!username) return NextResponse.json({ error: 'Username is required.' }, { status: 400 })
    if (password.length < 6) return NextResponse.json({ error: 'Password must be at least 6 characters.' }, { status: 400 })

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        { error: 'Missing SUPABASE_SERVICE_ROLE_KEY in Vercel environment variables.' },
        { status: 500 }
      )
    }

    const admin = createClient(supabaseUrl, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    })

    const email = `${username}@gymnest.local`

    const { data: existingCoach } = await admin
      .from('coaches')
      .select('id')
      .eq('username', username)
      .maybeSingle()

    if (existingCoach) {
      return NextResponse.json({ error: 'This username is already used by another coach.' }, { status: 409 })
    }

    const { data: createdUser, error: userError } = await admin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        full_name: fullName,
        username,
        role: 'coach',
      },
    })

    if (userError || !createdUser.user) {
      return NextResponse.json({ error: userError?.message || 'Could not create login account.' }, { status: 400 })
    }

    const userId = createdUser.user.id

    const { error: profileError } = await admin.from('profiles').upsert({
      id: userId,
      email,
      username,
      full_name: fullName,
      role: 'coach',
    })

    if (profileError) {
      await admin.auth.admin.deleteUser(userId)
      return NextResponse.json({ error: profileError.message }, { status: 400 })
    }

    const { error: coachError } = await admin.from('coaches').insert({
      profile_id: userId,
      full_name: fullName,
      username,
      phone,
    })

    if (coachError) {
      await admin.auth.admin.deleteUser(userId)
      return NextResponse.json({ error: coachError.message }, { status: 400 })
    }

    return NextResponse.json({ success: true, username, email })
  } catch (error: any) {
    return NextResponse.json({ error: error?.message || 'Unknown error.' }, { status: 500 })
  }
}
