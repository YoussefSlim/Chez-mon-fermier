import { connect } from 'react-redux';
import { changeValue, login, logout } from 'src/actions/user';
import LoginForm from '../../components/LoginForm';

const mapStateToProps = (state) => ({
  name: state.user.name,
  email: state.user.email,
  password: state.user.password,
  isLogged: state.user.isLogged,
  loggedMessage: '',
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => {
    console.log('je suis dans changeFild');
    dispatch(changeValue(value));
  },
  handleLog: (value) => {
    console.log('je suis dans handlelog');
    dispatch(login(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
