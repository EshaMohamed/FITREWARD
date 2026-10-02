import { createClient } from '@supabase/supabase-js';

// Supabase project configuration (replace with your credentials if needed)
const SUPABASE_URL = 'https://plahpnooqgytrmbuzlms.supabase.co';
const SUPABASE_PUBLIC_KEY = 'sb_publishable_aNYwxKL5Na4KVCnXO4cINQ_sRRzMfTs';

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
