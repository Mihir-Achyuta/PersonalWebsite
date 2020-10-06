import React from "react";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

class Skills extends React.Component {
  render() {
    return (
      <section className="Skills">
        <Fade left>
          {" "}
          <h1 className="Skills-Header">What I Work With :</h1>
        </Fade>
        <div className="Front-Back-Tool">
          <Fade top cascade>
            <div className="Skills-Frontend">
              <h1 className="Skills-Frontend-Header">Frontend :</h1>
              <ul className="Skills-Frontend-Unordered-List">
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Bootstrap</li>
                <li>Javscript</li>
                <li>jQuery</li>
                <li>React.js</li>
              </ul>
            </div>
          </Fade>
          <Fade top cascade>
            <div className="Skills-Backend">
              <h1 className="Skills-Backend-Header">Backend :</h1>
              <ul className="Skills-Backend-Unordered-List">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>EJS</li>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Passport.js + OAuth</li>
                <li>REST</li>
              </ul>
            </div>
          </Fade>
          <Fade top cascade>
            <div className="Skills-Tools">
              <h1 className="Skills-Tools-Header">Tools :</h1>
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
        <Bounce delay={1000}>
          <Link
            activeClass="active"
            to={"projects"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            {" "}
            <div className="Skills-Projects-Button-Div">
              <button className="Skills-Projects-Button">
                WHAT HAVE I WORKED ON?
              </button>
            </div>
          </Link>
        </Bounce>
      </section>
    );
  }
}

export default Skills;
