'use client';

import { useCartStore } from '@/store/useCartStore';

type Props = {
  onClick: () => void;
};

export default function CartButton({ onClick }: Props) {
  const { items } = useCartStore();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
    >
      🛒 {totalItems} Artikel – € {totalPrice.toFixed(2)}
    </button>
  );
}