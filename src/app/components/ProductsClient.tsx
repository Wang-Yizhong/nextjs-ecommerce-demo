'use client';

import { useT } from '@/lib/translations';

export default function ProductsClient({ products }: { products: any[] }) {
  const t = useT();

  return (
    <div>
      <h1>{t('product_list_title')}</h1>
      {products.map(product => (
        <div key={product.id}>
          <h2>{t(product.name_key)}</h2>
          <p>{t(product.description_key)}</p>
        </div>
      ))}
    </div>
  );
}
