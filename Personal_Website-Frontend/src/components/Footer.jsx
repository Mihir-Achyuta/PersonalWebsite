import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import Bounce from "react-reveal/Bounce";

class Footer extends React.Component {
  render() {
    return (
      <section className="Footer">
        <Bounce right>
          <p>Made by ©Mihir-Achyuta</p>
          <a href="">
            <FontAwesomeIcon
              className="Footer-Icon"
              icon={faGithubSquare}
              size="2x"
              color="#84a7bd"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              className="Footer-Icon"
              icon={faLinkedin}
              size="2x"
              color="#84a7bd"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              className="Footer-Icon"
              icon={faFile}
              size="2x"
              color="#84a7bd"
            />
          </a>
          <a href="">
            <FontAwesomeIcon
              className="Footer-Icon"
              icon={faEnvelope}
              size="2x"
              color="#84a7bd"
            />
          </a>
        </Bounce>
      </section>
    );
  }
}

export default Footer;
