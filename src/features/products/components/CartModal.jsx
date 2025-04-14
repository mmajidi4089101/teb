import { useTranslation } from 'react-i18next';
import { useCartStore } from '../../../store/cartStore';

function CartModal({ onClose }) {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } =
    useCartStore();
  const { t, i18n } = useTranslation('products');

  const totalPrice = cartItems.reduce(
    (acc, item) =>
      acc + item.price * (1 - item.discount) * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-end items-start  z-50 overflow-y-auto">
      <div className="bg-white w-full max-w-md rounded-l-lg shadow-lg p-4 relative   right-0">
        <button
          className="absolute top-2 right-2 text-xl"
          onClick={onClose}
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">
          {i18n.language === 'fa' ? 'سبد خرید' : 'Shopping Cart'}
        </h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">
            {i18n.language === 'fa'
              ? 'سبد خرید خالی است.'
              : 'Cart is empty.'}
          </p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className=" border p-4 rounded-3xl">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-sm">
                    {t(`${item.key}.title`)}
                  </h3>
                  <img
                    src={item.images[0]}
                    width={80}
                    height={80}
                    alt={t(`${item.key}.title`)}
                  />
                </div>
                <div className="flex items-center justify-between rtl:space-x-reverse">
                  <div className="flex space-x-2">
                    <button onClick={() => decreaseQty(item.id)}>
                      ➖
                    </button>
                    <button onClick={() => increaseQty(item.id)}>
                      ➕
                    </button>
                    <button onClick={() => removeFromCart(item.id)}>
                      🗑
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    {item.quantity} ×{' '}
                    {(
                      item.price *
                      (1 - item.discount)
                    ).toLocaleString()}{' '}
                    {i18n.language === 'fa' ? 'تومان' : 'Toman'}
                  </p>
                </div>
              </div>
            ))}

            <div className="text-right font-bold mt-4">
              {i18n.language === 'fa'
                ? `جمع کل: ${totalPrice.toLocaleString()} تومان`
                : `Total: ${totalPrice.toLocaleString()} Toman`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartModal;
