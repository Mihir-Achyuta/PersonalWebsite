import React from "react";

import Resume from "../../documents/resume.pdf";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faFile,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

class Homepage extends React.Component {
  render() {
    return (
      <section className="Homepage">
        <div className="Homepage-Text-Div">
          <Fade delay={900} left>
            <h1 className="Homepage-Greeting Homepage-Grid">Hi,</h1>
          </Fade>
          <Fade delay={1300} right>
            <h2 className="Homepage-Description Homepage-Grid">
              A Full-Stack Developer
            </h2>
          </Fade>
          <Fade delay={1100} left>
            <h1 className="Homepage-Name Homepage-Grid">I'm Mihir</h1>
          </Fade>
          <Fade delay={1500} bottom>
            <p className="Homepage-Technology Homepage-Grid">
              (In Javascript and Dart)
            </p>
          </Fade>
        </div>
        <div className="Homepage-Icons">
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
                icon={faFile}
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
        </div>
        <Bounce bottom big delay={1700}>
          <Link
            activeClass="active"
            to={"about"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <div className="Homepage-Identification-Div">
              <FontAwesomeIcon
                className="Homepage-Identification-Icon"
                icon={faChevronDown}
                size={"5x"}
              />
            </div>
          </Link>
        </Bounce>
      </section>
    );
  }
}

export default Homepage;
