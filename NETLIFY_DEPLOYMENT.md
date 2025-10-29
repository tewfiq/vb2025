# Netlify Deployment Guide - Social Proof Widget

This guide helps you deploy the application to Netlify with the real-time social proof widget enabled.

## Prerequisites

1. **GitHub Repository**: All changes are committed and pushed to `main` branch
2. **Netlify Account**: Connected to your GitHub repository
3. **Supabase Project**: Active Supabase project with the social proof table configured

## Step 1: Configure Supabase (One-time Setup)

Before deploying to Netlify, you need to configure your Supabase project with the social proof table and Row Level Security (RLS) policies.

### 1.1 Execute SQL Setup in Supabase

1. Go to your Supabase project dashboard: https://app.supabase.com/projects
2. Navigate to **SQL Editor**
3. Create a new query and copy the contents from `SUPABASE_SETUP.sql`
4. Execute the SQL script

**What this does:**
- Creates the `visits` table with columns: id, page_path, city, country, created_at, lang, event_type
- Enables Realtime publication on the `visits` table
- Sets up Row Level Security (RLS) policies:
  - Anonymous users can READ all records
  - Service role can INSERT records
  - No DELETE/UPDATE permissions for security

### 1.2 Verify Table Creation

In Supabase SQL Editor, run:
```sql
SELECT * FROM visits LIMIT 1;
```

You should see the table schema without errors.

## Step 2: Retrieve Supabase Credentials

1. Go to **Project Settings** → **API**
2. Copy the following credentials:
   - **Project URL**: `NEXT_PUBLIC_SUPABASE_URL`
   - **Anon Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Service Role Key**: `SUPABASE_SERVICE_ROLE_KEY` (⚠️ Keep this secret - only for server-side)

## Step 3: Configure Netlify Environment Variables

1. Go to your Netlify project settings
2. Navigate to **Build & Deploy** → **Environment**
3. Add the following environment variables:

| Variable Name | Value | Source |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://zancrrmaxwkrtzadkenc.supabase.co` | From Supabase API settings |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your anon key | From Supabase API settings |
| `SUPABASE_SERVICE_ROLE_KEY` | Your service role key | From Supabase API settings (⚠️ Secret) |
| `NEXT_PUBLIC_TOAST_SHOW_MS` | `6000` | Toast display duration (ms) |
| `NEXT_PUBLIC_SOCIAL_PROOF_ENABLED` | `true` | Enable the widget |
| `NEXT_PUBLIC_GA_TRACKING_ID` | Your GA ID | Google Analytics tracking |

**Important**: 
- `SUPABASE_SERVICE_ROLE_KEY` is a secret - it's never exposed to the browser
- It's only used in the `/api/track` server-side endpoint
- Never commit this to version control

## Step 4: Deploy to Netlify

### Option A: Automatic Deployment (Recommended)

The repository is already connected to Netlify. Simply push changes to `main`:

```bash
git push origin main
```

Netlify will automatically:
1. Detect the push
2. Build the Next.js application
3. Deploy to https://vb.tfq.one

### Option B: Manual Deployment

1. Go to your Netlify project dashboard
2. Click **Deploys** → **Deploy site**
3. Select the branch (should be `main`)
4. Wait for the build to complete

## Step 5: Enable Social Proof Widget on Production

Once deployed, verify the widget is working:

1. Visit https://vb.tfq.one
2. Navigate to any page (landing, blog, pricing)
3. **Expected behavior**:
   - No toasts appear initially (no recent visits in your Supabase)
   - When you visit pages, you should see toasts after a few seconds
   - Each toast shows: Name + City/Country + Action + Timestamp

### Troubleshooting Widget Issues

If toasts don't appear:

1. **Check Supabase Connection**:
   - Open browser DevTools → **Console**
   - Look for error messages starting with "Supabase" or "Failed to fetch"

2. **Verify Environment Variables**:
   - In Netlify, go to **Deployments** → select latest → **Deploy settings**
   - Confirm all Supabase env vars are set

3. **Check Supabase Realtime**:
   - In Supabase, go to **Database** → **Tables** → **visits**
   - Verify "Realtime" is toggled ON (blue toggle)

