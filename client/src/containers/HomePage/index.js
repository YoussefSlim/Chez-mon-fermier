import { connect } from 'react-redux';
import HomePage from 'src/components/HomePage';
import { fetchProducts } from 'src/actions/products';

const mapStateToProps = (state) => ({
  products: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => {
    dispatch(fetchProducts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
