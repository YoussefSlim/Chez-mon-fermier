import { SAVE_CATEGORIES } from 'src/actions/categories';

export const initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      console.log(...action.categories);
      return [...action.categories];
    default:
      return state;
  }
};

export default categories;
