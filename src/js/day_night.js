// -- Тема день/ночь --
document.querySelector('.tumbler-wrapper').onclick = onChangeTheme;
function onChangeTheme() {
  document.body.classList.toggle('night-mode');
  document.getElementsByClassName('footer')[0].classList.toggle('night-mode');
  document
    .getElementsByClassName('tui-page-btn tui-prev')[0]
    .classList.toggle('night-mode');
  document
    .getElementsByClassName('tui-page-btn tui-next')[0]
    .classList.toggle('night-mode');
  for (el of document.getElementsByClassName('film__title-main')) {
    el.classList.toggle('night-mode');
  }
  document
    .getElementsByClassName('backdrop__modal')[0]
    .classList.toggle('night-mode');
}
