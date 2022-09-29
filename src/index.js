import './sass/index.scss';
import FilmsLoadService from "./js/films-request";
import renderFilmCard from './js/renderCard'
import { arrayFromServer } from './API/api';

const filmsLoadService = new FilmsLoadService();

// запит на отримання даних з сервкра та виклик функції рендера

getFilms();
async function getFilms() {
    try {
         const responce = await filmsLoadService.requestTrendFilms();
        renderFilmCard(responce.results);

        const arr = responce.results
        arr.map(film => arrayFromServer.push(film))
        
    } catch (error) {
        console.log(error);
    }
}



