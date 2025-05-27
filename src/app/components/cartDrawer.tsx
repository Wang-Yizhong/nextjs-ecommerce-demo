"use client";

import { useState } from "react";
import CartButton from "../components/cartButton";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";

export default function CartDrawerWrapper() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, totalPrice, increase, decrease, remove } = useCartStore();

  return (
    <>
      {/* Floating Cart Button */}
      <CartButton onClick={() => setIsOpen(true)} />

      {/* Drawer */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-white shadow-xl rounded-xl border p-4 z-50">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">🛒 Ihr Warenkorb</h2>
            <button
              className="text-sm text-gray-500 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
          </div>

          <div className="space-y-4 max-h-80 overflow-y-auto">
            {items.length === 0 ? (
              <p className="text-gray-500 text-sm">Ihr Warenkorb ist leer.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button onClick={() => decrease(item.id)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increase(item.id)} className="px-2 py-1 bg-gray-200 rounded">+</button>
                    </div>
                  </div>
                  <button
                    onClick={() => remove(item.id)}
                    className="text-red-500 text-sm"
                  >
                    🗑️
                  </button>
                </div>
              ))
            )}
          </div>

          {items.length > 0 && (
            <div className="mt-4 border-t pt-3 text-right">
              <p className="text-sm font-semibold">Gesamt: € {totalPrice.toFixed(2)}</p>
              <button className="mt-2 bg-primary text-white px-4 py-2 rounded text-sm">
                Zur Kasse
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
