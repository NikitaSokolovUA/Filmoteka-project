const gallery = document.querySelector('.film__list');
const BASE_URL = 'https://image.tmdb.org/t/p/w342';

// рендер карточки фільма та створення фільмотеки

export default function renderFilmCard(films) {
    const markup = films.map(film => {

    return `
        <li class="film__card" id=${film.id}>
            <img src = "${BASE_URL}${film.poster_path}" alt="${film.title}" loading="lazy" /></a>
            <div class="film__info">
                <p class="film__title">${film.title}</p>
                <p class="film__genre">${film.genre_ids}</p>
                <p class="film__relis">${film.release_date}</p>
            </div>
        </li>
    `
    }).join("");
    gallery.insertAdjacentHTML('beforeend', markup);
}

