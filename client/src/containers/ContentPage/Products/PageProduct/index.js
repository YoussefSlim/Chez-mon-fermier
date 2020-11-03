import { connect } from 'react-redux';
import PageProduct from 'src/components/ContentPage/Products/PageProduct';

import { addToCart } from 'src/actions/cart';

const mapStateToProps = ({ products: { products } }) => ({ products });

const mapDispatchToProps = (dispatch) => ({
  addToCart: () => {
    dispatch(addToCart());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PageProduct);
