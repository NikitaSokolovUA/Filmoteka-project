!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i);var o=i("1fiGW"),l=i("1JUWh");function c(e,t){var n,a,i=e.id,c=e.genres,r=e.vote_average,s=e.vote_count,u=e.poster_path,f=e.popularity,m=e.original_title,p=e.overview,_=e.title,v=(0,o.isMovieOnList)(i);n="add"===v?"add to Watched":"delete from watched";var g=(0,l.isMovieOnListQue)(i);a="add"===g?"add to Queued":"delete from Queued";var y="";return y=null===u?'src = "https://upload.wikimedia.org/wikipedia/commons/4/43/Illustration_of_an_image.png"':'src ="'.concat("https://image.tmdb.org/t/p/w500").concat(u,'"'),'<div class="modal__image-container" id=\''.concat(i," data='").concat(t,'\'>\n        <img\n          class="modal__image"\n          ').concat(y,'\n          alt="Poster ').concat(_,'"\n        />\n      </div>\n    <div class="film__info">\n        <h2 class="film__title">').concat(d(_),'</h2>\n        <ul class="film-modal__list">\n          <li class="film__item">\n            <p class="film__details">Vote / Votes</p>\n            <p class="film__value">\n              <span class="film__rating--orange">').concat(d(r.toFixed(1)),'</span>\n              <span class="film__rating--slash"> / </span>\n              <span class="vote-count">').concat(d(s),'</span>\n            </p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Popularity</p>\n            <p class="film__value">').concat(d(f.toFixed(1)),'</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Original title</p>\n            <p class="film__value">').concat(d(m),'</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Genre</p>\n            <p class="film__value">').concat(d(function(e){return e.map((function(e){return e.name})).join(", ")}(c)),'</p>\n          </li>\n        </ul>\n        <div class="film-about__wrapper">\n          <h3 class="film-about__title">About</h3>\n          <div class="film-about-text__wrapper">\n            <p class="film-about__text">\n            ').concat(d(p),'\n            </p>\n          </div>\n          <div class="film-btn__wrapper">\n            <button class="film-button add-watchedbtn-js" type="button" data-id="').concat(i,'" data-action="').concat(v,'" >').concat(n,'</button>\n            <button class="film-button add-queuedbtn-js" type="button" data-id="').concat(i,'" data-action="').concat(g,'" >').concat(a,"</button>\n          </div>\n        </div>")}function d(e){return 0===e.length?"no_info":e}o=i("1fiGW");var r=i("gaiPd"),s=i("5I0aQ"),u=(l=i("1JUWh"),i("jcFG7")),f=i("iU1Pc");e(f).Notify.init({width:"280px",position:"center-top",distance:"10px",opacity:1});var m=document.querySelector(".queued-btn-js"),p=document.querySelector(".film__list");function _(){m.classList.add("active-js"),p.innerHTML="";var t=JSON.parse(localStorage.getItem(l.queuedKeyStorage));t?((0,s.default)(t.slice(0,20),"queue"),new(0,u.default)(null,t.length).pagination.on("afterMove",v)):e(f).Notify.failure("No films in your queue!")}function v(e){var t=e.page,n=JSON.parse(localStorage.getItem(l.queuedKeyStorage));document.querySelector(".film__list").innerHTML="";var a=n.slice(20*t-20,20*t);(0,s.default)(a)}m.addEventListener("click",_);l=i("1JUWh");var g={modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),listOfFilm:document.querySelector(".film__list"),card:document.querySelector(".modal__container"),body:document.querySelector("body")},y="";g.listOfFilm.addEventListener("click",(function(e){var t=e.target.parentNode.parentNode;y=t.dataset.action;var n=b.find((function(e){return e.id===Number(t.id)}));if("LI"!==t.nodeName)return;g.card.innerHTML=c(n),t.dataset.action,window.addEventListener("keydown",w),g.modal.classList.toggle("backdrop--is-hidden"),g.body.classList.toggle("modal-open"),(0,o.addWatchedBtnListener)(),(0,l.addQueuedBtnListener)()})),g.closeModalBtn.addEventListener("click",h),g.modal.addEventListener("click",(function(e){e.target===e.currentTarget&&h()}));var b=function(){var e=localStorage.getItem("watchedKey"),t=localStorage.getItem("queuedKey");if(e&&t){var n=JSON.parse(e),a=JSON.parse(t);return n.concat(a)}if(e)return JSON.parse(e);if(t)return JSON.parse(t)}();function h(){window.removeEventListener("keydown",w),g.modal.classList.toggle("backdrop--is-hidden"),g.body.classList.toggle("modal-open"),(0,o.removeWatchedBtnListener)(),(0,l.removeQueuedBtnListener)(),"watched"===y&&(0,r.loadWatchedFilms)(),"queue"===y&&_()}function w(e){"Escape"===e.code&&h()}}();
//# sourceMappingURL=library.03951b68.js.map
