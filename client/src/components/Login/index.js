import React from 'react';
import LoginModal from './LoginModal';
import './style.scss';

const login = ({
  email,
  password,
  changeField,
  handleLog,
  handleLogout,
  isLogged,
  loggedMessage,
}) => (
  <div className="">
    <LoginModal onChange={changeField} handleLog={handleLog} handleLogout={handleLogout} />
  </div>
);

export default login;
