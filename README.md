# GymTrack

Premium gymnastics progress tracking portal.

**Track progress. Build champions.**

Includes role-based admin/coach views, team assignments, USAG/FIG program levels, routine element tracking, weekly notes, and readiness reports.

## Coach creation from Admin page

The Coaches tab creates coach logins using internal Gymnest usernames like `lynnjoy@gymnest.local`.
Coaches only type the username on the login screen.

For this to work on Vercel, add this environment variable:

```bash
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

Keep this key secret. Do not prefix it with `NEXT_PUBLIC_`.
