import renderModalCard from '../templates/renderModalCard';
// import defaultExport, * as name  from './modal'
import {
  addWatchedBtnListener,
  removeWatchedBtnListener,
} from './watched-list';
import { loadWatchedFilms } from './library_watched';
import { addQueuedBtnListener, removeQueuedBtnListener } from './queued-list';

const refs = {
  modal: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  listOfFilm: document.querySelector('.film__list'),
  card: document.querySelector('.modal__container'),
  body: document.querySelector('body'),
};

refs.listOfFilm.addEventListener('click', onClickFilmStorage);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modal.addEventListener('click', onClickBackdropModalClose);



  const allFilms = backListFromStorages()

function onClickFilmStorage(e) {
  const chosenFilm = e.target.parentNode.parentNode;

  const selectedFilm = allFilms.find(
    film => film.id === Number(chosenFilm.id)
  );

   if (chosenFilm.nodeName !== 'LI') {
    return;
  }

  refs.card.innerHTML = renderModalCard(selectedFilm);
  onOpenModal();
}

function onOpenModal() {
  window.addEventListener('keydown', inKeyDownEscModalClose);
  refs.modal.classList.toggle('backdrop--is-hidden');
  refs.body.classList.toggle('modal-open');
  addWatchedBtnListener();
  addQueuedBtnListener();
}

function onCloseModal() {
  window.removeEventListener('keydown', inKeyDownEscModalClose);
  refs.modal.classList.toggle('backdrop--is-hidden');
  refs.body.classList.toggle('modal-open');
  removeWatchedBtnListener();
  removeQueuedBtnListener();
  // loadWatchedFilms();
}

function onClickBackdropModalClose(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}

function inKeyDownEscModalClose(event) {
  const KEY_CODE_ESCAPE = 'Escape';

  if (event.code === KEY_CODE_ESCAPE) {
    onCloseModal();
  }
}

function backListFromStorages() {
  const filmsWatched = localStorage.getItem('watchedKey');
  const filmsQueque = localStorage.getItem('queuedKey');
  if (filmsWatched && filmsQueque) {
      
      const parseWatchedFilms = JSON.parse(filmsWatched);
      
      const parseQueQueFilms = JSON.parse(filmsQueque);

    return parseWatchedFilms.concat(parseQueQueFilms)
  }
  if (filmsWatched) {
    return JSON.parse(filmsWatched)
  }
  if (filmsQueque) {
    return JSON.parse(filmsQueque)
  }
}