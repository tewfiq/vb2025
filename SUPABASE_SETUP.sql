-- ==============================================================================
-- SUPABASE SETUP FOR SOCIAL PROOF REALTIME TOASTS
-- Execute this SQL in your Supabase Project's SQL Editor
-- ==============================================================================

-- Step 1: Enable pgcrypto extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Step 2: Create visits table
CREATE TABLE IF NOT EXISTS public.visits (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  page_path TEXT NOT NULL,
  city TEXT,
  country TEXT,
  lang TEXT,
  event_type TEXT NOT NULL DEFAULT 'visit' CHECK (event_type IN ('visit', 'booking', 'blog_view', 'pricing_view')),
  ua TEXT
);

-- Step 3: Create index on created_at for efficient queries
CREATE INDEX IF NOT EXISTS visits_created_at_idx ON public.visits(created_at DESC);

-- Step 4: Enable Realtime for the visits table
-- This allows clients to subscribe to changes in real-time
ALTER PUBLICATION supabase_realtime ADD TABLE public.visits;

-- Step 5: Enable Row Level Security (RLS)
ALTER TABLE public.visits ENABLE ROW LEVEL SECURITY;

-- Step 6: Create RLS policy for SELECT (public read access)
-- This allows anonymous clients to listen to new visits
CREATE POLICY "visits_select_public"
ON public.visits
FOR SELECT
TO anon
USING (true);

-- Step 7: Create RLS policy for INSERT via service role
-- Note: We don't create an INSERT policy for anon role
-- Only service_role (via /api/track) can insert data
-- This prevents client-side abuse of the API

-- ==============================================================================
-- AFTER RUNNING THIS SQL:
-- ==============================================================================
--
-- 1. Go to your Supabase Dashboard
-- 2. Navigate to Settings > API
-- 3. Copy the "service_role" key (NOT the anon key)
-- 4. Add it to your .env.local as: SUPABASE_SERVICE_ROLE_KEY=your_key_here
-- 5. Deploy to Vercel and add the same key to your production environment
--
-- ==============================================================================
-- TESTING:
-- ==============================================================================
--
-- 1. In Supabase SQL Editor, test the insert:
--    INSERT INTO public.visits (page_path, city, country, lang, event_type)
--    VALUES ('/', 'Paris', 'FR', 'fr', 'visit');
--
-- 2. In Table Editor, you should see the new row in the visits table
--
-- 3. Open your site on localhost:9002 - you should see a toast appear
--    within 2-5 seconds showing the visit
--
-- ==============================================================================
