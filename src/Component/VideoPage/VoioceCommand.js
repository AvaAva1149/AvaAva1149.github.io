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

  classify();


  //Izzy's code
  if (label == "Play"){ 
    video.play()
   } else if (label == "Pause"){
     pause.video ()
   } else if (label == "Forward")
      forward.video ()
    } else if (label == "Back"){
    back.video ()
    }
 



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

//Test-2 from Teachable Machine code, need to create new css and connected all together


export class VideoPage {

  const URL = "https://teachablemachine.withgoogle.com/models/WdxrUTqzf/";

    async function createModel() {
        const checkpointURL = URL + "model.json"; // model topology
        const metadataURL = URL + "metadata.json"; // model metadata

        const recognizer = speechCommands.create(
            "BROWSER_FFT", // fourier transform type, not useful to change
            undefined, // speech commands vocabulary feature, not useful for your models
            checkpointURL,
            metadataURL);

// check that model and metadata are loaded via HTTPS requests.
        await recognizer.ensureModelLoaded();

        return recognizer;
    }

    async function init() {
        const recognizer = await createModel();
        const classLabels = recognizer.wordLabels(); // get class labels
        const labelContainer = document.getElementById("label-container");
        for (let i = 0; i < classLabels.length; i++) {
            labelContainer.appendChild(document.createElement("div"));
        }

        // listen() takes two arguments:
        // 1. A callback function that is invoked anytime a word is recognized.
        // 2. A configuration object with adjustable fields
        recognizer.listen(result => {
            const scores = result.scores; // probability of prediction for each class
            // render the probability scores per class
            for (let i = 0; i < classLabels.length; i++) {
                const classPrediction = classLabels[i] + ": " + result.scores[i].toFixed(2);
                labelContainer.childNodes[i].innerHTML = classPrediction; //play pause video
            }
        }, {
            includeSpectrogram: true, // in case listen should return result.spectrogram
            probabilityThreshold: 0.75,
            invokeCallbackOnNoiseAndUnknown: true,
            overlapFactor: 0.50 // probably want between 0.5 and 0.75. More info in README
        });

        // Stop the recognition in 5 seconds.
        // setTimeout(() => recognizer.stopListening(), 5000);
    }
    //Izzy's code
    if (label == "Play"){ 
        video.play()
       }
       else if (label == "pause"){
        video.pause()
       } else