import * as yup from 'yup';
import i18n from './i18n';

yup.setLocale({
  mixed: {
    required: i18n.t('No debe estar vacío'),
  },
  string: {
    url: i18n.t('El enlace debe ser una URL válida'),
  }
});

export default yup;
