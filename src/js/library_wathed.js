import renderFilmCard from './renderCard';
import watchedKeyStorage from './watched-list';
import FilmsPagination from './pagination';

function loadWatchedFilms() {
  const watchedFilms = JSON.parse(localStorage.getItem(watchedKeyStorage));
  renderFilmCard(watchedFilms.slice(0, 20));
  const paginator = new FilmsPagination(null, watchedFilms.length);
  paginator.pagination.on('afterMove', paginatePage);
}
loadWatchedFilms();

function paginatePage(event) {
  const currentPage = event.page;
  const watchedFilms = JSON.parse(localStorage.getItem(watchedKeyStorage));
  const films = document.querySelector('.film__list');
  films.innerHTML = '';
  films_array = watchedFilms.slice(currentPage * 20 - 20, currentPage * 20);
  renderFilmCard(films_array);
}
