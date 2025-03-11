import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import es from './sr/es.js';
import en from './sr/en.js';

i18next
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

export default i18next;