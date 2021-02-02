import React from "react";

import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faScroll } from "@fortawesome/free-solid-svg-icons";

class Homepage extends React.Component {
  render() {
    return (
      <section className="Homepage">
        <div className="Homepage-Text-Div">
          <Fade bottom delay={900}>
            <p className="Homepage-Greeting Homepage-Grid">
              Hey!
              <span role="img" aria-label="wave">
                👋
              </span>
            </p>
          </Fade>
          <Fade bottom delay={950}>
            <h1 className="Homepage-Name Homepage-Grid">
              <span>
                I<span className="Homepage-Name-Secondary-Color">'</span>m‎
                <span className="Homepage-Name-PopOut">&nbsp;Mihir</span>
                <span className="Homepage-Name-Secondary-Color">.</span>
              </span>
            </h1>
          </Fade>
          <Fade bottom delay={1000}>
            <h1 className="Homepage-Description Homepage-Grid">
              <span className="Homepage-Description-Dev">
                <span className="Homepage-Description-Dev-Stack">
                  Full-Stack
                </span>{" "}
                Dev
              </span>
            </h1>
          </Fade>
          <Fade bottom delay={1050}>
            <h1 className="Homepage-Technology Homepage-Grid Homepage-Technology-Header">
              In{" "}
              <span className="Homepage-Technology-Javascript">
                &nbsp;Javascript&nbsp;
              </span>{" "}
            </h1>
          </Fade>
        </div>
        <div className="Homepage-Sidebar">
          <Fade bottom delay={1500}>
            <div className="Homepage-Message-Div">
              <h1 className="Homepage-Message">Click Us!</h1>
            </div>
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
              <a href="/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  className="Homepage-Icon"
                  icon={faLinkedin}
                  size="3x"
                />
              </a>
              <a href={"/"} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  className="Homepage-Icon"
                  icon={faScroll}
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
