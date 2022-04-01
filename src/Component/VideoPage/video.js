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
       
        <p> Use Your Voice to Control the Video</p>

        <img src={mic} className="mic" alt="mic" />

        <div>

        <ReactPlayer url="youtu.be/vPFoCNnaqIQ"/>
        </div>

       


         <Link to="Component/askCompletion">

         <button className="linkButton-video" type="button">
       Completed!
        </button>

       
      </Link>
      
     
      
      
</header>
    </div>
  );
}


export default VideoPage;
