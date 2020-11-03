import { SAVE_SHOP } from 'src/actions/shop';

export const initialState = { shops: [] };

const shop = (state = initialState, { type, shops }) => {
  switch (type) {
    case SAVE_SHOP:
      console.log('je suis dans le rducer shop', { ...state, shops });
      return { ...state, shops };
    default:
      return state;
  }
};

export default shop;
