import { FETCH_CATEGORIES } from '../actions/categories';

export const initialState = [];

const recipes = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      console.log('je passe dans le reducer');
      return [...action.recipes];
    default:
      return state;
  }
};

export default recipes;
