# GymTrack / Team Portal

This package includes the GymTrack app plus the Option B routine structure.

## Supabase order

Run these in Supabase SQL Editor:

1. `supabase/schema.sql`
2. `supabase/usag_option_b_levels_1_5.sql`

The Option B import uses:

- `programs`
- `program_levels`
- `routine_elements`
- `athlete_element_progress`

Each athlete must have:

- `program_id`
- `program_level_id`
- `team_id`
- `coach_id`

Coach visibility is controlled by `coach_teams`.

## FIG HP later

When the FIG HP1 / HP2 / HP3 notebook is added, import it using the same structure in `routine_elements`.
