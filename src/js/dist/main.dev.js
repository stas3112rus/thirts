"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

window.addEventListener("DOMContentLoaded", function () {
  //Tabs
  var tabs = document.querySelectorAll(".tabheader__item"),
      tabsContent = document.querySelectorAll(".tabcontent"),
      tabsParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabsContent.forEach(function (item) {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach(function (item) {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();
  tabsParent.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("tabheader__item")) {
      tabs.forEach(function (item, i) {
        if (e.target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  }); // Timer

  var deadline = "2021-11-07";

  function getTimeRemaining(endTime) {
    var t = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hour = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor(t / (1000 * 60) % 60),
        seconds = Math.floor(t / 1000 % 60);
    return {
      t: t,
      days: days,
      hour: hour,
      minutes: minutes,
      seconds: seconds
    };
  }

  function setClock(selector, endTime) {
    var timer = document.querySelector(selector),
        days = document.querySelector("#days"),
        hours = timer.querySelector("#hours"),
        minutes = timer.querySelector("#minutes"),
        seconds = timer.querySelector("#seconds"),
        timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function addZero(num) {
      if (num >= 0 && num < 10) {
        return "0".concat(num);
      } else {
        return num;
      }
    }

    function updateClock() {
      var t = getTimeRemaining(endTime);
      days.innerHTML = addZero(t.days);
      hours.innerHTML = addZero(t.hour);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);

      if (t.t <= 0) {
        clearInterval(timeInterval);
        days.innerHTML = 0;
        hours.innerHTML = 0;
        minutes.innerHTML = 0;
        seconds.innerHTML = 0;
      }
    }
  }

  setClock(".timer", deadline); // Modal window

  var openModalWindow = document.querySelectorAll("button[data-modal]"),
      modal = document.querySelector(".modal"); //modalTimerId = setTimeout(openModal, 3000);

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = "visible";
  }

  function openModal() {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; //clearInterval(modalTimerId);     
  }

  openModalWindow.forEach(function (value) {
    value.addEventListener("click", openModal);
  });
  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModal();
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.code === "Escape" && window.getComputedStyle(modal).display == "block") {
      closeModal();
    }
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll); // Classes

  var MenuItem =
  /*#__PURE__*/
  function () {
    function MenuItem(imgUrl, alt, subtitle, descr, price, parentSelector) {
      _classCallCheck(this, MenuItem);

      this.imgUrl = imgUrl;
      this.alt = alt;
      this.subtitle = subtitle;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;

      for (var _len = arguments.length, classes = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
        classes[_key - 6] = arguments[_key];
      }

      this.classes = classes;
      this.changeToUAH();
    }

    _createClass(MenuItem, [{
      key: "changeToUAH",
      value: function changeToUAH() {
        this.price = this.price * this.transfer;
      }
    }, {
      key: "render",
      value: function render() {
        var element = document.createElement("div");

        if (this.classes.length == 0) {
          this.classes = ["menu__item"];
        }

        this.classes.forEach(function (className) {
          return element.classList.add(className);
        });
        element.innerHTML = "\n                <img src=".concat(this.imgUrl, " alt=").concat(this.alt, ">\n                <h3 class=\"menu__item-subtitle\">").concat(this.subtitle, "\"</h3>\n                <div class=\"menu__item-descr\">").concat(this.descr, "</div>\n                <div class=\"menu__item-divider\"></div>\n                <div class=\"menu__item-price\">\n                    <div class=\"menu__item-cost\">\u0426\u0435\u043D\u0430:</div>\n                    <div class=\"menu__item-total\"><span>").concat(this.price, "</span> \u0433\u0440\u043D/\u0434\u0435\u043D\u044C</div>\n                ");
        this.parent.append(element);
      }
    }]);

    return MenuItem;
  }();

  new MenuItem("img/tabs/vegy.jpg", "vegy", 'Меню "Фитнес"', '"Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 9, ".menu .container", "menu__item").render();
  new MenuItem("img/tabs/elite.jpg", "elite", "Меню “Премиум”", "В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!", 20, ".menu .container", "menu__item").render();
  new MenuItem("img/tabs/post.jpg", "post", 'Меню "Постное"', "Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.", 15, ".menu .container", "menu__item").render(); //  Forms

  var forms = document.querySelectorAll("form");
  var message = {
    loading: "img/form/spinner.svg",
    success: "Спасибо! Скоро свяжемся с вами",
    fail: "Что-то не так"
  };
  forms.forEach(function (item) {
    postData(item);
  });

  function postData(form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // отменили стандартное поведение

      var statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = "\n                display: block;\n                margin: 0, auto;\n                ";
      form.append(statusMessage);
      var request = new XMLHttpRequest();
      request.open("POST", "server.php");
      request.setRequestHeader("Content-type", "application/json");
      var formData = new FormData(form);
      var objekt = {};
      formData.forEach(function (value, key) {
        objekt[key] = value;
      });
      var json = JSON.stringify(objekt);
      request.send(json);
      request.addEventListener("load", function () {
        if (request.status === 200) {
          console.log(request.response);
          showThanksModal(message.success);
          form.reset();
          statusMessage.remove();
        } else {
          showThanksModal(message.fail);
        }
      });
    });
  }

  function showThanksModal(message) {
    var prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hide");
    openModal();
    var thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = "\n           <div class=\"modal__content\">\n            <div data-close class=\"modal__close\">&times;</div>\n            <div class=\"modal__title\">".concat(message, "</div>\n           </div>\n           ");
    document.querySelector(".modal").append(thanksModal);
    setTimeout(function () {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      closeModal();
    }, 4000);
  }
});