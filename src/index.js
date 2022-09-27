import './sass/index.scss';
import FilmsLoadService from "./films-request";
import renderFilmCard from './renderCard';

const filmsLoadService = new FilmsLoadService();

// запит на отримання даних з сервкра та виклик функції рендера

getFilms();
async function getFilms() {
    try {
        const responce = await filmsLoadService.requestTrendFilms();
        renderFilmCard(responce.results);
    } catch (error) {
        console.log(error);
    }
}

