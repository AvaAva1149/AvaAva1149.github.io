import logo from "../../logo.svg";
import "../../App.css";
import React from "react";
import { Link } from "react-router-dom";
import {
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    Button,
  } from "react-bootstrap";

function Header() {
  return (
    <div className="App">
    <nav className="navbar">
      <div className="container-fluid">
        <img
          src="/logo.svg"
          alt=""
          width={50}
          height={50}
          className="d-inline-block align-text-top "
        />
      </div>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>

      <Link to={process.env.PUBLIC_URL + "/"} >Home Page</Link>
      <Link to= >
  );
}

export default Header;
