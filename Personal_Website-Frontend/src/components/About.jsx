import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

class About extends React.Component {
  render() {
    return (
      <section className="About">
        <Fade>
          <div className="About-Header-Div">
            <h1 className="About-Header">Who am I :</h1>
          </div>
          <div className="About-Statement-Div">
            <p className="About-Statement">
              I'm a senior attending Evergreen Valley High School that is
              planning to major in Computer Science in college. I started
              programming junior year and chose the web development path since I
              briefly dabbed in HTML and CSS years ago. Since then I've been
              developing with Fullstack Javascript with the MERN stack.
            </p>
          </div>
        </Fade>

        <div className="About-Technology-Button-Div">
          <Link
            activeClass="active"
            to={"skills"}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <button className="About-Technology-Button">
              WHAT TECH DO I WORK WITH?
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

export default About;
