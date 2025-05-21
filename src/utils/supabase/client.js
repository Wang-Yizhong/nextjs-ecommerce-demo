import {createClient} from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
if(!supabaseUrl || !supabaseAnonket){
    throw new Error('Supabase URL and Anon key must be provided')
}
export const supabase = createClient(supabaseUrl, supabaseKey)