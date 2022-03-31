
import "../../App.css";
import React from "react";
import { Link } from "react-router-dom";

import "../../index.css";
import "./style.css";


function Meals() {
  return (
      <body className="App-body-meal">
        <p>What are you going to cook?</p>

        <button type="button" className="mealButton">
          Breakfast
        </button>


        <Link to="Component/quickAndEasy" >
        <button type="button" className="mealButton">
          Lunch
        </button>
        </Link>




        <button type="button" className="mealButton">
          Dinner
        </button>
        <button type="button" className="mealButton">
          Dessert
        </button>
      </body>
    
  );
}

export default Meals;
