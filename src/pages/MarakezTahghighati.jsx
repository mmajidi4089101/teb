import React from 'react';
import { useTranslation } from 'react-i18next';
import './MarakezTahghighati.css'; // فایل CSS برای استایل

// لیست تصاویر
const images = [
  { src: '/images/images.png', alt: 'مرکز تحقیقاتی ۱' },
  { src: '/images/images (3).png', alt: 'مرکز تحقیقاتی ۲' },
  { src: '/images/images (1).png', alt: 'مرکز تحقیقاتی ۳' },
  { src: '/images/research-center4.jpg', alt: 'مرکز تحقیقاتی ۴' },
  { src: '/images/research-center4.jpg', alt: 'مرکز تحقیقاتی ۴' },
  { src: '/images/research-center4.jpg', alt: 'مرکز تحقیقاتی ۴' },
  { src: '/images/research-center4.jpg', alt: 'مرکز تحقیقاتی ۴' },
  { src: '/images/research-center4.jpg', alt: 'مرکز تحقیقاتی ۴' },
  { src: '/images/research-center4.jpg', alt: 'مرکز تحقیقاتی ۴' },
  { src: '/images/research-center4.jpg', alt: 'مرکز تحقیقاتی ۴' },

  
];

export const MarakezTahghighati = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('hoMarakezTahghighatime')}</h1>

      <div className="image-gallery">
        {images.map((img, index) => (
          <div key={index} className="image-box">
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
