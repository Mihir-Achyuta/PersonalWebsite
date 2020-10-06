import React from "react";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

class About extends React.Component {
  render() {
    return (
      <section className="About">
        <Fade left delay={500}>
          <div className="About-Header-Div">
            <h1 className="About-Header">Who am I :</h1>
          </div>
        </Fade>
        <Fade left delay={1000}>
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
            offset={0}
            duration={500}
            onSetActive={this.handleSetActive}
          >
            <Bounce left delay={1500}>
              <button className="About-Technology-Button">
                WHAT TECH DO I WORK WITH?
              </button>
            </Bounce>
          </Link>
        </div>
      </section>
    );
  }
}

export default About;
