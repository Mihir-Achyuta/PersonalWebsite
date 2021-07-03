import React from "react";

//@ts-ignore
import resume from "../../documents/resume/resume.pdf";

import Fade from "react-reveal/Fade";

class Contact extends React.Component {
  render() {
    return (
      <Fade>
        <section className="Contact">
          <Fade left delay={200}>
            <h1 className="Contact-Header">Contact Me</h1>
          </Fade>
          <div className="Contact-Row">
            <Fade delay={500}>
              <div className="Contact-Method">
                <h2>Email</h2>
                <a href="mailto::achyutamihir@gmail.com">
                  achyutamihir@gmail.com
                </a>
              </div>
            </Fade>
            {/* <div className="Contact-Method">
              <h2>LinkedIn</h2>
              <a
                href="https://linkedin.com/in/mihirachyuta"
                target="_blank"
                rel="noopener noreferrer"
              >
                /mihirachyuta
              </a>
            </div> */}
          </div>
          <div className="Contact-Row">
            <Fade delay={800}>
              <div className="Contact-Method">
                <h2>Github</h2>
                <a
                  href="https://github.com/Mihir-Achyuta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  /mihir-achyuta
                </a>
              </div>
            </Fade>
            <Fade delay={1100}>
              <div className="Contact-Method">
                <h2>Resume</h2>
                <a href={resume} target="_blank" rel="noopener noreferrer">
                  resume
                </a>
              </div>
            </Fade>
          </div>
        </section>
      </Fade>
    );
  }
}

export default Contact;
