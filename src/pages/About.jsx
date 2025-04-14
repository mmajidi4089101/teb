// About.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation('nav');

  return (
    <div>
      <h1>{t('about')}</h1>
    </div>
  );
};
