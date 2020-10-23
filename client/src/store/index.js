// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';

// == Import : local
import rootReducer from '../reducers';
import products from '../middlewares/products';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(products));

// == Store
const store = createStore(
  rootReducer,
  // preloadedState,
  enhancers
);

// == Export
export default store;
