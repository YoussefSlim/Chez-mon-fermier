import {
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  SAVE_CART,
  RESET_CART,
} from 'src/actions/cart';

const saveToSessionStorage = (object) => {
  sessionStorage.setItem('items', object);
};
const initialState = {
  items: sessionStorage.getItem('items') !== null ? sessionStorage.getItem('items') : [],
};
console.log(initialState);
const cart = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state.items, payload };
    case UPDATE_CART:
      console.log(`item : ${payload.id}`);
      return {
        ...state,
        // eslint-disable-next-line max-len
        items: state.items.map((item) => (item.id === payload.id ? { ...item, quantity: payload.quantity } : item)),
      };

    case REMOVE_FROM_CART:
      console.log(state.items);
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload),
      };

    case SAVE_CART:
      saveToSessionStorage(payload.items);
      return state;
    case RESET_CART:
      saveToSessionStorage([]);
      return { ...state, items: [] };

    default:
      return state;
  }
};

export default cart;
