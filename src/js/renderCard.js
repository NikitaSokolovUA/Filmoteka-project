import FilmsLoadService from './films-request';

const gallery = document.querySelector('.film__list');
const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const filmsLoadService = new FilmsLoadService();

export default async function renderFilmCard(films) {
  // отримання масиву id-жанрів разом з назвами

  if (!localStorage.getItem('ids')) {
    const responceGenres = await filmsLoadService.requestGenres();
    const getGenres = await responceGenres.genres;
    localStorage.setItem('ids', JSON.stringify(getGenres));
  }

  // рендер карточки фільма та створення фільмотеки
  gallery.innerHTML = '';
  const markup = films
    .map(({ id, poster_path, title, genre_ids, release_date }) => {
      //  приведення дати до шаблону
      let date = '';
      if (release_date === '') {
        date = 'no release date';
      } else date = release_date.slice(0, 4);
      //  перетворення id-жанрів у нормальні назви

      const genre = addIdToGanres(genre_ids);

      let poster = '';
      if (poster_path === null) {
        poster = `src = "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"`;
      } else poster = `src ="${BASE_URL}${poster_path}"`;
      //  верстка готової карточки фільма
      return `
        <li class="film__card" id=${id}>
          <div class="film__poster">
            <img class="film__image" ${poster} alt="${title}" loading="lazy" />
          </div>
          <div class="film__info">
            <p class="film__title-main">${addAudit(title)}</p>
            <p class="film__ganre">${genre} | ${addAudit(date)}</p>
          </div>
        </li>
    `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

function addIdToGanres(ids) {
  const getGenres = localStorage.getItem('ids');
  const parsedGanres = JSON.parse(getGenres);
  const addGenresArray = [];

  // <<<<<<< HEAD
  // =======
  if (ids.length === 0) {
    return 'Some Ganres';
  }

  // >>>>>>> main

  parsedGanres.map(ganre => {
    ids.map(id => {
      if (ganre.id === id) {
        addGenresArray.push(ganre.name);
      }
    });
  });
  if (addGenresArray.length > 2) {
    const deletedItems = addGenresArray.splice(0, 2);

    return `${deletedItems.join(', ')}, others`;
  }

  return addGenresArray.join(', ');
}

function addAudit(string) {
  if (string.length === 0) {
    return 'no_info';
  }
  return string;
}
