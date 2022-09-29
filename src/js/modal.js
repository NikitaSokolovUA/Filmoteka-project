import renderModalCard from "../templates/renderModalCard";

const refs = {
    modal: document.querySelector('[data-modal]'),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    listOfFilm: document.querySelector('.film__list')
}


refs.listOfFilm.addEventListener('click', onClickFilm);
refs.closeModalBtn.addEventListener('click', onCloseModal)
refs.modal.addEventListener('click', onClickBackdropModalClose)



function onClickFilm(e) { 
    const chosenFilm = e.target.parentNode.parentNode

    
    if (chosenFilm.nodeName !== "LI") {
        return
  }
  
  console.log();

  onOpenModal()
  renderModalCard(chosenFilm.id)
}

function onOpenModal() {
    window.addEventListener('keydown', inKeyDownEscModalClose)
    refs.modal.classList.toggle("backdrop--is-hidden");
}
  
  function onCloseModal() {
    window.removeEventListener('keydown',inKeyDownEscModalClose)
    refs.modal.classList.toggle("backdrop--is-hidden");
}
  
 function onClickBackdropModalClose(event) {
    if (event.target === event.currentTarget) {
      onCloseModal()
    }
}
  
  function inKeyDownEscModalClose(event) {
    const KEY_CODE_ESCAPE = 'Escape';

    if (event.code === KEY_CODE_ESCAPE) {
      onCloseModal()
    }
}
  