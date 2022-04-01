import "../../App.css";
import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import "./style.css";

function StartCooking() {
  return (
    <div className="App">
      <header className="App-header-startcooking">
        <h2>Let's Cook With FOODY</h2>

        <div className="Ingredients">
          <h4>INGREDIENTS</h4>
          <h6>You cna use your voice to play the cooking video</h6>
          <h2>Put the phone on the table and speak up</h2>
        </div>
        
        <img src="https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bm9vZGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
       
        <Link to="Component/Video">
          <button cLassName="start-video-button">Start Cooking</button>
        </Link>
       
      </header>
    </div>
  );
}

export default StartCooking;
