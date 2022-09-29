
const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export default function renderModalCard(film) {

    const {id, genres , vote_average, vote_count, poster_path, popularity, original_title, overview, title} = film
  
  
    return `<div class="modal__image-container" id='${id}'>
        <img
          class="modal__image"
          src="${BASE_URL}${poster_path}"
          alt="Poster ${title}"
        />
      </div>
    <div class="film__info">
        <h2 class="film__title">${title}</h2>
        <ul class="film-modal__list">
          <li class="film__item">
            <p class="film__details">Vote / Votes</p>
            <p class="film__value">
              <span class="film__rating--orange">${vote_average}</span>
              <span class="film__rating--slash"> / </span>
              <span class="vote-count">${vote_count}</span>
            </p>
          </li>
          <li class="film__item">
            <p class="film__details">Popularity</p>
            <p class="film__value">${popularity}</p>
          </li>
          <li class="film__item">
            <p class="film__details">Original title</p>
            <p class="film__value">${original_title}</p>
          </li>
          <li class="film__item">
            <p class="film__details">Genre</p>
            <p class="film__value">${ganresString(genres)}</p>
          </li>
        </ul>
        <div class="film-about__wrapper">
          <h3 class="film-about__title">About</h3>
          <p class="film-about__text">
            ${overview}
          </p>
          <div class="film-btn__wrapper">
            <button class="film-button" type="button">add to Watched</button>
            <button class="film-button" type="button">add to queue</button>
          </div>
        </div>`
}

function ganresString(id) {
  return id.map(({name}) => name).join(', ')
}