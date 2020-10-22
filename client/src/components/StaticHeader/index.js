import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const StaticHeader = () => {
  return (
    <header className="HomePage_header">
      <nav className="HomePage_menu-top">
        <ul className="HomePage_menu-top_list">
          <li className="logo jello-horizontal">
            <Link to="/">
              <img src="logo-app.png" alt="Logo CHez mon fermier" />
            </Link>
          </li>
          <li className="search_bar">
            <nav className="navbar navbar-light bg-light">
              <form className="form-inline">
                <div className="search">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="chercher"
                    aria-label="chercher"
                  />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                    chercher
                  </button>
                </div>
              </form>
            </nav>
          </li>
          <li className="login">
            <button
              type="button"
              className="btn__position  "
              data-toggle="modal"
              data-target="#login"
            >
              <i class="far fa-user "></i>
            </button>
            <div>
              <Link to="/panier">
                <i class="fas fa-shopping-cart"></i>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default StaticHeader;
