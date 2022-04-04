
import "../../App.css";
import { Link } from "react-router-dom";
import "../../index.css";
import "./style.css";

import { Button } from "react-bootstrap";

function TryAgainPage() {
  return (
    <div className="App-try">
      <header className="App-header-try">
        <h4 className="h4">Don't Worry, Let's try again next time!</h4>

        <div>

        <Link to="/Meals"  className="tryButton-link">
          {" "}
          <Button className="buttom-newplan" variant="secondary">
            See New Plan
          </Button>{" "}
          </Link>

        </div>
      </header>
    </div>
  );
}

export default TryAgainPage;
