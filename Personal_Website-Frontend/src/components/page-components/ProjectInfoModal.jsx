import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

class ProjectInfoModal extends React.Component {
  render() {
    return (
      <section className="ProjectInfoModal">
        <Fade left={this.props.fadeLeft} right={!this.props.fadeLeft}>
          <h1 className="ProjectInfoModal-Name">{this.props.projectName}</h1>
          <div className="ProjectInfoModal-Div">
            <div className="ProjectInfoModal-Text">
              <div className="ProjectInfoModal-Description-Div">
                <h2 className="ProjectInfoModal-Description-Header">
                  Description:
                </h2>
                <p className="ProjectInfoModal-Description-Text">
                  {this.props.description}
                </p>
              </div>
              <div className="ProjectInfoModal-Stack-Div">
                <h2 className="ProjectInfoModal-Stack-Header">Tech Stack:</h2>
                <p className="ProjectInfoModal-Stack-Text">
                  {this.props.stack}
                </p>
              </div>
            </div>
            <div className="ProjectInfoModal-Images">
              <div className="ProjectInfoModal-Image">
                <img src={this.props.imgUrl} alt="Project"></img>
              </div>
              <div className="ProjectInfoModal-Icons">
                <a
                  href="https://github.com/Mihir-Achyuta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    className="ProjectInfoModal-Icon"
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
                    className="ProjectInfoModal-Icon"
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

export default ProjectInfoModal;
