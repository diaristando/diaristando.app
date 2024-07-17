import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptbR from '../assets/locale/ptBr.json';

export const supportedLanguages = {
  ptBr: 'Português',
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ptBr: {
      translation: ptbR,
    },
  },
  lng: 'ptBr',
  fallbackLng: 'ptBr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
