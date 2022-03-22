import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Meals from "./Component/Meals";
import StartPage from "./Component/Startpage";
import Header from "./Component/Header";
import AskCompletion from "./Component/AskCompletion";
import Recipe from "./Component/Recipe";
import SesameNoosdleBowl from "./Component/SesameNoodleBowl";




function App() {
  return (
    <Router>
      <Header />
      <Routes>


      <Route>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={StartPage} />
        <Route path={process.env.PUBLIC_URL + "/Meals"} component={<Meals />} />
        <Route path={process.env.PUBLIC_URL + "/Recipe"} component={<Recipe />} />
        <Route path={process.env.PUBLIC_URL + "/quickAndEasy"} component={<quickAndEasy/>} />
        <Route path={process.env.PUBLIC_URL + "/style_diet"} component={<style_diet/>} />
        <Route path={process.env.PUBLIC_URL + "/AskCompletion"} component={<AskCompletion/>} />
        <Route path={process.env.PUBLIC_URL + "/SesameNoosdleBowl"} component={<SesameNoosdleBowl/>} />
      </Route>
      
      </Routes>



    </Router>
  );
}

export default App;
