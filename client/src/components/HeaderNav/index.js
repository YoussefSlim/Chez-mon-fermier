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
    <Link to="/">
      <img src="/app_log.png" alt="logo" />
    </Link>
    <SearchBar />
    <div className="link">
      {isLogged && (
        <>
          <Badge className="badg-heart" count={0} showZero></Badge>
          <Link to="/ma-liste-des-courses">
            <div className="heart">
              <HeartOutlined fontSize="large" />
              <p className="icon">Ma liste des courses</p>
            </div>
          </Link>

          <div className="auth">
            <UserOutlined title="Se connecter" />
            <p className="icon">Bienvenue {pseudo.first_name}</p>
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

      <Link to="/panier">
        <div className="cart">
          <ShoppingCartOutlined title="shopping" />
          {addToCart === true ? circle(counter) : null}
          <p className="icon">Mon panier</p>
        </div>
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
