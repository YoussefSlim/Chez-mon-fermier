import { connect } from 'react-redux';
import HomePage from 'src/components/HomePage';
import { fetchProducts } from 'src/actions/products';
import { fetchCategories } from 'src/actions/categories';

const mapStateToProps = (state) => ({
  products: state,
  categories: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => {
    dispatch(fetchProducts());
  },
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => {
    dispatch(fetchCategories());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
