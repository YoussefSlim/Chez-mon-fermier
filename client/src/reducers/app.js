import { FETCH_PRODUCTS, SAVE_PRODUCTS } from 'src/actions/products';

const initialState = {
  loading: true,
};

const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return state;

    case SAVE_PRODUCTS:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default app;
