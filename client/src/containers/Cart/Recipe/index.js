import { connect } from 'react-redux';
import Recipe from 'src/components/Recipe';
import { ADD_SHIPPING, SUB_SHIPPING } from 'src/actions/cart';

const mapStateToProps = (state) => ({
  addedItems: state.addedItems,
  total: state.total,
});

const mapDispatchToProps = (dispatch) => ({
  addShipping: () => {
    dispatch({ type: 'ADD_SHIPPING' });
  },
  substractShipping: () => {
    dispatch({ type: 'SUB_SHIPPING' });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Recipe);
