import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-scroll";

class Homepage extends React.Component {
  render() {
    return (
      <section className="Homepage">
        <div className="Homepage-Text-Div">
          <Fade delay={2000} left>
            <h1 className="Homepage-Greeting Homepage-Grid">Hi,</h1>
          </Fade>
          <Fade delay={4000} right>
            <h2 className="Homepage-Description Homepage-Grid">
              A Fullstack Developer
            </h2>
          </Fade>
          <Fade delay={3000} left>
            <h1 className="Homepage-Name Homepage-Grid">I'm Mihir</h1>
          </Fade>
          <Fade delay={5000} bottom>
            <p className="Homepage-Technology Homepage-Grid">(In Javascript)</p>
          </Fade>
        </div>
        <div className="Homepage-Icons">
          <Fade top big delay={6000}>
            <a href="">
              <FontAwesomeIcon
                className="Homepage-Icon"
                icon={faGithubSquare}
                size="3x"
              />
            </a>
          </Fade>
          <Fade top big delay={6300}>
            <a href="">
              <FontAwesomeIcon
                className="Homepage-Icon"
                icon={faLinkedin}
                size="3x"
              />
            </a>
          </Fade>
          <Fade top big delay={6600}>
            <a href="">
              <FontAwesomeIcon
                className="Homepage-Icon"
                icon={faFile}
                size="3x"
              />
            </a>
          </Fade>
          <Fade top big delay={6900}>
            <a href="">
              <FontAwesomeIcon
                className="Homepage-Icon"
                icon={faEnvelope}
                size="3x"
              />
            </a>
          </Fade>
        </div>
        <Bounce bottom big delay={7500}>
          <Link
            activeClass="active"
            to={"about"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <div className="Homepage-Identification-Div">
              <button className="Homepage-Identification-Button">
                WHO AM I?
              </button>
            </div>
          </Link>
        </Bounce>
      </section>
    );
  }
}

export default Homepage;
