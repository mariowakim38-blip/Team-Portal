export type Apparatus = 'Vault' | 'Uneven Bars' | 'Beam' | 'Floor'

export type UsagDeductionRule = {
  id: string
  apparatus: Apparatus
  level: string
  skill: string
  issue: string
  metric: string
  small: number
  medium: number
  large: number
  correction: string
}

export const USAG_AI_RULES: UsagDeductionRule[] = [
  {
    id: 'bb-handstand-line',
    apparatus: 'Beam',
    level: 'all',
    skill: 'Handstand / vertical support',
    issue: 'Body not aligned or not vertical',
    metric: 'Shoulder-hip-ankle line and vertical angle',
    small: 0.1,
    medium: 0.2,
    large: 0.3,
    correction: 'Push tall through shoulders, squeeze ribs in, keep hips stacked over hands.',
  },
  {
    id: 'bb-leap-split',
    apparatus: 'Beam',
    level: 'all',
    skill: 'Leap / jump split shape',
    issue: 'Insufficient split angle',
    metric: 'Hip-to-leg angle target for the level requirement',
    small: 0.1,
    medium: 0.2,
    large: 0.3,
    correction: 'Increase front-leg lift, back-leg extension, and active hip opening.',
  },
  {
    id: 'bb-balance-break',
    apparatus: 'Beam',
    level: 'all',
    skill: 'Beam balance element',
    issue: 'Balance correction / wobble',
    metric: 'Visible torso sway, extra arm swing, foot adjustment',
    small: 0.1,
    medium: 0.2,
    large: 0.3,
    correction: 'Hold finish position, eyes forward, control arms before continuing.',
  },
  {
    id: 'fx-leap-split',
    apparatus: 'Floor',
    level: 'all',
    skill: 'Leap / split jump',
    issue: 'Insufficient split angle',
    metric: 'Split angle and leg extension',
    small: 0.1,
    medium: 0.2,
    large: 0.3,
    correction: 'Drive through the takeoff foot and lift both legs actively before landing.',
  },
  {
    id: 'fx-landing-control',
    apparatus: 'Floor',
    level: 'all',
    skill: 'Acro landing',
    issue: 'Step / hop / uncontrolled landing',
    metric: 'Landing displacement and body control',
    small: 0.1,
    medium: 0.2,
    large: 0.3,
    correction: 'Absorb through knees, chest lifted, stick for one full second.',
  },
  {
    id: 'general-bent-knees',
    apparatus: 'Beam',
    level: 'all',
    skill: 'General form',
    issue: 'Bent knees',
    metric: 'Knee angle during straight-leg skills',
    small: 0.1,
    medium: 0.2,
    large: 0.3,
    correction: 'Tight quads and pointed toes before initiating the skill.',
  },
  {
    id: 'general-bent-arms',
    apparatus: 'Beam',
    level: 'all',
    skill: 'Support / acro element',
    issue: 'Bent arms',
    metric: 'Elbow angle during support phase',
    small: 0.1,
    medium: 0.2,
    large: 0.3,
    correction: 'Lock elbows and push through the floor/beam before kicking through.',
  },
  {
    id: 'fx-bent-knees',
    apparatus: 'Floor',
    level: 'all',
    skill: 'General form',
    issue: 'Bent knees',
    metric: 'Knee angle during jumps, leaps, or acro',
    small: 0.1,
    medium: 0.2,
    large: 0.3,
    correction: 'Finish leg extension earlier and keep toes pointed through the landing.',
  },
]

export function rulesFor(apparatus: Apparatus) {
  return USAG_AI_RULES.filter((rule) => rule.apparatus === apparatus || rule.id.startsWith('general'))
}

export function scoreFromDeductions(deductions: { value: number }[]) {
  const total = deductions.reduce((sum, d) => sum + Number(d.value || 0), 0)
  return Math.max(0, Math.round((10 - total) * 100) / 100)
}
