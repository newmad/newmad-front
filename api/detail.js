function requestDetail(placeID, callback) {
  var response = {
    status : 200,
    data : {
      "오설록티뮤지엄" : {
        "address" : "제주특별자치시 서귀포시 안덕면 1234-12",
        "category" : "일반음식점",
        "desc" : "오설록 티뮤지엄 짱이에요!!!",
        "holiday" : "매주 일요일 휴무",
        "id" : 1,
        "like" : 24,
        "parking" : "주차 완비",
        "phone" : "064-794-5321",
        "price" : "아메리카노:6000,제주감귤차:7000",
        "title" : "오설록티뮤지엄",
        "weather-id" : 1
      }
    }
  };

  // TODO status 검사
  callback(true, response.data);
}

function detail(placeID, callback) {
  requestPlace(placeID, function(status, resData) {
    if (status) {
      callback(true, resData);
    }
  });
}