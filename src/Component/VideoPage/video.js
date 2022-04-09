import mic from "../../mic.svg";
import "../../App.css";
// import ReactPlayer from "react-player";

//Saori test
import VoiceModel from "../voiceCommandData/voice_model/model.json";
import VoiceModelMetadata from "../voiceCommandData/metadata.json";

import { Link } from "react-router-dom";

import "../../index.css";
import "./style.css";
import { FaDrawPolygon } from "react-icons/fa";

let video;

let classifier;


//setup
// function VideoPage() {
//   return (
//     <div className="App-video">


//Test-1 use function

function preload(){
  classifier = m15.voiceClassifier('https://teachablemachine.withgoogle.com/models/WdxrUTqzf/')
}

//playing video with voice
function classifyVoice(){
  classifier.classify (video, controlVideo);

}

//get Result
function controlVideo(){
  if (play == '0.7') {
    play.video;
  } else if(pause == '0.7'){
    pause.video;
  } else if(forward == '0.7'){
    pause.video;
  }

}
  classify();

  //Test-3

  startVideo.



//       <header className="App-header-video">
       
//         <p> SPEAK UP TO CONTROL THE VIDEO</p>

//         <img src={mic} className="mic" alt="mic" />

//         <div className="vidyoutu" >

//         <ReactPlayer url="youtu.be/vPFoCNnaqIQ"/>
//         </div>

       


//          <Link to="/askCompletion">

//          <button className="linkButton-video" type="button">
//        Completed!
//         </button>

       
//       </Link>
      
     
      
      
// </header>
//     </div>
//   );
// }


// export default VideoPage;




