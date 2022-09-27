
const gallery = document.querySelector('body');
const BASE_URL = 'https://image.tmdb.org/t/p/w342'



export default function renderFilmCard(films) {
    const markup = films.map(film => {
     
        return `
        <div class="film__card" id=${film.id}>
            <img src = "${BASE_URL}${film.poster_path}" alt="${film.title}" loading="lazy" /></a>
            <div class="film__info">
                <p class="film__title">${film.title}
                    <p class="film__genre">${film.genre_ids}</p>
                    <p class="film__relis">${film.release_date}</p>
                </p>
            
            </div>
        </div>
        `

    }).join("");
  gallery.insertAdjacentHTML('beforeend', markup);
}