import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

class Project extends React.Component {
  render() {
    return (
      <section className="Project">
        <Fade left={this.props.fadeLeft} right={!this.props.fadeLeft}>
          <h1 className="Project-Name">{this.props.projectName}</h1>
          <div className="Project-Div">
            <div className="Project-Text">
              <div className="Project-Description-Div">
                <h2 className="Project-Description-Header">Description:</h2>
                <p className="Project-Description-Text">
                  {this.props.description}
                </p>
              </div>
              <div className="Project-Stack-Div">
                <h2 className="Project-Stack-Header">Tech Stack:</h2>
                <p className="Project-Stack-Text">{this.props.stack}</p>
              </div>
            </div>
            <div className="Project-Images">
              <div className="Project-Image">
                <img src={this.props.imgUrl} alt="Project"></img>
              </div>
              <div className="Project-Icons">
                <a
                  href="https://github.com/Mihir-Achyuta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="Project-Icon"
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
                    className="Project-Icon"
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
