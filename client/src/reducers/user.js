import { CHANGE_VALUE, SAVE_USER, LOGOUT } from 'src/actions/user';

export const initialState = {
  email: '',
  password: '',
  isLogged: false,
  pseudo: '',
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        ...action.value,
      };

    case SAVE_USER:
      return {
        ...state,
        email: action.pseudo.email,
        isLogged: true,
        pseudo: action.pseudo,
      };
    case LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default user;
