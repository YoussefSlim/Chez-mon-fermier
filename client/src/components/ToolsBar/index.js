// import npm
import React from 'react';
// eslint-disable-next-line object-curly-newline
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import './style.scss';

const ToolsBar = () => (
  <div className="top">
    <Navbar expand="md" className="bg-marine-light">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavDropdown title="Légumes" id="basic-nav-dropdown" className="scale-in-top">
            {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
          </NavDropdown>
          <NavDropdown title="Fruits" id="basic-nav-dropdown" className="scale-in-top">
            <NavDropdown.Item href="#action/3.1">Pommes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Abricots</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Fraises</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Pêches</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Melon</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Pastèque</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Ananas</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Citrons</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Clémentines</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Mandarines</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Oranges</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Raisins</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Framboises</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Mûres</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Cassis</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Groseilles</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Prunes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Fruits secs</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Fruits à coques</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Kiwis</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Mirabelles</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Fruits Bio</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Crèmerie" id="basic-nav-dropdown" className="scale-in-top">
            <NavDropdown.Item href="#action/3.1">Lait</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Fromages</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Oeufs</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Beurres</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Crèmes</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Crèmerie Bio</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Boucherie / Charcuterie" id="basic-nav-dropdown" className="scale-in-top">
            <NavDropdown.Item href="#action/3.1">Boucherie</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Charcuterie</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Poissonnerie" id="basic-nav-dropdown" className="scale-in-top">
            <NavDropdown.Item href="#action/3.1">Poissons</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Fruits de mers</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Boulangerie / Pâtisserie" id="basic-nav-dropdown" className="scale-in-top">
            <NavDropdown.Item href="#action/3.1">Boulangerie</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Pâtisserie</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Confiserie" id="basic-nav-dropdown" className="scale-in-top">
            <NavDropdown.Item href="#action/3.1">Bonbons et sucrerie</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Miel</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Chocolat</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Liquides" id="basic-nav-dropdown" className="scale-in-top">
            <NavDropdown.Item href="#action/3.1">Boissons</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Huiles</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Alcool</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default ToolsBar;
