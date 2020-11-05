import { getStoredState } from 'redux-persist';
import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  SUB_QUANTITY,
  ADD_QUANTITY,
  FETCH_CART_SUCCESS,
} from 'src/actions/cart';

const initState = {
  list: [],
  total: 0,
};
console.log('je suis dans le reducer de cart =>', initState.carte);
const reducer = (state = initState, action = {}) => {
  switch (action.type) {
    case FETCH_CART_SUCCESS:
      console.log('FETCH_CART_SUCCESS => ', action);
      return {
        ...state,
        list: [...action.listCartItems],
      };
    case REMOVE_TO_CART:
      console.log('removed ADD');

      return [
        ...state.list.slice(
          0,
          state.list.indexOf(action.id),
          ...state.list.slice(state.list.indexOf(action.id) + 1)
        ),
      ];
    default:
      return state;
  }

  // // INSIDE HOME COMPONENT
  // if (action.type === ADD_TO_CART) {
  //   const addedItem = state.list.find((item) => item.id === action.id);
  //   // check if the action id exists in the addedItems
  //   const existed_item = state.addedItems.find((item) => action.id === item.id);
  //   if (existed_item) {
  //     addedItem.quantity += 1;
  //     return {
  //       ...state,
  //       total: state.total + addedItem.price,
  //     };
  //   }
  //   addedItem.quantity = 1;
  //   // calculating the total
  //   const newTotal = state.total + addedItem.price;

  //   return {
  //     ...state,
  //     addedItems: [...state.addedItems, addedItem],
  //     total: newTotal,
  //   };
  // }
  // if (action.type === REMOVE_ITEM) {
  //   const itemToRemove = state.addedItems.find((item) => action.id === item.id);
  //   const new_items = state.addedItems.filter((item) => action.id !== item.id);

  //   // calculating the total
  //   const newTotal = state.total - itemToRemove.price_ttc * itemToRemove.quantity;
  //   console.log(itemToRemove);
  //   return {
  //     ...state,
  //     addedItems: new_items,
  //     total: newTotal,
  //   };
  // }
  // // INSIDE CART COMPONENT
  // if (action.type === ADD_QUANTITY) {
  //   const addedItem = state.items.find((item) => item.id === action.id);
  //   addedItem.quantity += 1;
  //   const newTotal = state.total + addedItem.price;
  //   return {
  //     ...state,
  //     total: newTotal,
  //   };
  // }
  // if (action.type === SUB_QUANTITY) {
  //   const addedItem = state.items.find((item) => item.id === action.id);
  //   // if the qt == 0 then it should be removed
  //   if (addedItem.quantity === 1) {
  //     const new_items = state.addedItems.filter((item) => item.id !== action.id);
  //     const newTotal = state.total - addedItem.price;
  //     return {
  //       ...state,
  //       addedItems: new_items,
  //       total: newTotal,
  //     };
  //   }
  //   addedItem.quantity -= 1;
  //   const newTotal = state.total - addedItem.price;
  //   return {
  //     ...state,
  //     total: newTotal,
  //   };
  // }

  // if (action.type === ADD_SHIPPING) {
  //   return {
  //     ...state,
  //     total: state.total + 6,
  //   };
  // }

  // if (action.type === 'SUB_SHIPPING') {
  //   return {
  //     ...state,
  //     total: state.total - 6,
  //   };
  // }
  // return state;
};

export default reducer;
