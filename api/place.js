function requestPlace(weather, location, callback) {
  var response = {
    status : 200,
    data : [
      {
        title : '재미있는 곳',
        location : '제주특별자치시',
        price : '1234',
        lat : 127.12345,
        lng : 35.12345,
        weather : {
            "main": "보슬비",
            "description": "보슬보슬내리는 비"
        }
      }, {
        title : '재미있는 곳',
        location : '제주특별자치시',
        price : '1234',
        lat : 127.12345,
        lng : 35.12345,
        weather : {
          "main": "보슬비",
          "description": "보슬보슬내리는 비"
        }
      }
    ]
  };

  //status 검사
  callback(true, response.data);
}

function place(location, callback) {
  requestPlace({}, {}, function(status, resData) {
    if (status) {
      callback(true, resData);
    }
  });
}

place({}, function(status, resData) {
  console.log(resData);
});