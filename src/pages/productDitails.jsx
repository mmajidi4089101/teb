import { useNavigate, useParams } from 'react-router-dom';
import products from '../features/products/products';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useCartStore } from '../store/cartStore';

function ProductDetails() {
  const { productId } = useParams();
  const { t, i18n } = useTranslation('products');
  const product = products.find((p) => p.id === parseInt(productId));
  const [imageIndex, setImageIndex] = useState(0);
  const { addToCart } = useCartStore();
  const navigate = useNavigate();
  const lang = i18n.language;

  if (!product) return <p>Product not found.</p>;

  const text = t(`${product.key}`, { returnObjects: true });

  const handleNext = () => {
    setImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handlePrev = () => {
    setImageIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-[1rem]">
      <button className="text-xl" onClick={() => navigate(-1)}>
        ⬅
      </button>

      <div dir={lang == 'fa' ? 'rtl' : 'ltr'}>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="relative md:w-1/2">
            <img
              src={product.images[imageIndex]}
              alt={text.title}
              className="w-full h-64 object-contain rounded"
            />
            <button
              onClick={handlePrev}
              className="absolute bottom-1 left-2 bg-white  size-8 rounded-full shadow"
            >
              ◀
            </button>
            <button
              onClick={handleNext}
              className="absolute bottom-1 right-2 bg-white  size-8 rounded-full shadow"
            >
              ▶
            </button>
          </div>
          <div className="flex items-center md:flex-col">
            {product.images.map((img) => (
              <img key={img} src={img} width={80} height={80} />
            ))}
          </div>
        </div>

        <h1 className="text-2xl font-bold mt-4">{text.title}</h1>
        <p className="text-gray-600 mt-2">{text.description}</p>
        <p className="text-sm text-gray-500 mt-1">{text.details}</p>

        <p className="text-green-700 font-bold mt-4">
          {(product.price * (1 - product.discount)).toLocaleString()}{' '}
          {lang === 'fa' ? 'تومان' : 'Toman'}
        </p>

        <p className="text-xs text-gray-400 mt-1">
          {lang === 'fa'
            ? `موجودی: ${product.stock}`
            : `Stock: ${product.stock}`}
        </p>

        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={() => addToCart(product)}
        >
          {lang === 'fa' ? 'افزودن به سبد خرید' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
