import logo from "../../logo.svg";
import "../../App.css";
import React from "react";
import { Button } from "react-bootstrap";

function AskCompletion() {
  return (
    <div className="App-ask">
      <header className="App-header-ask">
        <h4 className="h4">DID YOU COMPLETE THE COOKING?</h4>

        <div>
          <Button className="buttom-ask" variant="primary">
            No, I cancled
          </Button>{" "}
        </div>

        <div>
          {" "}
          <Button className="buttom-ask" variant="secondary">
            Yes! made it!
          </Button>{" "}
        </div>
      </header>
    </div>
  );
}

export default AskCompletion;
