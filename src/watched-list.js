import FilmsLoadService from './films-request';
import { saveList, loadList } from './storage-utils';
import renderFilmCard from './renderCard';

// створюємо змінну масиву фільмів і ключ для сховища, екземпляр класу для роботи з api
const storageListArray = [];
const moviesLoad = new FilmsLoadService();
const watchedKeyStorage = 'watchedKey';

// функція-обробник події кліку "add to watched"
// кнопка повинна мати атрібути data-id з айді картки фільму , та data-action з "add" або "remove"
export function addWatchedBtnClick(evt) {
  const idData = evt.target.dataset.id;
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
  if (index == -1) {
    return 'add';
  } else return 'remove';
}

// функція-обробник події кліку "watched", повертає масив об'єктів фільмів з переліку користувача
export function watchedBtnClick() {
  const items = loadList(watchedKeyStorage);
  renderFilmCard(items);
}

// отримуємо об'єкт фільму
async function onWatchedList(movieId) {
  try {
    moviesLoad.id = movieId;
    const response = await moviesLoad.requestFilmDetails();
    console.log(response.data);
    addItemToList(response.data);
  } catch (error) {
    console.error(error);
  }
}

// додаємо до переліку
function addItemToList(data) {
  storageListArray.push(data);
  saveList(watchedKeyStorage, storageListArray, true);
}
// видаляємо з переліку
function removeItemFromList(movieId) {
  const items = loadList(watchedKeyStorage);
  const index = items.findIndex(item => item.id === movieId);

  if (index == -1) {
    return;
  }
  items.splice(index, 1);
  saveList(watchedKeyStorage, items);
}
