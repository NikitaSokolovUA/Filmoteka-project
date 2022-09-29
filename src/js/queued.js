// import FilmsLoadService from './films-request';
// import { saveList, loadList } from './storage-utils';
import { Notify } from 'notiflix';

queueBtn = document.querySelector('.add-queue');
removeQueueBtn = document.querySelector('.remove-queue');
queuedGallery = document.querySelector('.queued-gallery');

const queueStoragedFilms = JSON.parse(localStorage.getItem('queued_films')) || [];

// пошук фільмів по id (змінна chosenFilm з модал)

export function addFilmToQueued(chosenFilm) {
  if (checkIfLoggedIn() === false) {
    return;
  } else {
    localStorage.setItem('queued_films', queueStoragedFilms);
    if (localStorage.getItem('queued_films').includes(chosenFilm)) {
      queueStoragedFilms.splice(queueStoragedFilms.indexOf(chosenFilm), 1);
    } else {
      queueStoragedFilms.push(chosenFilm);
    }
    localStorage.setItem('queued_films', JSON.stringify(queueStoragedFilms));
  }
}

// Додаємо фільми до черги

export function notifySuccessQueued(queueBtn, chosenFilm) {
  if (checkIfLoggedIn() === false) {
    return;

  } 

    else if (localStorage.getItem('queued_films').includes(chosenFilm)) {


        Notify.success('Added to queued');
        queueBtn.textContent = 'Queued';

     
    } else {

        Notify.success('Deleted from queue');
        queueBtn.textContent = 'Add to queue';
      }
    
  }

//   можливо ці змінні треба додати у модалку

closeWatchedBtn = document.querySelector('.modal-btn-watched'),
closeQueuedBtn = document.querySelector('.modal-btn-queue')

export function makeDisableBtn(id) {
    const queueLocalStorage = localStorage.getItem('queued_films');
    const queueBtn = document.querySelector('.add-queue');


    if (watchedLocalStorage && watchedLocalStorage.includes(id)) {
      document.querySelector('.modal-btn-queue').disabled = true;
      watchBtn.textContent = 'Added to watched';
    }

    if (queueLocalStorage && queueLocalStorage.includes(id)) {
      document.querySelector('.modal-btn-watched').disabled = true;
      queueBtn.textContent = 'Queued';
    }
  }

// Чи зайшов глядач до акаунту? 

export function checkIfLoggedIn() {
  const UID = localStorage.getItem('uid');
  if (!UID)  {
      Notify.warning('Log in first please')
      return false;
    }
  }