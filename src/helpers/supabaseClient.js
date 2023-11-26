import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const URL = "https://iqhxavwiwhtzywuhctqq.supabase.co";
// const KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxaHhhdndpd2h0enl3dWhjdHFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA5NTQ1NDIsImV4cCI6MjAxNjUzMDU0Mn0.eQguzFizX0XkKD14buKaW6rMDFm7Pc-0TEI6B7v9npM";

export const supabase = createClient(URL, import.meta.env.VITE_KEY);

//password: 7vZ03EViK5gfsspC
