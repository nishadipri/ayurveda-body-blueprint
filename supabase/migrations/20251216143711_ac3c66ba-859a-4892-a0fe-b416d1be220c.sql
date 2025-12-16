-- Drop the confusingly named policy
DROP POLICY IF EXISTS "Service role can read subscribers" ON public.subscribers;

-- Create a clearly named policy that explicitly blocks all client reads
-- Service role key bypasses RLS entirely, so this policy protects against client-side access
CREATE POLICY "Block all client reads - backend only via service role" 
ON public.subscribers 
FOR SELECT 
USING (false);