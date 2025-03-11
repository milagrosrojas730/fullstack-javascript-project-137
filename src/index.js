import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import './i18n';
const form = document.getElementById('rss-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const input = document.getElementById('rss-url');
  const url = input.value.trim();

  if (!url) {
    console.error('URL vacía');
    return;
  }

  fetchRSS(url)
    .then((data) => console.log('RSS obtenido:', data))
    .catch((error) => console.error('Error al obtener RSS:', error));
});

function fetchRSS(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.startsWith('http')) {
        resolve(`Contenido RSS de ${url}`);
      } else {
        reject(new Error('URL no válida'));
      }
    }, 1000);
  });
}
