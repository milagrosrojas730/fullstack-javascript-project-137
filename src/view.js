/* eslint-disable no-param-reassign */

const renderFeedback = (input, feedback, message, isValid) => {
  if (isValid) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
    feedback.style.display = 'none';
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    feedback.textContent = message;
    feedback.style.display = 'block';
  }
};

export default renderFeedback;
