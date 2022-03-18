import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Link } from "react-router-dom";
import Meals from "./Component/Meals";
import StartPage from "./Component/Startpage";


function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Foody App</p>
          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}

          <Link to="/start">Start</Link>
          <Link to="/">Meals</Link>
          
        </header>

        <Route exact path="/" component={Meals} />
        <Route path="/start" component={StartPage} />
      </div>
    </HashRouter>
  );
}

export default App;
