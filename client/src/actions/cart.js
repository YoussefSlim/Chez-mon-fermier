// import local
import idCart from 'src/Selector';
/*
 * action types
 */

export const ADD_TO_CART = 'ADD_TO_CART';
export const UPDATE_CART = 'UPDATE_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const SAVE_CART = 'SAVE_CART';
export const RESET_CART = 'RESET_CART';

/*
 * action creators
 */

export const addtoCart = (item, quantity) => ({
  type: ADD_TO_CART,
  payload: { id: idCart(), quantity, details: item },
});
export const updateCart = (id, quantity) => ({
  type: ADD_TO_CART,
  payload: { id, quantity },
});
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});
export const saveCart = (items) => ({
  type: SAVE_CART,
  payload: { items },
});
export const resetCart = () => ({
  type: RESET_CART,
});
