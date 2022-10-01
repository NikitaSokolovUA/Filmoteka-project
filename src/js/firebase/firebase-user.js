// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, update, remove } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { firebaseConfig } from './firebase-config';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);
const sighUp = document.querySelector('#sighup-modal');
const sighIn = document.querySelector('#sighin-modal');
const sighOut = document.querySelector('#sighout');
const modalReg = document.querySelector('[data-reg-modal]');
const modalAuth = document.querySelector('[data-auth-modal]');
const sighUpHeader = document.querySelector('[data-reg-modal-open]');
const sighInHeader = document.querySelector('[data-auth-modal-open]');
const nameUserHeader = document.querySelector('#name-user');

//Клас користувача

export default class User {
  constructor(userData) {
    this.userData = userData;
  }

  sighUp() {
    if (
      !this.userData.email ||
      !this.userData.password ||
      !this.userData.name
    ) {
      Notify.failure('Please enter your email, password or name');
      return;
    }

    if (this.userData.password.length < 6) {
      Notify.failure('Password is too short!');
      return;
    }

    createUserWithEmailAndPassword(
      auth,
      this.userData.email,
      this.userData.password,
      this.userData.name
    )
      .then(userCredential => {
        let userName;
        const user = userCredential.user;
        set(ref(db, 'users/' + user.uid + '/auth/'), this.userData);
        nameUserHeader.innerHTML = `${this.userData.name}`;
        modalReg.classList.toggle('is-hidden');
        sighInHeader.classList.add('is-hidden');
        sighUpHeader.classList.add('is-hidden');
        sighOut.classList.remove('is-hidden');
        Notify.success(`User is created 🤘`);
        localStorage.setItem('name', this.userData.name);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Notify.failure(errorMessage);
      });
  }

  sighIn() {
    const user = auth.currentUser;
    if (!this.userData.email || !this.userData.password) {
      Notify.failure('Please enter your email and password');
      return;
    }
    signInWithEmailAndPassword(
      auth,
      this.userData.email,
      this.userData.password,
      this.userData.name
    )
      .then(userCredential => {
        const user = userCredential.user;
        const lgDate = new Date();
        let userName;
        update(ref(db, 'users/' + user.uid), {
          last_login: lgDate,
        });
        nameUserHeader.innerHTML = `${this.userData.name}`;
        modalAuth.classList.toggle('is-hidden');
        Notify.success(`You're welcome! 🙂`);
        sighInHeader.classList.add('is-hidden');
        sighUpHeader.classList.add('is-hidden');
        sighOut.classList.remove('is-hidden');
        localStorage.setItem('name', this.userData.name);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Notify.failure(errorMessage);
      });
  }

  sighOut() {
    signOut(auth)
      .then(() => {
        Notify.success(`Goodbye 🙃`);
        sighInHeader.classList.remove('is-hidden');
        sighUpHeader.classList.remove('is-hidden');
        sighOut.classList.add('is-hidden');
        nameUserHeader.innerHTML = '';
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Notify.failure(errorMessage);
      });
  }
}
