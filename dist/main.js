/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutPage": () => (/* binding */ AboutPage)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");


const AboutPage = (() => {
  const content = document.querySelector("#content");

  const renderPage = () => {
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.navbar)();
  };

  const removePage = () => {
    content.classList.remove("about");
    while (content.firstElementChild) content.firstElementChild.remove();
  };

  return { renderPage, removePage };
})();


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPage": () => (/* binding */ ContactPage)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");


const ContactPage = (() => {
  const content = document.querySelector("#content");

  const renderPage = () => {
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.navbar)();
  };

  const removePage = () => {
    content.classList.remove("contact");
    while (content.firstElementChild) content.firstElementChild.remove();
  };

  return { renderPage, removePage };
})();


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
const HomePage = (() => {
  const content = document.querySelector("#content");
  content.classList.add("home");

  const createLinkBtns = (linkWrapper) => {
    const links = ["About", "Menu", "Contact"];
    links.forEach((link) => {
      const a = document.createElement("a");
      a.id = `${link}`;
      a.classList.add("home-nav-btn");
      a.textContent = link;
      linkWrapper.appendChild(a);
    });
  };

  const createBgText = () => {
    const bgText = document.createElement("div");
    bgText.classList.add("bg-text");
    const header = document.createElement("h1");
    header.textContent = "Discover Chinese Cuisine";
    bgText.appendChild(header);
    const linkWrapper = document.createElement("div");
    linkWrapper.classList.add("link-wrapper");
    bgText.appendChild(linkWrapper);
    createLinkBtns(linkWrapper);
    content.appendChild(bgText);
  };

  const createFooter = () => {
    const footer = document.createElement("footer");
    footer.classList.add("main-page-footer");
    const authorLink = document.createElement("a");
    authorLink.textContent = "Orijit Chatterjee";
    authorLink.setAttribute("href", "https://unsplash.com/@orijit57");
    const sourceLink = document.createElement("a");
    sourceLink.textContent = "Unsplash";
    sourceLink.setAttribute("href", "https://unsplash.com/photos/wEBg_pYtynw");
    footer.innerHTML = `Image by ${authorLink.outerHTML} on ${sourceLink.outerHTML}`;
    content.appendChild(footer);
  };

  const renderPage = () => {
    createBgText();
    createFooter();
  };

  const removePage = () => {
    content.classList.remove("home");
    while (content.firstElementChild) content.firstElementChild.remove();
  };

  return { renderPage, removePage };
})();


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuPage": () => (/* binding */ MenuPage)
/* harmony export */ });
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./src/navbar.js");


const MenuPage = (() => {
  const content = document.querySelector("#content");

  const renderPage = () => {
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.navbar)();
  };

  const removePage = () => {
    content.classList.remove("remove");
    while (content.firstElementChild) content.firstElementChild.remove();
  };

  return { renderPage, removePage };
})();


