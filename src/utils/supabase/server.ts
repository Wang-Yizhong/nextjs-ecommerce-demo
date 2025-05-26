import { createServerComponentClient } from '@supabase/auth-helpers-next.js'
import { cookies } from 'next/headers'

export const createClient = () => {
  return createServerComponentClient({ cookies })
}