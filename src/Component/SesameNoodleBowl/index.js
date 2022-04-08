import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import "../../index.css";
import "./style.css";
import { Card } from "react-bootstrap";
function SesameNoodleBowl() {
  return (
    <div className="App-noodle">
     
        <h2 className="App-header-sesame" >SESAME NOODLE BOWL</h2>
       
        <img className="img-noodle" src="https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bm9vZGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop"></img>
   
   


   <div className="cardbody"  style={{ width: '50vmin',margin:'5px'} }>
  <Card.Body >
  <h3  className="titlecard">INGREDIENTS</h3>
   
    <Card.Text>
    <div className="details">
         
          <p>- Noodle 1 pack</p>
          <p>- Garlic 1 piece</p>
          <p>- Cucumber x 1</p>
          <p>- Tahini x 1tbsp</p>
          <p>- Sesame paste 6g</p>
          <p>- Soy sauce 3 tbsp</p>
          <p>- Vinegar 1 tbsp</p>
          </div>
    </Card.Text>
    </Card.Body>
</div>

<div className="cardbody" style={{ width: '50vmin', margin:'5px'}}>
  <Card.Body >
    <h3  className="titlecard">HEALTH BENEFIT</h3>
    <Card.Text>
    <div className="details">
         
          <p>- Good Source of Fiber</p>
          <p>- Nutritious Source of Plant Protein</p>
          <p>- Help Lower Blood Pressure</p>
          <p>- Support Healthy Bones</p>
          <p>- Reduce Inflammation</p>
          <p>- Good Source of B Vitamins</p>
          <p>- Aid Blood Cell Formation.</p>
          </div>
    </Card.Text>
    </Card.Body>
</div> 
         


<div className="cardbody" style={{ width: '50vmin', margin:'5px', }}>
  <Card.Body >
    
    <Card.Text>
    <h3 className="titlecard">RECIPE</h3> 
    <div className="details">
          
          <p>1. Boil noodles</p>
          <p>2. Mix 1/2 of cup of water and liquid ingredients  </p>
          <p>3. Chop garlic small and add into the sauce</p>
          <p>4. Drizzle over noodles and add sesame</p>
          <p>5. Cut chicken as a dice shape and saute with the sauce until crispy </p>
          <p>6. Cut cucumber and put beans and the chicken next to 
the noodle in the bowl</p>
          
          </div>
    </Card.Text>
    </Card.Body>
</div> 

<Link to="/StartCooking">
          <button className="noodle-vid" type="button">
          Watch video
          </button>
        </Link>

        

  
    

   
    </div>
  );
}

export default SesameNoodleBowl;
