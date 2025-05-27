import { create } from 'zustand';

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

type CartState = {
  items: CartItem[];
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  totalItems: number;
  totalPrice: number;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  add: (item) => {
    const items = get().items;
    const exists = items.find((i) => i.id === item.id);
    if (exists) {
      exists.quantity += item.quantity;
    } else {
      items.push({ ...item });
    }
    set({ items });
  },
  remove: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
  increase: (id) =>
    set({
      items: get().items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      ),
    }),
  decrease: (id) =>
    set({
      items: get().items
        .map((i) =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter((i) => i.quantity > 0),
    }),
  totalItems: 0,
  totalPrice: 0,
}));
