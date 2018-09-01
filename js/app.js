var querySelector = document.querySelector.bind(document);
var weatherList = querySelector('.weather__list');
var weatherItemTemplate = querySelector('.weather__item--template');

weather(function(status, resData){
  for (var i = 0, len = resData.length; i < len; i += 1) {
    var weatherItem = resData[i];

    var weatherItemTemplateClone = weatherItemTemplate.cloneNode(true);
    weatherItemTemplateClone.querySelector('.weather__item--title').textContent = weatherItem;
    weatherItemTemplateClone.hidden = false;
    weatherItemTemplateClone.classList.add('weather__item');

    var weatherChild = document.createElement('LI');
    weatherChild.classList.add('weather__child');
    weatherChild.appendChild(weatherItemTemplateClone);
    weatherList.appendChild(weatherChild);
  }
});