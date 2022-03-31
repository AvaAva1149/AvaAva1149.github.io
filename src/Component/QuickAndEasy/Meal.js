import React from "react";
import Mealitem from "./Mealitem";
const Meal=()=>{
    return (
        <div className="main">
            

            <div className="searchBox">
                <input type="search" className="search-bar" placeholder="Enter food name"> 
                </input>
 
           </div>
           <div className="heading"><h1>Quick & Easy List</h1>
           <div className="container">
           <Mealitem/>

        </div>
        
            </div>
        </div>
    )
}
export default Meal;
