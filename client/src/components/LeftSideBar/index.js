import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const LeftSideBar = () => {
  return (
    <main className="Homepage_container">
      <div className="Homepage_container_left">
        <aside className="menu_left">
          <ul className="category">
            <Link to="/">
              <li>Jerry</li>
            </Link>
            <Link to="/">
              <li>Christine</li>
            </Link>
            <Link to="/">
              <li>Tanguy</li>
            </Link>
            <Link to="/">
              <li>Youssef</li>
            </Link>
            <Link to="/">
              <li>Organic</li>
            </Link>
            <Link to="/">
              <li>Viandes</li>
            </Link>
            <Link to="/">
              <li>Dairy</li>
            </Link>
            <Link to="/">
              <li>Léquides</li>
            </Link>
            <Link to="/">
              <li>Fruits</li>
            </Link>
            <Link to="/">
              <li>Légumes</li>
            </Link>
          </ul>
        </aside>
      </div>
    </main>
  );
};

export default LeftSideBar;
