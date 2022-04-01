import logo from "../../logo.svg";
import backArrow from "../../backArrow.svg";
import "../../App.css";
import menu from "../../menu.svg";
import "../../App";
import "../../index";
import React from "react";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <div className="App">
      <Navbar className="navbar" expand="lg">
        <Container>
          <Nav className="me-auto">
            <li className="nav-list">
              <Nav.Link href="#back">
                <img
                  src={backArrow}
                  className="App-backArrow"
                  alt="backArrow"
                />
              </Nav.Link>
            </li>

            <li>
              <Nav.Link href="#home">
                <img src={logo} className="App-logo" alt="logo" />
              </Nav.Link>
            </li>

            <li>
              <NavDropdown
                title="menu"
                id="basic-nav-dropdown"
                className="NavDropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Meal plan
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Food styles
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Recipe list
                </NavDropdown.Item>
              </NavDropdown>
            </li>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
