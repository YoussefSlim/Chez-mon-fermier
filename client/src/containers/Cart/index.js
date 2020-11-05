/* eslint-disable arrow-body-style */
import { connect } from 'react-redux';
import Cart from 'src/components/Cart';
import { fetchCart, removeItem, addQuantity, subtractQuantity } from 'src/actions/cart';

const mapStateToProps = (state) => {
  return {
    list: state.cart.list,
    total: state.cart.total,
    //addedItems: state.addedItems
  };
};
const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => {
    dispatch(removeItem(id));
  },
  addQuantity: (id) => {
    dispatch(addQuantity(id));
  },
  subtractQuantity: (id) => {
    dispatch(subtractQuantity(id));
  },
  fetchCart: () => {
    dispatch(fetchCart());
    console.log('container fechCart');
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
