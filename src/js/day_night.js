// -- Тема день/ночь --
document.querySelector('.tumbler-wrapper').onclick = onChangeTheme;
function onChangeTheme() {
  document.body.classList.toggle('night-mode');
  document.getElementsByClassName('footer')[0].classList.toggle('night-mode');
}
