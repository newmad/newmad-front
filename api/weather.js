function requestWeather(callback) {
  var response = {
    status : 200,
    data : [
      '너무 더운 날',
      '너무 추운 날',
      '폭설 오는 날',
      '강풍 부는 날',
      '폭우 오는 날',
      '화창한 날',
      '보슬비 오는 날',
      '비 오는 날',
      '뇌우',
      '미세먼지',
  ]
  };

  // status 검사
  callback(true, response.data)
}

function weather(callback) {
  requestWeather(function(status, resData) {
    if (status) {
      callback(true, resData);
    }
  });
}

// weather(function(status, res) {
//   console.log(res);
// });