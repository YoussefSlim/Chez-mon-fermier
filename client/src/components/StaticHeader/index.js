import React from 'react';
import { Link } from 'react-router-dom';
import ToLogIn from '../ToLogIn';

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
            <div>
              <ToLogIn />
              <Link to="/panier">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-cart-fill"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
                  />
                </svg>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default StaticHeader;
