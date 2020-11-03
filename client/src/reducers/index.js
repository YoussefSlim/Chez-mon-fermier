import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import counter from './counter';
import products from './products';
import categories from './categories';
import user from './user';
import signup from './signup';
import shop from './shop';
import cart from './cart';
import app from './app';

export default combineReducers({
  counter,
  products,
  categories,
  user,
  signup,
  shop,
  cart,
  session: sessionReducer,
  app,
});
