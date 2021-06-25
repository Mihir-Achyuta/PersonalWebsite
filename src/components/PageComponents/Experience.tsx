import React from "react";

import Fade from "react-reveal/Fade";
import { Element } from "react-scroll";

class About extends React.Component {
  render() {
    return (
      <section className="About">
        <Fade bottom delay={300}>
          <div className="About-Header-Div">
            <Element name="about">
              <h1 className="About-Header">Experience</h1>
            </Element>
          </div>
        </Fade>
        <Fade bottom delay={500}>
          <div className="Experience-Div">
            <div className="Experience-Headers">
              <h2 className="Experience-Date">May 2021 - June 2021 —</h2>
              <h2 className="Experience-Role">
                Software Engineering Intern @ Hardly
              </h2>
            </div>
            <p className="Experience-Description">
              Working on a productivity app that takes incoming notifications
              and filters them to improve remote worker’s productivity. Built
              UI’s with React.js and styled components with the TailwindCSS
              Framework in an Electron.js desktop app. Queried data with
              DynamoDB with the web application connecting to AWS and built out
              integrations with Gmail.
            </p>
          </div>
          <div className="Experience-Div">
            <div className="Experience-Headers">
              <h2 className="Experience-Date">August 2020 - April 2021 —</h2>
              <h2 className="Experience-Role">
                Java Programmer @ First Robotics(FTC)
              </h2>
            </div>
            <p className="Experience-Description">
              Maximized the number of points scored using the default TensorFlow
              Lite model to accurately guide the robot based on the number of
              rings present on the field
            </p>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
