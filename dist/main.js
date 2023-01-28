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
    content.classList.add("contact");
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
/* harmony import */ var _images_beef_and_veggy_stir_fry_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/beef-and-veggy-stir-fry.jpg */ "./src/images/beef-and-veggy-stir-fry.jpg");
/* harmony import */ var _images_dumplings_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/dumplings.jpg */ "./src/images/dumplings.jpg");
/* harmony import */ var _images_orange_chicken_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/orange-chicken.jpg */ "./src/images/orange-chicken.jpg");
/* harmony import */ var _images_Zha_Jiang_Mian_Recipes_Eat_Cho_Food_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Zha+Jiang+Mian+Recipes+-+Eat+Cho+Food.jpg */ "./src/images/Zha+Jiang+Mian+Recipes+-+Eat+Cho+Food.jpg");






const MenuPage = (() => {
  const content = document.querySelector("#content");

  const renderPage = () => {
    content.classList.add("menu");
    (0,_navbar__WEBPACK_IMPORTED_MODULE_0__.navbar)();
    createMenu();
  };

  const createMenu = () => {
    const h1 = document.createElement("h1");
    h1.textContent = "We Serve";
    content.appendChild(h1);
    const food = [
      [_images_beef_and_veggy_stir_fry_jpg__WEBPACK_IMPORTED_MODULE_1__, _images_dumplings_jpg__WEBPACK_IMPORTED_MODULE_2__, _images_orange_chicken_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_Zha_Jiang_Mian_Recipes_Eat_Cho_Food_jpg__WEBPACK_IMPORTED_MODULE_4__],
      [
        "Beef and vegetable stir fry",
        "Dumplings",
        "Orange Chicken",
        "Zhájiàng Miàn (noodles with bean paste)",
      ],
    ];
    for (let i = 0; i < 4; i += 1) {
      const text = document.createElement("p");
      const price = Math.floor(Math.random() * 1000 + 2000) / 100;
      text.innerHTML = `${food[1][i]}<br>Price: $${price}`;
      const img = document.createElement("img");
      img.setAttribute("src", food[0][i]);
      content.append(text, img);
    }
  };

  const removePage = () => {
    content.classList.remove("menu");
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


/***/ }),

/***/ "./src/images/Zha+Jiang+Mian+Recipes+-+Eat+Cho+Food.jpg":
/*!**************************************************************!*\
  !*** ./src/images/Zha+Jiang+Mian+Recipes+-+Eat+Cho+Food.jpg ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd3d757b67200079cd94.jpg";

/***/ }),

/***/ "./src/images/beef-and-veggy-stir-fry.jpg":
/*!************************************************!*\
  !*** ./src/images/beef-and-veggy-stir-fry.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d41d67f7a9136a86f2ea.jpg";

/***/ }),

/***/ "./src/images/dumplings.jpg":
/*!**********************************!*\
  !*** ./src/images/dumplings.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "76d5d5da0c4fec140124.jpg";

/***/ }),

