import FilmsLoadService from './films-request';
import Notiflix from 'notiflix';
import renderFilmCard from './renderCard';
import FilmsPagination from './pagination';

const searchForm = document.getElementById('search-form');
const films = document.querySelector('.film__list');
const warningText = document.querySelector('.warning');
const filmsSearch = new FilmsLoadService();

searchForm.addEventListener('submit', onSearch);

//************Function onSearch****************/////
async function onSearch(event) {
  event.preventDefault();
  filmsSearch.query = event.currentTarget.elements.searchQuery.value;
  filmsSearch.resetPage();

  if (filmsSearch.query === '') {
    Notiflix.Notify.info('&#128519 Please, complete the search field!');
    warningText.innerHTML =
      'Search result not successful. Enter the correct movie name and try again';
    return;
  }

  const filmsResponse = await filmsSearch.requestFilms();
  try {
    if (filmsResponse.total_results === 0) {
      Notiflix.Notify.failure('&#128561 Оh my god, what do you want?');
      warningText.innerHTML = 'Search result not successful. Enter the correct movie name and try again';
      return
    }

    if (
      (filmsResponse.total_results > 0) &
      (filmsResponse.total_results <= 1000)
    ) {
      warningText.innerHTML = '';
      Notiflix.Notify.success(
        `Cool!&#128526 You can see ${filmsResponse.total_results} films!`
      );
      searchForm.searchQuery.value = '';
      clearFilms();

      //************Пагинация************
      const paginator = new FilmsPagination(
        filmsSearch,
        filmsResponse.total_results
      );
      paginator.pagination.on('afterMove', paginatePage);
      //************

      renderFilmCard(filmsResponse.results);
    }

    if (filmsResponse.total_results > 1000) {
      warningText.innerHTML = '';
      Notiflix.Notify.info(
        '&#128540 It will be too difficult for you to choose a movie'
      );
    }
  } catch (error) {
    console.log(error.message);
  }
}

//************Function clearFilms****************/////
function clearFilms() {
  films.innerHTML = '';
}

//************Function paginatePage****************/////
async function paginatePage(event) {
  const currentPage = event.page;
  filmsSearch.page = currentPage;
  clearFilms();
  const responce = await filmsSearch.requestFilms();
  renderFilmCard(responce.results);
}
