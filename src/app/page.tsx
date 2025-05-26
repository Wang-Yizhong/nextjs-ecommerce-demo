import { supabase } from '@/utils/supabase/client';
import ProductsClient from '@/app/components/ProductsClient';
import { TranslationProvider } from '@/lib/translations';
import LanguageSelector from '@/app/components/languageSwicher';
import { cookies } from 'next/headers';

export default async function ProductsPage() {
  // ✅ Get the cookie store and await it, because `cookies()` is async in this context
  const cookieStore = await cookies();
  const userLang = cookieStore.get('locale')?.value || 'de';

  // ✅ Fetch products from the `products` table
  const { data: products = [] } = await supabase
    .from('products')
    .select('*');

  // ✅ Fetch translations from the `translations` table based on the current language
  const { data: translationsRaw = [] } = await supabase
    .from('translations')
    .select('translation_key, text')
    .eq('language_code', userLang);

  // ✅ Convert the translation array into a key-value object
  const translations = Object.fromEntries(
    translationsRaw.map(({ translation_key, text }) => [translation_key, text])
  );

  // ✅ Render the language selector and the product list inside the translation provider
  return (
    <TranslationProvider translations={translations}>
      <LanguageSelector />
      <ProductsClient products={products} />
    </TranslationProvider>
  );
}