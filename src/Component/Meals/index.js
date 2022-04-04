import "../../App.css";
import React from "react";
import { Link } from "react-router-dom";

import "../../index.css";
import "./style.css";

function Meals() {
  return (
    <div className="App-body-meal">
      <p>What are you going to cook?</p>

 <Link to="/Stylediet">
      <button type="button" className="mealButton">
        Breakfast
      </button>
</Link>

      <Link to="/Stylediet">
        <button type="button" className="mealButton">
          Lunch
        </button>
      </Link>

      <Link to="/Stylediet">
      <button type="button" className="mealButton">
        Dinner
      </button>
      </Link>

      <Link to="/Stylediet">
      <button type="button" className="mealButton">
        Dessert
      </button>
      </Link>
    </div>
  );
}

export default Meals;
