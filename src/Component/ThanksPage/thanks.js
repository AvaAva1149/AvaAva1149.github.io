import logo from "../../logo.svg";
import "../../App.css";
import { Link } from "react-router-dom";

import "../../index.css";
import "./style.css";

function App() {
  return (
    <div className="App-thanks">
      <header className="App-header-thanks">
        <img src={logo} className="App-logo-thanks" alt="logo" />
        <p> THANK YOU</p>
        

        <Link to="/Meals">
          <button className="startButton-thanks" type="button">
            Back to top
          </button>{" "}
        </Link>
      </header>
    </div>
  );
}

export default App;
