import React from "react";
import "../../App.css";



function SesameNoodleBowl() {
  return (
    <div className="App">
      <header className="App-header-sesame">
        <h2>SESAME NOODLE BOWL</h2>
        <img src="https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bm9vZGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"></img>
        <div className="Ingredients">
          <h4>INGREDIENTS</h4>
          <p>Noodle 1 pack</p>
          <p>Garlic 1 piece</p>
          <p>Cucumber x 1</p>
          <p>Tahini x 1tbsp</p>
          <p>Sesame paste 6g</p>
          <p>Soy sauce 3 tbsp</p>
          <p>Vinegar 1 tbsp</p>
        </div>

        <Link to="Component/StartCooking">
          <button cLassName="video-button">Watch video</button>
        </Link>
       
      </header>
    </div>
  );
}

export default SesameNoodleBowl;
