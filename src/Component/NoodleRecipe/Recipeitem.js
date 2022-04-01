import React from "react";
import "../../index.css";
import "./style.css";
import { Link } from "react-router-dom";




const Recipeitem=()=>{
    return(
        <>
      

   
<div> 
      <div>
          <div><h1 className="heading"> Noodle recipe List</h1></div>
        
        <img className="img" src="https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="Jane"  />
        
        
        <Link to="Component/SesameNoodleBowl" >

        <div className="danger">
 <p className="para"><strong>Sesame Noodle Bowel </strong></p>
        </div>


</Link>
        </div>
       <div>
        <img className="img" src="https://media.istockphoto.com/photos/homemade-fettucini-aflredo-pasta-picture-id506916161?k=20&m=506916161&s=612x612&w=0&h=l1GOJACN2hK-LBwjPBGoxP6tci_UeAWbaZ6PX34dQDU=" alt="Jane"  />
        <div className="success">
          <p className="para"><strong>Chicken Noodle</strong> </p>
        </div>
        </div>

<div>
        <img className="img" src="https://media.istockphoto.com/photos/shrimp-chow-mein-picture-id185320132?k=20&m=185320132&s=612x612&w=0&h=UpE8Hchf0HcGO55b5HZ5dc66mNh_dGy_MpLGIpp6PO8=" alt="Jane"  />
        <div className="info">
          <p className="para"><strong>Seafood Noodle</strong> </p>
        </div>


        </div>
<div>
        <img className="img" src="https://media.istockphoto.com/photos/beef-and-broccoli-stir-fry-picture-id642065070?b=1&k=20&m=642065070&s=170667a&w=0&h=_9qddTm7MbrT5hz2pvKDib9Tgr5t-gfiYhoPhXzLKv8=" alt="Jane"  />
        <div className="info">
          <p className="para"><strong>Beef  Noodle</strong> </p>
        </div>

        </div>

        <div>
        <img className="img" src="https://media.istockphoto.com/photos/ramen-asian-noodle-in-broth-with-meat-and-ajitama-pickled-egg-in-bowl-picture-id1127291339?k=20&m=1127291339&s=612x612&w=0&h=fwmF1GzqhsDJ_IMBlZZFHg48xKzxERnbP-7BXRCUqjI=" alt="Jane"  />
        <div className="info">
          <p className="para"><strong>Ramen  Noodle</strong> </p>
        </div>

        </div>
<div>
        <img className="img" src="https://media.istockphoto.com/photos/homemade-italian-fettuccine-pasta-with-mushrooms-and-cream-sauce-picture-id1161197982?b=1&k=20&m=1161197982&s=170667a&w=0&h=hYkoZW7iMGj7mjMzpCWmLNSWfrtDWSJd38hCKXQgUHc=" alt="Jane"  />
        <div className="warning">
          <p className="para"><strong>Cream Pasta</strong> </p>
        </div>
      </div>
      </div>
      <div className="btn">
    <button className="button"> <span>see more recipe </span></button>
    </div>
        </>

       
    )
}
export default Recipeitem;