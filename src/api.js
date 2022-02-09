import { createClient } from '@supabase/supabase-js'
console.log(process.env);
export const supabase = createClient(
  "https://fzzbgyytozecnookqbir.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM3NDQyMywiZXhwIjoxOTU4OTUwNDIzfQ.JsNXCNRHvhNuNqWcgFQCIz6KJR5tfsnHYQulHu8cc1U"
)