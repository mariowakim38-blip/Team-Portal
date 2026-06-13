'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

const adminLinks = [
  ['/dashboard', 'Dashboard'],
  ['/athletes', 'Athletes'],
  ['/teams', 'Teams'],
  ['/coaches', 'Coaches'],
  ['/levels', 'Levels & Skills'],
  ['/fig-elite', 'FIG Elite Builder'],
  ['/weekly-notes', 'Weekly Notes'],
  ['/reports', 'Reports'],
  ['/settings', 'Settings'],
]

const coachLinks = [
  ['/dashboard', 'Dashboard'],
  ['/athletes', 'My Athletes'],
  ['/teams', 'My Teams'],
  ['/levels', 'Levels & Skills'],
  ['/fig-elite', 'FIG Elite Builder'],
  ['/weekly-notes', 'Weekly Notes'],
  ['/reports', 'Reports'],
]

export default function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [role, setRole] = useState<string>('coach')

  useEffect(() => {
    loadRole()
  }, [])

  async function loadRole() {
    const { data: userData } = await supabase.auth.getUser()
    const user = userData.user
    if (!user) return router.push('/login')

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    setRole(profile?.role || 'coach')
  }

  async function logout() {
    await supabase.auth.signOut()
    router.push('/login')
  }

  const links = role === 'admin' ? adminLinks : coachLinks

  return (
    <aside className="sidebar">
      <div className="brand brand-logo-only">
        <img src="/gymtrack-logo-final.png" alt="GymTrack" className="sidebar-logo sidebar-wordmark" />
      </div>

      <nav className="nav">
        {links.map(([href, label]) => (
          <Link key={href} href={href} className={pathname === href ? 'active' : ''}>
            {label}
          </Link>
        ))}

        <button className="btn secondary mt" onClick={logout}>
          Logout
        </button>
      </nav>
    </aside>
  )
}
