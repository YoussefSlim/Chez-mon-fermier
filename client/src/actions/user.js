export const CHANGE_VALUE = 'CHANGE_VALUE';
export const LOGIN = 'LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const LOGOUT = 'LOGOUT';
export const CHECK_IS_LOGGED = 'CHECK_IS_LOGGED';

export const changeValue = (value) => ({
  type: CHANGE_VALUE,
  value,
});

export const login = () => ({
  type: LOGIN,
});

export const saveUser = (pseudo) => ({
  type: SAVE_USER,
  pseudo,
});

export const logout = () => ({
  type: LOGOUT,
});

export const checkIsLogged = () => ({
  type: CHECK_IS_LOGGED,
});
