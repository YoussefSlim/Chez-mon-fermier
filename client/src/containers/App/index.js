import { connect } from 'react-redux';
import App from 'src/components/App';

import { fetchProducts } from 'src/actions/products';
import { fetchCategories } from 'src/actions/categories';

const mapStateToProps = (state) => ({
  products: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => {
    dispatch(fetchProducts());
  },
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
