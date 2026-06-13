-- GymTrack AI USAG Execution Assistant
-- Run this once in Supabase SQL Editor.

create table if not exists ai_video_reviews (
  id uuid primary key default gen_random_uuid(),
  athlete_id uuid references athletes(id) on delete cascade,
  apparatus text not null,
  level_name text,
  video_path text,
  status text not null default 'pending',
  estimated_e_score numeric,
  coach_final_e_score numeric,
  deductions jsonb not null default '[]'::jsonb,
  feedback text,
  approved_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists ai_video_reviews_athlete_idx on ai_video_reviews(athlete_id);
create index if not exists ai_video_reviews_status_idx on ai_video_reviews(status);
create index if not exists ai_video_reviews_created_idx on ai_video_reviews(created_at);

-- Create a private Supabase Storage bucket named ai-videos in Storage UI.
-- Keep it private. The app uploads temporary videos there, then deletes them after coach approval.

-- Optional cleanup helper: delete old pending database rows older than 7 days.
-- Storage files should also be removed using Supabase Storage API or scheduled edge function.
create or replace function delete_old_ai_video_review_rows()
returns void
language sql
as $$
  delete from ai_video_reviews
  where status = 'pending'
  and created_at < now() - interval '7 days';
$$;
