import { handleActions } from 'redux-actions';

export const initialState = {
  name: 'world !'
};

export const home = handleActions({
  CHANGE_NAME: (state, action) => ({ name: action.payload })
}, initialState);