4. **Test Tracking API**:
   - Open DevTools → **Network** tab
   - Refresh the page
   - Look for request to `/api/track`
   - Verify it returns `{"ok":true}`

## Step 6: Monitor & Verify

Once deployed:

1. **Check Supabase for Visits**:
   ```sql
   SELECT page_path, city, country, event_type, created_at 
   FROM visits 
   ORDER BY created_at DESC 
   LIMIT 10;
   ```

2. **Monitor Toast Animations**:
   - Toasts appear on bottom-left
   - Slide up with 0.35s animation
   - Show for 6 seconds (configurable)
   - Auto-remove after display

3. **Verify Dark Mode**:
   - Toggle dark mode on the site
   - Toasts should adapt to the current theme

## Configuration Details

### Toast Display Duration
Change `NEXT_PUBLIC_TOAST_SHOW_MS` to adjust how long toasts stay visible:
- `3000` = 3 seconds (fast)
- `6000` = 6 seconds (default)
- `10000` = 10 seconds (long)

### Event Types Tracked
The widget automatically tracks:
- **visit**: Generic page visits
- **blog_view**: Blog article reads
- **pricing_view**: Pricing page views
- **booking**: Masterclass bookings (when implemented)

### Message Languages
Messages automatically detect the user's browser language:
- **French (FR)**: "Sophie vient de consulter la Masterclass à Paris"
- **English (EN)**: "Sophie just viewed the Masterclass from Paris"

## Common Issues & Solutions

### Issue: "Failed to fetch visits: {}"
**Cause**: Supabase not configured or RLS policy blocking read access
**Solution**: 
1. Run `SUPABASE_SETUP.sql` in Supabase SQL Editor
2. Verify RLS policies are enabled on the `visits` table
3. Check that anon role has SELECT permission

### Issue: Toasts show but no real visitor data
**Cause**: Only your own visits being tracked (expected for new deployment)
**Solution**: 
1. Visit the site from different browsers/devices
2. Clear localStorage to allow re-tracking
3. Wait 5-10 minutes for data to appear

### Issue: Environment variables not loading on Netlify
**Cause**: Variables not set or typo in variable names
**Solution**:
1. Go to Netlify → Project settings → Build & deploy → Environment
2. Verify all variable names match exactly (case-sensitive)
3. Redeploy after adding variables

### Issue: Service role key showing in browser console
**Cause**: Accidentally exposing the secret
**Solution**:
1. NEVER use `SUPABASE_SERVICE_ROLE_KEY` in client-side code
2. The `/api/track` endpoint uses it server-side only
3. If exposed, regenerate the key in Supabase Settings

## File Reference

| File | Purpose |
|---|---|
| `SUPABASE_SETUP.sql` | SQL script to configure Supabase |
| `SOCIAL_PROOF_SETUP.md` | Detailed social proof implementation guide |
| `SUPABASE_TROUBLESHOOTING.md` | Advanced troubleshooting for Supabase |
| `.env.example` | Template for environment variables |
| `src/app/api/track/route.ts` | API endpoint for tracking visits |
| `src/components/social-proof/social-proof-toasts.tsx` | Main toast UI component |
| `src/components/social-proof/track-visit.tsx` | Client-side visit tracker |
| `src/lib/supabase/server.ts` | Server-side Supabase client |
| `src/lib/supabase/client.ts` | Browser-side Supabase client |

## Next Steps

1. ✅ Push changes to GitHub (completed)
2. 📋 Configure Supabase (run SQL script)
3. 🔑 Add environment variables to Netlify
4. 🚀 Deploy to Netlify (automatic or manual)
5. ✔️ Verify widget works on https://vb.tfq.one
6. 📊 Monitor visit data in Supabase

## Support & Documentation

For more details, see:
- [SOCIAL_PROOF_SETUP.md](./SOCIAL_PROOF_SETUP.md) - Implementation details
- [SUPABASE_TROUBLESHOOTING.md](./SUPABASE_TROUBLESHOOTING.md) - Advanced debugging
- [Supabase Realtime Docs](https://supabase.com/docs/guides/realtime)
