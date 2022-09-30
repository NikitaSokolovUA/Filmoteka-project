import renderFilmCard from './renderCard';
import { watchedKeyStorage } from './watched-list';
import FilmsPagination from './pagination';

const watchedListBtn = document.querySelector('.watched-btn-js');

function loadWatchedFilms() {
  watchedListBtn.classList.add('active-js');
  const watchedFilms = JSON.parse(localStorage.getItem(watchedKeyStorage));
  if (watchedFilms) {
    renderFilmCard(watchedFilms.slice(0, 20));
    const paginator = new FilmsPagination(null, watchedFilms.length);
    paginator.pagination.on('afterMove', paginatePage);
  }
}

watchedListBtn.addEventListener('click', loadWatchedFilms);

function paginatePage(event) {
  const currentPage = event.page;
  const watchedFilms = JSON.parse(localStorage.getItem(watchedKeyStorage));
  const films = document.querySelector('.film__list');
  films.innerHTML = '';
  const films_array = watchedFilms.slice(
    currentPage * 20 - 20,
    currentPage * 20
  );
  renderFilmCard(films_array);
}
