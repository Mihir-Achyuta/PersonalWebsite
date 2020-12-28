import React from "react";

import Resume from "../../documents/resume.pdf";

import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faScroll,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

class Homepage extends React.Component {
  render() {
    return (
      <section className="Homepage">
        <div className="Homepage-Text-Div">
          <Fade delay={900}>
            <p className="Homepage-Greeting Homepage-Grid">Hi,</p>
          </Fade>
          <Fade delay={1300}>
            <h1 className="Homepage-Name Homepage-Grid">I'm Mihir.</h1>
          </Fade>
          <Fade delay={1700}>
            <h1 className="Homepage-Description Homepage-Grid">A Developer</h1>
          </Fade>
          <Fade delay={2100}>
            <h1 className="Homepage-Technology Homepage-Grid">
              In JS and Dart
            </h1>
          </Fade>
        </div>
        {/* <div className="Homepage-Icons">
          <Fade top big delay={1700}>
            <a
              href="https://github.com/Mihir-Achyuta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Homepage-Icon"
                icon={faGithubSquare}
                size="3x"
              />
            </a>
          </Fade>
          <Fade top big delay={1700}>
            <a
              href="https://www.linkedin.com/in/mihirachyuta/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Homepage-Icon"
                icon={faLinkedin}
                size="3x"
              />
            </a>
          </Fade>
          <Fade top big delay={1700}>
            <a href={Resume} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                className="Homepage-Icon"
                icon={faScroll}
                size="3x"
              />
            </a>
          </Fade>
          <Fade top big delay={1700}>
            <a
              href="mailto:achyutamihir@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="Homepage-Icon"
                icon={faEnvelope}
                size="3x"
              />
            </a>
          </Fade>
        </div> */}
      </section>
    );
  }
}

export default Homepage;
