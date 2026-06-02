create extension if not exists "uuid-ossp";

create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  role text not null default 'coach' check (role in ('admin','coach','parent')),
  created_at timestamptz default now()
);

create table if not exists coaches (
  id uuid primary key default uuid_generate_v4(),
  profile_id uuid references profiles(id) on delete set null,
  full_name text not null,
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

create table if not exists athletes (
  id uuid primary key default uuid_generate_v4(),
  first_name text not null,
  last_name text not null,
  birth_date date,
  team_id uuid references teams(id) on delete set null,
  level_id uuid references levels(id) on delete set null,
  coach_id uuid references coaches(id) on delete set null,
  parent_name text,
  parent_phone text,
  created_at timestamptz default now()
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
  insert into public.profiles (id, email, full_name, role)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name',''), 'coach')
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create or replace function athlete_readiness()
returns table(athlete_id uuid, readiness numeric)
language sql stable as $$
  select
    a.id as athlete_id,
    coalesce(round(100.0 * count(ask.skill_id) filter (where ask.status in ('achieved','excellent')) / nullif(count(s.id),0),0),0) as readiness
  from athletes a
  left join skills s on s.level_id = a.level_id
  left join athlete_skills ask on ask.athlete_id = a.id and ask.skill_id = s.id
  group by a.id;
$$;

create or replace function athlete_readiness_report()
returns table(athlete_id uuid, athlete_name text, level_name text, total_skills bigint, achieved_skills bigint, readiness numeric)
language sql stable as $$
  select
    a.id,
    a.first_name || ' ' || a.last_name,
    l.name,
    count(s.id) as total_skills,
    count(ask.skill_id) filter (where ask.status in ('achieved','excellent')) as achieved_skills,
    coalesce(round(100.0 * count(ask.skill_id) filter (where ask.status in ('achieved','excellent')) / nullif(count(s.id),0),0),0) as readiness
  from athletes a
  left join levels l on l.id = a.level_id
  left join skills s on s.level_id = a.level_id
  left join athlete_skills ask on ask.athlete_id = a.id and ask.skill_id = s.id
  group by a.id, l.name
  order by readiness desc, athlete_name asc;
$$;

-- Starter sample data
insert into levels(name, description) values
('Level 1','Beginner competition level'),
('Level 2','Intermediate competition level')
on conflict do nothing;

-- RLS: simple MVP policy. Tighten before parent access.
alter table profiles enable row level security;
alter table coaches enable row level security;
alter table teams enable row level security;
alter table levels enable row level security;
alter table athletes enable row level security;
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
  if not exists (select 1 from pg_policies where policyname='authenticated manage skills') then create policy "authenticated manage skills" on skills for all to authenticated using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage athlete skills') then create policy "authenticated manage athlete skills" on athlete_skills for all to authenticated using (true) with check (true); end if;
  if not exists (select 1 from pg_policies where policyname='authenticated manage weekly notes') then create policy "authenticated manage weekly notes" on weekly_notes for all to authenticated using (true) with check (true); end if;
end $$;
