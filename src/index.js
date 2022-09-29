import './sass/index.scss';
import FilmsPagination from './js/pagination';
import FilmsLoadService from './js/films-request';
import renderFilmCard from './js/renderCard';

const filmsLoadService = new FilmsLoadService();
// запит на отримання даних з сервкра та виклик функції рендера

getFilms();
async function getFilms() {
  try {
    const responce = await filmsLoadService.requestTrendFilms();

    //************Пагинация************
    const paginator = new FilmsPagination(
      filmsLoadService,
      responce.total_results
    );
    paginator.pagination.on('afterMove', paginatePage);
    //************

    renderFilmCard(responce.results);
  } catch (error) {
    console.log(error);
  }
}

//************Function paginatePage****************/////
async function paginatePage(event) {
  const currentPage = event.page;
  filmsLoadService.page = currentPage;
  const films = document.querySelector('.film__list');
  films.innerHTML = '';
  const responce = await filmsLoadService.requestTrendFilms();
  renderFilmCard(responce.results);
}
