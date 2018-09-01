var querySelector = document.querySelector.bind(document);

var placeTitle = querySelector('.place__title');
var placeLocation = querySelector('.place__location');
var placeLikeNum = querySelector('.place__like--num');
var placePicture = querySelector('.place__picture');
var placeDescription = querySelector('.place__description');

var placeAddress = querySelector('.place__info--address');
var placePhone = querySelector('.place__info--phone');
var placeHoliday = querySelector('.place__info--holiday');
var placePrice = querySelector('.place__info--price');
var placePark = querySelector('.place__info--park');
var placeCategory = querySelector('.place__info--category');

detail({}, function (status, resData) {
  var title = Object.keys(resData)[0];
  var obj = resData[title];

  var {title, address, desc, img, like, category, holiday, parking, phone, price, id, 'weather-id' : weatherID} = obj;

  placeTitle.textContent = title;
  placeLocation.textContent = address;
  placeLikeNum.textContent = like;
  placeDescription.textContent = desc;
  placePicture.src = img;

  placeAddress.textContent = address;
  placePhone.textContent = phone;
  placeHoliday.textContent = holiday;
  placePrice.textContent = price;
  placePark.textContent = parking;
  placeCategory.textContent = category;


});
