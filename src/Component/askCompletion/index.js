
import "../../App.css";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "../../index.css";
import "./style.css";

function AskCompletion() {
  return (
    <div className="App-ask">
      <header className="App-header-ask">
        <h4 className="h4">DID YOU COMPLETE THE COOKING?</h4>

        <div>

        <Link to="/TryAgainPage" >
          <Button className="buttom-ask" variant="primary">
            No, I cancled
          </Button>{" "}
</Link>

        </div>

        <div>
        <Link to="/FeedbackPage"  className="asktButton-link">
          {" "}
          <Button className="buttom-ask" variant="secondary">
            Yes! made it!
          </Button>{" "}
          </Link>

        </div>
      </header>
    </div>
  );
}

export default AskCompletion;
