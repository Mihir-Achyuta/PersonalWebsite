import React from "react";

import ProfilePic from "../../documents/pictures/profile-image.png";

import Fade from "react-reveal/Fade";
import { Element } from "react-scroll";

class About extends React.Component {
  render() {
    return (
      <section className="About">
        <Fade bottom delay={300}>
          <div className="About-Header-Div">
            <Element name="about">
              <h1 className="About-Header">Who am I?</h1>
            </Element>
          </div>
        </Fade>
        <Fade bottom delay={500}>
          <div className="About-Statement-Div">
            <div className="About-Picture-Div">
              <img
                className="About-Picture"
                src={ProfilePic}
                alt="Profile Pic"
              />
              <p className="About-Name">Mihir Achyuta</p>
            </div>
            <div className="About-Description-Div">
              <p className="About-Description">
                Greetings I'm Mihir. I'm an incoming freshman at Lorum Ipsum
                University majoring in Computer Science. I started programming
                junior year of high school in Java and transitioned into
                Full-Stack Javascript for Web/Mobile Applications with my
                favorite Tech Stack being MERN. When I'm not programming, I'm
                playing rpg videogames such as the Witcher and Cyberpunk.
              </p>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
