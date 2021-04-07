import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import Fade from "react-reveal/Fade";

class Footer extends React.Component {
  render() {
    return (
      <section className="Footer">
        <Fade>
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
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              className="Footer-Icon"
              icon={faLinkedin}
              size="2x"
            />
          </a>
          <a href={"/"} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              className="Footer-Icon"
              icon={faPaperPlane}
              size="2x"
            />
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
          <p className="Footer-Copyright">
            Copyright ©2021 | Built by @Mihir-Achyuta
          </p>
        </Fade>
      </section>
    );
  }
}

export default Footer;
