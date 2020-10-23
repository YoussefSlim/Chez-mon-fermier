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
            <div className="text-center">
              <Link
                to=""
                className=" position "
                data-toggle="modal"
                data-target="#elegantModalForm"
              >
                <i className="far fa-user"></i>
              </Link>
            </div>
            <div className=" position">
              <Link to="/panier">
                <i className="far fas fa-shopping-cart"></i>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default StaticHeader;
