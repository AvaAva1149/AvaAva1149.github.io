
import React from "react";
import ReactDOM from "react-dom";



import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Meals from "./Component/Meals";
import Startpage from "./Component/Startpage/index.js";
import Header from "./Component/Header/index.js";
import AskCompletion from "./Component/askCompletion/index.js";
import SesameNoodleBowl from "./Component/SesameNoodleBowl/index.js";
import StartCooking from "./Component/StartCooking/index.js";
import ThanksPage from "./Component/ThanksPage/thanks.js";
import TryAgainPage from "./Component/TryAgainPage/tryAgain";
import Stylediet from "./Component/Stylediet/Styleitem";



export default function App()  {
  return (
    <Router>
      <Header />
      <Routes>
   
    <Route path="/" element={<StartCooking />}>
 <Route index element={<Startpage />} />
 <Route path="Meals" element={<Meals />} />
          <Route path="AskCompletion" element={<AskCompletion />} />
          <Route path="SesameNoodleBowl" element={<SesameNoodleBowl />} />
          <Route path="StartCooking" element={<StartCooking />} />
          <Route path="*" element={<ThanksPage />} />
          <Route path="*" element={<TryAgainPage />} />
        </Route>



      </Routes>
     
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

