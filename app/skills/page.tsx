'use client'

import Link from 'next/link'
import AppShell from '@/components/AppShell'

export default function SkillsPage() {
  return (
    <AppShell>
      <div className="topbar">
        <div>
          <h1 className="title">3D Skills</h1>
          <p className="muted">GymTrack SkillVision directory. First prototype: handstand 3D trial.</p>
        </div>
      </div>

      <div className="card skill-card-list">
        <Link href="/skills/handstand" className="skill-card-link">
          <div>
            <p className="eyebrow">Prototype</p>
            <h2>Handstand 3D Trial</h2>
            <p className="muted">Open the first 3D skill viewer with rotate and zoom controls.</p>
          </div>
          <span className="btn">Open viewer</span>
        </Link>
      </div>
    </AppShell>
  )
}
