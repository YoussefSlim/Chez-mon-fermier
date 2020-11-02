import { connect } from 'react-redux';

import HeaderNav from 'src/components/HeaderNav';
import { logout } from 'src/actions/user';
const mapStateToProps = (state) => ({ counter: state.counter.value });

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    console.log('je suis dans handellogout');
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
