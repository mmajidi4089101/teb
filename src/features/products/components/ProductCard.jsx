import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, text }) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div
      dir={lang == 'fa' ? 'rtl' : 'ltr'}
      className="p-4 rounded-2xl shadow hover:shadow-lg transition bg-white relative"
    >
      <div className="absolute bg-red-500 text-white left-0 px-2 rounded-r-lg text-sm py-1">
        {product.discount * 100}%
      </div>
      <Link to={`./${product.id}`}>
        <img
          src={product.images[0]}
          alt={text.title}
          className="w-full h-48 object-contain rounded"
        />
      </Link>
      <h2 className="font-bold text-lg mt-2">{text.title}</h2>
      <p className="text-gray-400 mt-1 truncate">
        {text.description}
      </p>

      <div className="mt-2 flex justify-between items-center">
        <span className="text-green-700 font-bold">
          {(product.price * (1 - product.discount)).toLocaleString()}{' '}
          تومان
        </span>
      </div>
    </div>
  );
}
