import { combineReducers } from 'redux';
import counter from './counter';
import products from './products';
import categories from './categories';
import cart from './cart';
import user from './user';

export default combineReducers({
  counter,
  products,
  categories,
  cart,
  user,
});
