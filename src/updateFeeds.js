import axios from 'axios';
import _ from 'lodash';

const PROXY_URL = 'https://api.allorigins.win/get?url=';

const parseRSS = (rssData) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(rssData, 'application/xml');

  if (doc.querySelector('parsererror')) {
    throw new Error('Error al parsear el feed RSS');
  }

  const items = doc.querySelectorAll('item');
  return Array.from(items).map((item) => ({
    title: item.querySelector('title').textContent,
    link: item.querySelector('link').textContent,
    description: item.querySelector('description')?.textContent || '',
    id: _.uniqueId(),
  }));
};

const updateFeeds = (state) => {
  const promises = state.feeds.map((feed) =>
    axios.get(`${PROXY_URL}${encodeURIComponent(feed.url)}`)
      .then((response) => {
        const { contents } = response.data;
        const newPosts = parseRSS(contents);

        const existingLinks = new Set(state.posts.map((post) => post.link));
        const uniqueNewPosts = newPosts.filter((post) => !existingLinks.has(post.link));

        if (uniqueNewPosts.length > 0) {
          state.posts.push(...uniqueNewPosts);
        }
      })
      .catch((error) => console.error(`Error al actualizar feed ${feed.url}:`, error))
  );

  Promise.all(promises).finally(() => {
    setTimeout(() => updateFeeds(state), 5000);
  });
};

export default updateFeeds;
