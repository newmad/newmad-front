var API_URL = '';

var MESSAGE_SYS_FAIL = '접근에 실패했습니다.';
var MESSAGE_NETWORK_FAIL = '인터넷 환경을 확인해주세요.';

/**
 * @param url
 * @param ackFunc
 * @return {boolean}
 */
function requestGET(url, ackFunc) {
  if (!ackFunc) ackFunc = null;

  if (!url) {
    alert(MESSAGE_SYS_FAIL);
    return false;
  } else {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    // request.setRequestHeader('Api-Version', '1.0');
    request.send();

    request.onerror = function() {
      alert(MESSAGE_NETWORK_FAIL);
      return false;
    };

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        if (request.status === 204) {
          ackFunc(true, null);
        } else {
          ackFunc(true, JSON.parse(request.response));
        }
      } else {
        alert('연결에 실패했습니다.');
        ackFunc(false, null);
      }
    };
  }
}

/**
 *
 * @param url
 * @param data
 * @param ackFunc
 * @return {boolean}
 */
function requestPOST(url, data, ackFunc) {
  if (!ackFunc) ackFunc = null;

  if (!url) {
    alert(MESSAGE_SYS_FAIL);
    return false;
  } else {
    var request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    // request.setRequestHeader('Api-Version', '1.0');
    request.send(JSON.stringify(data));

    request.onerror = function() {
      // alert(MESSAGE_NETWORK_FAIL);
      return false;
    };

    request.onload = function() {
      if ((request.status >= 200) && (request.status < 400)) {
        if (request.status === 204) {
          ackFunc(true, null);
        } else {
          if (typeof request.response !== 'object') {
            ackFunc(true, JSON.parse(request.response));
          } else {
            ackFunc(true, request.response);
          }
        }
      } else {
        alert(MESSAGE_NETWORK_FAIL);
        ackFunc(false, null);
      }
    };
  }
}

/**
 *
 * @param url
 * @param data
 * @param ackFunc
 * @returns {boolean}
 */
function requestDELETE(url, data, ackFunc) {
  if (!ackFunc) ackFunc = null;

  if (!url) {
    alert(MESSAGE_SYS_FAIL);
    return false;
  } else {
    var request = new XMLHttpRequest();
    request.open('DELETE', url, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    // request.setRequestHeader('Api-Version', '1.0');

    if (data) {
      request.send(JSON.stringify(data));
    } else {
      request.send(null);
    }

    request.onerror = function() {
      alert(MESSAGE_NETWORK_FAIL);
      return false;
    };

    request.onload = function() {
      if ((request.status >= 200) && (request.status < 400)) {
        if (request.status === 204) {
          ackFunc(true, null);
        } else {
          ackFunc(true, JSON.parse(request.response));
        }
      } else {
        alert(MESSAGE_NETWORK_FAIL);
        ackFunc(false, null);
      }
    };
  }
}

/**
 *
 * @param url
 * @param data
 * @param ackFunc
 * @returns {boolean}
 */
function requestPUT(url, data, ackFunc) {
  if (!ackFunc) ackFunc = null;

  if (!url) {
    alert(MESSAGE_SYS_FAIL);
    return false;
  } else {
    var request = new XMLHttpRequest();
    request.open('PUT', url, true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    // request.setRequestHeader('Api-Version', '1.0');

    if (data) {
      request.send(JSON.stringify(data));
    } else {
      request.send(null);
    }

    request.onerror = function() {
      alert(MESSAGE_NETWORK_FAIL);
      return false;
    };

    request.onload = function() {
      if ((request.status >= 200) && (request.status < 400)) {
        if (request.status === 204) {
          ackFunc(true, null);
        } else {
          ackFunc(true, JSON.parse(request.response));
        }
      } else {
        alert(MESSAGE_NETWORK_FAIL);
        ackFunc(false, null);
      }
    };
  }
}

export {requestGET, requestPUT, requestDELETE, requestPOST};