function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var i=o("ek61Q"),s=(o("ek61Q"),o("eWCmQ"));i=o("ek61Q");e(s=o("eWCmQ")).Notify.init({width:"280px",position:"center-top",distance:"10px",opacity:1});const d=new(0,i.default);let r;function l(e){const t=e.target.dataset.id;console.log(e.target);switch(e.target.dataset.action){case"add":!async function(e){try{d.id=e;const t=await d.requestFilmDetails();t.genre_ids=t.genres.map((e=>e.id)),function(e){const t=p("queuedKey");if(t&&0!=t.length)t.push(e),m("queuedKey",t,!0);else{const t=[];t.push(e),m("queuedKey",t,!0)}}(t)}catch(e){console.error(e)}}(t);break;case"remove":!function(e){const t=p("queuedKey"),n=t.findIndex((t=>t.id===Number(e)));if(-1===n)return;t.splice(n,1),m("queuedKey",t)}(t)}}function c(e){const t=p("queuedKey");if(!t)return"add";return-1===t.findIndex((t=>t.id===e))?"add":"remove"}e(s).Notify.init({width:"280px",position:"center-top",distance:"10px",opacity:1,zindex:9999,timeout:1e3});const u=(t,n,a)=>{try{const o=JSON.stringify(n);localStorage.setItem(t,o),1==a?e(s).Notify.success("Your movie has been added to the library"):e(s).Notify.success("Your movie remove from library"),h()}catch(t){console.error("Set state error: ",t.message),e(s).Notify.failure("Failed to add to library")}},m=(t,n,a)=>{try{const o=JSON.stringify(n);localStorage.setItem(t,o),1==a?e(s).Notify.success("Your movie has been added to the queued"):e(s).Notify.success("Your movie remove from queued"),"add"===r.dataset.action?(r.dataset.action="remove",r.textContent="delete from queued"):(r.dataset.action="add",r.textContent="add to queued")}catch(t){console.error("Set state error: ",t.message),e(s).Notify.failure("Failed to add to Queue")}},f=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},p=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},_=new(0,i.default);let y;function g(e){const t=e.target.dataset.id;switch(e.target.dataset.action){case"add":!async function(e){try{_.id=e;const t=await _.requestFilmDetails();t.genre_ids=t.genres.map((e=>e.id)),function(e){const t=f("watchedKey");if(t&&0!=t.length)t.push(e),u("watchedKey",t,!0);else{const t=[];t.push(e),u("watchedKey",t,!0)}}(t)}catch(e){console.error(e)}}(t);break;case"remove":!function(e){const t=f("watchedKey"),n=t.findIndex((t=>t.id===Number(e)));if(-1===n)return;t.splice(n,1),u("watchedKey",t)}(t)}}function v(e){const t=f("watchedKey");if(!t)return"add";return-1===t.findIndex((t=>t.id===e))?"add":"remove"}function h(){"add"===y.dataset.action?(y.dataset.action="remove",y.textContent="delete from watched"):(y.dataset.action="add",y.textContent="add to Watched")}function b(e,t){const{id:n,genres:a,vote_average:o,vote_count:i,poster_path:s,popularity:d,original_title:r,overview:l,title:u}=e;let m;const f=v(n);let p;m="add"===f?"add to Watched":"delete from watched";const _=c(n);p="add"===_?"add to Queued":"delete from Queued";let y="";return y=null===s?'src = "https://upload.wikimedia.org/wikipedia/commons/4/43/Illustration_of_an_image.png"':`src ="https://image.tmdb.org/t/p/w500${s}"`,`<div class="modal__image-container" id='${n} data='${t}'>\n        <img\n          class="modal__image"\n          ${y}\n          alt="Poster ${u}"\n        />\n      </div>\n    <div class="film__info">\n        <h2 class="film__title">${w(u)}</h2>\n        <ul class="film-modal__list">\n          <li class="film__item">\n            <p class="film__details">Vote / Votes</p>\n            <p class="film__value">\n              <span class="film__rating--orange">${w(o.toFixed(1))}</span>\n              <span class="film__rating--slash"> / </span>\n              <span class="vote-count">${w(i)}</span>\n            </p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Popularity</p>\n            <p class="film__value">${w(d.toFixed(1))}</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Original title</p>\n            <p class="film__value">${w(r)}</p>\n          </li>\n          <li class="film__item">\n            <p class="film__details">Genre</p>\n            <p class="film__value">${w(function(e){return e.map((({name:e})=>e)).join(", ")}(a))}</p>\n          </li>\n        </ul>\n        <div class="film-about__wrapper">\n          <h3 class="film-about__title">About</h3>\n          <div class="film-about-text__wrapper">\n            <p class="film-about__text">\n            ${w(l)}\n            </p>\n          </div>\n          <div class="film-btn__wrapper">\n            <button class="film-button add-watchedbtn-js" type="button" data-id="${n}" data-action="${f}" >${m}</button>\n            <button class="film-button add-queuedbtn-js" type="button" data-id="${n}" data-action="${_}" >${p}</button>\n          </div>\n        </div>`}function w(e){return 0===e.length?"no_info":e}const q={modal:document.querySelector("[data-modal]"),closeModalBtn:document.querySelector("[data-modal-close]"),listOfFilm:document.querySelector(".film__list"),card:document.querySelector(".modal__container"),body:document.querySelector("body")};function x(){window.removeEventListener("keydown",N),q.modal.classList.toggle("backdrop--is-hidden"),q.body.classList.toggle("modal-open"),y.removeEventListener("click",g),r.removeEventListener("click",l)}function N(e){"Escape"===e.code&&x()}q.listOfFilm.addEventListener("click",(async function(e){try{const t=e.target.parentNode.parentNode,n=new(0,i.default);n.id=t.id;const a=await n.requestFilmDetails();if("LI"!==t.nodeName)return;q.card.innerHTML=b(a),window.addEventListener("keydown",N),q.modal.classList.toggle("backdrop--is-hidden"),q.body.classList.toggle("modal-open"),y=document.querySelector(".add-watchedbtn-js"),y.addEventListener("click",g),r=document.querySelector(".add-queuedbtn-js"),r.addEventListener("click",l)}catch(e){console.error("Set state error: ",e.message),Notiflix.Notify.failure("Sorry some problems on Server")}})),q.closeModalBtn.addEventListener("click",x),q.modal.addEventListener("click",(function(e){e.target===e.currentTarget&&x()}));
//# sourceMappingURL=index.b091ace9.js.map