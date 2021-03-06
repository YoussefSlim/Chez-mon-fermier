import axios from 'axios';

import { saveCategories, FETCH_CATEGORIES } from 'src/actions/categories';

const categories = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      axios
        .get('http://localhost:5050/categories')
        .then((response) => {
          console.log('je suis dans le midleware de catégories');
          store.dispatch(saveCategories(response.data));
        })
        // eslint-disable-next-line arrow-spacing
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default categories;
