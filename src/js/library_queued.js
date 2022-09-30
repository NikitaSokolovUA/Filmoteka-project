import renderFilmCard from './renderCard';
import { queuedKeyStorage } from './queued-list';
import FilmsPagination from './pagination';

function loadQueuedFilms() {
  const queuedFilms = JSON.parse(localStorage.getItem(queuedKeyStorage));
  if (queuedFilms) {
    renderFilmCard(queuedFilms.slice(0, 20));
    const paginator = new FilmsPagination(null, queuedFilms.length);
    paginator.pagination.on('afterMove', paginatePage);
  }
}
loadQueuedFilms();

function paginatePage(event) {
  const currentPage = event.page;
  const queuedFilms = JSON.parse(localStorage.getItem(queuedKeyStorage));
  const films = document.querySelector('.film__list');
  films.innerHTML = '';
  const films_array = queuedFilms.slice(
    currentPage * 20 - 20,
    currentPage * 20
  );
  renderFilmCard(films_array);
}