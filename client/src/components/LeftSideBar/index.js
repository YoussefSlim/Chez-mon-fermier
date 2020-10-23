import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const LeftSideBar = () => {
  return (
    <div className="wrapper d-flex align-items-stretch container_left">
      <nav id="sidebar">
        <div className="custom-menu">
          <button type="button" id="sidebarCollapse" className="btn btn-primary ">
            <i className="fa fa-bars"></i>
            <span className="sr-only">Toggle Menu</span>
          </button>
        </div>
        <div className="p-4 pt-5">
          <h4>Catégories</h4>
          <ul className="list-unstyled components mb-5">
            <li className="active">
              <Link
                to="#homeSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Catégories 1
              </Link>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <Link to="#">Produit 1</Link>
                </li>
                <li>
                  <Link to="#">Produit 2</Link>
                </li>
                <li>
                  <Link to="#">Produit 3</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="#pageSubmenu"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                Catégories 2
              </Link>
              <ul className="collapse list-unstyled" id="pageSubmenu">
                <li>
                  <Link to="#">Produit 1</Link>
                </li>
                <li>
                  <Link to="#">Produit 2</Link>
                </li>
                <li>
                  <Link to="#">Produit 3</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default LeftSideBar;
