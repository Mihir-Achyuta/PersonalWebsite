import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

class Homepage extends React.Component {
  render() {
    return (
      <section className="Homepage">
        <div className="Homepage-Text-Div">
          <h1 className="Homepage-Greeting Homepage-Grid">Hi,</h1>
          <h2 className="Homepage-Description Homepage-Grid">
            A Fullstack Developer
          </h2>
          <h1 className="Homepage-Name Homepage-Grid">I'm Mihir</h1>
          <p className="Homepage-Technology Homepage-Grid">(In Javascript)</p>
        </div>
        <div className="Homepage-Icons">
          <a href="">
            <FontAwesomeIcon
              className="Homepage-Icon"
              icon={faGithubSquare}
              size="3x"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              className="Homepage-Icon"
              icon={faLinkedin}
              size="3x"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              className="Homepage-Icon"
              icon={faFile}
              size="3x"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              className="Homepage-Icon"
              icon={faEnvelope}
              size="3x"
            />
          </a>
        </div>
        <div className="Homepage-Identification-Div">
          <button className="Homepage-Identification-Button">WHO AM I?</button>
        </div>
      </section>
    );
  }
}

export default Homepage;
