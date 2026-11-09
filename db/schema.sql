-- Qalam Academy database (Supabase Postgres, project "qalam-academy", eu-central-1).
-- Applied as migration "qalam_init". The app connects as role qalam_app, which
-- owns the private `qalam` schema. That schema is not exposed through
-- Supabase's Data API, and RLS is on with no policies, so only the server can
-- read or write. Worship is never stored or scored.

-- create role qalam_app login password '<generated>';
-- grant qalam_app to postgres;
create schema qalam authorization qalam_app;
revoke all on schema qalam from public;
set role qalam_app;

create table qalam.families (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  join_code text not null unique,
  created_at timestamptz not null default now()
);

create table qalam.users (
  id uuid primary key default gen_random_uuid(),
  email text unique,
  name text not null,
  kind text not null default 'ADULT' check (kind in ('ADULT','CHILD')),
  password_hash text,          -- scrypt, parents only
  pin_hash text,               -- scrypt, children only
  family_id uuid references qalam.families(id) on delete set null,
  role text check (role in ('PARENT','CHILD')),
  lang text not null default 'en' check (lang in ('en','uz','ru')),
  created_at timestamptz not null default now(),
  check (kind = 'CHILD' or email is not null)
);
create index users_family_idx on qalam.users(family_id);
create unique index users_child_name_idx on qalam.users(family_id, lower(name)) where kind = 'CHILD';

create table qalam.sessions (
  token_hash text primary key, -- SHA-256 of the cookie token
  user_id uuid not null references qalam.users(id) on delete cascade,
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);
create index sessions_user_idx on qalam.sessions(user_id);

-- One synced learning-progress document per user (points, lessons, quizzes, hifz).
create table qalam.progress (
  user_id uuid primary key references qalam.users(id) on delete cascade,
  points integer not null default 0,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table qalam.login_attempts (
  key text not null,
  at timestamptz not null default now()
);
create index login_attempts_idx on qalam.login_attempts(key, at);

alter table qalam.families enable row level security;
alter table qalam.users enable row level security;
alter table qalam.sessions enable row level security;
alter table qalam.progress enable row level security;
alter table qalam.login_attempts enable row level security;
reset role;
