-- Create subscribers table for email collection
CREATE TABLE public.subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  email TEXT NOT NULL UNIQUE,
  consent BOOLEAN NOT NULL DEFAULT false,
  source TEXT,
  dosha_result TEXT
);

-- Enable RLS but allow public inserts (no auth required for newsletter signup)
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public newsletter signup)
CREATE POLICY "Anyone can subscribe" 
ON public.subscribers 
FOR INSERT 
WITH CHECK (true);

-- Only allow reading via service role (admin only)
CREATE POLICY "Service role can read subscribers" 
ON public.subscribers 
FOR SELECT 
USING (false);