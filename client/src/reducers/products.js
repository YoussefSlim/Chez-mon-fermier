import { SAVE_PRODUCTS } from 'src/actions/products';

export const initialState = { products: [] };

const products = (state = initialState, { type, products }) => {
  switch (type) {
    case SAVE_PRODUCTS:
      console.log({ ...state, products });
      return { ...state, products };
    default:
      return state;
  }
};

export default products;
