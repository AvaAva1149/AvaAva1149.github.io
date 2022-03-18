import logo from "../../logo.svg";
import "../../App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> WELCOME TO FOODY</p>
        <button className="startButton" type="button">
          Start
        </button>
      </header>
    </div>
  );
}

export default App;
