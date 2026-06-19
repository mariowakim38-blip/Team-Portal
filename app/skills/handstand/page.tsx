'use client'

import AppShell from '@/components/AppShell'
import HandstandTrial from '@/components/viewer3d/HandstandTrial'

export default function HandstandPage() {
  return (
    <AppShell>
      <div className="topbar">
        <div>
          <h1 className="title">Handstand 3D Trial</h1>
          <p className="muted">GymTrack SkillVision prototype: rotate, zoom, and inspect the handstand line.</p>
        </div>
      </div>

      <div className="grid-2 skillvision-grid">
        <section className="card">
          <h2>3D Viewer</h2>
          <HandstandTrial />
        </section>

        <section className="card skill-detail-panel">
          <h2>Skill Breakdown</h2>
          <div className="pill-row">
            <span className="pill">WAG</span>
            <span className="pill">Floor / Beam</span>
            <span className="pill">Foundation</span>
          </div>

          <h3>Technical focus</h3>
          <ul className="clean-list">
            <li>Straight arms pushing tall through the shoulders.</li>
            <li>Open shoulder angle with ribs in and hollow body line.</li>
            <li>Hips stacked above shoulders and hands.</li>
            <li>Legs straight, tight, and together.</li>
            <li>Controlled entry and controlled step-down.</li>
          </ul>

          <h3>Common deductions / corrections</h3>
          <ul className="clean-list">
            <li>Bent elbows → shoulder strength and wall holds.</li>
            <li>Closed shoulders → handstand line drill with panel mat.</li>
            <li>Arching back → hollow body and rib-control work.</li>
            <li>Leg separation → squeeze block between feet.</li>
          </ul>
        </section>
      </div>
    </AppShell>
  )
}