/***/ "./src/images/orange-chicken.jpg":
/*!***************************************!*\
  !*** ./src/images/orange-chicken.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1bd93ffded6b1a60bd34.jpg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRWZBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyXCI7XG5cbmV4cG9ydCBjb25zdCBBYm91dFBhZ2UgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XG4gICAgbmF2YmFyKCk7XG4gICAgY3JlYXRlQW1lbml0aWVzKCk7XG4gICAgY3JlYXRlQWJvdXRVcygpO1xuICAgIGNyZWF0ZUdhbGxlcnkoKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVBbWVuaXRpZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYW1lbml0aWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhbWVuaXRpZXMuY2xhc3NMaXN0LmFkZChcImFtZW5pdGllc1wiKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiQW1lbml0aWVzXCI7XG4gICAgYW1lbml0aWVzLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IGljb25zID0ge1xuICAgICAgZGVsaXZlcnk6IFtcImZhLXRydWNrXCIsIFwiSG9tZSBEZWxpdmVyeVwiXSxcbiAgICAgIHRha2Vhd2F5OiBbXCJmYS1iYWctc2hvcHBpbmdcIiwgXCJUYWtlIEF3YXlcIl0sXG4gICAgICBwYXltZW50OiBbXCJmYS1jcmVkaXQtY2FyZFwiLCBcIk11bHRpcGxlIFBheW1lbnQgTW9kZVwiXSxcbiAgICAgIHBhcnR5OiBbXCJmYS1naWZ0XCIsIFwiUGFydHkgT3JkZXJzXCJdLFxuICAgIH07XG5cbiAgICBmb3IgKGxldCBrZXkgaW4gaWNvbnMpIHtcbiAgICAgIGNvbnN0IG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnN0IGlubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGlubmVyRGl2LmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpO1xuICAgICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgICAgaS5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgaWNvbnNba2V5XVswXSk7XG4gICAgICBpbm5lckRpdi5hcHBlbmRDaGlsZChpKTtcbiAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgaDIudGV4dENvbnRlbnQgPSBpY29uc1trZXldWzFdO1xuICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoaW5uZXJEaXYpO1xuICAgICAgb3V0ZXJEaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICAgICAgYW1lbml0aWVzLmFwcGVuZENoaWxkKG91dGVyRGl2KTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhbWVuaXRpZXMpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUFib3V0VXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYWJvdXRVcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWJvdXRVcy5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdXNcIik7XG5cbiAgICBjb25zdCBsZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZWZ0LmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQobGVmdCk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIkFib3V0IFVzXCI7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAudGV4dENvbnRlbnQgPVxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBDdXBpZGl0YXRlIGRvbG9yZW0sIGV4cGVkaXRhIGlsbHVtIGludmVudG9yZSBwcmFlc2VudGl1bSBpcHN1bSBzaXQsIHRlbXBvcmlidXMgc2ltaWxpcXVlIGFsaXF1YW0gYWIgbm9zdHJ1bSB0ZW5ldHVyLiBPcHRpbyBlaXVzIGRvbG9yZW1xdWUgdm9sdXB0YXRlbSBjdW0sIHF1aWJ1c2RhbSBkdWNpbXVzIHN1bnQ/XCI7XG4gICAgcC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIGxlZnQuYXBwZW5kKGgxLCBwKTtcblxuICAgIGNvbnN0IHJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByaWdodC5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XG4gICAgYWJvdXRVcy5hcHBlbmRDaGlsZChyaWdodCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhYm91dFVzKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVHYWxsZXJ5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbGxlcnkuY2xhc3NMaXN0LmFkZChcImdhbGxlcnlcIik7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiR2FsbGVyeVwiO1xuICAgIGdhbGxlcnkuYXBwZW5kKGgxKTtcbiAgICBjb25zdCBzb3VyY2VzID0gW1xuICAgICAgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvTE83ck5QMExScm9cIixcbiAgICAgIFwiaHR0cHM6Ly9tLmFwa3B1cmUuY29tL2JuL2NoaW5lc2UtZm9vZC13YWxscGFwZXJzL2NvbS56b29tYXBwcy5DaGluZXNlRm9vZFdhbGxwYXBlcnMjY29tLnpvb21hcHBzLkNoaW5lc2VGb29kV2FsbHBhcGVycy01XCIsXG4gICAgICBcImh0dHBzOi8vcGludGVyZXN0LmNvbS9waW4vMTExMTgyNjg0NTQyMzAxOTU3L1wiLFxuICAgIF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgc291cmNlc1tpXSk7XG4gICAgICBpbWdEaXYuYXBwZW5kQ2hpbGQoYSk7XG4gICAgICBnYWxsZXJ5LmFwcGVuZENoaWxkKGltZ0Rpdik7XG4gICAgfVxuXG4gICAgY29udGVudC5hcHBlbmQoZ2FsbGVyeSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUGFnZSA9ICgpID0+IHtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhYm91dFwiKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkgY29udGVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXJQYWdlLCByZW1vdmVQYWdlIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyXCI7XG5cbmV4cG9ydCBjb25zdCBDb250YWN0UGFnZSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbiAgY29uc3QgcmVuZGVyUGFnZSA9ICgpID0+IHtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuICAgIG5hdmJhcigpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29udGFjdFwiKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkgY29udGVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXJQYWdlLCByZW1vdmVQYWdlIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IEhvbWVQYWdlID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBjcmVhdGVMaW5rQnRucyA9IChsaW5rV3JhcHBlcikgPT4ge1xuICAgIGNvbnN0IGxpbmtzID0gW1wiQWJvdXRcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXTtcbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBhLmlkID0gYCR7bGlua31gO1xuICAgICAgYS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1uYXYtYnRuXCIpO1xuICAgICAgYS50ZXh0Q29udGVudCA9IGxpbms7XG4gICAgICBsaW5rV3JhcHBlci5hcHBlbmRDaGlsZChhKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCZ1RleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgYmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiZ1RleHQuY2xhc3NMaXN0LmFkZChcImJnLXRleHRcIik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRGlzY292ZXIgQ2hpbmVzZSBDdWlzaW5lXCI7XG4gICAgYmdUZXh0LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29uc3QgbGlua1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpbmtXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJsaW5rLXdyYXBwZXJcIik7XG4gICAgYmdUZXh0LmFwcGVuZENoaWxkKGxpbmtXcmFwcGVyKTtcbiAgICBjcmVhdGVMaW5rQnRucyhsaW5rV3JhcHBlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiZ1RleHQpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwibWFpbi1wYWdlLWZvb3RlclwiKTtcbiAgICBjb25zdCBhdXRob3JMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYXV0aG9yTGluay50ZXh0Q29udGVudCA9IFwiT3Jpaml0IENoYXR0ZXJqZWVcIjtcbiAgICBhdXRob3JMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ab3Jpaml0NTdcIik7XG4gICAgY29uc3Qgc291cmNlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHNvdXJjZUxpbmsudGV4dENvbnRlbnQgPSBcIlVuc3BsYXNoXCI7XG4gICAgc291cmNlTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3dFQmdfcFl0eW53XCIpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgSW1hZ2UgYnkgJHthdXRob3JMaW5rLm91dGVySFRNTH0gb24gJHtzb3VyY2VMaW5rLm91dGVySFRNTH1gO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJcIjtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICAgIGNyZWF0ZUJnVGV4dCgpO1xuICAgIGNyZWF0ZUZvb3RlcigpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaG9tZVwiKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkgY29udGVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXJQYWdlLCByZW1vdmVQYWdlIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBDb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCB7IEFib3V0UGFnZSB9IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgeyBNZW51UGFnZSB9IGZyb20gXCIuL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgbGV0IGN1clBhZ2UgPSBIb21lUGFnZTtcbiAgY3VyUGFnZS5yZW5kZXJQYWdlKCk7XG5cbiAgY29uc3QgY2hhbmdlUGFnZSA9IChwYWdlKSA9PiB7XG4gICAgY29uc3QgblBhZ2UgPSBwYWdlLnRhcmdldC5pZDtcbiAgICBjdXJQYWdlLnJlbW92ZVBhZ2UoKTtcbiAgICBzd2l0Y2ggKG5QYWdlKSB7XG4gICAgICBjYXNlIFwiQWJvdXRcIjpcbiAgICAgICAgY3VyUGFnZSA9IEFib3V0UGFnZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQ29udGFjdFwiOlxuICAgICAgICBjdXJQYWdlID0gQ29udGFjdFBhZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgY3VyUGFnZSA9IE1lbnVQYWdlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGN1clBhZ2UgPSBIb21lUGFnZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGN1clBhZ2UucmVuZGVyUGFnZSgpO1xuICAgIGlmIChjdXJQYWdlID09IEhvbWVQYWdlKSBhZGRob21lUGFnZUVMKCk7XG4gIH07XG5cbiAgY29uc3QgYWRkaG9tZVBhZ2VFTCA9ICgpID0+IHtcbiAgICBjb25zdCBsaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lLW5hdi1idG5cIikpO1xuICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVBhZ2UpO1xuICAgIH0pO1xuICB9O1xuICBhZGRob21lUGFnZUVMKCk7XG5cbiAgcmV0dXJuIHsgY2hhbmdlUGFnZSB9O1xufSkoKTtcbiIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IHN0aXJGcnkgZnJvbSBcIi4vaW1hZ2VzL2JlZWYtYW5kLXZlZ2d5LXN0aXItZnJ5LmpwZ1wiO1xuaW1wb3J0IGR1bXBsaW5ncyBmcm9tIFwiLi9pbWFnZXMvZHVtcGxpbmdzLmpwZ1wiO1xuaW1wb3J0IG9yYW5nZUNoaWNrZW4gZnJvbSBcIi4vaW1hZ2VzL29yYW5nZS1jaGlja2VuLmpwZ1wiO1xuaW1wb3J0IHpoYUppYW5nIGZyb20gXCIuL2ltYWdlcy9aaGErSmlhbmcrTWlhbitSZWNpcGVzKy0rRWF0K0NobytGb29kLmpwZ1wiO1xuXG5leHBvcnQgY29uc3QgTWVudVBhZ2UgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBuYXZiYXIoKTtcbiAgICBjcmVhdGVNZW51KCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiV2UgU2VydmVcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGgxKTtcbiAgICBjb25zdCBmb29kID0gW1xuICAgICAgW3N0aXJGcnksIGR1bXBsaW5ncywgb3JhbmdlQ2hpY2tlbiwgemhhSmlhbmddLFxuICAgICAgW1xuICAgICAgICBcIkJlZWYgYW5kIHZlZ2V0YWJsZSBzdGlyIGZyeVwiLFxuICAgICAgICBcIkR1bXBsaW5nc1wiLFxuICAgICAgICBcIk9yYW5nZSBDaGlja2VuXCIsXG4gICAgICAgIFwiWmjDoWppw6BuZyBNacOgbiAobm9vZGxlcyB3aXRoIGJlYW4gcGFzdGUpXCIsXG4gICAgICBdLFxuICAgIF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IHByaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCArIDIwMDApIC8gMTAwO1xuICAgICAgdGV4dC5pbm5lckhUTUwgPSBgJHtmb29kWzFdW2ldfTxicj5QcmljZTogJCR7cHJpY2V9YDtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGZvb2RbMF1baV0pO1xuICAgICAgY29udGVudC5hcHBlbmQodGV4dCwgaW1nKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUGFnZSA9ICgpID0+IHtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51XCIpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0RWxlbWVudENoaWxkKSBjb250ZW50LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlclBhZ2UsIHJlbW92ZVBhZ2UgfTtcbn0pKCk7XG4iLCJpbXBvcnQgaW5kZXggZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGNvbnN0IG5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgbGlua3MgPSBbXCJIb21lXCIsIFwiQWJvdXRcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXTtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmRleC5jaGFuZ2VQYWdlKTtcbiAgICBhLmlkID0gbGluaztcbiAgICBhLnRleHRDb250ZW50ID0gbGluaztcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQobmF2KTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==