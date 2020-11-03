import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import LogoutButton from '../LogoutButton';

const scrollingMenu = ({ handleLogout }) => (
  <Navbar bg="dark" expand="md">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <NavDropdown title="Mon compte" id="basic-nav-dropdown" className="scale-in-top">
          <NavDropdown.Item href="#action/3.1">Mon compte</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            <LogoutButton handleLogout={handleLogout} />
          
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default scrollingMenu;
