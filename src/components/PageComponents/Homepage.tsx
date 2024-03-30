/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

//@ts-ignore
import resume from "../../documents/resume/resume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

class Homepage extends React.Component {
    render() {
        return (
            <section className="Homepage">
                <div className="Homepage-Text-Div">
                    <h1 className="Homepage-Greeting Homepage-Grid">
                        Hey 👋 I'm Mihir !
                    </h1>
                    <h3 className="Homepage-Description Homepage-Grid">
                        Software Engineering Intern @ Ziprecruiter, Facebook &
                        Rippling & Computer Science Student @ UW Madison
                    </h3>
                    <h1 className="Homepage-Technology Homepage-Grid">
                        I like JavaScript and C++
                    </h1>
                </div>
                <div className="Homepage-Sidebar">
                    <div className="Homepage-Icons">
                        <a
                            href="https://github.com/Mihir-Achyuta"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                className="Homepage-Icon"
                                icon={faGithubSquare}
                                size="3x"
                            />
                        </a>
                        {/* <a href="/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                className="Homepage-Icon"
                icon={faLinkedin}
                size="3x"
              />
            </a> */}
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                className="Homepage-Icon"
                                icon={faPaperPlane}
                                size="3x"
                            />
                        </a>
                        <a
                            href="mailto:achyutamihir@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon
                                className="Homepage-Icon"
                                icon={faEnvelope}
                                size="3x"
                            />
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Homepage;
