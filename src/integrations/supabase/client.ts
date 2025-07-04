
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fnvbtiarpjtxrzgoeywj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZudmJ0aWFycGp0eHJ6Z29leXdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NTgzMjYsImV4cCI6MjA2NjUzNDMyNn0.4lIeJgweF-dk_Hh5kD1IZHRdZk1oPhPKcVNyI0yAvKQ";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Helper to check if Supabase is properly configured
export const hasSupabaseConfig = !!(SUPABASE_URL && SUPABASE_PUBLISHABLE_KEY);
