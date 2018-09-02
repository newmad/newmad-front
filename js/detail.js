import '../style/sass/app.scss';
import detail from '../api/detail.js';
import {requestGET} from '../api/common.js';
import {URL} from "./URL.js";
const querySelector = document.querySelector.bind(document);

const placeBtn = querySelector('.place__like--btn');
const placeTitle = querySelector('.place__title');
const placeLocation = querySelector('.place__location');
const placeLikeNum = querySelector('.place__like--num');
const placePicture = querySelector('.place__picture');
const placeDescription = querySelector('.place__description');

const placeAddress = querySelector('.place__info--address');
const placePhone = querySelector('.place__info--phone');
const placeHoliday = querySelector('.place__info--holiday');
const placePrice = querySelector('.place__info--price');
const placePark = querySelector('.place__info--park');
const placeCategory = querySelector('.place__info--category');

const id = window.location.search.substr(1).split('=')[1];

detail(id, (status, resData) => {
  resData = JSON.parse(resData);

  const title = Object.keys(resData)[0];
  const obj = resData[title];

  const {address, desc, img, like, category, holiday, parking, phone, price, id, 'weather-id' : weatherID} = obj;

  placeTitle.textContent = title;
  placeLocation.textContent = address;
  placeLikeNum.textContent = like;
  placeLikeNum.dataset.counts = like;
  placeLikeNum.dataset.id = id;
  placeDescription.textContent = desc;
  placePicture.src = img;

  placeAddress.textContent = address;
  placePhone.textContent = phone;
  placeHoliday.textContent = holiday;
  placePrice.textContent = price;
  placePark.textContent = parking;
  placeCategory.textContent = category;

});




placeBtn.addEventListener('click', ({target})=>{

  requestGET(`${URL.like}?keyword=${id}`, (status, resData)=>{

    const counts = Number(placeLikeNum.textContent)+1;
    placeLikeNum.innerText = counts;
  });
})
