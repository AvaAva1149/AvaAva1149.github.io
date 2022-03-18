import logo from './logo.svg';
import './App.css';
import React from "react";

import{Dropdown,DropdownMenu, DropdownToggle,Button} from 'react-bootstrap'




function App() {
  return (
    <div className="App">
     


        <nav className="navbar">
        <div className="container-fluid">
          
            <img src='/logo.svg' alt="" width={50} height={50} className="d-inline-block align-text-top " />
            
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
       
    

<body className="App-body">

<p>
 What are you going to cook?
</p>


 
<button type="button" className="mealButton">Breakfast</button>
<button type="button" className="mealButton">Lunch</button>
<button type="button" className="mealButton">Dinner</button> 
<button type="button" className="mealButton">Dessert</button>



</body>
</div>
  );
}

export default App;
