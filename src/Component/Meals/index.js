import logo from './logo.svg';
import './App.css';
import React from "react";






function App() {
  return (
    <div className="App">
     


        <nav className="navbar">
        <div className="container-fluid">
          
            <img src='/logo.svg' alt="" width={50} height={50} className="d-inline-block align-text-top " />
            
        </div>

        <div className="btn-group">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
          Menu
        </button>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
          <li><button className="dropdown-item" type="button">Action</button></li>
          <li><button className="dropdown-item" type="button">Another action</button></li>
          <li><button className="dropdown-item" type="button">Something else here</button></li>
        </ul>
      </div>

      

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
