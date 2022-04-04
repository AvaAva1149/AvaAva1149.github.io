import logo from "../../logo.svg";
import backArrow from "../../backArrow.svg";
import "../../App.css";
import menu from "../../menu.svg";
import "../../App";
import "../../index";
import React from "react";
import { Link } from "react-router-dom";

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

              <Link to="/Meals" >
                <img src={logo} className="App-logo" alt="logo" />
              </Link>

              </Nav.Link>
            </li>

            <li>
              <NavDropdown
                title="menu"
                id="basic-nav-dropdown"
                className="NavDropdown"
              >


               <Link to="/Meals" >
                <NavDropdown.Item href="#action/3.1">
                 Meal plan
                </NavDropdown.Item>
                </Link>



                <Link to="/Stylediet" >
                <NavDropdown.Item href="#action/3.2">
                  Food styles
                </NavDropdown.Item>
                </Link>


                <Link to="/QuickAndEasy" >
                <NavDropdown.Item href="#action/3.3">
                  Recipe list
                </NavDropdown.Item>
                </Link>



              </NavDropdown>
            </li>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
