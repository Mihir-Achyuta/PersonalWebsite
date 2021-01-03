import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

class Project extends React.Component {
  render() {
    return (
      <section className="Projects">
        <Fade left={this.props.fadeLeft} right={!this.props.fadeLeft}>
          <h1 className="Projects-One-Name">{this.props.projectName}</h1>
          <div className="Projects-One-Div">
            <div className="Projects-One-Text">
              <div className="Projects-One-Description-Div">
                <h2 className="Projects-One-Description-Header">
                  Description:
                </h2>
                <p className="Projects-One-Description-Text">
                  {this.props.description}
                </p>
              </div>
              <div className="Projects-One-Stack-Div">
                <h2 className="Projects-One-Stack-Header">Tech Stack:</h2>
                <p className="Projects-One-Stack-Text">{this.props.stack}</p>
              </div>
            </div>
            <div className="Projects-One-Images">
              <div className="Projects-One-Image">
                <img src={this.props.imgUrl} alt="Project"></img>
              </div>
              <div className="Projects-One-Icons">
                <a
                  href="https://github.com/Mihir-Achyuta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="Projects-One-Icon"
                    icon={faGithub}
                    size="2x"
                  />
                </a>
                <a
                  href={this.props.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    color={"#84a7bd"}
                    className="Projects-One-Icon"
                    icon={faEye}
                    size="2x"
                  />
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Project;
