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
    content.classList.add("about");
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.navbar)();
    createAmenities();
    createAboutUs();
    createGallery();
  };

  const createAmenities = () => {
    const amenities = document.createElement("div");
    amenities.classList.add("amenities");
    const h1 = document.createElement("h1");
    h1.textContent = "Amenities";
    amenities.appendChild(h1);

    const icons = {
      delivery: ["fa-truck", "Home Delivery"],
      takeaway: ["fa-bag-shopping", "Take Away"],
      payment: ["fa-credit-card", "Multiple Payment Mode"],
      party: ["fa-gift", "Party Orders"],
    };

    for (let key in icons) {
      const outerDiv = document.createElement("div");
      const innerDiv = document.createElement("div");
      innerDiv.classList.add("icon");
      const i = document.createElement("i");
      i.classList.add("fa-solid", icons[key][0]);
      innerDiv.appendChild(i);
      const h2 = document.createElement("h2");
      h2.textContent = icons[key][1];
      outerDiv.appendChild(innerDiv);
      outerDiv.appendChild(h2);
      amenities.appendChild(outerDiv);
    }
    content.appendChild(amenities);
  };

  const createAboutUs = () => {
    const aboutUs = document.createElement("div");
    aboutUs.classList.add("about-us");

    const left = document.createElement("div");
    left.classList.add("left");
    aboutUs.appendChild(left);
    const h1 = document.createElement("h1");
    h1.textContent = "About Us";
    const p = document.createElement("p");
    p.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorem, expedita illum inventore praesentium ipsum sit, temporibus similique aliquam ab nostrum tenetur. Optio eius doloremque voluptatem cum, quibusdam ducimus sunt?";
    p.style.textAlign = "center";
    left.append(h1, p);

    const right = document.createElement("div");
    right.classList.add("right");
    aboutUs.appendChild(right);
    content.appendChild(aboutUs);
  };

  const createGallery = () => {
    const gallery = document.createElement("div");
    gallery.classList.add("gallery");

    const h1 = document.createElement("h1");
    h1.textContent = "Gallery";
    gallery.append(h1);
    const sources = [
      "https://unsplash.com/photos/LO7rNP0LRro",
      "https://m.apkpure.com/bn/chinese-food-wallpapers/com.zoomapps.ChineseFoodWallpapers#com.zoomapps.ChineseFoodWallpapers-5",
      "https://pinterest.com/pin/111182684542301957/",
    ];
    for (let i = 0; i < 3; i += 1) {
      const imgDiv = document.createElement("div");
      const a = document.createElement("a");
      a.setAttribute("href", sources[i]);
      imgDiv.appendChild(a);
      gallery.appendChild(imgDiv);
    }

    content.append(gallery);
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
    content.className = "";
    content.classList.add("home");
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((() => {
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
        curPage = _home__WEBPACK_IMPORTED_MODULE_0__.HomePage;
        break;
    }
    curPage.renderPage();
    if (curPage == _home__WEBPACK_IMPORTED_MODULE_0__.HomePage) addhomePageEL();
  };

  const addhomePageEL = () => {
    const links = Array.from(document.querySelectorAll(".home-nav-btn"));
    links.forEach((link) => {
      link.addEventListener("click", changePage);
    });
  };
  addhomePageEL();

  return { changePage };
})());


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
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const navbar = () => {
  const nav = document.createElement("nav");
  const links = ["Home", "About", "Menu", "Contact"];
  links.forEach((link) => {
    const a = document.createElement("a");
    a.addEventListener("click", _index__WEBPACK_IMPORTED_MODULE_0__["default"].changePage);
    a.id = link;
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7O0FBRTNCO0FBQ1A7O0FBRUE7QUFDQTtBQUNBLElBQUksK0NBQU07QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0ZpQzs7QUFFM0I7QUFDUDs7QUFFQTtBQUNBLElBQUksK0NBQU07QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDZk07QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixLQUFLO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHNCQUFzQixLQUFLLHFCQUFxQjtBQUNuRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEaUM7QUFDTTtBQUNKO0FBQ0Y7O0FBRWxDLGlFQUFlO0FBQ2YsZ0JBQWdCLDJDQUFRO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQVM7QUFDM0I7QUFDQTtBQUNBLGtCQUFrQixpREFBVztBQUM3QjtBQUNBO0FBQ0Esa0JBQWtCLDJDQUFRO0FBQzFCO0FBQ0E7QUFDQSxrQkFBa0IsMkNBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDJDQUFRO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUMsR0FBRyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkM2Qjs7QUFFM0I7QUFDUDs7QUFFQTtBQUNBLElBQUksK0NBQU07QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQjs7QUFFckI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5REFBZ0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyXCI7XG5cbmV4cG9ydCBjb25zdCBBYm91dFBhZ2UgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XG4gICAgbmF2YmFyKCk7XG4gICAgY3JlYXRlQW1lbml0aWVzKCk7XG4gICAgY3JlYXRlQWJvdXRVcygpO1xuICAgIGNyZWF0ZUdhbGxlcnkoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVBbWVuaXRpZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYW1lbml0aWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbWVuaXRpZXMuY2xhc3NMaXN0LmFkZChcImFtZW5pdGllc1wiKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiQW1lbml0aWVzXCI7XG4gICAgYW1lbml0aWVzLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IGljb25zID0ge1xuICAgICAgZGVsaXZlcnk6IFtcImZhLXRydWNrXCIsIFwiSG9tZSBEZWxpdmVyeVwiXSxcbiAgICAgIHRha2Vhd2F5OiBbXCJmYS1iYWctc2hvcHBpbmdcIiwgXCJUYWtlIEF3YXlcIl0sXG4gICAgICBwYXltZW50OiBbXCJmYS1jcmVkaXQtY2FyZFwiLCBcIk11bHRpcGxlIFBheW1lbnQgTW9kZVwiXSxcbiAgICAgIHBhcnR5OiBbXCJmYS1naWZ0XCIsIFwiUGFydHkgT3JkZXJzXCJdLFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gaWNvbnMpIHtcbiAgICAgIGNvbnN0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlubmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICAgICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgaS5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgaWNvbnNba2V5XVswXSk7XG4gICAgICBpbm5lckRpdi5hcHBlbmRDaGlsZChpKTtcbiAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgaDIudGV4dENvbnRlbnQgPSBpY29uc1trZXldWzFdO1xuICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYpO1xuICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICAgICAgYW1lbml0aWVzLmFwcGVuZENoaWxkKG91dGVyRGl2KTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhbWVuaXRpZXMpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUFib3V0VXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWJvdXRVcy5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdXNcIik7XG5cbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAudGV4dENvbnRlbnQgPVxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdXBpZGl0YXRlIGRvbG9yZW0sIGV4cGVkaXRhIGlsbHVtIGludmVudG9yZSBwcmFlc2VudGl1bSBpcHN1bSBzaXQsIHRlbXBvcmlidXMgc2ltaWxpcXVlIGFsaXF1YW0gYWIgbm9zdHJ1bSB0ZW5ldHVyLiBPcHRpbyBlaXVzIGRvbG9yZW1xdWUgdm9sdXB0YXRlbSBjdW0sIHF1aWJ1c2RhbSBkdWNpbXVzIHN1bnQ/XCI7XG4gICAgcC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGxlZnQuYXBwZW5kKGgxLCBwKTtcblxuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByaWdodC5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZChyaWdodCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dFVzKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVHYWxsZXJ5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbGxlcnkuY2xhc3NMaXN0LmFkZChcImdhbGxlcnlcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiR2FsbGVyeVwiO1xuICAgIGdhbGxlcnkuYXBwZW5kKGgxKTtcbiAgICBjb25zdCBzb3VyY2VzID0gW1xuICAgICAgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvTE83ck5QMExScm9cIixcbiAgICAgIFwiaHR0cHM6Ly9tLmFwa3B1cmUuY29tL2JuL2NoaW5lc2UtZm9vZC13YWxscGFwZXJzL2NvbS56b29tYXBwcy5DaGluZXNlRm9vZFdhbGxwYXBlcnMjY29tLnpvb21hcHBzLkNoaW5lc2VGb29kV2FsbHBhcGVycy01XCIsXG4gICAgICBcImh0dHBzOi8vcGludGVyZXN0LmNvbS9waW4vMTExMTgyNjg0NTQyMzAxOTU3L1wiLFxuICAgIF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgc291cmNlc1tpXSk7XG4gICAgICBpbWdEaXYuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICBnYWxsZXJ5LmFwcGVuZENoaWxkKGltZ0Rpdik7XG4gICAgfVxuXG4gICAgY29udGVudC5hcHBlbmQoZ2FsbGVyeSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUGFnZSA9ICgpID0+IHtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhYm91dFwiKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkgY29udGVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXJQYWdlLCByZW1vdmVQYWdlIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0UGFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICBuYXZiYXIoKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImNvbnRhY3RcIik7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpIGNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVuZGVyUGFnZSwgcmVtb3ZlUGFnZSB9O1xufSkoKTtcbiIsImV4cG9ydCBjb25zdCBIb21lUGFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgY3JlYXRlTGlua0J0bnMgPSAobGlua1dyYXBwZXIpID0+IHtcbiAgICBjb25zdCBsaW5rcyA9IFtcIkFib3V0XCIsIFwiTWVudVwiLCBcIkNvbnRhY3RcIl07XG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgYS5pZCA9IGAke2xpbmt9YDtcbiAgICAgIGEuY2xhc3NMaXN0LmFkZChcImhvbWUtbmF2LWJ0blwiKTtcbiAgICAgIGEudGV4dENvbnRlbnQgPSBsaW5rO1xuICAgICAgbGlua1dyYXBwZXIuYXBwZW5kQ2hpbGQoYSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQmdUZXh0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJnVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmdUZXh0LmNsYXNzTGlzdC5hZGQoXCJiZy10ZXh0XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkRpc2NvdmVyIENoaW5lc2UgQ3Vpc2luZVwiO1xuICAgIGJnVGV4dC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnN0IGxpbmtXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaW5rV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibGluay13cmFwcGVyXCIpO1xuICAgIGJnVGV4dC5hcHBlbmRDaGlsZChsaW5rV3JhcHBlcik7XG4gICAgY3JlYXRlTGlua0J0bnMobGlua1dyYXBwZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmdUZXh0KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZChcIm1haW4tcGFnZS1mb290ZXJcIik7XG4gICAgY29uc3QgYXV0aG9yTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGF1dGhvckxpbmsudGV4dENvbnRlbnQgPSBcIk9yaWppdCBDaGF0dGVyamVlXCI7XG4gICAgYXV0aG9yTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQG9yaWppdDU3XCIpO1xuICAgIGNvbnN0IHNvdXJjZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBzb3VyY2VMaW5rLnRleHRDb250ZW50ID0gXCJVbnNwbGFzaFwiO1xuICAgIHNvdXJjZUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy93RUJnX3BZdHlud1wiKTtcbiAgICBmb290ZXIuaW5uZXJIVE1MID0gYEltYWdlIGJ5ICR7YXV0aG9yTGluay5vdXRlckhUTUx9IG9uICR7c291cmNlTGluay5vdXRlckhUTUx9YDtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcbiAgICBjcmVhdGVCZ1RleHQoKTtcbiAgICBjcmVhdGVGb290ZXIoKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVQYWdlID0gKCkgPT4ge1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZShcImhvbWVcIik7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpIGNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVuZGVyUGFnZSwgcmVtb3ZlUGFnZSB9O1xufSkoKTtcbiIsImltcG9ydCB7IEhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZVwiO1xuaW1wb3J0IHsgQ29udGFjdFBhZ2UgfSBmcm9tIFwiLi9jb250YWN0XCI7XG5pbXBvcnQgeyBBYm91dFBhZ2UgfSBmcm9tIFwiLi9hYm91dFwiO1xuaW1wb3J0IHsgTWVudVBhZ2UgfSBmcm9tIFwiLi9tZW51XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gIGxldCBjdXJQYWdlID0gSG9tZVBhZ2U7XG4gIGN1clBhZ2UucmVuZGVyUGFnZSgpO1xuXG4gIGNvbnN0IGNoYW5nZVBhZ2UgPSAocGFnZSkgPT4ge1xuICAgIGNvbnN0IG5QYWdlID0gcGFnZS50YXJnZXQuaWQ7XG4gICAgY3VyUGFnZS5yZW1vdmVQYWdlKCk7XG4gICAgc3dpdGNoIChuUGFnZSkge1xuICAgICAgY2FzZSBcIkFib3V0XCI6XG4gICAgICAgIGN1clBhZ2UgPSBBYm91dFBhZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIkNvbnRhY3RcIjpcbiAgICAgICAgY3VyUGFnZSA9IENvbnRhY3RQYWdlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJNZW51XCI6XG4gICAgICAgIGN1clBhZ2UgPSBNZW51UGFnZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBjdXJQYWdlID0gSG9tZVBhZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjdXJQYWdlLnJlbmRlclBhZ2UoKTtcbiAgICBpZiAoY3VyUGFnZSA9PSBIb21lUGFnZSkgYWRkaG9tZVBhZ2VFTCgpO1xuICB9O1xuXG4gIGNvbnN0IGFkZGhvbWVQYWdlRUwgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZS1uYXYtYnRuXCIpKTtcbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VQYWdlKTtcbiAgICB9KTtcbiAgfTtcbiAgYWRkaG9tZVBhZ2VFTCgpO1xuXG4gIHJldHVybiB7IGNoYW5nZVBhZ2UgfTtcbn0pKCk7XG4iLCJpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXJcIjtcblxuZXhwb3J0IGNvbnN0IE1lbnVQYWdlID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgIG5hdmJhcigpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwicmVtb3ZlXCIpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0RWxlbWVudENoaWxkKSBjb250ZW50LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlclBhZ2UsIHJlbW92ZVBhZ2UgfTtcbn0pKCk7XG4iLCJpbXBvcnQgaW5kZXggZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGNvbnN0IG5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgbGlua3MgPSBbXCJIb21lXCIsIFwiQWJvdXRcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXTtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmRleC5jaGFuZ2VQYWdlKTtcbiAgICBhLmlkID0gbGluaztcbiAgICBhLnRleHRDb250ZW50ID0gbGluaztcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQobmF2KTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9