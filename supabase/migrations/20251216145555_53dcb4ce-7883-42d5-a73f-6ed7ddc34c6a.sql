-- Remove the public INSERT policy since edge function uses service role key (bypasses RLS)
-- This ensures NO client can directly insert - only through the secure edge function
DROP POLICY IF EXISTS "Anyone can subscribe" ON public.subscribers;

-- Revoke SELECT privilege from anon and authenticated roles at database level
-- This adds defense-in-depth beyond RLS
REVOKE SELECT ON public.subscribers FROM anon;
REVOKE SELECT ON public.subscribers FROM authenticated;

-- Also revoke INSERT to ensure only service role can insert
REVOKE INSERT ON public.subscribers FROM anon;
REVOKE INSERT ON public.subscribers FROM authenticated;

-- Keep UPDATE and DELETE revoked as well
REVOKE UPDATE ON public.subscribers FROM anon;
REVOKE UPDATE ON public.subscribers FROM authenticated;
REVOKE DELETE ON public.subscribers FROM anon;
REVOKE DELETE ON public.subscribers FROM authenticated;