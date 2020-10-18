import React from "react";

import "./style.scss";

const StaticHeader = () => {
  return (
    <header className="HomePage_header">
      <nav className="HomePage_menu-top">
        <ul className="HomePage_menu-top_list">
          <li className="logo">
            <img
              src="logo-app.png"
              className="jello-horizontal"
              alt="Logo CHez mon fermier"
            />
          </li>
          <li className="search_bar">
            <nav className="navbar navbar-light bg-light">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="chercher"
                  aria-label="chercher"
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  chercher
                </button>
              </form>
            </nav>
          </li>
          <li className="login">
            <div>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-person-circle"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                <path
                  fillRule="evenodd"
                  d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fillRule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                />
              </svg>
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
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default StaticHeader;
