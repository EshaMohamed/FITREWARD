-- Supabase Database Schema for FITREWARD

-- 1. Profiles Table (syncs with Supabase Auth or standalone)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  xp INTEGER DEFAULT 100,
  streak INTEGER DEFAULT 1,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Challenges Table
CREATE TABLE IF NOT EXISTS public.challenges (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  difficulty TEXT NOT NULL,
  goal INTEGER NOT NULL,
  type TEXT NOT NULL,
  xp INTEGER DEFAULT 250,
  calories TEXT,
  icon TEXT,
  participants INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. User Challenges Table (Tracking user participation)
CREATE TABLE IF NOT EXISTS public.user_challenges (
  id BIGSERIAL PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  challenge_id BIGINT REFERENCES public.challenges(id) ON DELETE CASCADE,
  progress INTEGER DEFAULT 0,
  completed BOOLEAN DEFAULT false,
  join_date TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  completion_date TIMESTAMP WITH TIME ZONE,
  UNIQUE(user_id, challenge_id)
);

-- 4. Certificates Table
CREATE TABLE IF NOT EXISTS public.certificates (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  challenge_title TEXT NOT NULL,
  category TEXT,
  score TEXT DEFAULT '100% Goal Met',
  issued_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Seed Initial Challenges
INSERT INTO public.challenges (id, title, description, category, difficulty, goal, type, xp, calories, icon, participants)
VALUES
  (1, '7 Days of Morning Cardio', 'Jumpstart your metabolism with 30 minutes of high-energy cardio every morning.', 'Cardio', 'Beginner', 7, 'days', 250, '2,100 kcal', '🏃‍♂️', 1420),
  (2, '10,000 Steps Daily Trek', 'Hit 10,000 brisk steps every single day for 14 continuous days to boost endurance.', 'Endurance', 'Intermediate', 14, 'days', 500, '5,600 kcal', '👟', 2890),
  (3, 'Push-Up Century Builder', 'Crush 1,000 total push-ups over 30 days to sculpt upper-body strength and chest power.', 'Strength', 'Advanced', 1000, 'reps', 800, '4,200 kcal', '💪', 980),
  (4, '30-Day Core & Plank Shield', 'Hold 60 total minutes of planks and core isolation across 30 days for rock-solid stability.', 'Strength', 'Intermediate', 60, 'minutes', 600, '3,000 kcal', '🛡️', 1650),
  (5, 'High-Intensity HIIT Blitz', 'Complete 10 explosive 20-minute HIIT circuit routines to supercharge cardiovascular power.', 'HIIT', 'Advanced', 10, 'sessions', 750, '4,500 kcal', '🔥', 1120),
  (6, 'Mindful Yoga & Mobility', 'Restore mobility, reduce stiffness, and unwind with 12 restorative yoga & flexibility flows.', 'Flexibility', 'Beginner', 12, 'sessions', 400, '1,800 kcal', '🧘', 870)
ON CONFLICT (id) DO NOTHING;
