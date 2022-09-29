import FilmsLoadService from './films-request';

const gallery = document.querySelector('.film__list');
const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const filmsLoadService = new FilmsLoadService();

export default async function renderFilmCard(films) {
  // отримання масиву id-жанрів разом з назвами

  const responceGenres = await filmsLoadService.requestGenres();
  const getGenres = await responceGenres.genres;

  // рендер карточки фільма та створення фільмотеки

  const markup = films
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      //  приведення дати до шаблону

      const date = release_date.slice(0, 4);

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

      //перевірка на наявність постера

      let poster = '';
      if (poster_path === null) {
        poster =  `src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg" width="100%" height="100%"`

      } else poster = `src ="${BASE_URL}${poster_path}"`

      
      //  верстка готової карточки фільма

      return `
        <li class="film__card" id=${id}>
            <a class="film__poster">
              <img class="film__image" ${poster} alt="${title}" loading="lazy" />
            </a>
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


