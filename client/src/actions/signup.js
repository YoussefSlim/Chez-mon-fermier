export const CHANGE_VALUE = 'CHANGE_VALUE';
export const CHECK_SIGNUP = 'CHECK_SIGNUP';
export const ERROR_SIGNUP = 'ERROR_SIGNUP';
export const SIGNUP = 'SIGNUP';

export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});

export const sendTheForm = () => ({
  type: SIGNUP,
});
export const checkSignUp = (message) => ({
  type: CHECK_SIGNUP,
  message,
});
export const errorSignUp = (message) => ({
  type: ERROR_SIGNUP,
  message,
});
