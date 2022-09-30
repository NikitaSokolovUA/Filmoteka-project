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
      let date = '';
      if (release_date === "") {
        date = 'no release date';
      } else date = release_date.slice(0, 4);
      //  перетворення id-жанрів у нормальні назви


      const genresFilm = genre_ids;
      const addGenresArray = [];
      genresFilm.forEach(id => {
        getGenres.forEach(genre => {
          if (id === genre.id) {
            addGenresArray.push(genre.name);
          }
        });
      });
      let genre = addGenresArray.slice(0, 2).join(', ');
      if (genre_ids.length > 2) {
        genre += ', Other';
      }
      if (genre_ids.length === 0) {
        genre = 'I have not ganres';
      }


      let poster = '';
      if (poster_path === null) {
        poster =  `src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"`

      } else poster = `src ="${BASE_URL}${poster_path}"`
      //  верстка готової карточки фільма
       return `
        <li class="film__card" id=${id}>
            <div class="film__poster">
              <img class="film__image" ${poster} alt="${title}" loading="lazy" />
            </div>
            <div class="film__info">
                <p class="film__title-main">${title}</p>
                <p class="film__ganre">${genre} | ${date}</p>
            </div>
        </li>
    `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);


}


 
