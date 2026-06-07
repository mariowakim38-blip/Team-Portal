export type ApparatusName = 'Vault' | 'Bars' | 'Beam' | 'Floor' | 'Physical Preparation'

export function apparatusLabel(apparatus: string) {
  if (apparatus === 'Bars') return 'Uneven Bars'
  if (apparatus === 'Physical Preparation') return 'Physical Prep'
  return apparatus
}

export default function ApparatusIcon({ apparatus, className = '' }: { apparatus: string; className?: string }) {
  const key = apparatus === 'Uneven Bars' ? 'Bars' : apparatus

  return (
    <span className={`apparatus-icon-svg ${className}`} aria-hidden="true">
      {key === 'Vault' && <VaultIcon />}
      {key === 'Beam' && <BeamIcon />}
      {key === 'Floor' && <FloorIcon />}
      {key === 'Bars' && <BarsIcon />}
      {key === 'Physical Preparation' && <PhysicalIcon />}
      {!['Vault', 'Beam', 'Floor', 'Bars', 'Physical Preparation'].includes(key) && <PhysicalIcon />}
    </span>
  )
}

function VaultIcon() {
  return (
    <svg viewBox="0 0 96 72" role="img">
      <path className="icon-line-white" d="M15 25 C35 25 47 25 61 31 C68 34 74 39 81 47 L50 47 C39 41 27 34 15 25 Z" />
      <path className="icon-fill-blue" d="M44 40 L57 45 L45 62 L26 62 Z" />
      <path className="icon-line-blue" d="M16 62 H79" />
    </svg>
  )
}

function BeamIcon() {
  return (
    <svg viewBox="0 0 96 72" role="img">
      <path className="icon-line-white icon-line-thick" d="M20 28 H76" />
      <path className="icon-line-blue" d="M30 31 L24 62 H40 L34 31" />
      <path className="icon-line-blue" d="M66 31 L72 62 H56 L62 31" />
      <path className="icon-line-blue" d="M18 62 H78" />
    </svg>
  )
}

function FloorIcon() {
  return (
    <svg viewBox="0 0 96 72" role="img">
      <path className="icon-line-blue icon-line-thick" d="M18 55 H78 L66 28 H30 Z" />
      <path className="icon-line-white" d="M26 49 H70 L62 34 H34 Z" />
    </svg>
  )
}

function BarsIcon() {
  return (
    <svg viewBox="0 0 96 72" role="img">
      <path className="icon-line-white icon-line-thick" d="M22 16 H58" />
      <path className="icon-line-white icon-line-thick" d="M42 37 H80" />
      <path className="icon-line-blue" d="M24 18 V62" />
      <path className="icon-line-blue" d="M56 18 V62" />
      <path className="icon-line-blue" d="M44 39 V62" />
      <path className="icon-line-blue" d="M78 39 V62" />
      <path className="icon-line-blue" d="M16 62 H86" />
      <path className="icon-line-blue" d="M24 62 L34 49" />
      <path className="icon-line-blue" d="M56 62 L48 49" />
      <path className="icon-line-blue" d="M44 62 L32 52" />
      <path className="icon-line-blue" d="M78 62 L67 52" />
    </svg>
  )
}

function PhysicalIcon() {
  return (
    <svg viewBox="0 0 96 72" role="img">
      <circle className="icon-line-blue" cx="48" cy="18" r="8" />
      <path className="icon-line-white" d="M48 27 V47" />
      <path className="icon-line-blue" d="M30 36 H66" />
      <path className="icon-line-blue" d="M48 47 L34 62" />
      <path className="icon-line-blue" d="M48 47 L62 62" />
    </svg>
  )
}
