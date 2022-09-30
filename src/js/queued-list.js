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
const queuedKeyStorage = 'queuedKey';
export default queuedKeyStorage;

let queuedBtnEl;
// функція додає слухача на кнопку "Added to queued"

export function addQueuedBtnListener() {
   queuedBtnEl = document.querySelector('.add-queuedbtn-js');
   queuedBtnEl.addEventListener('click', addQueuedBtnClick);
}
// фукція видаляє слухача з кнопки "Added to queued"

export function removeQueuedBtnListener() {
   queuedBtnEl.removeEventListener('click', addQueuedBtnClick);
}

// функція-обробник події кліку на "Added to queued"

function addQueuedBtnClick(evt) {
  const idData = evt.target.dataset.id;
  console.log(idData);

  const action = evt.target.dataset.action;
  switch (action) {
    case 'add':
      onQueuedList(idData);
      break;
    case 'remove':
      removeItemFromList(idData);
      break;
  }
}

// функція перевірки наявності фільму у переліку

export function isMovieOnList(movieId) {
  const items = loadList(queuedKeyStorage);
  const index = items.findIndex(item => item.id === movieId);
  return index === -1 ? 'add' : 'remove';
}

// отримуємо об'єкт фільму
async function onQueuedList(movieId) {
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
  const items = loadList(queuedKeyStorage);
  if (!items) {
    const storageListArray = [];
    storageListArray.push(data);
    saveList(queuedKeyStorage, storageListArray, true);
  } else {
    const index = items.findIndex(item => item.id === data.id);

    if (index !== -1) {
      Notiflix.Notify.warning('Your movie is added to queued');
      return;
    }
    items.push(data);
    saveList(queuedKeyStorage, items, true);
  }
}
// видаляємо з переліку
function removeItemFromList(movieId) {
  const items = loadList(queuedKeyStorage);
  const index = items.findIndex(item => item.id === movieId);

  if (index === -1) {
    return;
  }
  items.splice(index, 1);
  saveList(queuedKeyStorage, items);
}
export { queuedKeyStorage };
