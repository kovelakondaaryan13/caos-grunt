
CREATE TABLE public.early_access_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  firm_name TEXT NOT NULL,
  partner_name TEXT NOT NULL,
  firm_size TEXT NOT NULL,
  practice_area TEXT NOT NULL,
  client_volume TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.early_access_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit early access form"
ON public.early_access_submissions
FOR INSERT
WITH CHECK (true);
