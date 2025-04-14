// src/pages/MarakezTahghighati.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export const MarakezTahghighati = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('hoMarakezTahghighatime')}</h1>
    </div>
  );
};
