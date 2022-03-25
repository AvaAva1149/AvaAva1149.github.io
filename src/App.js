import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Meals from "./Component/Meals";
import StartPage from "./Component/Startpage/index.js";
import Header from "./Component/Header/index.js";
import AskCompletion from "./Component/askCompletion/index.js";
import SesameNoodleBowl from "./Component/sesamenoodlebowl/index.js";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route>
          <Route
            exact
            path={process.env.PUBLIC_URL + "/"}
            component={StartPage}
          />
          <Route path={process.env.PUBLIC_URL + "/Meals"} component={Meals} />
          {/* <Route
            path={process.env.PUBLIC_URL + "/style_diet"}
            component={<style_diet />}
          /> */}
          <Route
            path={process.env.PUBLIC_URL + "/AskCompletion"}
            component={AskCompletion}
          />
          <Route
            path={process.env.PUBLIC_URL + "/SesameNoodleBowl"}
            component={SesameNoodleBowl}
          />
          <Route
            path={process.env.PUBLIC_URL + "/StartCooking"}
            component={StartCooking}
          />
        </Route>
      </Routes>
      <StartPage />
    </Router>
  );
}

export default App;
