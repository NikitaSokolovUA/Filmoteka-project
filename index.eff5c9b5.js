!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var o=i("bpxeT"),l=i("2TvXO"),s=i("3kV53"),c=i("1fiGW"),r=i("1JUWh");function d(e,t){var n,a,i=e.id,o=e.genres,l=e.vote_average,s=e.vote_count,d=e.poster_path,p=e.popularity,m=e.original_title,f=e.overview,_=e.title,v=(0,c.isMovieOnList)(i);n="add"===v?"add to Watched":"delete from watched";var g=(0,r.isMovieOnListQue)(i);a="add"===g?"add to Queued":"delete from Queued";var b="";return b=null===d?'src = "https://upload.wikimedia.org/wikipedia/commons/4/43/Illustration_of_an_image.png"':'src ="'.concat("https://image.tmdb.org/t/p/w500").concat(d,'"'),'<div class="modal__image-container" id=\''.concat(i," data='").concat(t,'\'>\n        <img\n          class="modal__image"\n          ').concat(b,'\n          alt="Poster ').concat(_,'"\n        />\n      </div>\n    <div class="film__info">\n        <h2 class="film__title">').concat(u(_),'</h2>\n        <ul class="film-modal__list">\n          <li class="film__item">\n            <p class="film__details">Vote / Votes</p>\n            <p class="film__value">\n              <span class="film__rating--orange">').concat(u(l.toFixed(1)),'</span>\n              <span class="film__rating--slash"> / </span>\n              <span class="vote-count">').concat(u(s),'</span>\n            </p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Popularity</p>\n            <p class="film__value">').concat(u(p.toFixed(1)),'</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Original title</p>\n            <p class="film__value">').concat(u(m),'</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Genre</p>\n            <p class="film__value">').concat(u(function(e){return e.map((function(e){return e.name})).join(", ")}(o)),'</p>\n          </li>\n        </ul>\n        <div class="film-about__wrapper">\n          <h3 class="film-about__title">About</h3>\n          <div class="film-about-text__wrapper">\n            <p class="film-about__text">\n            ').concat(u(f),'\n            </p>\n          </div>\n          <div class="film-btn__wrapper">\n            <button class="film-button add-watchedbtn-js" type="button" data-id="').concat(i,'" data-action="').concat(v,'" >').concat(n,'</button>\n            <button class="film-button add-queuedbtn-js" type="button" data-id="').concat(i,'" data-action="').concat(g,'" >').concat(a,"</button>\n          </div>\n        </div>")}function u(e){return 0===e.length?"no_info":e}c=i("1fiGW"),r=i("1JUWh");var p={modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),listOfFilm:document.querySelector(".film__list"),card:document.querySelector(".modal__container"),body:document.querySelector("body")};function m(){return(m=e(o)(e(l).mark((function t(n){var a,i,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n.target.parentNode.parentNode,(i=new(0,s.default)).id=a.id,e.next=6,i.requestFilmDetails();case 6:if(o=e.sent,"LI"===a.nodeName){e.next=9;break}return e.abrupt("return");case 9:p.card.innerHTML=d(o),f(),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),console.error("Set state error: ",e.t0.message),Notiflix.Notify.failure("Sorry some problems on Server");case 17:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function f(){window.addEventListener("keydown",v),p.modal.classList.toggle("backdrop--is-hidden"),p.body.classList.toggle("modal-open"),(0,c.addWatchedBtnListener)(),(0,r.addQueuedBtnListener)()}function _(){window.removeEventListener("keydown",v),p.modal.classList.toggle("backdrop--is-hidden"),p.body.classList.toggle("modal-open"),(0,c.removeWatchedBtnListener)(),(0,r.removeQueuedBtnListener)()}function v(e){"Escape"===e.code&&_()}p.listOfFilm.addEventListener("click",(function(e){return m.apply(this,arguments)})),p.closeModalBtn.addEventListener("click",_),p.modal.addEventListener("click",(function(e){e.target===e.currentTarget&&_()}))}();
//# sourceMappingURL=index.eff5c9b5.js.map
