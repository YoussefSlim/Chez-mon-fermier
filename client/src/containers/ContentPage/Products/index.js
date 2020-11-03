import { connect } from 'react-redux';
import Products from 'src/components/ContentPage/Products';

import { fetchProducts } from 'src/actions/products';

const mapStateToProps = ({ products: { products } }) => ({ products });

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => {
    dispatch(fetchProducts());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
