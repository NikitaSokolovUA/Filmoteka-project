import { getDatabase, ref, update, remove } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

//Клас бази даних

export default class dataStorage {
  constructor({ queue, watched }) {
    this.queue = queue;
    this.watched = watched;
  }

  get queue() {
    return this.queue;
  }

  set queue(newQueue) {
    this.queue = newQueue;

    onAuthStateChanged(auth, user => {
      if (user) {
        const libraryDataBase = `users/${user.uid}/lib/queue/`;

        update(ref(db, libraryDataBase), this.queue);
      }
    });
  }

  get watched() {
    return this.watched;
  }

  set watched(newWatched) {
    this.watched = newWatched;

    onAuthStateChanged(auth, user => {
      if (user) {
        const libraryDataBase = `users/${user.uid}/lib/watched/`;

        update(ref(db, libraryDataBase), this.watched);
      }
    });
  }

  removeQueue() {
    onAuthStateChanged(auth, user => {
      if (user) {
        const libraryDataBase =
          `users/${user.uid}/lib/queue/` + Object.keys(this.queue);

        remove(ref(db, libraryDataBase));
      }
    });
  }

  removeWatched() {
    onAuthStateChanged(auth, user => {
      if (user) {
        const libraryDataBase =
          `users/${user.uid}/lib/watched/` + Object.keys(this.watched);

        remove(ref(db, libraryDataBase));
      }
    });
  }
}
