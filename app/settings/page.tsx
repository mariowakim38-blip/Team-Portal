'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AppShell from '@/components/AppShell'
import { getCurrentUserProfile } from '@/lib/roleAccess'

export default function Settings() {
  const router = useRouter()
  const [allowed, setAllowed] = useState(false)

  useEffect(() => { load() }, [])

  async function load() {
    const { user, profile } = await getCurrentUserProfile()
    if (!user) return router.push('/login')
    if (profile?.role !== 'admin') return router.push('/dashboard')
    setAllowed(true)
  }

  if (!allowed) return null

  return <AppShell><h1 className="title">Settings</h1><div className="card"><p>Only admin users can access settings.</p></div></AppShell>
}
