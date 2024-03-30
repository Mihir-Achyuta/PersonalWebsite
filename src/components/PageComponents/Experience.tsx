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
                May 2023 - August 2023
              </h2>
              <h2 className="Experience-Role">
                Software Engineering Intern @ ZipRecruiter
              </h2>
            </div>
            <ul className="Experience-Description">
              <li className="Experience-Point">
              Revamped candidate experience by styling Project components, optimizing redundant modals in Candidate
Sourcing, and overhauling Messaging Service in React and Styled Components for Proactive Sourcing
              </li>
              <li className="Experience-Point">
              Engineered Decipher, a Workflow Integration, that swiftly translates acronym-filled sentences from minutes
to seconds from scratch available via a Command Line Interface and a Slack Bot
              </li>
              <li className="Experience-Point">
              Deployed company-wide tool to scan and parse thousands of Slack messages and internal sites, enabling
translation and querying of hundreds of acronyms through DynamoDB
              </li>
              <li className="Experience-Point">
              Implemented Cloudflare GSuite SSO integration in the Node and Express server, enabling seamless
authentication for thousands of users
              </li>
            </ul>
          </div>
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
              Worked on the Time and Attendance team, allowing fast automated tracking of over 5 billion employee
hours, clock-ins, payrolls, and schedules on any device
              </li>
              <li className="Experience-Point">
              Built out a forward-looking projection of accruals and caps for multiple leave policies for administrators
resulting in 30% less support calls and saving over 10k accrual hours into a component library in React
              </li>
              <li className="Experience-Point">
              Developed policy creation UI’s with Typescript and with styled SASS components to show impacts of accrual
selections over an incremental period of months or years
              </li>
              <li className="Experience-Point">
              Spearheaded first extendable policy preview component library from scratch and created RESTful API’s in
Django with MongoDB models overseeing thousands of employees and administrators
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
        </Fade>
      </section>
    );
  }
}

export default About;
