-- Drop the restrictive policies
DROP POLICY IF EXISTS "Block all client reads - backend only via service role" ON public.subscribers;
DROP POLICY IF EXISTS "Block all client updates - backend only via service role" ON public.subscribers;
DROP POLICY IF EXISTS "Block all client deletes - backend only via service role" ON public.subscribers;

-- Recreate as PERMISSIVE policies (default behavior, explicit for clarity)
-- USING(false) blocks all client access, service role bypasses RLS entirely
CREATE POLICY "Block all client reads" 
ON public.subscribers 
AS PERMISSIVE
FOR SELECT 
TO public
USING (false);

CREATE POLICY "Block all client updates" 
ON public.subscribers 
AS PERMISSIVE
FOR UPDATE 
TO public
USING (false);

CREATE POLICY "Block all client deletes" 
ON public.subscribers 
AS PERMISSIVE
FOR DELETE 
TO public
USING (false);