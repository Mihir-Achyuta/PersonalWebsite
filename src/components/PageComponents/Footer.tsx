import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

class Footer extends React.Component {
  render() {
    return (
      <section className="Footer">
        <p className="Footer-Origin">Made with React, TypeScript, and SASS</p>
        <div className="Footer-Right">
          <p className="Footer-Copyright">
            @2021 Mihir Achyuta. All rights reserved.
          </p>
          <div className="Footer-Icons">
            <a href="mailto::achyutamihir@gmail.com">
              <FontAwesomeIcon className="Footer-Icon" icon={faEnvelope} />
            </a>
            {/* <a href="https://linkedin.com/in/mihirachyuta">
              <FontAwesomeIcon className="Footer-Icon" icon={faLinkedin} />
            </a> */}
            <a href="https://github.com/Mihir-Achyuta">
              <FontAwesomeIcon className="Footer-Icon" icon={faGithubSquare} />
            </a>
            <a href="">
              <FontAwesomeIcon className="Footer-Icon" icon={faPaperPlane} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Footer;
