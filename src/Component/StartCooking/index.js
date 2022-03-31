import "../../App.css";
import React from "react";



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

        <button cLassName="start-video-button">Start Cooking</button>
      </header>
    </div>
  );
}

export default StartCooking;
