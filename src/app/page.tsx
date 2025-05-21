import { supabase } from '@/utils/supabase/client'

export default async function Home() {
  const { data } = await supabase.from('products').select('*').limit(1)
  
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold">Ecommerce Demo</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  )
}