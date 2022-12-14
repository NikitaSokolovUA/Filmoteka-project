import { isMovieOnList } from '../js/watched-list';
import {isMovieOnListQue} from '../js/queued-list'
const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function renderModalCard(film, dataAtribute) {
  const {
    id,
    genres,
    vote_average,
    vote_count,
    poster_path,
    popularity,
    original_title,
    overview,
    title,
  } = film;

  let watchedBtnText;
  const watchedBtnAction = isMovieOnList(id);
  watchedBtnAction === 'add'
    ? (watchedBtnText = 'add to Watched')
    : (watchedBtnText = 'delete from watched');
  
  let queueBtnText;
  const queueBtnAction = isMovieOnListQue(id);
  queueBtnAction === 'add'
    ? (queueBtnText = 'add to Queued')
    : (queueBtnText = 'delete from Queued');
  
  

  let poster = '';
  if (poster_path === null) {
    poster =  `src = "https://upload.wikimedia.org/wikipedia/commons/4/43/Illustration_of_an_image.png"`
    } else poster = `src ="${BASE_URL}${poster_path}"`  
  
  return `<div class="modal__image-container" id='${id} data='${dataAtribute}'>
        <img
          class="modal__image"
          ${poster}
          alt="Poster ${title}"
        />
      </div>
    <div class="film__info">
        <h2 class="film__title">${addAudit(title)}</h2>
        <ul class="film-modal__list">
          <li class="film__item">
            <p class="film__details">Vote / Votes</p>
            <p class="film__value">
              <span class="film__rating--orange">${addAudit(
                vote_average.toFixed(1)
              )}</span>
              <span class="film__rating--slash"> / </span>
              <span class="vote-count">${addAudit(vote_count)}</span>
            </p>
          </li>
          <li class="film__item">
            <p class="film__details">Popularity</p>
            <p class="film__value">${addAudit(popularity.toFixed(1))}</p>
          </li>
          <li class="film__item">
            <p class="film__details">Original title</p>
            <p class="film__value">${addAudit(original_title)}</p>
          </li>
          <li class="film__item">
            <p class="film__details">Genre</p>
            <p class="film__value">${addAudit(ganresString(genres))}</p>
          </li>
        </ul>
        <div class="film-about__wrapper">
          <h3 class="film-about__title">About</h3>
          <div class="film-about-text__wrapper">
            <p class="film-about__text">
            ${addAudit(overview)}
            </p>
          </div>
          <div class="film-btn__wrapper">
            <button class="film-button add-watchedbtn-js" type="button" data-id="${id}" data-action="${watchedBtnAction}" >${watchedBtnText}</button>
            <button class="film-button add-queuedbtn-js" type="button" data-id="${id}" data-action="${queueBtnAction}" >${queueBtnText}</button>
          </div>
        </div>`;
}

function ganresString(id) {
  return id.map(({ name }) => name).join(', ');
}

function addAudit(string) {
  if (string.length === 0) {
    return 'no_info';
  }
  return string;
}

