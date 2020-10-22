import { SHOW_MODAL, HIDE_MODAL } from '../actions';

const initialState = {
  open: false,
};

// le reducer est une fonction qui doit toujours retourner state
// cette fonction reçoit en paramètre le state courant et une action
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SHOW_MODAL: {
      return {
        ...state,
        open: !state.open,
      };
    }
    case HIDE_MODAL:
      return {
        ...state,
        close: state.open,
      };
    default:
      return state;
  }
};

export default reducer;
