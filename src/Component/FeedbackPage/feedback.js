import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "../../index.css";


const colors = {

  orange: "FFBA5A",
  grey:"#a9a9a9"
}

function App() {

  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = React.useState(0);
  const [hoverValue, setHoverValue] = React.useState(undefined);

  const handleClick = value =>{
    setCurrentValue(value)
  };

  const handleMouseOver = value => {
    setHoverValue(value)
  }
  
  const handleMouseLeave =  () => {
     setHoverValue(undefined)
  }

  return (
    
   <div style={style.container}>
<h2> How was your experience </h2> 
   <div style={style.stars}>
   {/* <div> <p> Easy-Taste-Quick </p> </div>  */}
   {stars.map((_, index) => {
     
     return (
       <FaStar
       key={index}
       size={24}
       style={{

      
        cursor:"pointer"
       }}
       
       color={(hoverValue || currentValue) > index ? colors.orange : colors.white}
       onClick={() => handleClick(index +1)}
       onMouseOver={() => handleMouseOver(index + 1)} 
       onMouseLeave={handleMouseLeave}
       />
       
     )
   })}
   
   </div>
   <textarea
   placeholder="What is your feedback. "
   style={style.textarea}
   /> 


<Link to="/ThanksPage" >
   <button style={style.button}> <span>Submit</span></button>
  </Link> 


   </div>
  
  );
};

const style ={
  container:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
   color: "#FFFFFF",
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius:5,
    width: 250,
    margin:"20px 0",
    minHeight:200,
    padding:10
    },

    button: {
      border: "1px solid #a9a9a9",
      width: 270,
      heigh:50,
      borderRadius:20,
      padding:10,
      color: "#FFFFFF",
      background: "#6D968C",
      cursor: "pointer",
      
      
      
    },
      
}



export default App;
