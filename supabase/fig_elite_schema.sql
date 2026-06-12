-- GymTrack FIG Elite Smart Routine Builder schema
-- Run this after the main schema if you want permanent Supabase storage for FIG routines.

create table if not exists fig_elements (
  id text primary key,
  apparatus text not null check (apparatus in ('VT','UB','BB','FX')),
  code text not null,
  name text not null,
  element_group text not null,
  value_letter text not null,
  dv numeric not null,
  tags text[] default '{}',
  note text,
  created_at timestamptz default now()
);

create table if not exists fig_routines (
  id uuid primary key default gen_random_uuid(),
  athlete_id uuid references athletes(id) on delete cascade,
  apparatus text not null check (apparatus in ('VT','UB','BB','FX')),
  routine_name text default 'Competition Routine',
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(athlete_id, apparatus, routine_name)
);

create table if not exists fig_routine_elements (
  id uuid primary key default gen_random_uuid(),
  routine_id uuid references fig_routines(id) on delete cascade,
  element_id text references fig_elements(id) on delete restrict,
  order_number integer not null default 1,
  status text not null default 'planned' check (status in ('planned','learning','consistent','competition_ready')),
  coach_note text,
  created_at timestamptz default now()
);

alter table fig_elements enable row level security;
alter table fig_routines enable row level security;
alter table fig_routine_elements enable row level security;

do $$ begin
  if not exists (select 1 from pg_policies where policyname='authenticated read fig elements') then
    create policy "authenticated read fig elements" on fig_elements for select to authenticated using (true);
  end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage fig routines') then
    create policy "authenticated manage fig routines" on fig_routines for all to authenticated using (true) with check (true);
  end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage fig routine elements') then
    create policy "authenticated manage fig routine elements" on fig_routine_elements for all to authenticated using (true) with check (true);
  end if;
end $$;
