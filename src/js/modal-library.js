import renderModalCard from '../templates/renderModalCard';
// import defaultExport, * as name  from './modal'
import {
  addWatchedBtnListener,
  removeWatchedBtnListener,
} from './watched-list';
import { loadWatchedFilms } from './library_watched';

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

function onClickFilmStorage(e) {
  const chosenFilm = e.target.parentNode.parentNode;

  const films = localStorage.getItem('watchedKey');
  const parseFilms = JSON.parse(films);

  const selectedFilm = parseFilms.find(
    film => film.id === Number(chosenFilm.id)
  );

  refs.card.innerHTML = renderModalCard(selectedFilm);
  onOpenModal();

  if (chosenFilm.nodeName !== 'LI') {
    return;
  }
}

function onOpenModal() {
  window.addEventListener('keydown', inKeyDownEscModalClose);
  refs.modal.classList.toggle('backdrop--is-hidden');
  refs.body.classList.toggle('modal-open');
  addWatchedBtnListener();
}

function onCloseModal() {
  window.removeEventListener('keydown', inKeyDownEscModalClose);
  refs.modal.classList.toggle('backdrop--is-hidden');
  refs.body.classList.toggle('modal-open');
  removeWatchedBtnListener();
  loadWatchedFilms();
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
