-- Block all client INSERT operations on subscribers table
-- Service role (used by edge function) bypasses RLS, so legitimate inserts still work
CREATE POLICY "Block all client inserts" 
ON public.subscribers 
FOR INSERT 
WITH CHECK (false);