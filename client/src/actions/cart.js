/*
Actions types
 */

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';
export const SUB_QUANTITY = 'SUB_QUANTITY';
export const ADD_QUANTITY = 'ADD_QUANTITY';
export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const ADD_SHIPPING = 'ADD_SHIPPING';
export const FETCH_CART = 'FETCH_CART';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';

/*
Actions creators
 */

// add cart action
export const addToCart = (id) => ({
  type: ADD_TO_CART,
  id,
});
// remove item action
export const removeItem = (id) => ({
  type: REMOVE_TO_CART,
  id,
});
// subtract qt action
export const subtractQuantity = (id) => ({
  type: SUB_QUANTITY,
  id,
});
// add qt action
export const addQuantity = (id) => ({
  type: ADD_QUANTITY,
  id,
});
// fetchCart action
export const fetchCart = () => ({
  type: FETCH_CART,
});
// fetchCartSuccess action
export const fetchCartSuccess = (listCartItems, quantity) => ({
  type: FETCH_CART_SUCCESS,
  listCartItems,
  quantity,
});
// fetchCartSuccess action
export const updateTotal = (total) => ({
  type: UPDATE_TOTAL,
  total,
});
