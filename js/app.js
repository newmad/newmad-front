import '../style/sass/app.scss';
import weather from '../api/weather';

import {$on} from "./helper/helper.js";
import CardList from "./View/CardList.js";
import FormView from "./View/FormView.js";
import {cardTemplate} from "./template/cardTemplate.js";
import {requestGET} from "../api/common.js";
import {URL} from "./URL.js";

// 아이콘 이미지
import icon0 from '../assets/images/icon-0.png'
import icon1 from '../assets/images/icon-1.png'
import icon2 from '../assets/images/icon-2.png'
import icon3 from '../assets/images/icon-3.png'
import icon4 from '../assets/images/icon-4.png'
import icon5 from '../assets/images/icon-5.png'
import icon6 from '../assets/images/icon-6.png'
import icon7 from '../assets/images/icon-7.png'
import icon8 from '../assets/images/icon-8.png'
import icon9 from '../assets/images/icon-9.png'
import icon10 from '../assets/images/icon-10.png'
import icon11 from '../assets/images/icon-11.png'
import icon12 from '../assets/images/icon-12.png'
import icon13 from '../assets/images/icon-13.png'

const icons = [icon0, icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13];

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


weather((status, resData) => {
  console.log(resData);
  for (let i = 0, len = resData.length; i < len; i += 1) {
    const weatherItem = resData[i];

    const weatherItemTemplateClone = weatherItemTemplate.cloneNode(true);
    const weatherItemTitle = weatherItemTemplateClone.querySelector(".weather__item--title");
    const weatherItemImg = weatherItemTemplateClone.querySelector(".weather__item--img");

    weatherItemTitle.textContent = weatherItem;
    weatherItemImg.src = icons[i];

    weatherItemTemplateClone.hidden = false;
    weatherItemTemplateClone.classList.add("weather__item");

    weatherItemTemplateClone.onclick = () => {
      document.querySelectorAll('.weather__item--active').forEach(other => {
        other.classList.remove('weather__item--active');
      });

      weatherItemTemplateClone.classList.toggle('weather__item--active');
    };

    const weatherChild = document.createElement("LI");
    weatherChild.classList.add("weather__child");
    weatherChild.appendChild(weatherItemTemplateClone);

    weatherList.appendChild(weatherChild);
  }
});
