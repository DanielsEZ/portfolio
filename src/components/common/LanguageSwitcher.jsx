import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = ({ className = '' }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Guardar la preferencia de idioma en localStorage
    localStorage.setItem('userLanguage', lng);
  };

  // Cargar el idioma guardado al montar el componente
  useEffect(() => {
    const savedLanguage = localStorage.getItem('userLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {['es', 'en'].map((lng) => (
        <motion.button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
            currentLanguage === lng
              ? 'bg-primary text-white'
              : 'text-gray-300 hover:text-white hover:bg-gray-700'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={i18n.getDataByLanguage(lng)?.translation?.language?.[lng] || lng.toUpperCase()}
        >
          {i18n.getDataByLanguage(lng)?.translation?.language?.[lng] || lng.toUpperCase()}
        </motion.button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
