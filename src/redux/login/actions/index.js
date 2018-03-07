import {fireAjax} from 'src/services/';

function loginAsync(){
  return fireAjax('POST', 'apiJson.php', '');
}

export function login(value) {
  loginAsync().then((data) => {
    console.log(data, typeof data,value, '***********************')
  });
}
