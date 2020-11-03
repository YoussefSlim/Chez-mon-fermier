/* eslint-disable no-restricted-syntax */
/* eslint-disable no-labels */
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

export const addToCart = (item, quantity) => ({
  type: ADD_TO_CART,
  quantity,
  item,
});

export const updateCart = (id, quantity) => ({
  type: UPDATE_CART,
  id,
  quantity,
});
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});
export const saveCart = (items) => ({
  type: SAVE_CART,

  items,
});

export const resetCart = () => ({
  type: RESET_CART,
});
