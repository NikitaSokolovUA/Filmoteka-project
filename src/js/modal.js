import FilmsLoadService from './films-request';
import renderModalCard from '../templates/renderModalCard';
import {
  addWatchedBtnListener,
  removeWatchedBtnListener,
} from './watched-list';
import Notiflix from 'notiflix';

// імпорт для кнопки add to queue
import { addQueuedBtnListener, removeQueuedBtnListener } from './queued-list';

const refs = {
  modal: document.querySelector('[data-modal]'),
  closeModalBtn: document.querySelector('[data-modal-close]'),
  listOfFilm: document.querySelector('.film__list'),
  card: document.querySelector('.modal__container'),
  body: document.querySelector('body'),
};

refs.listOfFilm.addEventListener('click', onClickFilm);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.modal.addEventListener('click', onClickBackdropModalClose);

async function onClickFilm(e) {
  try {
    const chosenFilm = e.target.parentNode.parentNode;

  const fls = new FilmsLoadService();
  fls.id = chosenFilm.id;
  const data = await fls.requestFilmDetails();

  if (chosenFilm.nodeName !== 'LI') {
    return;
  }

  refs.card.innerHTML = renderModalCard(data);
    onOpenModal();
  }
  catch (err) {
    console.error('Set state error: ', err.message);
    Notiflix.Notify.failure('Sorry some problems on Server');
  }
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
