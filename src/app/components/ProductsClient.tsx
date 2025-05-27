'use client';

import { useEffect, useState } from 'react';
import { useLanguageStore } from '../../store/uselanguageStore';
import { supabase } from '@/utils/supabase/client';

export default function ProductsClient({ products }: { products: any[] }) {
  const lang = useLanguageStore((s) => s.language);
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchTranslations = async () => {
      const { data } = await supabase
        .from('translations')
        .select('translation_key, text')
        .eq('language_code', lang);

      const mapped = Object.fromEntries(
        (data || []).map((t) => [t.translation_key, t.text])
      );
      setTranslations(mapped);
    };

    fetchTranslations();
  }, [lang]);

  const t = (key: string) => translations[key] || key;

  return (
    <div>
      <h1>{t('product_list_title')}</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{t(product.name_key)}</h2>
          <p>{t(product.description_key)}</p>
        </div>
      ))}
    </div>
  );
}