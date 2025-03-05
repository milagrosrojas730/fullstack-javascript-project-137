import * as yup from 'yup';

export const validateUrl = (url, existingFeeds) => {
  const schema = yup.object().shape({
    url: yup
      .string()
      .url('La URL ingresada no es válida')
      .notOneOf(existingFeeds, 'El feed ya ha sido agregado')
      .required('El campo no puede estar vacío'),
  });

  return schema.validate({ url });
};