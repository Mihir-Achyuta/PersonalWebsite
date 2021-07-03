/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

//@ts-ignore
import resume from "../../documents/resume/resume.pdf";

import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

class Homepage extends React.Component {
  render() {
    return (
      <section className="Homepage">
        <div className="Homepage-Text-Div">
          <Fade bottom delay={200}>
            <h1 className="Homepage-Greeting Homepage-Grid">
              Hey 👋 I'm Mihir !
            </h1>
          </Fade>
          <Fade bottom delay={300}>
            <h3 className="Homepage-Description Homepage-Grid">
              Software Engineering Intern @ Hardly & Computer Science Student @
              UW Madison
            </h3>
          </Fade>
          <Fade bottom delay={400}>
            <h1 className="Homepage-Technology Homepage-Grid">
              I love building applications with JavaScript and diving deep into
              the unknown into the development world.
            </h1>
          </Fade>
        </div>
        <div className="Homepage-Sidebar">
          <Fade bottom delay={500}>
            <div className="Homepage-Icons">
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
              {/* <a href="/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  className="Homepage-Icon"
                  icon={faLinkedin}
                  size="3x"
                />
              </a> */}
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  className="Homepage-Icon"
                  icon={faPaperPlane}
                  size="3x"
                />
              </a>
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
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Homepage;
