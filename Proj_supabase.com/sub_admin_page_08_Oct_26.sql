-- Supabase SQL Editor script for the HODOPHILE admin page
-- File: sub_admin_page_08_Oct_26.sql
-- Run once in: Supabase Dashboard -> SQL Editor -> New query -> paste -> Run

-- 1. Submissions table (audit requests and project briefs)
create table if not exists submissions (
  id bigint generated always as identity primary key,
  type text not null,              -- 'audit' or 'brief'
  name text not null,
  email text not null,
  status text not null default 'new',
  data jsonb not null default '{}',
  created_at timestamptz not null default now()
);

-- 2. Lock the table: anonymous/public API keys cannot read or write.
--    The server uses the service_role key, which bypasses RLS.
alter table submissions enable row level security;

-- 3. Helpful index for the admin list (newest first)
create index if not exists submissions_created_at_idx
  on submissions (created_at desc);

-- 4. Quick check: should return 0 right after setup
select count(*) as total_submissions from submissions;
