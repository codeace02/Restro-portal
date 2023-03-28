/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
// import promise from 'redux-promise';
// import multi from 'redux-multi';
import thunk from 'redux-thunk';
import reducers from './reducers/';

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(); //  "redux-devtools-extension": "^2.13.9"
let composeEnhancers = compose;
// to show store on redux extensions
if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  /* eslint-disable no-underscore-dangle */
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
}
const store = composeEnhancers(applyMiddleware(thunk))(createStore)(reducers);

export default store;