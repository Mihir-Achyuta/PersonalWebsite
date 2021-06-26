import React from "react";

import Fade from "react-reveal/Fade";

class Contact extends React.Component {
  render() {
    return (
      <Fade>
        <section className="Contact">
          <h1 className="Contact-Header">Contact Me</h1>
          <div className="Contact-Row">
            <div className="Contact-Method">
              <h2>Email</h2>
              <a href="mailto::achyutamihir@gmail.com">
                achyutamihir@gmail.com
              </a>
            </div>
            <div className="Contact-Method">
              <h2>LinkedIn</h2>
              <a href="https://linkedin.com/in/mihirachyuta">/mihirachyuta</a>
            </div>
          </div>
          <div className="Contact-Row">
            <div className="Contact-Method">
              <h2>Github</h2>
              <a href="https://github.com/Mihir-Achyuta">/mihir-achyuta</a>
            </div>
            <div className="Contact-Method">
              <h2>Resume</h2>
              <a href="">resume</a>
            </div>
          </div>
        </section>
      </Fade>
    );
  }
}

export default Contact;
