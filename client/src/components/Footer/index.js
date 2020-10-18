import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

import './style.scss';

const Footer = () => {
  return (
    <>
    <footer className="footer-area">
        <Router>
            <ul>
                <li>
                    <Link href="/about">
                        Mentions légales
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        Conditions génèrales
                    </Link>
                </li>
                <li>
                    <Link href="/products">
                        Qui sommes nous?
                    </Link>
                </li>
            </ul> 
        </Router>
    </footer>
</>
  );
}

export default Footer;