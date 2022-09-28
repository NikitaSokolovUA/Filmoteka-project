import Notiflix from 'notiflix';
Notiflix.Notify.init({
  width: '280px',
  position: 'center-top',
  distance: '10px',
  opacity: 1,
});

// *********** функции сохранения и считывания масива просмотренных фильмов из local storage
const saveList = (key, value, typeBtn) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
    typeBtn == true
      ? Notiflix.Notify.success('Your movie has been added to the library')
      : Notiflix.Notify.success('Your movie remove from library');
  } catch (error) {
    console.error('Set state error: ', error.message);
    Notiflix.Notify.failure('Failed to add to library');
  }
};

const loadList = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
export { saveList, loadList };
