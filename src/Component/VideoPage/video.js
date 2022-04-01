
import "../../App.css";


import { Link } from "react-router-dom";

import "../../index.css";
import "./style.css";


function VideoPage() {
  return (
    <div className="App-video">
      <header className="App-header-video">
       
        <p> Use Your Voice to Control the Video</p>
        <p> Video here</p>


         <Link to="Component/VideoPage">

         <button className="linkButton-video" type="button">
       Completed!
        </button>

       
      </Link>
      
     
      
      
</header>
    </div>
  );
}


export default VideoPage;
