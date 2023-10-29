import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Navbar.css';

function AppNavbar() {
  return (
    <Navbar expand="lg" className='navbar'>
      <div className="container">
        <Navbar.Brand href="/">
          <span className="logo-name" >MDUDUZI</span> <span className="project-name">PROJECTS📂</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Link href="/">
              <span className="menu-link">Home</span>
            </Nav.Link>
            <Nav.Link href="/about">
              <span className="menu-link-1">About</span>
            </Nav.Link>

            <NavDropdown title="Portfolio" id="portfolioDropdown" className='portfolio'>
              <NavDropdown.Item href="/webdevelopment">
                <span className="dropdown">Web Development</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="/graphicdesign">
                <span className="dropdown">Graphic Design</span>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contact">
              <span className="menu-link-1">Contact</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default AppNavbar;





