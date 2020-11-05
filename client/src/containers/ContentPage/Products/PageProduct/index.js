import { connect } from 'react-redux';
import PageProduct from 'src/components/ContentPage/Products/PageProduct';
import { withRouter } from 'react-router-dom';
import slugify from 'src/utils/slugify';
import { addToCart, removeItem, addQuantity, subtractQuantity } from 'src/actions/cart';

const mapStateToProps = (state, ownProps) => {
  console.log('ownProps.match', ownProps.match);
  // return state;
  const { slug } = ownProps.match.params;

  // console.log('je suis dans container PageProduct', slug);
  return {
    product: state.products.products.find(({ title }) => slugify(title) === slug),
    counter: state.counter.value,
  };
  // return { ...product };
};
// const mapStateToProps = ({ products: { products } }, { match: { params } }) => {
//   const { slug } = params;

//   console.log('je suis dans container PageProduct', slug);
//   const product = products.find(({ title }) => slugify(title) === slug);
//   return { ...product };
// };

const mapDispatchToProps = (dispatch) => ({
  addToCart: () => {
    dispatch(addToCart());
  },
  removeItem: (id) => {
    dispatch(removeItem(id));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PageProduct));
