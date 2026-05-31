# DSA Tracker

A high-performance, responsive Single Page Application (SPA) designed to track Data Structures and Algorithms (DSA) preparation. It provides structured modules, comprehensive problem statements, and real-time progress synchronization across devices.

## Features

- **Centralized Dashboard:** Track completion rates across algorithmic patterns and modules.
- **Problem Repository:** Detailed problem statements, constraints, hints, and optimal approaches.
- **Cross-Device Sync:** Real-time persistence of progress states via a PostgreSQL backend.
- **Responsive UI:** Slide-in drawer for problem viewing to maintain context without routing overhead.

## Tech Stack

- **Frontend:** React 18, Vite 5
- **Backend/Database:** Supabase (PostgreSQL + REST API)
- **Deployment:** Vercel (CI/CD integrated via GitHub)

---

## Project Structure

```
dsa-sheet/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── lib/
    │   └── supabase.js          # Supabase client initialisation
    ├── hooks/
    │   ├── useProblems.js       # Fetch problems, toggle done, seed DB
    │   └── useToasts.js         # Notification state management
    ├── data/
    │   └── problems.js          # All problem data (seed source)
    ├── components/
    │   ├── Nav.jsx
    │   ├── ProblemDrawer.jsx    # Slide-in problem detail panel
    │   ├── Toast.jsx
    │   └── Icons.jsx
    ├── pages/
    │   ├── HomePage.jsx         # Module grid + stats dashboard
    │   └── ProblemsPage.jsx     # Problem table + filters
    └── styles/
        ├── global.css
        ├── nav.module.css
        ├── home.module.css
        ├── problems.module.css
        ├── drawer.module.css
        └── toast.module.css
```

---

## Database Schema

Row Level Security (RLS) is enabled on both tables.

```sql
-- Problems table
create table problems (
  id          text primary key,
  name        text not null,
  module      text not null,
  difficulty  text not null check (difficulty in ('Easy', 'Medium', 'Hard')),
  lc_url      text default '',
  gfg_url     text default '',
  companies   text[] default '{}',
  statement   text default '',
  examples    jsonb default '[]',
  constraints text[] default '{}',
  hints       text[] default '{}',
  approach    text default '',
  created_at  timestamptz default now()
);

-- Progress table
create table progress (
  problem_id  text primary key references problems(id) on delete cascade,
  done        boolean default false,
  updated_at  timestamptz default now()
);

-- RLS policies (personal use — allow all)
alter table problems enable row level security;
alter table progress enable row level security;

create policy "Allow all" on problems for all using (true) with check (true);
create policy "Allow all" on progress for all using (true) with check (true);
```

---

## Local Development

### Prerequisites

- Node.js v22+
- A Supabase project (free tier)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jyotish-Kumar29/dsa_tracker.git
   cd dsa_tracker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the project root:
   ```
   VITE_SUPABASE_URL=https://your-project-ref.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key_here
   ```

   Get these from: Supabase Dashboard → Settings → API.

4. **Provision the database:**

   Open the Supabase SQL Editor (Dashboard → SQL Editor → New query), paste the schema from the **Database Schema** section above, and run it.

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Seed the database (first run only):**

   Open the browser DevTools console (F12) and run:
   ```js
   await seedDB()
   ```
   This pushes all problems from `src/data/problems.js` into Supabase. Only needed once.

---

## Deployment (Vercel)

1. Push the repository to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Add environment variables in Vercel's project settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Deploy. Every subsequent `git push` triggers an automatic redeploy.

---

## Adding Problems

Add a new entry to the `PROBLEMS` array in `src/data/problems.js`:

```js
{
  id: "unique-id",
  name: "Problem Name",
  module: "Arrays & Hashing",   // must match an entry in MODULES
  difficulty: "Medium",          // Easy | Medium | Hard
  lcUrl: "https://leetcode.com/problems/...",
  gfgUrl: "https://www.geeksforgeeks.org/...",
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

Then run `await seedDB()` in the browser console to sync to Supabase.