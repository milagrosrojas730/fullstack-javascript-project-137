import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import es from './locales/es.js';
import en from './locales/en.js';

i18next
  .use(Backend)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources: {
      en, // ✅ ya incluye "translation"
      es,
    },
  });

window.i18next = i18next;

export default i18next;
