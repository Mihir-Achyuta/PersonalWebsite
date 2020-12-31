import React from "react";

import Resume from "../../documents/resume.pdf";

import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faScroll } from "@fortawesome/free-solid-svg-icons";

class Homepage extends React.Component {
  render() {
    return (
      <section className="Homepage">
        <div className="Homepage-Text-Div">
          <Fade delay={900}>
            <p className="Homepage-Greeting Homepage-Grid">Hey!👋</p>
          </Fade>
          <Fade delay={1300}>
            <h1 className="Homepage-Name Homepage-Grid">
              <span>
                I<span className="Homepage-Name-Secondary-Color">'</span>m‎
                <span className="Homepage-Name-PopOut">&nbsp;Mihir</span>
                <span className="Homepage-Name-Secondary-Color">.</span>
              </span>
            </h1>
          </Fade>
          <Fade delay={1700}>
            <h1 className="Homepage-Description Homepage-Grid">
              <span className="Homepage-Description-Dev">
                <span className="Homepage-Description-Dev-Stack">
                  Full-Stack
                </span>{" "}
                Dev
              </span>
            </h1>
          </Fade>
          <Fade delay={2100}>
            <h1 className="Homepage-Technology Homepage-Grid">
              In{" "}
              <span className="Homepage-Technology-Javascript">
                &nbsp;JS&nbsp;
              </span>{" "}
              and{" "}
              <span className="Homepage-Technology-Dart">&nbsp;Dart&nbsp;</span>
            </h1>
          </Fade>
        </div>
        <div className="Homepage-Sidebar">
          <div className="Homepage-Message-Div">
            <Fade delay={2300}>
              <h1 className="Homepage-Message">Click Us!</h1>
            </Fade>
          </div>
          <div className="Homepage-Icons">
            <Fade delay={2500}>
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
            <Fade delay={2500}>
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
            <Fade delay={2500}>
              <a href={Resume} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  className="Homepage-Icon"
                  icon={faScroll}
                  size="3x"
                />
              </a>
            </Fade>
            <Fade delay={2500}>
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
        </div>
      </section>
    );
  }
}

export default Homepage;
