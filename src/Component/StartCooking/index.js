import "../../App.css";
import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import "./style.css";
import { Card } from "react-bootstrap";
function StartCooking() {
  return (
    <div className="App-startcooking ">
      <div className="App-title-startcooking">


      <div className="infovoice">

          <h2 className="h2title1">LET'S COOK WITH FOODY</h2>
         
      
         <h2 className="h2title1">You can use your voice to play the cooking video.</h2>


          <h2 className="h2title1">PUT THE PHONE ON A TABLE AND SPEAK UP</h2>

          <h4 className="h4title1">Language recommendations to be applied to the video</h4>

          </div>

          <div className="icons">

          <div >


          <div className="back-card"    style={{ width: '15vmin', margin:'5px', }}>
  <div >
  <Card.Text>
    <div>
    <p className="pause-icon">Pause</p>
          <p >Pause the video / Pause</p>
          </div>
    </Card.Text>
    </div>
</div> 


<div className="back-card"  style={{ width: '15vmin', margin:'5px', }}>
  <div className="back-card" >
  <Card.Text>
    <div >
    <p className="pause-icon">Play</p>
          <p >Play the video / Play</p>
          </div>
    </Card.Text>
    </div>
</div> 



   

         </div>
       
          <div>


          <div  className="back-card" style={{ width: '15vmin', margin:'5px', }}>
          <div >
  <Card.Text>
    <div >
    <p className="pause-icon">Forward</p>
          <p >Forward</p>
          </div>
    </Card.Text>
    </div>
</div>


<div className="back-card"  style={{ width: '15vmin', margin:'5px', }}>
  <div >
  <Card.Text>
    <div >
    <p className="pause-icon">Back</p>
          <p >Back the video / Back</p>
          </div>
    </Card.Text>
    </div>
</div> 


          
        </div>
        </div>
        
        <img className="img-startcooking" src="https://images.unsplash.com/photo-1617093727343-374698b1b08d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bm9vZGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&"></img>
       
       

        <Link to="/VideoPage">
          <button className="start-video-button" type="button">
          Start Cooking
          </button>
        </Link>

       
      </div>
    </div>
 
  );
}

export default StartCooking;
