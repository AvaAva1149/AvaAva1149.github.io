import logo from "../../logo.svg";
import "../../App.css";
import React from "react";

function Meals() {
  return (
      <body className="App-body">
        <p>What are you going to cook?</p>

        <button type="button" className="mealButton">
          Breakfast
        </button>
        <button type="button" className="mealButton">
          Lunch
        </button>
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
