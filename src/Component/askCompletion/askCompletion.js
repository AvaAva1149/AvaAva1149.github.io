import logo from "../../logo.svg";
import "../../App.css";
import React from "react";
import{Button} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <h4 className="h4">
         DID YOU COMPLETE THE COOKING?
        </h4>

  <div><Button className="buttom" variant="primary">No, I cancled</Button>{' '}</div>

  <div> <Button  className="buttom" variant="secondary">Yes! made it!</Button>{' '}</div>
  
      </header>
    </div>
  );
}

export default App;
