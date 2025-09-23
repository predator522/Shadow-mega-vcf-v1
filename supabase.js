import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const SUPABASE_URL = 'https://qfpwgqjyrlbxilglkams.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmcHdncWp5cmxieGlsZ2xrYW1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2MjgzNzYsImV4cCI6MjA3NDIwNDM3Nn0.-fJcIFYoJtJSfx5VnHkMcj6iTt-fIbN9dokDOQ30VB0'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
