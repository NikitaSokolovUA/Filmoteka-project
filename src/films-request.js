const axios = require('axios');

const TREND_FILMS_URL = 'https://api.themoviedb.org/3/trending/movie/week?';
const SEARCH_FILMS_URL = 'https://api.themoviedb.org/3/search/movie?';
const SEARCH_FILM_DETAILS_URL = 'https://api.themoviedb.org/3/movie/';
const KEY = '308ba57d7f6135bbdbfbab5697860db3';

export default class FilmsLoadService {
  constructor() {
    this.searchFilms = '';
    this.page = 1;
    this.id = null;
  }

  async requestTrendFilms() {
    const searchParams = new URLSearchParams({
      api_key: KEY,
    });

    const response = await axios(`${TREND_FILMS_URL}${searchParams}`);
    return response.data;
  }

  async requestFilms() {
    const searchParams = new URLSearchParams({
      api_key: KEY,
      query: this.searchFilms,
      page: this.page,
    });

    const response = await axios(`${SEARCH_FILMS_URL}${searchParams}`);
    this.incrementPage();
    return response;
  }

  async requestFilmDetails() {
    const searchParams = new URLSearchParams({
      api_key: KEY,
    });

    const response = await axios(
      `${SEARCH_FILM_DETAILS_URL}${this.id}?${searchParams}`
    );
    return response;
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchFilms;
  }

  set query(newFilms) {
    this.searchFilms = newFilms;
  }

  get filmId() {
    return this.id;
  }

  set filmId(newId) {
    this.id = newId;
  }
}
