import React from "react";

import Fade from "react-reveal/Fade";
import { Element } from "react-scroll";

class About extends React.Component {
  render() {
    return (
      <section className="Experience">
        <Fade bottom delay={300}>
          <div className="Experience-Header-Div">
            <Element name="experience">
              <h1 className="Experience-Header">Experience</h1>
            </Element>
          </div>
        </Fade>
        <Fade bottom delay={500}>
          <div className="Experience-Div">
            <div className="Experience-Headers">
              <h2 className="Experience-Date">May 2021 - June 2021</h2>
              <h2 className="Experience-Role">
                Software Engineering Intern @ Hardly
              </h2>
            </div>
            <ul className="Experience-Description">
              <li className="Experience-Point">
                Working on a productivity app that takes incoming notifications
                and filters them to improve remote worker’s productivity.
              </li>
              <li className="Experience-Point">
                Building UI’s with React.js and styling components with the
                TailwindCSS Framework in an Electron.js desktop app.
              </li>
              <li className="Experience-Point">
                Will query data with DynamoDB with the desktop application
                connecting to AWS and built out integrations with various
                providers.
              </li>
            </ul>
          </div>
          <div className="Experience-Div">
            <div className="Experience-Headers">
              <h2 className="Experience-Date">August 2020 - April 2021</h2>
              <h2 className="Experience-Role">
                Java Programmer @ First Robotics(FTC)
              </h2>
            </div>
            <ul className="Experience-Description">
              <li className="Experience-Point">
                Educated the programming cohort using a condensed version of the
                AP Computer Science A curriculum covering introductory data
                structures and object oriented programming concepts in Java.
              </li>
              <li className="Experience-Point">
                Oversaw changes to the codebase using Git and Github and built
                the controller driven and autonomous robot code from scratch
                using the FTC Software Development Kit.
              </li>
              <li className="Experience-Point">
                Maximized the number of points scored using the default
                TensorFlow Lite model to accurately guide the robot based on the
                number of rings present on the field
              </li>
            </ul>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
