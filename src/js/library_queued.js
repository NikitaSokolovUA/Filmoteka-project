import renderFilmCard from './renderCard';
import renderNotification from '../templates/renderNotification';
import { queuedKeyStorage } from './queued-list';
import FilmsPagination from './pagination';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '10px',
  opacity: 1,
});

const queuedListBtn = document.querySelector('.queued-btn-js');
const filmList = document.querySelector('.film__list');
const filmPagination = document.querySelector('.tui-pagination');

export function loadQueuedFilms() {
  filmPagination.innerHTML = '';
  queuedListBtn.classList.add('active-js');
  filmList.innerHTML = '';
  const queuedFilms = JSON.parse(localStorage.getItem(queuedKeyStorage));

  if (queuedFilms && queuedFilms.length > 0) {
    renderFilmCard(queuedFilms.slice(0, 20), 'queue');

    const paginator = new FilmsPagination(null, queuedFilms.length);
    paginator.pagination.on('afterMove', paginatePage);
    return;
  } else {
    filmList.innerHTML = renderNotification();
    Notiflix.Notify.failure('No films in your queue!');
    return;
  }
}

queuedListBtn.addEventListener('click', loadQueuedFilms);

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
