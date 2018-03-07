import {CONFIG} from 'src/config/';
import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
import axios from 'axios';
import 'whatwg-fetch';

// const socket = io.connect('http://localhost:5000');
//
// socket.emit('connection', 'Hello World');
// socket.emit('event', 'Hello World');
//
// socket.on('eventResponse', msg => console.log(msg, 'on msg'));

export function fireAjax (method, url, data) {
  let URL = CONFIG.api + url;
  // let action = {action: "get_all_search_result", token: null};
  let headers = {
    method: method,
    mode:   'cors',
    // cors:   'no-cors',
    cache:  'no-cache',
    Accept: 'application/json',
    'Content-Type': 'text/plain;charset=UTF-8',
    body:   JSON.stringify({action: "get_all_search_result", token: null})
  };
  return fetch(URL, headers).then((response) => {
    if (response.status === 500) {
      return new Promise((resolve, reject) => {
        response.json().then((data) => {
          reject(data);
        });
      });
    } else if (response.status === 401) {
      confirm('401 Access Denied !', '<span style="color:#f27474;font-size:18px;font-weight:600">' + action + '</span><br/>You are unauthorized to the Action - Contact Admin!!', 'error').then((res) => {
        resetLoggedUser();
        location.href = CONFIG.BASE_URL;
      });
    } else {
      return response.json();
    }
  });
}
