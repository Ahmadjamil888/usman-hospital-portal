
-- Allow anyone to create appointments without authentication
CREATE POLICY "Anyone can create appointments" 
  ON public.appointments 
  FOR INSERT 
  WITH CHECK (true);

-- Make patient_id nullable since we won't require authentication
ALTER TABLE public.appointments 
ALTER COLUMN patient_id DROP NOT NULL;
