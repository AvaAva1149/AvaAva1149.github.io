import logo from "../../logo.svg";
import "../../App.css";
import { Link } from "react-router-dom";

import "../../index.css";
import "./style.css";


function Startpage() {
  return (
    <div className="App-start">
      <header className="App-header-start">
        <img src={logo} className="App-logo-start" alt="logo" />
        <p> WELCOME TO FOODY</p>


         <Link to="Component/Meals"  className="startButton-link">
        <h4 className="linkButton" >Start</h4>
      </Link>
      
      
   
</header>
    </div>
  );
}


export default Startpage;
