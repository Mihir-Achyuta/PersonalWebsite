import React from "react";

import Bounce from "react-reveal/Bounce";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

import Resume from "../../documents/resume/resume.pdf";

class Footer extends React.Component {
  render() {
    return (
      <section className="Footer">
        <Bounce right>
          <p>Made by ©Mihir-Achyuta</p>
          <a
            href="https://github.com/Mihir-Achyuta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="Footer-Icon"
              icon={faGithubSquare}
              size="2x"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mihirachyuta/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="Footer-Icon"
              icon={faLinkedin}
              size="2x"
            />
          </a>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className="Footer-Icon" icon={faFile} size="2x" />
          </a>
          <a
            href="mailto:achyutamihir@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="Footer-Icon"
              icon={faEnvelope}
              size="2x"
            />
          </a>
        </Bounce>
      </section>
    );
  }
}

export default Footer;
