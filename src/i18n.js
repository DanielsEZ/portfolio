import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './translations/en.json';
import esTranslations from './translations/es.json';

// Obtener el idioma guardado o usar el predeterminado
const savedLanguage = localStorage.getItem('userLanguage') || 'es';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: savedLanguage, // Usar el idioma guardado
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },
  });

export default i18n;
