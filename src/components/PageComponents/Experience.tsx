import React from "react";

import Fade from "react-reveal/Fade";
import { Element } from "react-scroll";

class About extends React.Component {
  render() {
    return (
      <section className="Experience">
        <Fade left delay={500}>
          <div className="Experience-Header-Div">
            <Element name="experience">
              <h1 className="Experience-Header">Experience</h1>
            </Element>
          </div>
        </Fade>
        <Fade left delay={500}>
          <div className="Experience-Div">
            <div className="Experience-Headers">
              <h2 className="Experience-Date">May 2021 - June 2021</h2>
              <h2 className="Experience-Role">
                Software Engineering Intern @ Hardly
              </h2>
            </div>
            <ul className="Experience-Description">
              <li className="Experience-Point">
                Worked on a productivity app that prioritizes 1000's of
                notifications to improve remote work productivity
              </li>
              <li className="Experience-Point">
                Built and integrated 5+ React and ChartJS UI’s into production
                and styled them with Tailwind CSS
              </li>
              <li className="Experience-Point">
                Migrated the old Electron React and TypeScript code into the new
                React.js app and established the new local component library of
                over 7 components
              </li>
              <li className="Experience-Point">
                Devised a Tailwind styled UI in Electron for users to input
                multiple CSV datasets and dynamically displayed the
                sentiment-analyzed data, highlighting important keywords
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
                Maximized the number of points scored using the TensorFlow Lite
                model to accurately guide the robot based on the number of rings
                present on the field
              </li>
            </ul>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
