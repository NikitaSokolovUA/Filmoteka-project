// -- Тема день/ночь --
document.querySelector('.tumbler-wrapper').onclick = onChangeTheme;
function onChangeTheme() {
  //
  const documentBody = document.body;
  if (documentBody) {
    documentBody.classList.toggle('night-mode');
  }
  //
  const documentFooter = document.getElementsByClassName('footer')[0];
  if (documentFooter) {
    documentFooter.classList.toggle('night-mode');
  }
  //
  const documentTuiPrev = document.getElementsByClassName(
    'tui-page-btn tui-prev'
  )[0];
  if (documentTuiPrev) {
    documentTuiPrev.classList.toggle('night-mode');
  }
  //
  const documentTuiNext = document.getElementsByClassName(
    'tui-page-btn tui-next'
  )[0];
  if (documentTuiNext) {
    documentTuiNext.classList.toggle('night-mode');
  }
  //
  const documentBackdropModal =
    document.getElementsByClassName('backdrop__modal')[0];
  if (documentBackdropModal) {
    documentBackdropModal.classList.toggle('night-mode');
  }
  //
  const documentTuiIsSelected =
    document.getElementsByClassName('tui-is-selected')[0];
  if (documentTuiIsSelected) {
    documentTuiIsSelected.classList.toggle('night-mode');
  }
  //
  for (const el of document.getElementsByClassName('film__title-main')) {
    el.classList.toggle('night-mode');
  }
  //
  for (const el of document.getElementsByClassName('tui-page-btn')) {
    el.classList.toggle('night-mode');
  }
}
