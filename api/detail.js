import { requestGET } from "./common.js";

const requestDetail = (placeID, callback) => {
  console.log(`http://188.166.232.232:8080/searchid?id=${placeID}`);
  requestGET(`http://188.166.232.232:8080/searchid?id=${placeID}`, (status, resData) => {
    if(status) {
      console.log(resData);
      callback(true, resData);
    }
  });
};

const detail = (placeID, callback) => {
  requestDetail(placeID, (status, resData) => {
    if (status) {
      callback(true, resData);
    }
  });
};

export default detail;