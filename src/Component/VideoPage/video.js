import mic from "../../mic.svg";
import "../../App.css";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";

import "../../index.css";
import "./style.css";


function VideoPage() {
  return (
    <div className="App-video">


      <header className="App-header-video">
       
        <p> TAB ON MIC ICON & SPEAK UP TO CONTROL THE VIDEO</p>



        <img
            className="mic"
            src={mic}  alt="mic"
            onClick={() =>
              window.open("https://jumarash.github.io/jumarash/", "_blank")
            }
          />

       

        <div className="vidyoutu" >

        <ReactPlayer url="youtu.be/vPFoCNnaqIQ"/>
        </div>

       


         <Link to="/askCompletion">

         <button className="linkButton-video" type="button">
       Completed!
        </button>

       
      </Link>
      
     
      
      
</header>
    </div>
  );
}


export default VideoPage;
