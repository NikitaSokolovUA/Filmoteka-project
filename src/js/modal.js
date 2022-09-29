import FilmsLoadService from './films-request';
import renderModalCard from '../templates/renderModalCard';

const refs = {
    modal: document.querySelector('[data-modal]'),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    listOfFilm: document.querySelector('.film__list'),
    card: document.querySelector('.modal__container')
}


refs.listOfFilm.addEventListener('click', onClickFilm);
refs.closeModalBtn.addEventListener('click', onCloseModal)
refs.modal.addEventListener('click', onClickBackdropModalClose)



async function onClickFilm(e) { 
  const chosenFilm = e.target.parentNode.parentNode
  
  const fls = new FilmsLoadService(); 
  fls.id = chosenFilm.id; 
  const data = await fls.requestFilmDetails(); 

  console.log(renderModalCard(data)); 

  
    
    if (chosenFilm.nodeName !== "LI") {
        return
    }

  
  
    refs.card.innerHTML = renderModalCard(data);
    onOpenModal()
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
  
