import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const LeftSideBar = () => {
  return (
    <main className="Homepage_container">
      <div className="Homepage_container_left">

        <Link className="menu_left">
          <ul className="category">
            <Link>
              <li>Jerry</li>
            </Link>
            <Link>
              <li>Christine</li>
            </Link>
            <Link>
              <li>Tanguy</li>
            </Link>
            <Link>
              <li>Youssef</li>
            </Link>
            <Link>
              <li>Organic</li>
            </Link>
            <Link>
              <li>Viandes</li>
            </Link>
            <Link>
              <li>Dairy</li>
            </Link>
            <Link>
              <li>Léquides</li>
            </Link>
            <Link>
              <li>Fruits</li>
            </Link>
            <Link>
              <li>Légumes</li>
            </Link>
          </ul>
        </Link>

    
      </div>
    </main>
  );
};

export default LeftSideBar;
