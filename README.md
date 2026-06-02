# Gymnest Team Progress Portal

## Setup
1. Create a Supabase project.
2. Run `supabase/schema.sql` in Supabase SQL Editor.
3. Copy `.env.example` to `.env.local` and add Supabase URL + anon key.
4. Run:
```bash
npm install
npm run dev
```
5. Push to GitHub and import the repo in Vercel.
6. Add the same environment variables in Vercel.

## Roles
- `admin`: full access
- `coach`: assigned athletes only
- `parent`: optional future access

Create a user in Supabase Auth, then insert/update their profile role in the `profiles` table.
