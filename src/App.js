import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Meals from "./Component/Meals";
import StartPage from "./Component/Startpage";
import Header from "./Component/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path={process.env.PUBLIC_URL + "/"}
          component={<StartPage />}
        />
        <Route path={process.env.PUBLIC_URL + "/Meals"} component={<Meals />} />
      </Routes>
    </Router>
  );
}

export default App;
