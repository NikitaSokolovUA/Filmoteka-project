!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},n.parcelRequired7c6=r),r.register("gaiPd",(function(n,i){t(n.exports,"loadWatchedFilms",(function(){return s}));var o=r("5I0aQ"),a=r("eDfTE"),l=r("1fiGW"),c=r("jcFG7"),d=r("iU1Pc");e(d).Notify.init({width:"280px",position:"center-top",distance:"10px",opacity:1});var u=document.querySelector(".watched-btn-js"),f=document.querySelector(".film__list");function s(){u.classList.add("active-js"),f.innerHTML="";var t=JSON.parse(localStorage.getItem(l.watchedKeyStorage));if(!(t&&t.length>0))return f.innerHTML=(0,a.default)(),void e(d).Notify.failure("No films in your watched list!");(0,o.default)(t.slice(0,20)),new(0,c.default)(null,t.length).pagination.on("afterMove",p)}function p(e){var t=e.page,n=JSON.parse(localStorage.getItem(l.watchedKeyStorage));document.querySelector(".film__list").innerHTML="";var i=n.slice(20*t-20,20*t);(0,o.default)(i)}u.addEventListener("click",s)})),r.register("eDfTE",(function(e,n){function i(){return"<li class='list'>\n  <p class=\"notification\">\n    You haven't looked anything yet. Add movies to watch and let's enjoy! :)\n  </p>\n</li>"}t(e.exports,"default",(function(){return i}))})),r("gaiPd")}();
//# sourceMappingURL=library.86e1db27.js.map
