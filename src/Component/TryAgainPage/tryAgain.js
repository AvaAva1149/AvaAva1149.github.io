import logo from "./logo.svg";
import "./App.css";

import { Button } from "react-bootstrap";

function TryAgainPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h4 className="h4">Don't Worry, Let's try again next time!</h4>

        <div>
          {" "}
          <Button className="buttom" variant="secondary">
            See New Plan
          </Button>{" "}
        </div>
      </header>
    </div>
  );
}

export default TryAgainPage;
