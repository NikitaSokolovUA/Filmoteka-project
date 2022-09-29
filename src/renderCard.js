import FilmsLoadService from './films-request';

const gallery = document.querySelector('.film__list');
const BASE_URL = 'https://image.tmdb.org/t/p/w342';
const filmsLoadService = new FilmsLoadService();

export default async function renderFilmCard(films) {
  // отримання масиву id-жанрів разом з назвами

  const responceGenres = await filmsLoadService.requestGenres();
  const getGenres = await responceGenres.genres;

  // рендер карточки фільма та створення фільмотеки

  const markup = films
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      //  приведення дати до шаблону
      let date = '';
      if (release_date) {
        date = release_date.slice(0, 4);
      }
      //  перетворення id-жанрів у нормальні назви

      const genresFilm = genre_ids;
      let addGenresArray = [];
      genresFilm.forEach(id => {
        getGenres.forEach(genre => {
          if (id === genre.id) {
            addGenresArray.push(genre.name);
          }
        });
      });
      const genre = addGenresArray.join(', ');

      //  верстка готової карточки фільма

      return `
        <li class="film__card" id=${id}>
            <a><img src = "${BASE_URL}${poster_path}" alt="${title}" loading="lazy" /></a>
            <div class="film__info">
                <p class="film__title">${title}</p>
                <p class="film__ganre">${genre} | ${date}</p>
            </div>
        </li>
    `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
