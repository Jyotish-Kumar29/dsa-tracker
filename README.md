# DSA Tracker

A personal Data Structures & Algorithms progress tracker — a single-page application with structured modules, detailed problem breakdowns, and persistent, authenticated progress tracking.

Originally scaffolded and refined with AI assistance, on top of prior hands-on experience with HTML, CSS, and JavaScript.

## Overview

DSA Tracker organizes 470+ curated problems into modules and sub-modules (Arrays, Linked Lists, Graphs, Dynamic Programming, and more), each with a difficulty rating, external practice links (LeetCode / GeeksforGeeks / Coding Ninjas), and an in-app breakdown covering the problem statement, examples, constraints, hints, and intended approach.

Progress is stored in Postgres via Supabase and gated behind authentication, so completion state persists across devices instead of living in browser storage — and only the account owner can read or write it.

## Features

- **Module-based dashboard** — nested accordion view (Module → Sub-module → Problem) with live completion stats and a circular progress ring broken down by difficulty.
- **Problem detail drawer** — statement, examples, constraints, hints, and approach for every problem without leaving the page.
- **Authenticated access** — single-account sign-in via Supabase Auth; public sign-ups are disabled at the project level.
- **Row-level security** — Postgres RLS policies scope all read/write access to the authenticated owner.
- **Cross-device sync** — progress is stored server-side, not in `localStorage`.

## Tech Stack

| Layer      | Technology                           |
|------------|---------------------------------------|
| Frontend   | React 18, Vite 5                      |
| Backend    | Supabase (PostgreSQL, Auth, REST API) |
| Deployment | Vercel                                |

## Project Structure
```
.
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── src
│ ├── App.jsx
│ ├── main.jsx
│ ├── components
│ │ ├── Icons.jsx
│ │ ├── Login.jsx # Auth screen (email + password)
│ │ ├── Nav.jsx
│ │ ├── ProblemDrawer.jsx # Slide-in problem detail panel
│ │ └── Toast.jsx
│ ├── data
│ │ ├── data-index.js # Combines all problem parts + derived stats
│ │ ├── problems_part1.js
│ │ ├── problems_part2.js
│ │ ├── problems_part3.js
│ │ └── problems_part4.js
│ ├── hooks
│ │ ├── useAuth.js # Supabase session management
│ │ ├── useProblems.js # Fetch, toggle, and seed problems
│ │ └── useToasts.js
│ ├── lib
│ │ └── supabase.js # Supabase client initialisation
│ ├── pages
│ │ ├── HomePage.jsx # Module grid + stats dashboard
│ │ └── ProblemsPage.jsx # Flat problem table + filters
│ └── styles
│ ├── drawer.module.css
│ ├── global.css
│ ├── home.module.css
│ ├── login.module.css
│ ├── nav.module.css
│ ├── problems.module.css
│ └── toast.module.css
└── vite.config.js
```

## Database Schema

Row Level Security (RLS) is enabled on both tables. The schema below reflects the actual live tables.

```sql
-- Problems table
create table problems (
  id          text primary key,
  name        text not null,
  module      text not null,
  sub_module  text,
  difficulty  text not null,
  lc_url      text,
  gfg_url     text,
  cn_url      text,
  companies   text[],
  statement   text,
  examples    jsonb,
  constraints text[],
  hints       text[],
  approach    text,
  created_at  timestamptz default now()
);

-- Progress table
create table progress (
  problem_id  text primary key references problems(id) on delete cascade,
  done        boolean default false,
  updated_at  timestamptz default now(),
  user_id     uuid references auth.users(id) default auth.uid()
);

alter table problems enable row level security;
alter table progress enable row level security;

-- Problems: readable/writable by any authenticated session
create policy "Authenticated read problems" on problems
  for select using (auth.role() = 'authenticated');

create policy "Authenticated write problems" on problems
  for insert with check (auth.role() = 'authenticated');

create policy "Authenticated update problems" on problems
  for update using (auth.role() = 'authenticated');

-- Progress: readable/writable only by its owning user
create policy "Owner manages own progress" on progress
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
```

> **Note:** `progress.user_id` is currently nullable. For strict per-user isolation, consider running `alter table progress alter column user_id set not null;` once every existing row has an owner assigned.

## Getting Started

### Prerequisites

- Node.js v22+
- A Supabase project (free tier is sufficient)

### Setup

1. **Clone the repository**
```bash
   git clone https://github.com/Jyotish-Kumar29/dsa_tracker.git
   cd dsa_tracker
```

2. **Install dependencies**
```bash
   npm install
```

3. **Configure environment variables**

   Create a `.env` file in the project root:
```env
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
```
   Found under Supabase Dashboard → **Settings → API**.

4. **Provision the database**

   Run the SQL in the [Database Schema](#database-schema) section via Dashboard → **SQL Editor**.

5. **Configure authentication**

   This app is designed for single-user, personal access:
   - Dashboard → **Authentication → Sign In / Providers → Email** → disable "Allow new users to sign up."
   - Dashboard → **Authentication → Users → Add user** → create your own account (email + password, auto-confirmed).

6. **Start the development server**
```bash
   npm run dev
```

7. **Seed the database** (first run only)

   Open the browser DevTools console and run:
```js
   await seedDB()
```
   This pushes all problem sets from `src/data` into Supabase.

   Alternatively, `scripts/import-a2z.mjs` can be used for a one-off, script-driven import outside the browser.

## Deployment (Vercel)

1. Push the repository to GitHub.
2. On [vercel.com](https://vercel.com), import the repo as a new project.
3. Add the environment variables from step 3 above in the Vercel project settings.
4. Deploy — every subsequent `git push` triggers an automatic redeploy.

## Adding Problems

Add a new entry to the relevant `problems_part*.js` file:

```js
{
  id: "unique-id",
  name: "Problem Name",
  module: "Arrays & Hashing",
  subModule: "Easy Problems",
  difficulty: "Medium",          // Easy | Medium | Hard
  lcUrl: "https://leetcode.com/problems/...",
  gfgUrl: "https://www.geeksforgeeks.org/...",
  cnUrl: "https://www.naukri.com/code360/problems/...",
  companies: ["Amazon", "Google"],
  statement: `Full problem statement here.`,
  examples: [
    { input: "nums = [1,2]", output: "3", explanation: "Optional." }
  ],
  constraints: ["1 <= n <= 10^5"],
  hints: ["Think about using a hash map."],
  approach: "HashMap: O(n) time, O(n) space.",
}
```

Re-run `await seedDB()` in the browser console to sync changes to Supabase.

## Security Notes

- Row Level Security is enforced at the database level, not just the client — even a leaked Supabase anon key cannot read or write `progress` rows without a valid session for the owning account.
- Public sign-ups are disabled; the only account with access is the one created manually in the Supabase dashboard.
