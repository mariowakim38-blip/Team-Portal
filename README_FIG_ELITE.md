# GymTrack FIG Elite Builder Update

Run `supabase/fig_full_install.sql` in Supabase SQL Editor before testing the FIG builder.

Flow implemented:
1. FIG Elite Builder: search FIG WAG elements, build athlete-specific routine.
2. Save Routine to Levels: writes the selected routine to `routine_elements` with `athlete_id`.
3. Levels & Skills: displays the athlete-specific FIG routine and lets coaches evaluate status/issues/focus/notes.
4. Reports: reads the same evaluated routine from Levels & Skills.

The FIG element seed was extracted from the uploaded WAG COP 2025-2028 table of elements pages. Review extracted names where the COP table was visually complex.
