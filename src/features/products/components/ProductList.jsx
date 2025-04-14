import { useTranslation } from 'react-i18next';
import products from '../products';
import ProductCard from './ProductCard';

function ProductList() {
  const { t } = useTranslation('products');

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => {
        const text = t(`${product.key}`, {
          returnObjects: true,
        });

        return (
          <ProductCard
            key={product.id}
            product={product}
            text={text}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
