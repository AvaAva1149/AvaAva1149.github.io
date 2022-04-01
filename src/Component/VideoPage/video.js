import mic-icon from "../../mic-icon.svg";
import "../../App.css";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";

import "../../index.css";
import "./style.css";


function VideoPage() {
  return (
    <div className="App-video">

<img src={mic-icon} className="App-logo-start" alt="logo" />
      <header className="App-header-video">
       
        <p> Use Your Voice to Control the Video</p>
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
