import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from 'Redux/reducer';

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const applyStore = applyMiddleware(thunk, logger)(createStore);

export default function configureStore(state) {
  const store = applyStore(reducer, state);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('Redux/reducer', () => {
      const nextReducer = require('Redux/reducer');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
