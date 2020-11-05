import axios from 'axios';

import { saveShop, FETCH_SHOP } from 'src/actions/shop';

const shop = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SHOP:
      axios
        .get('http://localhost:5050/shops')
        .then((response) => {
          console.log('je suis dans le midleware shop', response.data);
          store.dispatch(saveShop(response.data));
        })
        // eslint-disable-next-line arrow-spacing
        .catch((error) => console.log(error));
      break;
    default:
      next(action);
  }
};

export default shop;
