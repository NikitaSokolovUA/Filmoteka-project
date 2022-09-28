const gallery = document.querySelector('.film__list');
const BASE_URL = 'https://image.tmdb.org/t/p/w342';

// рендер карточки фільма та створення фільмотеки

export default function renderFilmCard(films) {
  const markup = films
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      return `
        <li class="film__card" id=${id}>
            <a><img src = "${BASE_URL}${poster_path}" alt="${title}" loading="lazy" /></a>
            <div class="film__info">
                <p class="film__title">${title}</p>
                <p class="film__genre">${genre_ids}</p>
                <p class="film__relis">${release_date}</p>
            </div>
        </li>
    `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
