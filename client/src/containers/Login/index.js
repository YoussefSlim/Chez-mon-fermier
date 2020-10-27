import { connect } from 'react-redux';
import { changeValue, login, logout } from 'src/actions/user';
import Login from '../../components/Login';

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loggedMessage: '',
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value) => {
    console.log('je suis dans changeFild');
    dispatch(changeValue(value));
  },
  handleLog: (value) => {
    dispatch(login(value));
  },
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
