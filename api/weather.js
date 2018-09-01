function requestWeather(callback) {
  var response = {
    status : 200,
    data : [
    '폭염',
    '폭우',
    '폭설',
    '폭풍',
    '미세먼지',
    '맑음'
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

weather(function(status, res) {
  console.log(res);
});