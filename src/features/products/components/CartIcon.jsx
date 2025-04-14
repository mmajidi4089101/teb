import React, { useState } from 'react';
import { useCartStore } from '../../../store/cartStore';
import CartModal from './CartModal';

export default function CartIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCartStore();
  const totalItems = cartItems.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  return (
    <div>
      <button className="relative" onClick={() => setIsOpen(true)}>
        🛒
        {totalItems > 0 && (
          <span className="absolute  top-2 -right-2 bg-red-500 rounded-full px-1 text-xs text-white">
            {totalItems}
          </span>
        )}
      </button>
      {isOpen && <CartModal onClose={() => setIsOpen(false)} />}
    </div>
  );
}
