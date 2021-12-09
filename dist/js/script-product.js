/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main-product.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main-product.js":
/*!********************************!*\
  !*** ./src/js/main-product.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.addEventListener("DOMContentLoaded", () => {
  const menuClose = document.querySelector(".menu-close"),
        menuOpen = document.querySelector(".menu-open"),
        btnMenuOpen = document.querySelector(".menu-close__close-icon"),
        btnMenuClose = document.querySelector(".menu-open-cross__link"),
        filterLinks = document.querySelectorAll(".filter__link"),
        btnSizeOnSale = document.querySelectorAll(".product-btn__on-sale"),
        colorsCircle = document.querySelectorAll(".product-colors-item"); // Menu

  switchMenu(btnMenuClose);
  switchMenu(btnMenuOpen);

  function switchMenu(element) {
    element.addEventListener("click", e => {
      e.preventDefault();
      menuClose.classList.toggle("menu-hidden");
      menuOpen.classList.toggle("menu-hidden");
    });
  } //Filter


  filterLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      switchActiveClass("filter__active", link);
      link.classList.add("filter__active");
      let data = link.dataset.filter,
          tab = document.querySelector(`[data-information='${data}']`);
      switchActiveClass("tabs_active", tab);
    });
  }); // BTN Size

  btnSizeOnSale.forEach(btn => {
    btn.addEventListener("click", e => {
      e.preventDefault();
      switchActiveClass("product-btn__active", btn);
    });
  }); // Colors

  colorsCircle.forEach(circle => {
    circle.addEventListener("click", e => {
      e.preventDefault();
      switchActiveClass("product-colors-item_active", circle);
      let data = circle.dataset.btn,
          thsirt = document.querySelector(`[data-tshirts-color='${data}']`);
      switchActiveClass("product__photo_active", thsirt);
    });
  }); // 

  function switchActiveClass(activeClass, element) {
    let active = document.querySelector(`.${activeClass}`);
    active.classList.remove(activeClass);
    element.classList.add(activeClass);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=script-product.js.map