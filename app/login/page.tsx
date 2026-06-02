'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function Login() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const cleanUsername = username.trim().toLowerCase()
    const email = `${cleanUsername}@gymnest.local`

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setError('Wrong username or password')
      return
    }

    router.push('/dashboard')
  }

  return (
    <div className="login-page">
      <div className="card login-card">
        <h1 className="title">Gymnest Team Portal</h1>
        <p className="muted">Login as admin or coach.</p>

        <form onSubmit={submit}>
          <label>
            Username
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              required
              placeholder="admin or coach1"
            />
          </label>

          <div className="mt">
            <label>
              Password
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
              />
            </label>
          </div>

          {error && <p style={{ color: 'var(--danger)' }}>{error}</p>}

          <button className="btn mt" disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  )
}
