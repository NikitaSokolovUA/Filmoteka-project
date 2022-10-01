import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { firebaseConfig } from './firebase-config';
import { initializeApp } from 'firebase/app';
import User from './firebase-user';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const user = auth.currentUser;
const sighUp = document.querySelector('#sighup-modal');
const sighIn = document.querySelector('#sighin-modal');
const sighOut = document.querySelector('#sighout');
const sighUpHeader = document.querySelector('[data-reg-modal-open]');
const sighInHeader = document.querySelector('[data-auth-modal-open]');
const nameUserHeader = document.querySelector('#name-user');

onAuthStateChanged(auth, user => {
  const name = localStorage.getItem('name');
  if (user) {
    nameUserHeader.innerHTML = name;
    sighInHeader.classList.add('is-hidden');
    sighUpHeader.classList.add('is-hidden');
    sighOut.classList.remove('is-hidden');
  } else {
    // User is signed out
    // ...
  }
});

sighUp.addEventListener('click', onSighUp);
function onSighUp(e) {
  e.preventDefault();
  const email = document.getElementById('email-reg').value;
  const password = document.getElementById('password-reg').value;
  const name = document.getElementById('name-reg').value;
  const userData = {
    email: email,
    password: password,
    name: name,
  };
  const user = new User(userData);
  user.sighUp();
}

sighIn.addEventListener('click', onSighIn);
function onSighIn(e) {
  e.preventDefault();
  const email = document.getElementById('email-reg').value;
  const password = document.getElementById('password-reg').value;
  const name = document.getElementById('name-reg').value;
  const userData = {
    email: email,
    password: password,
    name: name,
  };
  const user = new User(userData);
  user.sighIn();
}

sighOut.addEventListener('click', onSighOut);
function onSighOut(e) {
  const user = new User();
  user.sighOut();
}
