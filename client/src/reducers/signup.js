import { CHANGE_VALUE, CHECK_SIGNUP, ERROR_SIGNUP } from 'src/actions/signup';

export const initialState = {
  first_name: '',
  last_name: '',
  address: '',
  additional_address: '',
  postcode: '',
  department: '',
  city: '',
  phone_number: '',
  email: '',
  password: '',
  passwordConfirm: '',
  signUp: false,
  message: '',
};

const signup = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        ...action.value,
      };
    case CHECK_SIGNUP:
      console.log('ici');
      return {
        ...state,
        signUp: true,
        message: action.message,
      };
    case ERROR_SIGNUP:
      console.log('on est la ');
      return {
        ...state,
        signUp: false,
        message: '',
      };

    default:
      return state;
  }
};

export default signup;
