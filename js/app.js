import '../style/sass/app.scss';
import weather from '../api/weather';

import {$on} from "./helper/helper.js";
import Controller from './Controller/Controller.js';
import CardList from "./View/CardList.js";
import FormView from "./View/FormView.js";
import {cardTemplate} from "./template/cardTemplate.js";
import {requestGET} from "../api/common.js";
import {URL} from "./URL.js";
import search from '../api/search';




import thunderStorm from './weatherBG/thunderstorm';
import rainy from './weatherBG/rainy';
import snow from './weatherBG/snow';
import mist from './weatherBG/mist';

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

// 아이콘 이미지 화이트
import iconWhite0 from '../assets/images/icon-white-0.png'
import iconWhite1 from '../assets/images/icon-white-1.png'
import iconWhite2 from '../assets/images/icon-white-2.png'
import iconWhite3 from '../assets/images/icon-white-3.png'
import iconWhite4 from '../assets/images/icon-white-4.png'
import iconWhite5 from '../assets/images/icon-white-5.png'
import iconWhite6 from '../assets/images/icon-white-6.png'
import iconWhite7 from '../assets/images/icon-white-7.png'
import iconWhite8 from '../assets/images/icon-white-8.png'
import iconWhite9 from '../assets/images/icon-white-9.png'
import iconWhite10 from '../assets/images/icon-white-10.png'
import iconWhite11 from '../assets/images/icon-white-11.png'
import iconWhite12 from '../assets/images/icon-white-12.png'
import iconWhite13 from '../assets/images/icon-white-13.png'

const iconWhites = [iconWhite0, iconWhite1, iconWhite2, iconWhite3, iconWhite4, iconWhite5, iconWhite6, iconWhite7, iconWhite8, iconWhite9, iconWhite10, iconWhite11, iconWhite12, iconWhite13];


const colors = ['#ced3d6', '#ffb85d', '#6dc6ff', '#a2bee3', '#a9afb3', '#dbd491', '#80e69a', '#c0cde2', '#f4bcff', '#878d91', '#b4e4f6', '#a2ccff', '#aed6e9', '#e1e4e6'];

$on(document, "DOMContentLoaded", () => {
  const cardList = new CardList({
    cardListSelector: ".card-list",
    countSelector: '.card-counts',
    cardTemplate,
    ajax: requestGET,
    url: URL
  });

  

  const form = new FormView({
    wrapperSelector: '.form__wrapper',
    searchInputSelector: '.search-input',
    searchFormSelector: '.search__form',
    ajax: requestGET,
    url: URL,
  })

  const controller =  new Controller({
    cardList,
    form,
  })
});

const querySelector = document.querySelector.bind(document);
const weatherList = querySelector(".weather__list");

const cardListEL = querySelector('.card-list');
const countEL = querySelector('.card-counts');

const headerComment = querySelector('.header__weather-comment');

const weatherItemTemplate = querySelector(".weather__item--template");
const formWrapper = querySelector('.form__wrapper');

const weatherObj = {
  thunderStorm,
  rainy,
  snow,
  mist,
};

const weatherMsg = {
  thunderStorm : '천둥번개',
  rainy : '비오는 날',
  snow : '눈오는 날',
  mist : '안개낀 날',
};

const randomKey = Math.floor(Math.random() * Object.keys(weatherObj).length);
const randomBG = Object.keys(weatherObj)[randomKey];

headerComment.textContent = `오늘 날씨는 ${weatherMsg[randomBG]}입니다.`;

formWrapper.insertAdjacentHTML("beforeend", weatherObj[randomBG]);

let currentTag = -1;

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
        other.style.background = '#fff';
        if (currentTag != -1) {
          other.querySelector('.weather__item--img').src = icons[currentTag];
        }
      });

      if (currentTag === i) {
        weatherItemTemplateClone.classList.remove('weather__item--active');
        weatherItemTemplateClone.style.background = "#fff";
        weatherItemImg.src = icons[i];
        currentTag = -1;
      } else {
        // 날씨 태그 클릭 이벤트
        weatherItemTemplateClone.classList.toggle('weather__item--active');
        weatherItemTemplateClone.style.background = colors[i];
        weatherItemImg.src = iconWhites[i];
        currentTag = i;

        search(i, (status, resData) => {
          const renderData = Object.values(resData);
          countEL.innerText = renderData.length;
          cardListEL.innerHTML = cardTemplate(Object.values(renderData));
        });
      }

    };

    const weatherChild = document.createElement("LI");
    weatherChild.classList.add("weather__child");
    weatherChild.appendChild(weatherItemTemplateClone);

    weatherList.appendChild(weatherChild);
  }
});
