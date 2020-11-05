import axios from 'axios';

import { SIGNUP, checkSignUp, errorSignUp } from 'src/actions/signup';

axios.defaults.withCredentials = true;
const signup = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNUP:
      const {
        user: {
          first_name,
          last_name,
          address,
          additional_address,
          postcode,
          department,
          city,
          phone_number,
          email,
          password,
          passwordConfirm,
          signUp,
        },
      } = store.getState();

      axios
        .post('http://localhost:5050/signup', {
          first_name,
          last_name,
          address,
          additional_address,
          postcode,
          department,
          city,
          phone_number,
          email,
          password,
          passwordConfirm,
        })
        .then((response) => {
          console.log('je suis dans Signup', response);
          if (response.status === 201) {
            store.dispatch(checkSignUp(response.data.message));
          }
        })
        .catch((error) => {
          console.log("je suis dans l'erreur signup");
          store.dispatch(errorSignUp(error));
        });
      break;

    default:
      next(action);
  }
};

export default signup;
