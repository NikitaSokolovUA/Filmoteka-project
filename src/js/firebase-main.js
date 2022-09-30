// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, set, ref, update } from 'firebase/database';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCDakRcwjTnhTWj9RrQgt-hzQpBk2mmz9w',
  authDomain: 'filmoteka-project-cdd1e.firebaseapp.com',
  databaseURL: 'https://filmoteka-project-cdd1e-default-rtdb.firebaseio.com',
  projectId: 'filmoteka-project-cdd1e',
  storageBucket: 'filmoteka-project-cdd1e.appspot.com',
  messagingSenderId: '518740651193',
  appId: '1:518740651193:web:7695d9b9aa198297cebf68',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const sighUp = document.querySelector('#sighup-modal');
const sighIn = document.querySelector('#sighin-modal');
const sighOut = document.querySelector('#sighout');
const modalReg = document.querySelector('[data-reg-modal]');
const modalAuth = document.querySelector('[data-auth-modal]');
const sighUpHeader = document.querySelector('[data-reg-modal-open]');
const sighInHeader = document.querySelector('[data-auth-modal-open]');
const nameUserHeader = document.querySelector('#name-user');

const database = getDatabase(app);
nameUserHeader.classList.remove('is-hidden');
// Реєстрація нового користувача
sighUp.addEventListener('click', e => {
  e.preventDefault();
  var email = document.getElementById('email-reg').value;
  var password = document.getElementById('password-reg').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      // зберігає дані в базі даних на Firebase
      set(ref(database, 'users/' + user.uid), {
        email: email,
        password: password,
      })
        .then(() => {
          userName = `${email}`;
          nameUserHeader.innerHTML += userName;
          modalReg.classList.toggle('is-hidden');
          sighInHeader.classList.add('is-hidden');
          sighUpHeader.classList.add('is-hidden');
          sighOut.classList.remove('is-hidden');
          Notify.success(`User is created 🤘`);
        })
        .catch(error => {
          Notify.failure(error);
        });
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notify.failure(errorMessage);
    });
});

// Вхід для зареєстрованих користувачів

sighIn.addEventListener('click', e => {
  e.preventDefault();
  var email = document.getElementById('email-auth').value;
  var password = document.getElementById('password-auth').value;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const lgDate = new Date();
      update(ref(database, 'users/' + user.uid), {
        last_login: lgDate,
      })
        .then(() => {
          userName = `${email}`;
          nameUserHeader.innerHTML += userName;
          modalAuth.classList.toggle('is-hidden');
          Notify.success(`You're welcome! 🙂`);
          sighInHeader.classList.add('is-hidden');
          sighUpHeader.classList.add('is-hidden');
          sighOut.classList.remove('is-hidden');
        })
        .catch(error => {
          Notify.failure(error);
        });
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Notify.failure(errorMessage);
    });
});

//Отримуємо поточного введеного користувача

const user = auth.currentUser;
onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

//Вихід з акаунту

sighOut.addEventListener('click', e => {
  e.preventDefault();
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
});

// Перевірка авторизації користувача
let userLogin;

function userName(userLogin) {
  signIn.insertAdjacentHTML(
    'beforebegin',
    `<span><div>
                </div> ${userLogin}<span>`
  );
}
