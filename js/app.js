import { $on } from "./helper/helper.js";
import CardList from "./View/CardList.js";
import FormView from "./View/FormView.js";
import { cardTemplate } from "./template/cardTemplate.js";
import { requestGET } from "../api/common.js";
import { URL } from "./URL.js";

$on(document, "DOMContentLoaded", () => {
  const cardList = new CardList({
    cardListSelector: ".card-list",
    cardTemplate,
    ajax: requestGET,
    url: URL
  });
  // const form = new FormView({
  //   'form__wrapper'
  // })
});

var querySelector = document.querySelector.bind(document);
var weatherList = querySelector(".weather__list");
var weatherItemTemplate = querySelector(".weather__item--template");

var weatherMap = {
  "너무 더운 날": "assets/images/icon-too-sunny.png",
  "너무 추운 날": "assets/images/too-cold.png",
  "폭설 오는 날": "assets/images/icon-too-snowy.png",
  "강풍 부는 날": "assets/images/icon-too-windy.png",
  "폭우 오는 날": "assets/images/icon-too-rainy.png",
  "화창한 날": "assets/images/icon-sunny.png",
  "보슬비 오는 날": "assets/images/icon-mist.png",
  "비 오는 날": "assets/images/icon-rainy.png",
  뇌우: "assets/images/icon-storm.png",
  미세먼지: "assets/images/icon-dust.png",
};

weather(function(status, resData) {
  for (var i = 0, len = resData.length; i < len; i += 1) {
    var weatherItem = resData[i];

    var weatherItemTemplateClone = weatherItemTemplate.cloneNode(true);
    var weatherItemTitle = weatherItemTemplateClone.querySelector(".weather__item--title");
    var weatherItemImg = weatherItemTemplateClone.querySelector(".weather__item--img");

    weatherItemTitle.textContent = weatherItem;
    weatherItemImg.src = weatherMap[weatherItem];

    weatherItemTemplateClone.hidden = false;
    weatherItemTemplateClone.classList.add("weather__item");

    weatherItemTemplateClone.onclick = function(e) {
      alert(e.target.querySelector(".weather__item--title").textContent);
    };

    var weatherChild = document.createElement("LI");
    weatherChild.classList.add("weather__child");
    weatherChild.appendChild(weatherItemTemplateClone);
    weatherList.appendChild(weatherChild);
  }
});
