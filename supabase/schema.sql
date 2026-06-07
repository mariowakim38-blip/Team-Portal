create extension if not exists "uuid-ossp";

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  username text unique,
  full_name text,
  role text not null default 'coach' check (role in ('admin','coach','parent')),
  created_at timestamptz default now()
);

create table if not exists coaches (
  id uuid primary key default uuid_generate_v4(),
  profile_id uuid references profiles(id) on delete set null,
  full_name text not null,
  username text unique,
  phone text,
  created_at timestamptz default now()
);

create table if not exists teams (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  age_group text,
  level_name text,
  created_at timestamptz default now()
);

create table if not exists levels (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text,
  created_at timestamptz default now()
);

create table if not exists programs (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  created_at timestamptz default now()
);

create table if not exists program_levels (
  id uuid primary key default gen_random_uuid(),
  program_id uuid references programs(id) on delete cascade,
  name text not null,
  created_at timestamptz default now(),
  unique(program_id, name)
);

create table if not exists athletes (
  id uuid primary key default uuid_generate_v4(),
  first_name text not null,
  last_name text not null,
  birth_date date,
  team_id uuid references teams(id) on delete set null,
  level_id uuid references levels(id) on delete set null,
  coach_id uuid references coaches(id) on delete set null,
  program_id uuid references programs(id),
  program_level_id uuid references program_levels(id),
  parent_name text,
  parent_phone text,
  created_at timestamptz default now()
);

create table if not exists coach_teams (
  id uuid primary key default gen_random_uuid(),
  coach_id uuid references coaches(id) on delete cascade,
  team_id uuid references teams(id) on delete cascade,
  created_at timestamptz default now(),
  unique(coach_id, team_id)
);

create table if not exists routine_elements (
  id uuid primary key default gen_random_uuid(),
  level_id uuid references program_levels(id) on delete cascade,
  apparatus text not null,
  element_name text not null,
  order_number integer default 0,
  element_type text default 'routine',
  is_required boolean default true,
  created_at timestamptz default now(),
  unique(level_id, apparatus, element_name)
);

create table if not exists athlete_element_progress (
  id uuid primary key default gen_random_uuid(),
  athlete_id uuid references athletes(id) on delete cascade,
  element_id uuid references routine_elements(id) on delete cascade,
  status text default 'not_achieved' check (status in ('not_achieved','almost','achieved')),
  coach_note text,
  main_issue text,
  correction_focus text,
  updated_by uuid references profiles(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now(),
  unique(athlete_id, element_id)
);

create table if not exists skills (
  id uuid primary key default uuid_generate_v4(),
  level_id uuid not null references levels(id) on delete cascade,
  apparatus text not null check (apparatus in ('Floor','Beam','Bars','Vault','Conditioning','Flexibility')),
  skill_name text not null,
  order_number int default 0,
  created_at timestamptz default now()
);

create table if not exists athlete_skills (
  id uuid primary key default uuid_generate_v4(),
  athlete_id uuid not null references athletes(id) on delete cascade,
  skill_id uuid not null references skills(id) on delete cascade,
  status text not null default 'not_started' check (status in ('not_started','learning','almost','achieved','excellent')),
  updated_by uuid references profiles(id) on delete set null,
  updated_at timestamptz default now(),
  unique(athlete_id, skill_id)
);

create table if not exists weekly_notes (
  id uuid primary key default uuid_generate_v4(),
  athlete_id uuid not null references athletes(id) on delete cascade,
  coach_id uuid references coaches(id) on delete set null,
  week_start_date date not null,
  attendance text,
  effort text check (effort in ('Low','Good','Very Good','Excellent')),
  improvement text,
  correction text,
  next_focus text,
  note text,
  created_at timestamptz default now()
);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, username, full_name, role)
  values (
    new.id,
    new.email,
    split_part(new.email, '@', 1),
    coalesce(new.raw_user_meta_data->>'full_name',''),
    coalesce(new.raw_user_meta_data->>'role','coach')
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

insert into programs (name) values ('USAG'), ('FIG Development'), ('FIG Elite') on conflict (name) do nothing;

insert into program_levels (program_id, name)
select p.id, x.level_name
from programs p
cross join (values
  ('USAG Level 1'),('USAG Level 2'),('USAG Level 3'),('USAG Level 4'),('USAG Level 5')
) as x(level_name)
where p.name = 'USAG'
on conflict do nothing;

insert into program_levels (program_id, name)
select p.id, x.level_name
from programs p
cross join (values ('FIG HP1'),('FIG HP2'),('FIG HP3')) as x(level_name)
where p.name = 'FIG Development'
on conflict do nothing;

drop view if exists athlete_level_report;
create or replace view athlete_level_report as
select
  a.id as athlete_id,
  concat(a.first_name, ' ', a.last_name) as athlete_name,
  a.team_id,
  t.name as team_name,
  a.coach_id,
  c.full_name as coach_name,
  a.program_level_id,
  pl.name as level_name,
  re.apparatus,
  count(re.id) as total_elements,
  count(case when aep.status = 'achieved' then 1 end) as achieved_elements,
  count(case when aep.status = 'almost' then 1 end) as almost_elements,
  count(case when aep.status = 'not_achieved' or aep.status is null then 1 end) as not_achieved_elements,
  coalesce(round(count(case when aep.status = 'achieved' then 1 end)::numeric / nullif(count(re.id), 0)::numeric * 100, 0), 0) as readiness
from athletes a
left join teams t on t.id = a.team_id
left join coaches c on c.id = a.coach_id
left join program_levels pl on pl.id = a.program_level_id
left join routine_elements re on re.level_id = a.program_level_id
left join athlete_element_progress aep on aep.athlete_id = a.id and aep.element_id = re.id
group by a.id, a.first_name, a.last_name, a.team_id, t.name, a.coach_id, c.full_name, a.program_level_id, pl.name, re.apparatus;

alter table profiles enable row level security;
alter table coaches enable row level security;
alter table teams enable row level security;
alter table levels enable row level security;
alter table athletes enable row level security;
alter table coach_teams enable row level security;
alter table programs enable row level security;
alter table program_levels enable row level security;
alter table routine_elements enable row level security;
alter table athlete_element_progress enable row level security;
alter table skills enable row level security;
alter table athlete_skills enable row level security;
alter table weekly_notes enable row level security;

do $$
begin
  if not exists (select 1 from pg_policies where policyname='authenticated read profiles') then create policy "authenticated read profiles" on profiles for select to authenticated using (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage coaches') then create policy "authenticated manage coaches" on coaches for all to authenticated using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage teams') then create policy "authenticated manage teams" on teams for all to authenticated using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage levels') then create policy "authenticated manage levels" on levels for all to authenticated using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage athletes') then create policy "authenticated manage athletes" on athletes for all to authenticated using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage coach teams') then create policy "authenticated manage coach teams" on coach_teams for all to authenticated using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage programs') then create policy "authenticated manage programs" on programs for all to authenticated using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage program levels') then create policy "authenticated manage program levels" on program_levels for all to authenticated using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage routine elements') then create policy "authenticated manage routine elements" on routine_elements for all to authenticated using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage athlete element progress') then create policy "authenticated manage athlete element progress" on athlete_element_progress for all to authenticated using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage skills') then create policy "authenticated manage skills" on skills for all to authenticated using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage athlete skills') then create policy "authenticated manage athlete skills" on athlete_skills for all to authenticated using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage weekly notes') then create policy "authenticated manage weekly notes" on weekly_notes for all to authenticated using (true) with check (true); end if;
end $$;
