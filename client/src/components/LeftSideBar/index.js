import React from 'react';

import './style.scss';

const LeftSideBar = () => {
  return (
    <main class="Homepage_container">
        <div class="Homepage_container_left">
            <aside class="menu_left">
                <ul className="category">
                    <a href="#">  
                        <li>Jerry</li>
                    </a>
                    <a href="#">  
                        <li>Christine</li>
                    </a>
                    <a href="#">  
                        <li>Tanguy</li>
                    </a>
                    <a href="#">  
                        <li>Youssef</li>
                    </a>
                    <a href="#">  
                        <li>Organic</li>
                    </a>
                    <a href="#">  
                        <li>Viandes</li>
                    </a>
                    <a href="#">  
                        <li>Dairy</li>
                    </a>
                    <a href="#">  
                        <li>Léquides</li>
                    </a>
                    <a href="#">  
                        <li>Fruits</li>
                    </a>
                    <a href="#">  
                        <li>Légumes</li>
                    </a>
                    
                </ul>
            </aside>
        </div>
    </main>
  );
}

export default LeftSideBar;