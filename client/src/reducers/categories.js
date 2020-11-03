import { SAVE_CATEGORIES } from 'src/actions/categories';

export const initialState = { categories: [] };

const categories = (state = initialState, { type, categories }) => {
  switch (type) {
    case SAVE_CATEGORIES:
      return { ...state, categories };
    default:
      return state;
  }
};

export default categories;
