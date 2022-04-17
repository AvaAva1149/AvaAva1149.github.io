import logo from "../../logo.svg";

import "../../App.css";
import menu from "../../menu.svg";
import "../../App";
import "../../index";

import React from "react";
import { Link } from "react-router-dom";

import { Navbar, Dropdown } from "react-bootstrap";

function Header() {
  return (
    <div className="App">


<Navbar className="navbar" expand="lg">
        
             <Link to="/Meals" >
                <img src={logo} className="App-logo" alt="logo" />
              </Link>

        
             


    

            <Dropdown className="NavDropdown">





  <Dropdown.Toggle variant="success" id="dropdown-basic" >Menu</Dropdown.Toggle>

  <Dropdown.Menu className="menu-dropdown">
    
    
    <Dropdown.Item href="#/action-1"><Link to="/Meals" >Meal plan </Link></Dropdown.Item>

    <Dropdown.Item href="#/action-2"> <Link to="/Stylediet" >Food styles</Link></Dropdown.Item>

 <Dropdown.Item href="#/action-3"><Link to="/QuickAndEasy" > Recipe list</Link></Dropdown.Item>


  </Dropdown.Menu>
</Dropdown>
 



     
      
      </Navbar>
    </div>
  );
}

export default Header;
