import FilmsLoadService from './films-request';
import { saveList, loadList } from './storage-utils';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '10px',
  opacity: 1,
});

// створюємо змінну масиву фільмів і ключ для сховища, екземпляр класу для роботи з api

const moviesLoad = new FilmsLoadService();
const watchedKeyStorage = 'watchedKey';
export default watchedKeyStorage ;

let watchedBtnEl;
// функція додає слухача на кнопку "add to watched"
export function addWatchedBtnListener() {
  watchedBtnEl = document.querySelector('.add-watchedbtn-js');
  watchedBtnEl.addEventListener('click', addWatchedBtnClick);
}

// фукція видаляє слухача з кнопки "add to watched"
export function removeWatchedBtnListener() {
  watchedBtnEl.removeEventListener('click', addWatchedBtnClick);
}

// функція-обробник події кліку на "add to watched"
// кнопка повинна мати атрібути data-id з айді картки фільму , та data-action з "add" або "remove"
function addWatchedBtnClick(evt) {
  const idData = evt.target.dataset.id;
  console.log(idData);

  const action = evt.target.dataset.action;
  switch (action) {
    case 'add':
      onWatchedList(idData);
      break;
    case 'remove':
      removeItemFromList(idData);
      break;
  }
}

// функція перевірки наявності фільму у переліку, використовуємо при рендері одного фільму
//  і надання потрібного атрибуту кнопці data-action
export function isMovieOnList(movieId) {
  const items = loadList(watchedKeyStorage);
  const index = items.findIndex(item => item.id === movieId);
  return index === -1 ? 'add' : 'remove';
}

// отримуємо об'єкт фільму
async function onWatchedList(movieId) {
  try {
    moviesLoad.id = movieId;
    console.log(' moviesLoad', moviesLoad.id);

    const response = await moviesLoad.requestFilmDetails();
    response['genre_ids'] = response['genres'].map(obj => obj.id);
    console.log(response);
    addItemToList(response);
  } catch (error) {
    console.error(error);
  }
}

// додаємо до переліку
function addItemToList(data) {
  const items = loadList(watchedKeyStorage);
  if (!items) {
    const storageListArray = [];
    storageListArray.push(data);
    saveList(watchedKeyStorage, storageListArray, true);
  } else {
    const index = items.findIndex(item => item.id === data.id);

    if (index !== -1) {
      Notiflix.Notify.warning('Your movie is already in the library');
      return;
    }
    items.push(data);
    saveList(watchedKeyStorage, items, true);
  }
}

// видаляємо з переліку
function removeItemFromList(movieId) {
  const items = loadList(watchedKeyStorage);
  const index = items.findIndex(item => item.id === movieId);

  if (index === -1) {
    return;
  }
  items.splice(index, 1);
  saveList(watchedKeyStorage, items);
}
export { watchedKeyStorage };
