import { handleActions, combineActions } from 'redux-actions';
import * as actions from '../../actions';

export const initialState = {
  name: 'world',
  isLoading: false,
  isSuccess: false,
  isError: false
};

export const login = handleActions({
  CHANGE_NAME: (state, action) => ({ ...state, name: action.payload }),
  GET_SEARCH_DATA: (state, action) => ({ ...state, isLoading: true, name: action.payload }),
  SUCCESS_SEARCH_DATA: (state, action) => ({ ...state, isSuccess: true, name: action.payload }),
  FAILED_SEARCH_DATA: (state, action) => ({ ...state, isError: true, name: action.payload }),
}, initialState);
