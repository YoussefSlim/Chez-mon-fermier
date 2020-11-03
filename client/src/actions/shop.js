export const FETCH_SHOP = 'FETCH_SHOP';
export const SAVE_SHOP = 'SAVE_SHOP';

export const fetchShop = () => ({
  type: FETCH_SHOP,
});
export const saveShop = (shops) => ({
  type: SAVE_SHOP,
  shops,
});
