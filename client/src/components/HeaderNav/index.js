// import npm
import PropTypes from 'prop-types';
import React, { getState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, UserOutlined, HeartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

import './style.scss';
import SearchBar from './SearchBar';
import LogoutButton from '../LogoutButton';

const HeadBar = ({ isLogged, pseudo, counter, handleLogout }) => (
  <div className="header">
    <Link to="/">
      <img src="/app_log.png" alt="logo" />
    </Link>
    <SearchBar />
    <div className="link">
      {isLogged && (
        <>
          <div className="heart">
            <span className="badg-heart">{0}</span>
            <Link to="/ma-liste-des-courses">
              <HeartOutlined fontSize="large" />
              <p className="icon">Ma liste des courses</p>
            </Link>
          </div>

          <div className="auth">
            <UserOutlined title="Se connecter" />
            <p className="icon">Bienvenue {pseudo}</p>
            <p className="icon">
              <LogoutButton handleLogout={handleLogout} />
            </p>
          </div>
        </>
      )}

      {!isLogged && (
        <Link to="/authentification">
          <div className="auth-deco">
            <UserOutlined title="Se connecter" />
            <p className="icon-deco">S'identifier</p>
          </div>
        </Link>
      )}
      <div className="cart">
        <span className="badg-heart">{counter}</span>
        <Link to="/panier">
          <ShoppingCartOutlined title="shopping" />

          <p className="icon">Mon panier</p>
        </Link>
      </div>
    </div>
  </div>
);

HeadBar.propTypes = {
  isLogged: PropTypes.bool,
  pseudo: PropTypes.object.isRequired,
  first_name: PropTypes.string,
};
HeadBar.defaultProps = {
  isLogged: false,
};

export default HeadBar;
