import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import configureStore from './store';
import routes from './routes';

const store = configureStore();

const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

ReactDOM.render((
  <Provider store={store} queryKey={false}>
    <Router history={appHistory} routes={routes(store)} />
  </Provider>
), document.getElementById('app'));
