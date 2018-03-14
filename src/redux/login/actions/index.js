import {fireAjax} from 'src/services/';
import * as actions from 'Redux/actions';

function loginAsync(data){
  return fireAjax('POST', 'apiJson.php', data);
}

export function login(value) {
  const data = {action: "get_all_search_result", token: null};
  return function(dispatch, getState){
    loginAsync(data).then((data) => {
      dispatch(actions.successSearchData(data));
    });
  }
}
