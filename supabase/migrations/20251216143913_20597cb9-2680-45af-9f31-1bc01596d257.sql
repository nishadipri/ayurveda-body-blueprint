-- Block all client-side UPDATE operations - only backend via service role
CREATE POLICY "Block all client updates - backend only via service role" 
ON public.subscribers 
FOR UPDATE 
USING (false);

-- Block all client-side DELETE operations - only backend via service role
CREATE POLICY "Block all client deletes - backend only via service role" 
ON public.subscribers 
FOR DELETE 
USING (false);