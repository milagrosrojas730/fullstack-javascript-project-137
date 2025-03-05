import { validateUrl } from './validation.js';
import initView from './view.js';

export default () => {
  const state = {
    feeds: [],
    form: {
      error: null,
      success: false,
    },
  };

  const elements = {
    form: document.querySelector('.rss-form'),
    input: document.querySelector('.rss-input'),
    feedback: document.querySelector('.feedback'),
  };

  const watchedState = initView(state, elements);

  elements.form.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = elements.input.value.trim();

    validateUrl(url, state.feeds)
      .then(() => {
        state.feeds.push(url);
        watchedState.form.error = null;
        watchedState.form.success = true;
      })
      .catch((err) => {
        watchedState.form.error = err.message;
      });
  });
};
