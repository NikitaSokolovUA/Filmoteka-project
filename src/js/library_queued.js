import renderFilmCard from './renderCard';
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

function loadQueuedFilms() {
  queuedListBtn.classList.add('active-js');
  filmList.innerHTML = '';
  const queuedFilms = JSON.parse(localStorage.getItem(queuedKeyStorage));
  if (queuedFilms && queuedFilms.length > 0) {
    renderFilmCard(queuedFilms.slice(0, 20));
    const paginator = new FilmsPagination(null, queuedFilms.length);
    paginator.pagination.on('afterMove', paginatePage);
  } else {
    filmList.innerHTML =
      'You haven`t added anything yet. Add quickly, let`s enjoy! :)';
    Notiflix.Notify.failure('No films in your queue!');
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
