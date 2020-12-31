import React from "react";

import ProfilePic from "../../documents/pictures/profile-image.png";

import Fade from "react-reveal/Fade";

import { Element } from "react-scroll";

class About extends React.Component {
  render() {
    return (
      <section className="About">
        <Fade left delay={500}>
          <div className="About-Header-Div">
            <Element name="about">
              <h1 className="About-Header">Who am I?</h1>
            </Element>
          </div>
        </Fade>
        <Fade left delay={1000}>
          <div className="About-Statement-Div">
            <img className="About-Picture" src={ProfilePic} alt="Profile Pic" />
            <p className="About-Statement">
              I'm a senior attending Evergreen Valley High School that is
              planning to major in Computer Science in college. I started
              programming junior year and chose the web development path since I
              briefly dabbed in HTML and CSS years ago. Since then I've been
              developing with Fullstack Javascript with the MERN stack.
            </p>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
