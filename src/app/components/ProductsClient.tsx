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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {products.map(product => (
    <div
      key={product.id}
      className="rounded-xl shadow-sm border p-4 hover:shadow-lg transition cursor-pointer"
    >
      <img
        src={product.image_url}
        alt={product.name_key}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold">{t(product.name_key)}</h2>
      <p className="text-gray-600 text-sm">{t(product.description_key)}</p>
      <p className="text-primary mt-2 text-right font-bold text-base">
        € {product.price.toFixed(2)}
      </p>
    </div>
  ))}
</div>
  );
}