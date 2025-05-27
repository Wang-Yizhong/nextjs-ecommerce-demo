import { supabase } from '@/utils/supabase/client';
import ProductsClient from '@/app/components/ProductsClient';
import LanguageSelector from '../app/components/languageSwicher';
import CartDrawer from '../app/components/cartDrawer';

export default async function ProductsPage() {
  const { data: products = [] } = await supabase
    .from('products')
    .select('*');

  return (
    <div className="p-4">
      <LanguageSelector />
      <ProductsClient products={products} />
      <CartDrawer/>
    </div>
  );
}
