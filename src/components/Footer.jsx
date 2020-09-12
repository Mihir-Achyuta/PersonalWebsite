import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <section className="Footer">
        <p>Made by ©Mihir-Achyuta</p>
        <FontAwesomeIcon
          className="Footer-Icon"
          icon={faGithubSquare}
          size="2x"
        />
        <FontAwesomeIcon className="Footer-Icon" icon={faLinkedin} size="2x" />
        <FontAwesomeIcon className="Footer-Icon" icon={faFile} size="2x" />
        <FontAwesomeIcon className="Footer-Icon" icon={faEnvelope} size="2x" />
      </section>
    );
  }
}

export default Footer;
