export type Apparatus = 'Vault' | 'Uneven Bars' | 'Bars' | 'Beam' | 'Floor'

export type UsagDeductionRule = {
  id: string
  level_name: string
  apparatus: Apparatus
  element_name: string
  textbook_fault: string
  deduction_min: number
  deduction_max: number
  default_value: number
  measurement_target: string
  correction_focus: string
  source_note: string
}

export type RoutineElementLite = {
  element_name: string
  apparatus: string
}

function levelMatch(ruleLevel: string, athleteLevel?: string | null) {
  const r = (ruleLevel || '').toLowerCase().trim()
  const l = (athleteLevel || '').toLowerCase().trim()
  return r === 'all' || !l || r === l || l.endsWith(r.replace('usag ', ''))
}

function normText(value: string) {
  return (value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim()
}

function elementMatch(ruleElement: string, routineElement: string) {
  const a = normText(ruleElement)
  const b = normText(routineElement)
  if (!a || !b) return false
  return a === b || a.includes(b) || b.includes(a)
}

export const USAG_TEXTBOOK_FALLBACK_RULES: UsagDeductionRule[] = [
  // Level 1 Beam
  r('usag-l1-bb-mount-support', 'USAG Level 1', 'Beam', 'Jump to front support mount', 'Bent arms or failure to show support shape', 0.05, 0.30, 0.10, 'Elbow extension and straight body front-support shape', 'Push tall through straight arms and show a tight hollow support before continuing.'),
  r('usag-l1-bb-vsit', 'USAG Level 1', 'Beam', 'Single leg V-sit / tuck stand / pike stand', 'Insufficient control or poor body position', 0.05, 0.30, 0.10, 'Trunk posture, leg extension, and balance control', 'Slow the transition, keep the chest lifted, and show the intended body shape.'),
  r('usag-l1-bb-releve', 'USAG Level 1', 'Beam', 'Relevé lock stand', 'Relevé not sustained or posture breaks', 0.05, 0.20, 0.10, 'Foot rise, body alignment, and hold', 'Press through the toes and hold a tall lock stand without wobble.'),
  r('usag-l1-bb-passe-balance', 'USAG Level 1', 'Beam', 'Forward passé balance', 'Loss of balance or incorrect passé shape', 0.05, 0.30, 0.10, 'Passé leg position, body alignment, and balance hold', 'Keep hips square, toe to knee, eyes forward, and finish before stepping.'),
  r('usag-l1-bb-stretch-jump', 'USAG Level 1', 'Beam', 'Stretch jump', 'Insufficient height, body tension, or landing control', 0.05, 0.30, 0.10, 'Straight body line, pointed feet, and controlled landing', 'Jump with tight body extension and land in control without extra arm swing.'),
  r('usag-l1-bb-arabesque', 'USAG Level 1', 'Beam', 'Arabesque', 'Arabesque leg too low or torso/posture breaks', 0.05, 0.30, 0.10, 'Back leg height and square hips', 'Lift the back leg from the glute while keeping chest and hips controlled.'),
  r('usag-l1-bb-cartwheel-dismount', 'USAG Level 1', 'Beam', 'Cartwheel to 3/4 handstand dismount', 'Bent arms/knees, poor handstand line, or uncontrolled landing', 0.05, 0.50, 0.20, 'Arm angle, body line through inverted phase, and landing control', 'Lock arms, stretch through the hips, and finish the landing with no step.'),
  // Level 1 Floor
  r('usag-l1-fx-cartwheel', 'USAG Level 1', 'Floor', 'Cartwheel', 'Bent arms/knees or incorrect body alignment', 0.05, 0.30, 0.10, 'Elbow/knee extension and straight line through hand support', 'Reach long through the hands, split the legs evenly, and keep knees straight.'),
  r('usag-l1-fx-back-roll', 'USAG Level 1', 'Floor', 'Backward roll tucked', 'Incomplete roll shape or poor hand placement', 0.05, 0.30, 0.10, 'Tuck shape, head position, and push through hands', 'Round the back, keep chin tucked, and press strongly through the hands.'),
  r('usag-l1-fx-forward-roll', 'USAG Level 1', 'Floor', 'Forward roll tucked', 'Poor tuck shape, head placement, or loss of direction', 0.05, 0.30, 0.10, 'Tuck shape and continuous roll', 'Keep a round back and stand up without using the hands.'),
  r('usag-l1-fx-handstand', 'USAG Level 1', 'Floor', 'Handstand', 'Body not vertical, bent arms, or poor control', 0.05, 0.50, 0.20, 'Shoulder-hip-ankle vertical line and arm extension', 'Push tall through shoulders, ribs in, and finish with control.'),
  // Level 2 Beam/Floor
  r('usag-l2-bb-arabesque30', 'USAG Level 2', 'Beam', 'Arabesque 30 degrees', 'Arabesque below required height or balance correction', 0.05, 0.30, 0.10, 'Back leg height target 30° and torso control', 'Lift the back leg actively and hold the shape before lowering.'),
  r('usag-l2-bb-pivot-turn', 'USAG Level 2', 'Beam', 'Relevé lock stand with 180 pivot turn', 'Incomplete 180° turn or heel drop', 0.05, 0.30, 0.10, 'Turn completion and foot position in relevé', 'Spot the end position and maintain a tight vertical body during the pivot.'),
  r('usag-l2-bb-side-handstand-dismount', 'USAG Level 2', 'Beam', 'Cartwheel to side handstand dismount', 'Insufficient inverted line or uncontrolled landing', 0.05, 0.50, 0.20, 'Inverted side handstand shape and landing control', 'Reach long, show the side handstand line, and land with chest lifted.'),
  r('usag-l2-fx-turn', 'USAG Level 2', 'Floor', '180 heel-snap turn in forward passé', 'Incomplete 180° turn or incorrect passé shape', 0.05, 0.30, 0.10, 'Turn angle and passé leg position', 'Lift through the crown of the head, keep toe at knee, and finish the turn cleanly.'),
  r('usag-l2-fx-leap60', 'USAG Level 2', 'Floor', 'Straight leg leap 60 degrees', 'Insufficient leg separation or bent knees', 0.05, 0.30, 0.10, 'Split/leg separation target 60°', 'Drive the front leg up with both knees straight and toes pointed.'),
  r('usag-l2-fx-splitjump60', 'USAG Level 2', 'Floor', 'Split jump 60 degrees', 'Insufficient split or poor landing control', 0.05, 0.30, 0.10, 'Split target 60° and landing stability', 'Jump vertically first, split quickly, then close legs before landing.'),
  r('usag-l2-fx-bridgekickover', 'USAG Level 2', 'Floor', 'Bridge back kick-over', 'Bent arms, poor shoulder flexibility, or incomplete kick-over', 0.05, 0.50, 0.20, 'Shoulder angle, arm extension, and leg kick-over path', 'Open shoulders, push the floor away, and kick one leg strongly over the top.'),
  // Level 3 Beam/Floor
  r('usag-l3-bb-handstand', 'USAG Level 3', 'Beam', 'Handstand', 'Handstand not vertical, bent arms, or split/shape error', 0.05, 0.50, 0.20, 'Vertical line, shoulder angle, locked arms, and controlled step-down', 'Push tall through straight arms, stack shoulders over hands, and control the finish.'),
  r('usag-l3-bb-splitjump', 'USAG Level 3', 'Beam', 'Split jump', 'Insufficient split angle, bent legs, or uncontrolled landing', 0.05, 0.30, 0.10, 'Split angle, knee extension, pointed feet, and landing control', 'Lift both legs quickly, keep knees straight, and absorb landing without wobble.'),
  r('usag-l3-bb-pivot', 'USAG Level 3', 'Beam', 'Pivot turn', 'Incomplete pivot or balance correction', 0.05, 0.30, 0.10, 'Turn completion and balance control', 'Keep the body tall and complete the turn before lowering the heel.'),
  r('usag-l3-bb-side-handstand', 'USAG Level 3', 'Beam', 'Side handstand dismount', 'Insufficient side handstand line, bent arms/knees, or landing step', 0.05, 0.50, 0.20, 'Side handstand alignment and landing control', 'Reach long, open shoulders, stretch through toes, and finish the landing still.'),
  r('usag-l3-fx-handstand-forward-roll', 'USAG Level 3', 'Floor', 'Handstand forward roll', 'Handstand not vertical, bent arms, or collapsed roll', 0.05, 0.50, 0.20, 'Vertical handstand line and smooth roll-out', 'Show the handstand line before rolling and keep arms extended until the roll begins.'),
  r('usag-l3-fx-split-leap90', 'USAG Level 3', 'Floor', 'Split leap 90 degrees', 'Split below 90° or bent legs', 0.05, 0.30, 0.10, 'Split angle target 90°, straight knees, pointed feet', 'Drive the front leg higher and stretch the back leg actively before landing.'),
  r('usag-l3-fx-back-roll-pushup', 'USAG Level 3', 'Floor', 'Backward roll to push-up position', 'Poor hand placement, bent arms, or sagging support position', 0.05, 0.30, 0.10, 'Arm push, hollow body, and straight prone support finish', 'Push through straight arms and finish in a tight straight-body support.'),
  r('usag-l3-fx-bridge-kickover', 'USAG Level 3', 'Floor', 'Bridge kick-over', 'Poor shoulder opening, bent arms, or incomplete kick-over', 0.05, 0.50, 0.20, 'Shoulder flexibility and kick-over line', 'Open shoulders fully and kick the lead leg aggressively while pushing the floor.'),
  r('usag-l3-fx-roundoff-rebound', 'USAG Level 3', 'Floor', 'Round-off rebound', 'Bent arms/knees, poor snap-down, or uncontrolled rebound', 0.05, 0.50, 0.20, 'Hand placement, body line, snap-down speed, and rebound control', 'Reach long, block through shoulders, snap feet down fast, and rebound vertically.'),
  r('usag-l3-fx-turn180', 'USAG Level 3', 'Floor', '180 heel-snap turn', 'Incomplete 180° turn or posture break', 0.05, 0.30, 0.10, 'Turn completion and body alignment', 'Pull tall through the body and finish the turn before stepping.'),
  // Level 4 Beam/Floor
  r('usag-l4-bb-handstand', 'USAG Level 4', 'Beam', 'Handstand', 'Handstand below vertical, bent arms, or poor control', 0.05, 0.50, 0.20, 'Vertical handstand line and controlled finish', 'Kick to vertical with straight arms and show control before stepping down.'),
  r('usag-l4-bb-splitleap120', 'USAG Level 4', 'Beam', 'Split leap 120 degrees', 'Split below 120° or leg form error', 0.05, 0.30, 0.20, 'Split target 120°, knees straight, toes pointed', 'Increase front-leg amplitude and keep both legs extended through takeoff and landing.'),
  r('usag-l4-bb-cartwheel', 'USAG Level 4', 'Beam', 'Cartwheel', 'Bent arms/knees or off-line body position', 0.05, 0.50, 0.20, 'Cartwheel alignment on beam and body tension', 'Keep hands narrow on the beam line, lock arms, and split legs evenly.'),
  r('usag-l4-bb-jump-connection', 'USAG Level 4', 'Beam', 'Straight jump / split jump connection', 'Pause between jumps or insufficient split/body extension', 0.05, 0.30, 0.10, 'Connection rhythm, split angle, and body extension', 'Rebound directly into the second jump and finish with control.'),
  r('usag-l4-bb-turn180', 'USAG Level 4', 'Beam', '180 pivot turn', 'Incomplete turn or balance break', 0.05, 0.30, 0.10, '180° turn completion and balance', 'Rise high in relevé and complete the turn before lowering the heel.'),
  r('usag-l4-bb-dismount', 'USAG Level 4', 'Beam', 'Cartwheel to side handstand dismount', 'Poor side handstand line or uncontrolled landing', 0.05, 0.50, 0.20, 'Side handstand shape and controlled landing', 'Show a stretched side handstand line and land with chest lifted.'),
  r('usag-l4-fx-ro-bhs', 'USAG Level 4', 'Floor', 'Round-off back handspring series', 'Bent arms/knees, poor block, low flight, or landing step', 0.05, 0.50, 0.30, 'Round-off snap-down, back handspring shoulder angle, flight, landing', 'Snap down fast, jump back through tight shoulders, and finish with controlled rebound.'),
  r('usag-l4-fx-fhs-stepout', 'USAG Level 4', 'Floor', 'Front handspring step-out', 'Bent arms, arched body, low flight, or uncontrolled step-out', 0.05, 0.50, 0.20, 'Shoulder block, body line, and step-out control', 'Reach long, block through straight arms, and step out with the chest lifted.'),
  r('usag-l4-fx-back-extension-roll', 'USAG Level 4', 'Floor', 'Backward extension roll', 'Failure to show extended handstand phase or bent arms', 0.05, 0.50, 0.20, 'Open shoulder angle and straight body through extension', 'Push through shoulders and open to a straight-body vertical phase.'),
  r('usag-l4-fx-splitleap120', 'USAG Level 4', 'Floor', 'Split leap 120 degrees', 'Split below 120° or leg form error', 0.05, 0.30, 0.20, 'Split target 120° and straight knees', 'Use stronger run/chassé preparation and actively open both hips.'),
  r('usag-l4-fx-turn180', 'USAG Level 4', 'Floor', '180 turn in passé', 'Incomplete 180° turn or incorrect passé shape', 0.05, 0.30, 0.10, 'Turn completion and passé leg shape', 'Spot, keep hips square, and finish in a controlled passé.'),
  // Level 5 Beam/Floor
  r('usag-l5-bb-handstand-hold', 'USAG Level 5', 'Beam', 'Handstand hold', 'Handstand not held or body alignment error', 0.05, 0.50, 0.20, 'Hold time, vertical line, straight arms, and control', 'Kick to a stacked vertical position and hold before lowering.'),
  r('usag-l5-bb-back-walkover', 'USAG Level 5', 'Beam', 'Back walkover', 'Bent arms, poor shoulder angle, leg form error, or balance break', 0.05, 0.50, 0.30, 'Shoulder flexibility, split shape, and beam-line control', 'Open shoulders, push tall, and keep the split line directly over the beam.'),
  r('usag-l5-bb-cartwheel', 'USAG Level 5', 'Beam', 'Cartwheel', 'Bent arms/knees or off-line landing', 0.05, 0.50, 0.20, 'Body line and beam alignment', 'Keep the cartwheel narrow and finish on the beam line with control.'),
  r('usag-l5-bb-splitleap150', 'USAG Level 5', 'Beam', 'Split leap 150 degrees', 'Split below 150° or bent legs', 0.05, 0.30, 0.20, 'Split target 150°, knee extension, toe point', 'Lift the front leg early and stretch the back leg fully before landing.'),
  r('usag-l5-bb-turn', 'USAG Level 5', 'Beam', 'Full turn preparation / 180 turn', 'Incomplete turn or balance correction', 0.05, 0.30, 0.10, 'Turn degree and balance control', 'Keep the supporting side tall and finish the turn without dropping the heel early.'),
  r('usag-l5-fx-fhs-stepout', 'USAG Level 5', 'Floor', 'Front handspring step-out', 'Bent arms, poor block, low flight, or uncontrolled step-out', 0.05, 0.50, 0.20, 'Shoulder block, body line, and step-out control', 'Accelerate into the hurdle, block through straight arms, and step out long.'),
  r('usag-l5-fx-ro-bhs-bhs', 'USAG Level 5', 'Floor', 'Round-off back handspring back handspring', 'Bent arms/knees, rhythm break, low flight, or landing control error', 0.05, 0.50, 0.30, 'Series rhythm, shoulder angle, body line, rebound/landing', 'Snap down quickly and connect the handsprings without pause or piking.'),
  r('usag-l5-fx-back-extension-roll', 'USAG Level 5', 'Floor', 'Backward extension roll', 'No clear extended phase, bent arms, or poor body line', 0.05, 0.50, 0.20, 'Open shoulders and straight-body vertical phase', 'Push through the shoulders and keep the body tight through extension.'),
  r('usag-l5-fx-splitleap150', 'USAG Level 5', 'Floor', 'Split leap 150 degrees', 'Split below 150° or leg form error', 0.05, 0.30, 0.20, 'Split target 150°, straight knees, pointed toes', 'Drive the front leg high and extend the back hip before landing.'),
  r('usag-l5-fx-turn', 'USAG Level 5', 'Floor', 'Full turn preparation / 180 turn', 'Incomplete turn, posture break, or leg position error', 0.05, 0.30, 0.10, 'Turn completion and body alignment', 'Lift tall, spot the finish, and control the arms and free leg.'),
  // Bars / Vault starter textbook-specific rules for future apparatus activation
  r('usag-bars-cast', 'all', 'Uneven Bars', 'Cast', 'Insufficient body angle, bent arms, or poor hollow shape', 0.05, 0.30, 0.10, 'Cast angle, shoulder push, and hollow body line', 'Push tall through shoulders and show a tight hollow body at the top of the cast.'),
  r('usag-bars-pullover', 'all', 'Uneven Bars', 'Back hip pullover mount', 'Bent arms, poor body tension, or incomplete pullover', 0.05, 0.50, 0.20, 'Pulling action, hip contact, and support finish', 'Pull with straight wrists, keep body tight, and finish in a tall front support.'),
  r('usag-bars-kip', 'all', 'Uneven Bars', 'Glide kip', 'Poor glide, late leg lift, bent arms, or low support finish', 0.05, 0.50, 0.30, 'Glide shape, compression, arm extension, and front support', 'Extend the glide, close the hips fast, and finish with straight arms.'),
  r('usag-vault-flatback', 'all', 'Vault', 'Handstand flat-back vault over raised mat surface', 'Bent arms, arched body, or poor handstand/flat-back position', 0.05, 0.50, 0.30, 'Arm angle, shoulder block, body line, and landing shape', 'Reach to a strong handstand position and fall in a tight straight body.'),
  r('usag-vault-handspring', 'all', 'Vault', 'Front handspring vault over vault table', 'Poor run, low block, bent arms, body position error, or landing error', 0.05, 0.50, 0.30, 'Run speed, board contact, shoulder block, body line, and landing', 'Accelerate into the board, block strongly, and land with chest lifted.'),
]

function r(id: string, level_name: string, apparatus: Apparatus, element_name: string, textbook_fault: string, deduction_min: number, deduction_max: number, default_value: number, measurement_target: string, correction_focus: string): UsagDeductionRule {
  return {
    id,
    level_name,
    apparatus,
    element_name,
    textbook_fault,
    deduction_min,
    deduction_max,
    default_value,
    measurement_target,
    correction_focus,
    source_note: 'USAG Women’s Development Program Compulsory Exercises 2021–2029: routine requirements and Tables of Penalties sections.',
  }
}

export function rulesFor(apparatus: Apparatus, levelName?: string | null, routineElements: RoutineElementLite[] = [], databaseRules: UsagDeductionRule[] = []) {
  const normalizedApparatus = apparatus === 'Bars' ? 'Uneven Bars' : apparatus
  const candidates = (databaseRules.length ? databaseRules : USAG_TEXTBOOK_FALLBACK_RULES).filter((rule) => {
    const ruleApparatus = rule.apparatus === 'Bars' ? 'Uneven Bars' : rule.apparatus
    return ruleApparatus === normalizedApparatus && levelMatch(rule.level_name, levelName)
  })

  const apparatusRoutine = routineElements.filter((el) => (el.apparatus === apparatus || el.apparatus === normalizedApparatus))
  if (!apparatusRoutine.length) return candidates

  const matched: UsagDeductionRule[] = []
  for (const element of apparatusRoutine) {
    const rules = candidates.filter((rule) => elementMatch(rule.element_name, element.element_name))
    if (rules.length) matched.push(...rules)
  }

  return matched
}

export function rulesForElement(apparatus: Apparatus, levelName: string | null | undefined, elementName: string, databaseRules: UsagDeductionRule[] = []) {
  const normalizedApparatus = apparatus === 'Bars' ? 'Uneven Bars' : apparatus
  const candidates = (databaseRules.length ? databaseRules : USAG_TEXTBOOK_FALLBACK_RULES).filter((rule) => {
    const ruleApparatus = rule.apparatus === 'Bars' ? 'Uneven Bars' : rule.apparatus
    return ruleApparatus === normalizedApparatus && levelMatch(rule.level_name, levelName)
  })

  return candidates.filter((rule) => elementMatch(rule.element_name, elementName))
}

export function scoreFromDeductions(deductions: { value: number }[]) {
  const total = deductions.reduce((sum, d) => sum + Number(d.value || 0), 0)
  return Math.max(0, Math.round((10 - total) * 100) / 100)
}
