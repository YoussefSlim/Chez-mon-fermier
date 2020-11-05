// import npm
import PropTypes from 'prop-types';
import React, { getState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartOutlined, UserOutlined, HeartOutlined } from '@ant-design/icons';
import { Badge } from 'antd';

import './style.scss';
import addToCart from 'src/components/ContentPage/Products/PageProduct/const';
import SearchBar from './SearchBar';
import LogoutButton from '../LogoutButton';

const circle = (quantity) => <span className="circle">{quantity}</span>;
const HeadBar = ({ isLogged, pseudo, counter, handleLogout, addToCart }) => (
  <div className="header">
    <Link to="/" className="link-logo">
      <img src="/app_log.png" alt="logo" className="logo"/>
    </Link>
    <SearchBar />
    <div className="link">
      {isLogged && (
        <>
          <Link to="/ma-liste-des-courses">
            <div className="heart">
              <HeartOutlined fontSize="large" />
              <Badge className="badg-heart" count={0} showZero></Badge>
              <p className="icon">Ma liste</p>
            </div>
          </Link>

          <div className="auth">
            <UserOutlined title="Se connecter" />
            <p className="icon">Bienvenue {pseudo.first_name}</p>
              <LogoutButton handleLogout={handleLogout} />
          </div>
        </>
      )}

      {!isLogged && (
        <Link to="/authentification" className="login-icon icon-log-header">
            <UserOutlined title="Se connecter" />
            <p className="icon-deco">Connexion</p>
        </Link>
      )}

      <Link to="/panier" className="cart">
          <ShoppingCartOutlined title="shopping" />
          {addToCart === true ? circle(counter) : null}
          <p className="icon-deco">Mon panier</p>
      </Link>
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
