import { createAction } from 'redux-actions';

export const getChangeName = createAction('GET_CHANGE_NAME');
export const changeName = createAction('CHANGE_NAME');

export const getSearchData = createAction('GET_SEARCH_DATA');
export const successSearchData = createAction('SUCCESS_SEARCH_DATA');
export const failesSearchData = createAction('FAILED_SEARCH_DATA');
