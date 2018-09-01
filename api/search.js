import { requestGET } from "./common.js";

const requestSearch = (keyword, callback) => {
  let requestRoute = isNaN(keyword) ? 'search' : 'searchid';

  console.log(`http://188.166.232.232:8080/${requestRoute}?id=${keyword}`);

  requestGET(`http://188.166.232.232:8080/${requestRoute}?id=${keyword}`, (status, resData) => {
    resData = JSON.parse(resData);
    
    if(status) {
      console.log(resData);
      callback(true, resData);
    }
  });
};

const search = (keyword, callback) => {
  requestSearch(keyword, (status, resData) => {
    if (status) {
      callback(true, resData);
    }
  });
};

export default search;