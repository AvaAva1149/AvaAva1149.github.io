import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./home.js";
import StartPage from "./startpage.js";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Foody App</p>
          <p>helloy</p>
          
          {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}

          <Link to="/start">Start</Link>
          <Link to="/">Home</Link>
        </header>

        <Route exact path="/" component={Home} />
        <Route path="/start" component={StartPage} />
      </div>
    </HashRouter>
  );
}

export default App;
