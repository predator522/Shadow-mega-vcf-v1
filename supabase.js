<script type="module">
  import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

  const SUPABASE_URL = "https://jyngmjqcwvwhjizwqeug.supabase.co"
  const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5bmdtanFjd3Z3aGppendxZXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg2MjAyNDQsImV4cCI6MjA3NDE5NjI0NH0.Yn4aRSFNBBVvab0UvZfLaiznbyfrB0pOorpLbrcusKE"

  export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
</script>
