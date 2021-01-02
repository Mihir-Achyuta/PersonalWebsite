import React from "react";

import Fade from "react-reveal/Fade";

class Skills extends React.Component {
  render() {
    return (
      <section className="Skills">
        <Fade left>
          <h1 className="Skills-Header">What I Work With :</h1>
        </Fade>
        <div className="Front-Back-Tool">
          <Fade>
            <div className="Skills-Frontend Skills-Card">
              <h1 className="Skills-Frontend-Header Skills-Card-Header">
                Frontend :
              </h1>
              <ul className="Skills-Frontend-Unordered-List">
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Bootstrap</li>
                <li>Javscript</li>
                <li>jQuery</li>
                <li>React.js</li>
                <li>Flutter</li>
              </ul>
            </div>
          </Fade>
          <Fade>
            <div className="Skills-Backend Skills-Card">
              <h1 className="Skills-Backend-Header Skills-Card-Header">
                Backend :
              </h1>
              <ul className="Skills-Backend-Unordered-List">
                <li>Node.js</li>
                <li>Aqueduct</li>
                <li>Express.js</li>
                <li>EJS</li>
                <li>PostgresSQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Passport.js + OAuth</li>
                <li>REST</li>
              </ul>
            </div>
          </Fade>
          <Fade>
            <div className="Skills-Tools Skills-Card">
              <h1 className="Skills-Tools-Header Skills-Card-Header">
                Tools :
              </h1>
              <ul className="Skills-Tools-Unordered-List">
                <li>Git/Git-Bash</li>
                <li>Github</li>
                <li>Hyper</li>
                <li>Atom</li>
                <li>MongoDB Atlas</li>
              </ul>
            </div>
          </Fade>
        </div>
      </section>
    );
  }
}

export default Skills;
