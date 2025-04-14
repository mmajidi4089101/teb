import React from 'react';
import { useTranslation } from 'react-i18next';

const MajaleSalamat = () => {
    const { t } = useTranslation("nav");
    return <div>{t("majaleh")}</div>;
};

export default MajaleSalamat; 
