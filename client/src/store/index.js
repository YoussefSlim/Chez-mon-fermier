// == Import : npm
import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// == Import : local
import rootReducer from 'src/reducers';
import logMiddleware from 'src/middleware/logMiddleware';
import products from 'src/middleware/products';
import categories from 'src/middleware/categories';
import auth from 'src/middleware/auth';
import shop from 'src/middleware/shop';
import cart from 'src/middleware/cart';

import signup from 'src/middleware/signup';

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    products,
    categories,
    auth,
    shop,
    signup,
    cart
    // secondMiddleware,
  )
);

// == Export

const store = createStore(persistedReducer, enhancers);
const persistor = persistStore(store);
export { store, persistor };
