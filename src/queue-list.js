// import FilmsLoadService from './films-request';
// import { saveList, loadList } from './storage-utils';

queueBtn = document.querySelector('.add-queue');
removeQueueBtn = document.querySelector('.remove-queue');
queuedGallery = document.querySelector('.queued-gallery');

const queueStoragedFilms = JSON.parse(localStorage.getItem('queued_films')) || [];

// movieId - так зазначив змінну для пошуку фільмів по id

export function addFilmToQueued(movieId) {
  if (checkIfLoggedIn() === false) {
    return;
  } else {
    localStorage.setItem('queued_films', queueStoragedFilms);
    if (localStorage.getItem('queued_films').includes(movieId)) {
      queueStoragedFilms.splice(queueStoragedFilms.indexOf(movieId), 1);
    } else {
      queueStoragedFilms.push(movieId);
    }
    localStorage.setItem('queued_films', JSON.stringify(queueStoragedFilms));
  }
}

// Додаємо фільми до черги

export function notifySuccessQueued(queueBtn, movieId) {
  if (checkIfLoggedIn() === false) {
    return;
  } else {
        
    if (localStorage.getItem('queued_films').includes(movieId)) {
      
       
        Notify.success('Added to queued');
        queueBtn.textContent = 'Queued';
      
      watchedBtn.disabled = true;
    } else {
           
        Notify.success('Deleted from queue');
        queueBtn.textContent = 'Add to queue';
      }
      watchedBtn.disabled = false;
    }
  }


export function makeDisableBtn(id) {
    const queueLocalStorage = localStorage.getItem('queued_films');
    const queueBtn = document.querySelector('.add-queue');
  
  
    if (watchedLocalStorage && watchedLocalStorage.includes(id)) {
      document.querySelector('.add-queue').disabled = true;
      watchBtn.textContent = 'Added to watched';
    }
  
    if (queueLocalStorage && queueLocalStorage.includes(id)) {
      document.querySelector('.add-watched').disabled = true;
      queueBtn.textContent = 'Queued';
    }
  }

// Чи зайшов глядач до акаунту? 

export function checkIfLoggedIn() {
  const UID = localStorage.getItem('uid');
  if (!UID) {

    }
    if (localStorage.getItem('lang') === 'en') {
      Notify.warning('Log in first please')
      return false;
    }
  }

