import { create } from 'zustand';

export const useCartStore = create((set) => {
  // ابتدا بررسی می‌کنیم که آیا داده‌های cart در localStorage موجود است یا خیر
  const savedCart = JSON.parse(localStorage.getItem('cartItems')) || [];

  return {
    cartItems: savedCart, // از داده‌های ذخیره‌شده استفاده می‌کنیم یا آرایه خالی به‌طور پیش‌فرض
    addToCart: (product) =>
      set((state) => {
        const existing = state.cartItems.find(
          (item) => item.id === product.id
        );
        if (existing) {
          const updatedItems = state.cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
          // ذخیره‌سازی در localStorage
          localStorage.setItem('cartItems', JSON.stringify(updatedItems));
          return { cartItems: updatedItems };
        } else {
          const updatedItems = [
            ...state.cartItems,
            { ...product, quantity: 1 },
          ];
          // ذخیره‌سازی در localStorage
          localStorage.setItem('cartItems', JSON.stringify(updatedItems));
          return { cartItems: updatedItems };
        }
      }),
    removeFromCart: (productId) =>
      set((state) => {
        const updatedItems = state.cartItems.filter(
          (item) => item.id !== productId
        );
        // ذخیره‌سازی در localStorage
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        return { cartItems: updatedItems };
      }),
    increaseQty: (productId) =>
      set((state) => {
        const updatedItems = state.cartItems.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        // ذخیره‌سازی در localStorage
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        return { cartItems: updatedItems };
      }),
    decreaseQty: (productId) =>
      set((state) => {
        const updatedItems = state.cartItems
          .map((item) =>
            item.id === productId
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);
        // ذخیره‌سازی در localStorage
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
        return { cartItems: updatedItems };
      }),
  };
});
