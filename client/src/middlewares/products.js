import axios from 'axios';

import { saveProducts, FETCH_PRODUCTS } from 'src/actions/products';

const products = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      axios
        .get('http://localhost:5050/products')
        .then((response) => {
          store.dispatch(saveProducts(response.data));
        })
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default products;
