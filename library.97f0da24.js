function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var l=i("02hw8"),o=i("1QVRn");function s(e,t){const{id:n,genres:a,vote_average:i,vote_count:s,poster_path:c,popularity:r,original_title:u,overview:m,title:f}=e;let p;const _=(0,l.isMovieOnList)(n);let g;p="add"===_?"add to Watched":"delete from watched";const v=(0,o.isMovieOnListQue)(n);g="add"===v?"add to Queued":"delete from Queued";let y="";return y=null===c?'src = "https://upload.wikimedia.org/wikipedia/commons/4/43/Illustration_of_an_image.png"':`src ="https://image.tmdb.org/t/p/w500${c}"`,`<div class="modal__image-container" id='${n} data='${t}'>\n        <img\n          class="modal__image"\n          ${y}\n          alt="Poster ${f}"\n        />\n      </div>\n    <div class="film__info">\n        <h2 class="film__title">${d(f)}</h2>\n        <ul class="film-modal__list">\n          <li class="film__item">\n            <p class="film__details">Vote / Votes</p>\n            <p class="film__value">\n              <span class="film__rating--orange">${d(i.toFixed(1))}</span>\n              <span class="film__rating--slash"> / </span>\n              <span class="vote-count">${d(s)}</span>\n            </p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Popularity</p>\n            <p class="film__value">${d(r.toFixed(1))}</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Original title</p>\n            <p class="film__value">${d(u)}</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Genre</p>\n            <p class="film__value">${d(function(e){return e.map((({name:e})=>e)).join(", ")}(a))}</p>\n          </li>\n        </ul>\n        <div class="film-about__wrapper">\n          <h3 class="film-about__title">About</h3>\n          <div class="film-about-text__wrapper">\n            <p class="film-about__text">\n            ${d(m)}\n            </p>\n          </div>\n          <div class="film-btn__wrapper">\n            <button class="film-button add-watchedbtn-js" type="button" data-id="${n}" data-action="${_}" >${p}</button>\n            <button class="film-button add-queuedbtn-js" type="button" data-id="${n}" data-action="${v}" >${g}</button>\n          </div>\n        </div>`}function d(e){return 0===e.length?"no_info":e}l=i("02hw8");var c=i("4A24v"),r=i("fDIS9"),u=(o=i("1QVRn"),i("2nhTy")),m=i("eWCmQ");e(m).Notify.init({width:"280px",position:"center-top",distance:"10px",opacity:1});const f=document.querySelector(".queued-btn-js"),p=document.querySelector(".film__list");function _(){f.classList.add("active-js"),p.innerHTML="";const t=JSON.parse(localStorage.getItem(o.queuedKeyStorage));if(t){(0,r.default)(t.slice(0,20),"queue");new(0,u.default)(null,t.length).pagination.on("afterMove",g)}else e(m).Notify.failure("No films in your queue!")}function g(e){const t=e.page,n=JSON.parse(localStorage.getItem(o.queuedKeyStorage));document.querySelector(".film__list").innerHTML="";const a=n.slice(20*t-20,20*t);(0,r.default)(a)}f.addEventListener("click",_);o=i("1QVRn");const v={modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),listOfFilm:document.querySelector(".film__list"),card:document.querySelector(".modal__container"),body:document.querySelector("body")};let y="";v.listOfFilm.addEventListener("click",(function(e){const t=e.target.parentNode.parentNode;y=t.dataset.action;const n=b.find((e=>e.id===Number(t.id)));if("LI"!==t.nodeName)return;v.card.innerHTML=s(n),t.dataset.action,window.addEventListener("keydown",w),v.modal.classList.toggle("backdrop--is-hidden"),v.body.classList.toggle("modal-open"),(0,l.addWatchedBtnListener)(),(0,o.addQueuedBtnListener)()})),v.closeModalBtn.addEventListener("click",h),v.modal.addEventListener("click",(function(e){e.target===e.currentTarget&&h()}));const b=function(){const e=localStorage.getItem("watchedKey"),t=localStorage.getItem("queuedKey");if(e&&t){const n=JSON.parse(e),a=JSON.parse(t);return n.concat(a)}if(e)return JSON.parse(e);if(t)return JSON.parse(t)}();function h(){window.removeEventListener("keydown",w),v.modal.classList.toggle("backdrop--is-hidden"),v.body.classList.toggle("modal-open"),(0,l.removeWatchedBtnListener)(),(0,o.removeQueuedBtnListener)(),"watched"===y&&(0,c.loadWatchedFilms)(),"queue"===y&&_()}function w(e){"Escape"===e.code&&h()}
//# sourceMappingURL=library.97f0da24.js.map
