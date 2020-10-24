import axios from 'axios';

import { saveCategories, FETCH_CATEGORIES } from 'src/actions/categories';

const products = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      axios
        .get('http://localhost:5050/categories')
        .then((response) => {
          store.dispatch(saveCategories(response.data));
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default categories;
