/* eslint-disable camelcase */
/* eslint-disable operator-linebreak */
/* eslint-disable no-case-declarations */
import {
  fetchCartSuccess,
  removeItem,
  FETCH_CART,
  REMOVE_ITEM,
  FETCH_CART_SUCCESS,
} from 'src/actions/cart';

export default (store) => (next) => (action) => {
  console.log('je suis dans logmidellware cart =>', store.getState());
  console.log('Je laisse passer cette action dans cart: ', action);
  switch (action.type) {
    case FETCH_CART:
      const {
        counter: { value },
      } = store.getState();
      const items =
        JSON.parse(localStorage.getItem('cart')) !== null
          ? JSON.parse(localStorage.getItem('cart'))
          : [];

      console.log('items midleware Fech_Cart', items, value);
      store.dispatch(fetchCartSuccess(items, value));
      break;

    default:
      next(action);
  }
};
