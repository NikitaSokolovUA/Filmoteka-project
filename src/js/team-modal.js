(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-team-open]'),
    closeModalBtn: document.querySelector('[data-team-close]'),
    modal: document.querySelector('[data-team-modal]'),
  };


  refs.openModalBtn.addEventListener('click', onOpenTeamModal);
  refs.closeModalBtn.addEventListener('click', onCloseTeamModal);
  refs.modal.addEventListener('click', onClickBackdropModalClose)


 

  function onOpenTeamModal() {
    window.addEventListener('keydown', inKeyDownEscModalClose);
    refs.modal.classList.toggle('is-hidden');
  }

  function onCloseTeamModal() {
    window.removeEventListener('keydown', inKeyDownEscModalClose);
    refs.modal.classList.toggle('is-hidden');
  }

  function inKeyDownEscModalClose(event) {
    const KEY_CODE_ESCAPE = 'Escape';

    if (event.code === KEY_CODE_ESCAPE) {
      onCloseTeamModal();
    }
  } 

  function onClickBackdropModalClose(event) {
  if (event.target === event.currentTarget) {
    onCloseTeamModal();
  }
}


})();
