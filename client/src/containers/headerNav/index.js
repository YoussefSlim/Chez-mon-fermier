import { connect } from 'react-redux';

import HeaderNav from 'src/components/HeaderNav';
import { logout } from 'src/actions/user';
import { addToCart } from '../../actions/cart';

const mapStateToProps = (state) => ({
  counter: state.counter.value,
  cart: state.addToCart,
  pseudo: state.user.first_name,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    console.log('je suis dans handellogout');
    dispatch(logout());
  },
  addToCart: (item, quantity) => {
    console.log('je suis dans handellogout');
    dispatch(addToCart(item, quantity));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
