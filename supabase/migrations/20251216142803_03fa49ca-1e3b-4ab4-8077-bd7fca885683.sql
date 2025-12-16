-- Add length constraints to prevent large payload attacks
ALTER TABLE public.subscribers 
ADD CONSTRAINT source_length CHECK (length(source) <= 100);

ALTER TABLE public.subscribers 
ADD CONSTRAINT dosha_result_length CHECK (length(dosha_result) <= 500);