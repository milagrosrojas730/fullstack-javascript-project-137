import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import es from './locales/es.js';
import en from './locales/en.js';

const i18nInstance = i18next
  .use(Backend)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources: {
      es,
      en,
    },
  });

window.i18next = i18next;

export { i18next, i18nInstance };
