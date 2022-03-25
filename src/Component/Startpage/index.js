import logo from "../../logo.svg";
import "../../App.css";

function StartPage() {
  return (
    <div className="App-start">
      <header className="App-header-start">
        <img src={logo} className="App-logo-start" alt="logo" />
        <p> WELCOME TO FOODY</p>
        <button className="startButton" type="button">
          Start
        </button>
      </header>
    </div>
  );
}

export default StartPage;
