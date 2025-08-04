-- Create vendor risk assessment tables
CREATE TABLE public.vendor_assessments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  vendor_name TEXT NOT NULL,
  vendor_type TEXT,
  criticality_level TEXT,
  services_provided TEXT,
  data_access_level TEXT,
  contract_duration TEXT,
  overall_score INTEGER,
  risk_level TEXT,
  status TEXT DEFAULT 'in_progress',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  completed_at TIMESTAMP WITH TIME ZONE
);

-- Create vendor assessment responses table
CREATE TABLE public.vendor_assessment_responses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  assessment_id UUID NOT NULL REFERENCES public.vendor_assessments(id) ON DELETE CASCADE,
  step_number INTEGER NOT NULL,
  question_id TEXT NOT NULL,
  response_value TEXT,
  response_score INTEGER,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create vendor risk categories table
CREATE TABLE public.vendor_risk_categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  weight DECIMAL(3,2) DEFAULT 1.00,
  max_score INTEGER DEFAULT 100,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default risk categories
INSERT INTO public.vendor_risk_categories (name, description, weight) VALUES
('Financial & Operational', 'Financial stability and operational capabilities', 0.20),
('Cybersecurity & Data Protection', 'Security measures and data handling practices', 0.25),
('Compliance & Regulatory', 'Regulatory compliance and audit history', 0.20),
('Operational Dependencies', 'Service levels and business continuity', 0.20),
('Due Diligence Documentation', 'Contract completeness and verification', 0.15);

-- Enable Row Level Security
ALTER TABLE public.vendor_assessments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vendor_assessment_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vendor_risk_categories ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for vendor_assessments
CREATE POLICY "Users can view their own vendor assessments" 
ON public.vendor_assessments 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own vendor assessments" 
ON public.vendor_assessments 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own vendor assessments" 
ON public.vendor_assessments 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own vendor assessments" 
ON public.vendor_assessments 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create RLS policies for vendor_assessment_responses
CREATE POLICY "Users can view their own vendor assessment responses" 
ON public.vendor_assessment_responses 
FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.vendor_assessments 
    WHERE id = assessment_id AND user_id = auth.uid()
  )
);

CREATE POLICY "Users can create their own vendor assessment responses" 
ON public.vendor_assessment_responses 
FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.vendor_assessments 
    WHERE id = assessment_id AND user_id = auth.uid()
  )
);

CREATE POLICY "Users can update their own vendor assessment responses" 
ON public.vendor_assessment_responses 
FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.vendor_assessments 
    WHERE id = assessment_id AND user_id = auth.uid()
  )
);

-- Create RLS policies for vendor_risk_categories (public read access)
CREATE POLICY "Anyone can view risk categories" 
ON public.vendor_risk_categories 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_vendor_assessments_updated_at
    BEFORE UPDATE ON public.vendor_assessments
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();