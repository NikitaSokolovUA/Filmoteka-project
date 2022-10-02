import { loadQueuedFilms } from "./library_queued";
import { loadWatchedFilms } from "./library_watched";

checkLibrary()

function checkLibrary() {
    const filmsWatched = localStorage.getItem('watchedKey');

    if (filmsWatched) {
        loadWatchedFilms()
        return
    }
    loadQueuedFilms()
}