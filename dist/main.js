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
    createInfo();
  };

  const createInfo = () => {
    const body = document.createElement("div");
    content.appendChild(body);
    createCard(body);
    body.classList.add("body");
  };

  const createCard = (body) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const h1 = document.createElement("h1");
    h1.textContent = "Get in contact";
    card.appendChild(h1);

    const addAdress = () => {
      const contact = {
        phone: "(+86) 130 638 901 61",
        street: "Nan Tang Bin Lu 116hao 2hao Lou",
        address: "LuWan District, Shanghai, 200071",
      };
      const phone = document.createElement("h2");
      phone.innerHTML = `<span>Phone number: </span> ${contact.phone}`;
      const street = document.createElement("h2");
      street.innerHTML = `<span>Street: </span> ${contact.street}`;
      const address = document.createElement("h2");
      address.innerHTML = `<span>City Area: </span> ${contact.address}`;
      card.append(phone, street, address);
    };
    addAdress();

    const message = document.createElement("h1");
    message.textContent = "Write us a message";
    card.appendChild(message);

    const addForm = () => {
      const fields = ["first-name", "last-name", "message"];
      fields.forEach((field) => {
        const label = document.createElement("label");
        const input =
          field === "message"
            ? document.createElement("textarea")
            : document.createElement("input");
        label.textContent =
          field
            .split("-")
            .map((word) => word[0].toUpperCase() + word.substring(1))
            .join(" ") + ":";
        label.setAttribute("for", field);
        if (!(field === "message")) input.setAttribute("type", "text");
        else {
          input.cols = "25";
          input.rows = "5";
        }
        input.id = input.name = field;
        input.setAttribute("autocomplete", "off");

        card.append(label, input);
      });
    };
    addForm();

    body.appendChild(card);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxvQkFBb0IsT0FBTztBQUMzQjtBQUNBO0FBQ0EsMEJBQTBCLFdBQVcsY0FBYyxNQUFNO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QzJCOztBQUVyQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHlEQUFnQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7VUVmQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xuXG5leHBvcnQgY29uc3QgQWJvdXRQYWdlID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImFib3V0XCIpO1xuICAgIG5hdmJhcigpO1xuICAgIGNyZWF0ZUFtZW5pdGllcygpO1xuICAgIGNyZWF0ZUFib3V0VXMoKTtcbiAgICBjcmVhdGVHYWxsZXJ5KCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlQW1lbml0aWVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFtZW5pdGllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYW1lbml0aWVzLmNsYXNzTGlzdC5hZGQoXCJhbWVuaXRpZXNcIik7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIkFtZW5pdGllc1wiO1xuICAgIGFtZW5pdGllcy5hcHBlbmRDaGlsZChoMSk7XG5cbiAgICBjb25zdCBpY29ucyA9IHtcbiAgICAgIGRlbGl2ZXJ5OiBbXCJmYS10cnVja1wiLCBcIkhvbWUgRGVsaXZlcnlcIl0sXG4gICAgICB0YWtlYXdheTogW1wiZmEtYmFnLXNob3BwaW5nXCIsIFwiVGFrZSBBd2F5XCJdLFxuICAgICAgcGF5bWVudDogW1wiZmEtY3JlZGl0LWNhcmRcIiwgXCJNdWx0aXBsZSBQYXltZW50IE1vZGVcIl0sXG4gICAgICBwYXJ0eTogW1wiZmEtZ2lmdFwiLCBcIlBhcnR5IE9yZGVyc1wiXSxcbiAgICB9O1xuXG4gICAgZm9yIChsZXQga2V5IGluIGljb25zKSB7XG4gICAgICBjb25zdCBvdXRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBpbm5lckRpdi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTtcbiAgICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICAgIGkuY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIGljb25zW2tleV1bMF0pO1xuICAgICAgaW5uZXJEaXYuYXBwZW5kQ2hpbGQoaSk7XG4gICAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIGgyLnRleHRDb250ZW50ID0gaWNvbnNba2V5XVsxXTtcbiAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcbiAgICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGgyKTtcbiAgICAgIGFtZW5pdGllcy5hcHBlbmRDaGlsZChvdXRlckRpdik7XG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYW1lbml0aWVzKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVBYm91dFVzID0gKCkgPT4ge1xuICAgIGNvbnN0IGFib3V0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGFib3V0VXMuY2xhc3NMaXN0LmFkZChcImFib3V0LXVzXCIpO1xuXG4gICAgY29uc3QgbGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGVmdC5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcbiAgICBhYm91dFVzLmFwcGVuZENoaWxkKGxlZnQpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJBYm91dCBVc1wiO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLnRleHRDb250ZW50ID1cbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQ3VwaWRpdGF0ZSBkb2xvcmVtLCBleHBlZGl0YSBpbGx1bSBpbnZlbnRvcmUgcHJhZXNlbnRpdW0gaXBzdW0gc2l0LCB0ZW1wb3JpYnVzIHNpbWlsaXF1ZSBhbGlxdWFtIGFiIG5vc3RydW0gdGVuZXR1ci4gT3B0aW8gZWl1cyBkb2xvcmVtcXVlIHZvbHVwdGF0ZW0gY3VtLCBxdWlidXNkYW0gZHVjaW11cyBzdW50P1wiO1xuICAgIHAuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBsZWZ0LmFwcGVuZChoMSwgcCk7XG5cbiAgICBjb25zdCByaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcmlnaHQuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xuICAgIGFib3V0VXMuYXBwZW5kQ2hpbGQocmlnaHQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWJvdXRVcyk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlR2FsbGVyeSA9ICgpID0+IHtcbiAgICBjb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYWxsZXJ5LmNsYXNzTGlzdC5hZGQoXCJnYWxsZXJ5XCIpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIkdhbGxlcnlcIjtcbiAgICBnYWxsZXJ5LmFwcGVuZChoMSk7XG4gICAgY29uc3Qgc291cmNlcyA9IFtcbiAgICAgIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0xPN3JOUDBMUnJvXCIsXG4gICAgICBcImh0dHBzOi8vbS5hcGtwdXJlLmNvbS9ibi9jaGluZXNlLWZvb2Qtd2FsbHBhcGVycy9jb20uem9vbWFwcHMuQ2hpbmVzZUZvb2RXYWxscGFwZXJzI2NvbS56b29tYXBwcy5DaGluZXNlRm9vZFdhbGxwYXBlcnMtNVwiLFxuICAgICAgXCJodHRwczovL3BpbnRlcmVzdC5jb20vcGluLzExMTE4MjY4NDU0MjMwMTk1Ny9cIixcbiAgICBdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB7XG4gICAgICBjb25zdCBpbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHNvdXJjZXNbaV0pO1xuICAgICAgaW1nRGl2LmFwcGVuZENoaWxkKGEpO1xuICAgICAgZ2FsbGVyeS5hcHBlbmRDaGlsZChpbWdEaXYpO1xuICAgIH1cblxuICAgIGNvbnRlbnQuYXBwZW5kKGdhbGxlcnkpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWJvdXRcIik7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpIGNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIHsgcmVuZGVyUGFnZSwgcmVtb3ZlUGFnZSB9O1xufSkoKTtcbiIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xuXG5leHBvcnQgY29uc3QgQ29udGFjdFBhZ2UgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcbiAgICBuYXZiYXIoKTtcbiAgICBjcmVhdGVJbmZvKCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlSW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvZHkpO1xuICAgIGNyZWF0ZUNhcmQoYm9keSk7XG4gICAgYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keVwiKTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVDYXJkID0gKGJvZHkpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJjYXJkXCIpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJHZXQgaW4gY29udGFjdFwiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgY29uc3QgYWRkQWRyZXNzID0gKCkgPT4ge1xuICAgICAgY29uc3QgY29udGFjdCA9IHtcbiAgICAgICAgcGhvbmU6IFwiKCs4NikgMTMwIDYzOCA5MDEgNjFcIixcbiAgICAgICAgc3RyZWV0OiBcIk5hbiBUYW5nIEJpbiBMdSAxMTZoYW8gMmhhbyBMb3VcIixcbiAgICAgICAgYWRkcmVzczogXCJMdVdhbiBEaXN0cmljdCwgU2hhbmdoYWksIDIwMDA3MVwiLFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgcGhvbmUuaW5uZXJIVE1MID0gYDxzcGFuPlBob25lIG51bWJlcjogPC9zcGFuPiAke2NvbnRhY3QucGhvbmV9YDtcbiAgICAgIGNvbnN0IHN0cmVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgIHN0cmVldC5pbm5lckhUTUwgPSBgPHNwYW4+U3RyZWV0OiA8L3NwYW4+ICR7Y29udGFjdC5zdHJlZXR9YDtcbiAgICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICBhZGRyZXNzLmlubmVySFRNTCA9IGA8c3Bhbj5DaXR5IEFyZWE6IDwvc3Bhbj4gJHtjb250YWN0LmFkZHJlc3N9YDtcbiAgICAgIGNhcmQuYXBwZW5kKHBob25lLCBzdHJlZXQsIGFkZHJlc3MpO1xuICAgIH07XG4gICAgYWRkQWRyZXNzKCk7XG5cbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIldyaXRlIHVzIGEgbWVzc2FnZVwiO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG5cbiAgICBjb25zdCBhZGRGb3JtID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmllbGRzID0gW1wiZmlyc3QtbmFtZVwiLCBcImxhc3QtbmFtZVwiLCBcIm1lc3NhZ2VcIl07XG4gICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGNvbnN0IGlucHV0ID1cbiAgICAgICAgICBmaWVsZCA9PT0gXCJtZXNzYWdlXCJcbiAgICAgICAgICAgID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpXG4gICAgICAgICAgICA6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPVxuICAgICAgICAgIGZpZWxkXG4gICAgICAgICAgICAuc3BsaXQoXCItXCIpXG4gICAgICAgICAgICAubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cmluZygxKSlcbiAgICAgICAgICAgIC5qb2luKFwiIFwiKSArIFwiOlwiO1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZmllbGQpO1xuICAgICAgICBpZiAoIShmaWVsZCA9PT0gXCJtZXNzYWdlXCIpKSBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaW5wdXQuY29scyA9IFwiMjVcIjtcbiAgICAgICAgICBpbnB1dC5yb3dzID0gXCI1XCI7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQuaWQgPSBpbnB1dC5uYW1lID0gZmllbGQ7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcImF1dG9jb21wbGV0ZVwiLCBcIm9mZlwiKTtcblxuICAgICAgICBjYXJkLmFwcGVuZChsYWJlbCwgaW5wdXQpO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBhZGRGb3JtKCk7XG5cbiAgICBib2R5LmFwcGVuZENoaWxkKGNhcmQpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY29udGFjdFwiKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkgY29udGVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXJQYWdlLCByZW1vdmVQYWdlIH07XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IEhvbWVQYWdlID0gKCgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxuICBjb25zdCBjcmVhdGVMaW5rQnRucyA9IChsaW5rV3JhcHBlcikgPT4ge1xuICAgIGNvbnN0IGxpbmtzID0gW1wiQWJvdXRcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXTtcbiAgICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBhLmlkID0gYCR7bGlua31gO1xuICAgICAgYS5jbGFzc0xpc3QuYWRkKFwiaG9tZS1uYXYtYnRuXCIpO1xuICAgICAgYS50ZXh0Q29udGVudCA9IGxpbms7XG4gICAgICBsaW5rV3JhcHBlci5hcHBlbmRDaGlsZChhKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjcmVhdGVCZ1RleHQgPSAoKSA9PiB7XG4gICAgY29uc3QgYmdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiZ1RleHQuY2xhc3NMaXN0LmFkZChcImJnLXRleHRcIik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiRGlzY292ZXIgQ2hpbmVzZSBDdWlzaW5lXCI7XG4gICAgYmdUZXh0LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29uc3QgbGlua1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpbmtXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJsaW5rLXdyYXBwZXJcIik7XG4gICAgYmdUZXh0LmFwcGVuZENoaWxkKGxpbmtXcmFwcGVyKTtcbiAgICBjcmVhdGVMaW5rQnRucyhsaW5rV3JhcHBlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiZ1RleHQpO1xuICB9O1xuXG4gIGNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwibWFpbi1wYWdlLWZvb3RlclwiKTtcbiAgICBjb25zdCBhdXRob3JMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYXV0aG9yTGluay50ZXh0Q29udGVudCA9IFwiT3Jpaml0IENoYXR0ZXJqZWVcIjtcbiAgICBhdXRob3JMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL3Vuc3BsYXNoLmNvbS9Ab3Jpaml0NTdcIik7XG4gICAgY29uc3Qgc291cmNlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIHNvdXJjZUxpbmsudGV4dENvbnRlbnQgPSBcIlVuc3BsYXNoXCI7XG4gICAgc291cmNlTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3dFQmdfcFl0eW53XCIpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPSBgSW1hZ2UgYnkgJHthdXRob3JMaW5rLm91dGVySFRNTH0gb24gJHtzb3VyY2VMaW5rLm91dGVySFRNTH1gO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJQYWdlID0gKCkgPT4ge1xuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gXCJcIjtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJob21lXCIpO1xuICAgIGNyZWF0ZUJnVGV4dCgpO1xuICAgIGNyZWF0ZUZvb3RlcigpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaG9tZVwiKTtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdEVsZW1lbnRDaGlsZCkgY29udGVudC5maXJzdEVsZW1lbnRDaGlsZC5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4geyByZW5kZXJQYWdlLCByZW1vdmVQYWdlIH07XG59KSgpO1xuIiwiaW1wb3J0IHsgSG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyBDb250YWN0UGFnZSB9IGZyb20gXCIuL2NvbnRhY3RcIjtcbmltcG9ydCB7IEFib3V0UGFnZSB9IGZyb20gXCIuL2Fib3V0XCI7XG5pbXBvcnQgeyBNZW51UGFnZSB9IGZyb20gXCIuL21lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCgpID0+IHtcbiAgbGV0IGN1clBhZ2UgPSBIb21lUGFnZTtcbiAgY3VyUGFnZS5yZW5kZXJQYWdlKCk7XG5cbiAgY29uc3QgY2hhbmdlUGFnZSA9IChwYWdlKSA9PiB7XG4gICAgY29uc3QgblBhZ2UgPSBwYWdlLnRhcmdldC5pZDtcbiAgICBjdXJQYWdlLnJlbW92ZVBhZ2UoKTtcbiAgICBzd2l0Y2ggKG5QYWdlKSB7XG4gICAgICBjYXNlIFwiQWJvdXRcIjpcbiAgICAgICAgY3VyUGFnZSA9IEFib3V0UGFnZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiQ29udGFjdFwiOlxuICAgICAgICBjdXJQYWdlID0gQ29udGFjdFBhZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIk1lbnVcIjpcbiAgICAgICAgY3VyUGFnZSA9IE1lbnVQYWdlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGN1clBhZ2UgPSBIb21lUGFnZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGN1clBhZ2UucmVuZGVyUGFnZSgpO1xuICAgIGlmIChjdXJQYWdlID09IEhvbWVQYWdlKSBhZGRob21lUGFnZUVMKCk7XG4gIH07XG5cbiAgY29uc3QgYWRkaG9tZVBhZ2VFTCA9ICgpID0+IHtcbiAgICBjb25zdCBsaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lLW5hdi1idG5cIikpO1xuICAgIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZVBhZ2UpO1xuICAgIH0pO1xuICB9O1xuICBhZGRob21lUGFnZUVMKCk7XG5cbiAgcmV0dXJuIHsgY2hhbmdlUGFnZSB9O1xufSkoKTtcbiIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL25hdmJhclwiO1xuaW1wb3J0IHN0aXJGcnkgZnJvbSBcIi4vaW1hZ2VzL2JlZWYtYW5kLXZlZ2d5LXN0aXItZnJ5LmpwZ1wiO1xuaW1wb3J0IGR1bXBsaW5ncyBmcm9tIFwiLi9pbWFnZXMvZHVtcGxpbmdzLmpwZ1wiO1xuaW1wb3J0IG9yYW5nZUNoaWNrZW4gZnJvbSBcIi4vaW1hZ2VzL29yYW5nZS1jaGlja2VuLmpwZ1wiO1xuaW1wb3J0IHpoYUppYW5nIGZyb20gXCIuL2ltYWdlcy9aaGErSmlhbmcrTWlhbitSZWNpcGVzKy0rRWF0K0NobytGb29kLmpwZ1wiO1xuXG5leHBvcnQgY29uc3QgTWVudVBhZ2UgPSAoKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4gIGNvbnN0IHJlbmRlclBhZ2UgPSAoKSA9PiB7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcbiAgICBuYXZiYXIoKTtcbiAgICBjcmVhdGVNZW51KCk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICBoMS50ZXh0Q29udGVudCA9IFwiV2UgU2VydmVcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGgxKTtcbiAgICBjb25zdCBmb29kID0gW1xuICAgICAgW3N0aXJGcnksIGR1bXBsaW5ncywgb3JhbmdlQ2hpY2tlbiwgemhhSmlhbmddLFxuICAgICAgW1xuICAgICAgICBcIkJlZWYgYW5kIHZlZ2V0YWJsZSBzdGlyIGZyeVwiLFxuICAgICAgICBcIkR1bXBsaW5nc1wiLFxuICAgICAgICBcIk9yYW5nZSBDaGlja2VuXCIsXG4gICAgICAgIFwiWmjDoWppw6BuZyBNacOgbiAobm9vZGxlcyB3aXRoIGJlYW4gcGFzdGUpXCIsXG4gICAgICBdLFxuICAgIF07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IHByaWNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCArIDIwMDApIC8gMTAwO1xuICAgICAgdGV4dC5pbm5lckhUTUwgPSBgJHtmb29kWzFdW2ldfTxicj5QcmljZTogJCR7cHJpY2V9YDtcbiAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGZvb2RbMF1baV0pO1xuICAgICAgY29udGVudC5hcHBlbmQodGV4dCwgaW1nKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlUGFnZSA9ICgpID0+IHtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51XCIpO1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0RWxlbWVudENoaWxkKSBjb250ZW50LmZpcnN0RWxlbWVudENoaWxkLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiB7IHJlbmRlclBhZ2UsIHJlbW92ZVBhZ2UgfTtcbn0pKCk7XG4iLCJpbXBvcnQgaW5kZXggZnJvbSBcIi4vaW5kZXhcIjtcblxuZXhwb3J0IGNvbnN0IG5hdmJhciA9ICgpID0+IHtcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgY29uc3QgbGlua3MgPSBbXCJIb21lXCIsIFwiQWJvdXRcIiwgXCJNZW51XCIsIFwiQ29udGFjdFwiXTtcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBpbmRleC5jaGFuZ2VQYWdlKTtcbiAgICBhLmlkID0gbGluaztcbiAgICBhLnRleHRDb250ZW50ID0gbGluaztcbiAgICBuYXYuYXBwZW5kQ2hpbGQoYSk7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIikuYXBwZW5kQ2hpbGQobmF2KTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==