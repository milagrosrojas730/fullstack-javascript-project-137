import onChange from 'on-change';

const renderError = (elements, message) => {
  const { input, feedback } = elements;

  if (message) {
    input.classList.add('is-invalid');
    feedback.textContent = message;
    feedback.classList.add('text-danger');
  } else {
    input.classList.remove('is-invalid');
    feedback.textContent = '';
  }
};

const renderSuccess = (elements) => {
  const { input, feedback } = elements;
  input.classList.remove('is-invalid');
  input.value = '';
  input.focus();
  feedback.textContent = 'Feed agregado correctamente';
  feedback.classList.add('text-success');
};

export default (state, elements) =>
  onChange(state, (path, value) => {
    if (path === 'form.error') {
      renderError(elements, value);
    }
    if (path === 'form.success') {
      renderSuccess(elements);
    }
  });
