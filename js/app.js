import '../style/sass/app.scss';
import weather from '../api/weather';

import {$on} from "./helper/helper.js";
import CardList from "./View/CardList.js";
import FormView from "./View/FormView.js";
import {cardTemplate} from "./template/cardTemplate.js";
import {requestGET} from "../api/common.js";
import {URL} from "./URL.js";

// 아이콘 이미지
import iconTooSunny from '../assets/images/icon-too-sunny.png';
import iconTooCold from '../assets/images/too-cold.png';
import iconTooSnowy from '../assets/images/icon-too-snowy.png';
import iconTooWindy from '../assets/images/icon-too-windy.png';
import iconTooRainy from '../assets/images/icon-too-rainy.png';
import iconSunny from '../assets/images/icon-sunny.png';
import iconMist from '../assets/images/icon-sunny.png';
import iconRainy from '../assets/images/icon-rainy.png';
import iconStorm from '../assets/images/icon-storm.png';
import iconDust from '../assets/images/icon-dust.png';

$on(document, "DOMContentLoaded", () => {
  const cardList = new CardList({
    cardListSelector: ".card-list",
    cardTemplate,
    ajax: requestGET,
    placeUrl: URL.place,
  });
  // const form = new FormView({
  //   'form__wrapper'
  // })
});

const querySelector = document.querySelector.bind(document);
const weatherList = querySelector(".weather__list");
const weatherItemTemplate = querySelector(".weather__item--template");


const weatherIconList = [
  undefined,
  iconTooSunny,
  iconTooRainy,
  iconTooSnowy,
  iconTooWindy,
  iconDust,
  iconSunny,
  iconTooCold,
  iconTooWindy,
  iconStorm,
  iconTooCold,
  iconTooSunny,
  iconRainy
];

weather((status, resData) => {
  console.log(resData);
  for (let i = 0, len = resData.length; i < len; i += 1) {
    const weatherItem = resData[i];

    const weatherItemTemplateClone = weatherItemTemplate.cloneNode(true);
    const weatherItemTitle = weatherItemTemplateClone.querySelector(".weather__item--title");
    const weatherItemImg = weatherItemTemplateClone.querySelector(".weather__item--img");

    weatherItemTitle.textContent = weatherItem;
    weatherItemImg.src = weatherIconList[i];

    weatherItemTemplateClone.hidden = false;
    weatherItemTemplateClone.classList.add("weather__item");

    weatherItemTemplateClone.onclick = function (e) {
      alert(e.target.querySelector(".weather__item--title").textContent);
    };

    const weatherChild = document.createElement("LI");
    weatherChild.classList.add("weather__child");
    weatherChild.appendChild(weatherItemTemplateClone);
    weatherList.appendChild(weatherChild);
  }
});
