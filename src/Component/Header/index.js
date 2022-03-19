import logo from "../../logo.svg";
import menu from "../../menu.svg";
import "../../App.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Dropdown,
  } from "react-bootstrap";
 


function App() {
  return (
   

      <Navbar className="navbar" expand={false}>
       <img src={logo} className="logo" alt="logo" />

    <Dropdown  className="menu">
        <Dropdown.Toggle variant="success" id="dropdown-basic"   >
        <img src={menu} className="hammenu" alt="" />
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropDown">
          <Dropdown.Item className="item" href="#/action-1">Meal plan</Dropdown.Item>
          <Dropdown.Item className="item" href="#/action-2">Food styles</Dropdown.Item>
          <Dropdown.Item className="item" href="#/action-3">Recipe list</Dropdown.Item>
          <Dropdown.Item  className="item"href="#/action-3">Noodle recipe </Dropdown.Item>
          <Dropdown.Item  className="item"href="#/action-3">Ingredients </Dropdown.Item>
          <Dropdown.Item className="item" href="#/action-3">Video</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>  
  
  
 
</Navbar>
 
  );
}

export default App;
