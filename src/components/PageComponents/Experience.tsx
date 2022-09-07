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
              <h2 className="Experience-Date">
                September 2022 - December 2022
              </h2>
              <h2 className="Experience-Role">
                Software Engineering Intern @ Rippling
              </h2>
            </div>
            <ul className="Experience-Description">
              <li className="Experience-Point">
                Will be working to build an all-in-one Unified Workforce
                Platform combining HR and IT Software and Operations
              </li>
              <li className="Experience-Point">
                Will be developing in Typescript and React on the frontend and
                Python and Django on the backend
              </li>
            </ul>
          </div>
          <div className="Experience-Div">
            <div className="Experience-Headers">
              <h2 className="Experience-Date">May 2022 - August 2022</h2>
              <h2 className="Experience-Role">
                Software Engineering Intern @ Facebook
              </h2>
            </div>
            <ul className="Experience-Description">
              <li className="Experience-Point">
                Worked with Rust Systems and Javascript on Hallmark, a policy
                engine and metadata store ensuring an end-to-end verifiable
                software supply chain, tracking and auditing artifacts through
                Facebook’s Dev Infra Org
              </li>
              <li className="Experience-Point">
                Engineered a time based explain feature to help debug
                dynamically changing artifact property evaluations affecting 25+
                million artifacts and the validation of 5+ billion references
                with the help of Apache Thrift endpoints
              </li>
              <li className="Experience-Point">
                Converted Hallmark’s 1D Directed Acyclic Graph to allow queries
                of overlayed transform groups and graphs, making clearthe
                relationship between artifacts in the build process along with
                finding theirtransitive closure
              </li>
              <li className="Experience-Point">
                Plotted the generalized transform group graph, tracking
                genericized paths of common artifacts, in a React.js Web UI,
                allowing parts of the graph to be collapsible and expandable on
                demand
              </li>
            </ul>
          </div>
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
