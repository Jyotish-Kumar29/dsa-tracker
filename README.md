# DSA Tracker

A personal Data Structures & Algorithms progress tracker — a single-page application with structured modules, detailed problem breakdowns, and persistent, authenticated progress tracking.

Originally scaffolded and refined with AI assistance, on top of prior hands-on experience with HTML, CSS, and JavaScript.

## Overview

DSA Tracker organizes 470+ curated problems into modules and sub-modules (Arrays, Linked Lists, Graphs, Dynamic Programming, and more), each with a difficulty rating, external practice links (LeetCode / GeeksforGeeks / Coding Ninjas), and an in-app breakdown covering the problem statement, examples, constraints, hints, and intended approach.

Progress is stored in Postgres via Supabase and gated behind authentication, so completion state persists across devices instead of living in browser storage — and each authenticated user can read and write only their own progress.

## Features

- **Module-based dashboard** — nested accordion view (Module → Sub-module → Problem) with live completion stats and a circular progress ring broken down by difficulty.
- **Problem detail drawer** — statement, examples, constraints, hints, and approach for every problem without leaving the page.
- **Authenticated access** — users sign in via Supabase Auth; public sign-ups are disabled and accounts are added manually through the Supabase Dashboard.
- **Row-level security** — Postgres RLS policies ensure each user can read and modify only their own progress.
- **Cross-device sync** — progress is stored server-side, not in `localStorage`.

## Tech Stack

| Layer      | Technology                           |
|------------|---------------------------------------|
| Frontend   | React 18, Vite 5                      |
| Backend    | Supabase (PostgreSQL, Auth, REST API) |
| Deployment | Vercel                                |

## Project Structure

```text
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
│ │ ├── useProblems.js # Load local problems and sync user progress
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

Row Level Security (RLS) is enabled on the `progress` table. The schema below reflects the actual live table.

```sql
create table public.progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  problem_id text not null,
  done boolean not null default false,
  updated_at timestamptz not null default now(),
  primary key (user_id, problem_id)
);

alter table public.progress enable row level security;

create policy "Users can read their own progress"
on public.progress
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can insert their own progress"
on public.progress
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their own progress"
on public.progress
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own progress"
on public.progress
for delete
to authenticated
using (auth.uid() = user_id);
```

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

Create a `.env.local` file in the project root:

```env
VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key_here
```

Found under Supabase Dashboard → **Settings → API**.

4. **Provision the database**

Run the SQL in the [Database Schema](#database-schema) section via Dashboard → **SQL Editor**.

5. **Configure authentication**

This app supports multiple users. Public sign-ups are disabled, and users are added manually through the Supabase Dashboard:

- Dashboard → **Authentication → Sign In / Providers → Email** → disable "Allow new users to sign up."
- Dashboard → **Authentication → Users → Add user** → create a user account (email + password, auto-confirmed).

6. **Start the development server**

```bash
npm run dev
```

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

Changes to problem files are included automatically in the next Vercel deployment.

## Security Notes

- Row Level Security is enforced at the database level. Each authenticated user can access only their own `progress` rows.
- Public sign-ups are disabled. Users are added manually through the Supabase Dashboard.
- Supabase secret/service-role keys must never be exposed in the frontend or committed to the repository.