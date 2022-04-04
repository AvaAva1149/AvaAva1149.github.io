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
        
             <li>
             <Link to="/Meals" >
                <img src={logo} className="App-logo" alt="logo" />
              </Link>

           </li>



            <li>
              <NavDropdown title="menu" id="basic-nav-dropdown" className="NavDropdown">


              <NavDropdown.Item href="#action/3.1">
                <Link to="/Meals" >
                 Meal plan
                 </Link>
                </NavDropdown.Item>
                


              <NavDropdown.Item href="#action/3.2">
                <Link to="/Stylediet" >
                  Food styles
                  </Link>
                </NavDropdown.Item>
               

              <NavDropdown.Item href="#action/3.3">
                <Link to="/QuickAndEasy" >
                  Recipe list
                  </Link>
                </NavDropdown.Item>
               



              </NavDropdown>
            </li>


     
      
      </Navbar>
    </div>
  );
}

export default Header;
