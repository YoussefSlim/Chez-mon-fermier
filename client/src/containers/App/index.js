import { connect } from 'react-redux';
import App from 'src/components/App';

import { fetchProducts } from 'src/actions/products';
import { fetchCategories } from 'src/actions/categories';
import { fetchShop } from 'src/actions/shop';

const mapStateToProps = (state) => ({
  user: state.user,
  loading: state.app.loading,
  signup: state.signup.signUp,
  categories: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => {
    dispatch(fetchProducts());
  },
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
  fetchShop: () => {
    dispatch(fetchShop());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
