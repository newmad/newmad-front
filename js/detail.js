var querySelector = document.querySelector.bind(document);

var placeTitle = querySelector('.place__title');
var placeLocation = querySelector('.place__location');
var placeLikeNum = querySelector('.place__like--num');
var placePicture = querySelector('.place__picture');
var placeDescription = querySelector('.place__description');

placeTitle.textContent = '오셜록 티뮤지엄';
placeLocation.textContent = '제주특별자치도 서귀포시 안덕면';
placeLikeNum.textContent = '12';
placeDescription.textContent = '사진으로 다시 봐도 너무 좋은 해비치 밀리우 ㅠㅠ 최고의 다이닝이었어요! 박무현 셰프님이 계실때 먹었었는데.. 음식도 분위기도 서비스도..!! 사진이 많은데 일일이 설명 달며 그때의 감동을 재현하구 싶네요.. 정말 최고!';