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
  avatar text check (avatar is null or char_length(avatar) <= 24),
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

-- Quiz games (Kahoot-style). A signed-in adult hosts; anyone with the PIN or
-- link joins with a nickname. Questions are a snapshot taken when the game is
-- created, in the host's language. LIVE games are paced by the host; CHALLENGE
-- games are played by each player at their own pace until the deadline.
-- Applied as migration "add_quiz_games".
set role qalam_app;
create table qalam.games (
  id uuid primary key default gen_random_uuid(),
  pin text not null,
  host_id uuid not null references qalam.users(id) on delete cascade,
  family_id uuid references qalam.families(id) on delete set null,
  title text not null check (char_length(title) between 1 and 80),
  mode text not null check (mode in ('LIVE','CHALLENGE')),
  lang text not null default 'en' check (lang in ('en','uz','ru')),
  questions jsonb not null,
  seconds integer not null default 20 check (seconds between 5 and 120),
  state text not null default 'LOBBY' check (state in ('LOBBY','QUESTION','REVEAL','FINISHED')),
  current integer not null default -1,
  started_at timestamptz,          -- when the current LIVE question started
  ends_at timestamptz,             -- CHALLENGE deadline
  created_at timestamptz not null default now()
);
create unique index games_open_pin_idx on qalam.games(pin) where state <> 'FINISHED';
create index games_host_idx on qalam.games(host_id, created_at desc);
create index games_family_idx on qalam.games(family_id) where state <> 'FINISHED';

create table qalam.game_players (
  id uuid primary key default gen_random_uuid(),
  game_id uuid not null references qalam.games(id) on delete cascade,
  token_hash text not null,        -- SHA-256 of the player's secret
  user_id uuid references qalam.users(id) on delete set null,
  nickname text not null check (char_length(nickname) between 1 and 24),
  avatar text check (avatar is null or char_length(avatar) <= 24),
  score integer not null default 0,
  streak integer not null default 0,
  current integer not null default 0,     -- CHALLENGE: next question index
  q_started_at timestamptz,               -- CHALLENGE: when they saw it
  finished_at timestamptz,
  kicked boolean not null default false,
  joined_at timestamptz not null default now()
);
create unique index game_players_nick_idx on qalam.game_players(game_id, lower(nickname));
create unique index game_players_token_idx on qalam.game_players(token_hash);

create table qalam.game_answers (
  player_id uuid not null references qalam.game_players(id) on delete cascade,
  game_id uuid not null references qalam.games(id) on delete cascade,
  q integer not null,
  choice integer not null,
  correct boolean not null,
  points integer not null,
  ms integer not null,
  at timestamptz not null default now(),
  primary key (player_id, q)
);
create index game_answers_game_idx on qalam.game_answers(game_id, q);

alter table qalam.games enable row level security;
alter table qalam.game_players enable row level security;
alter table qalam.game_answers enable row level security;
reset role;
