import axios from 'axios';

import { saveProducts, FETCH_PRODUCTS } from 'src/actions/products';

const products = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      axios
        .get('http://ec2-3-93-241-49.compute-1.amazonaws.com:5050/products')
        .then((response) => {
          store.dispatch(saveProducts(response.data));
        })
        // eslint-disable-next-line arrow-spacing
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default products;
