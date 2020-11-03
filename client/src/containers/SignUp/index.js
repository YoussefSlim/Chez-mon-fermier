import { connect } from 'react-redux';
import { changeValue, sendTheForm } from 'src/actions/signup';
import SignUp from 'src/components/SignUp';

const mapStateToProps = (state) => ({ signup: state.signup.signUp });

const mapDispatchToProps = (dispatch) => ({
  onChange: (value) => {
    console.log('je suis dans changeFildsignup');
    dispatch(changeValue(value));
  },

  handleForm: (value) => {
    console.log('je suis dans handelloForm');
    dispatch(sendTheForm(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