/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });
const navbar = () => {
  const nav = document.createElement("nav");
  const links = ["Home", "About", "Menu", "Contact"];
  links.forEach((link) => {
    const a = document.createElement("a");
    a.textContent = link;
    nav.appendChild(a);
  });
  document.querySelector("#content").appendChild(nav);
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





(() => {
  let curPage = _home__WEBPACK_IMPORTED_MODULE_0__.HomePage;
  curPage.renderPage();

  const changePage = (page) => {
    const nPage = page.target.id;
    curPage.removePage();
    switch (nPage) {
      case "About":
        curPage = _about__WEBPACK_IMPORTED_MODULE_2__.AboutPage;
        break;
      case "Contact":
        curPage = _contact__WEBPACK_IMPORTED_MODULE_1__.ContactPage;
        break;
      case "Menu":
        curPage = _menu__WEBPACK_IMPORTED_MODULE_3__.MenuPage;
        break;
      default:
        break;
    }
    curPage.renderPage();
  };

  const links = Array.from(document.querySelectorAll(".home-nav-btn"));
  links.forEach((link) => {
    link.addEventListener("click", changePage);
  });
})();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7O0FBRTNCO0FBQ1A7O0FBRUE7QUFDQSxJQUFJLCtDQUFNO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmaUM7O0FBRTNCO0FBQ1A7O0FBRUE7QUFDQSxJQUFJLCtDQUFNO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2ZNO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixLQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHNCQUFzQixLQUFLLHFCQUFxQjtBQUNuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcERpQzs7QUFFM0I7QUFDUDs7QUFFQTtBQUNBLElBQUksK0NBQU07QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZk07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOa0M7QUFDTTtBQUNKO0FBQ0Y7O0FBRWxDO0FBQ0EsZ0JBQWdCLDJDQUFRO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQVM7QUFDM0I7QUFDQTtBQUNBLGtCQUFrQixpREFBVztBQUM3QjtBQUNBO0FBQ0Esa0JBQWtCLDJDQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXJcIjtcblxuZXhwb3J0IGNvbnN0IEFib3V0UGFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICBuYXZiYXIoKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImFib3V0XCIpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0RWxlbWVudENoaWxkKSBjb250ZW50LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlclBhZ2UsIHJlbW92ZVBhZ2UgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXJcIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhY3RQYWdlID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgIG5hdmJhcigpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29udGFjdFwiKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkgY29udGVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXJQYWdlLCByZW1vdmVQYWdlIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IEhvbWVQYWdlID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICBjb25zdCBjcmVhdGVMaW5rQnRucyA9IChsaW5rV3JhcHBlcikgPT4ge1xuICAgIGNvbnN0IGxpbmtzID0gW1wiQWJvdXRcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXTtcbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBhLmlkID0gYCR7bGlua31gO1xuICAgICAgYS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1uYXYtYnRuXCIpO1xuICAgICAgYS50ZXh0Q29udGVudCA9IGxpbms7XG4gICAgICBsaW5rV3JhcHBlci5hcHBlbmRDaGlsZChhKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCZ1RleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgYmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiZ1RleHQuY2xhc3NMaXN0LmFkZChcImJnLXRleHRcIik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRGlzY292ZXIgQ2hpbmVzZSBDdWlzaW5lXCI7XG4gICAgYmdUZXh0LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29uc3QgbGlua1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpbmtXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJsaW5rLXdyYXBwZXJcIik7XG4gICAgYmdUZXh0LmFwcGVuZENoaWxkKGxpbmtXcmFwcGVyKTtcbiAgICBjcmVhdGVMaW5rQnRucyhsaW5rV3JhcHBlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiZ1RleHQpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwibWFpbi1wYWdlLWZvb3RlclwiKTtcbiAgICBjb25zdCBhdXRob3JMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYXV0aG9yTGluay50ZXh0Q29udGVudCA9IFwiT3Jpaml0IENoYXR0ZXJqZWVcIjtcbiAgICBhdXRob3JMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ab3Jpaml0NTdcIik7XG4gICAgY29uc3Qgc291cmNlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHNvdXJjZUxpbmsudGV4dENvbnRlbnQgPSBcIlVuc3BsYXNoXCI7XG4gICAgc291cmNlTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3dFQmdfcFl0eW53XCIpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgSW1hZ2UgYnkgJHthdXRob3JMaW5rLm91dGVySFRNTH0gb24gJHtzb3VyY2VMaW5rLm91dGVySFRNTH1gO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgIGNyZWF0ZUJnVGV4dCgpO1xuICAgIGNyZWF0ZUZvb3RlcigpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaG9tZVwiKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkgY29udGVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXJQYWdlLCByZW1vdmVQYWdlIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyXCI7XG5cbmV4cG9ydCBjb25zdCBNZW51UGFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICBuYXZiYXIoKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcInJlbW92ZVwiKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkgY29udGVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXJQYWdlLCByZW1vdmVQYWdlIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IG5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgbGlua3MgPSBbXCJIb21lXCIsIFwiQWJvdXRcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXTtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhLnRleHRDb250ZW50ID0gbGluaztcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQobmF2KTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgQ29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgeyBBYm91dFBhZ2UgfSBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IHsgTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51XCI7XG5cbigoKSA9PiB7XG4gIGxldCBjdXJQYWdlID0gSG9tZVBhZ2U7XG4gIGN1clBhZ2UucmVuZGVyUGFnZSgpO1xuXG4gIGNvbnN0IGNoYW5nZVBhZ2UgPSAocGFnZSkgPT4ge1xuICAgIGNvbnN0IG5QYWdlID0gcGFnZS50YXJnZXQuaWQ7XG4gICAgY3VyUGFnZS5yZW1vdmVQYWdlKCk7XG4gICAgc3dpdGNoIChuUGFnZSkge1xuICAgICAgY2FzZSBcIkFib3V0XCI6XG4gICAgICAgIGN1clBhZ2UgPSBBYm91dFBhZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgICAgY3VyUGFnZSA9IENvbnRhY3RQYWdlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJNZW51XCI6XG4gICAgICAgIGN1clBhZ2UgPSBNZW51UGFnZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgY3VyUGFnZS5yZW5kZXJQYWdlKCk7XG4gIH07XG5cbiAgY29uc3QgbGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZS1uYXYtYnRuXCIpKTtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVBhZ2UpO1xuICB9KTtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=