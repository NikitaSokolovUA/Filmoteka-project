import { loadQueuedFilms } from './library_queued';
import { loadWatchedFilms } from './library_watched';
import { spinner, target } from './spinner';

checkLibrary();

function checkLibrary() {
  const filmsWatched = localStorage.getItem('watchedKey');

  if (filmsWatched) {
    spinner.spin(target);
    setTimeout(() => {
      loadWatchedFilms();
      spinner.stop();
    }, 1500);
    return;
  }
  loadQueuedFilms();
}
