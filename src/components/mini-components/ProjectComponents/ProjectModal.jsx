import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

class ProjectModal extends React.Component {
  render() {
    return (
      <div className="Project-Modal-Contents">
        <img
          className="Project-Modal-Image"
          src={this.props.projectPicture}
          alt="Project Homepage"
        />
        <h1 className="Project-Modal-Name">{this.props.projectName}</h1>
        <p className="Project-Modal-Description">{this.props.description}</p>
        <div className="Project-Modal-Technologies">
          {this.props.technologyDescriptionModal}
        </div>
        <div className="Project-Modal-Footer">
          <button
            className="Project-Modal-Close"
            onClick={this.props.removeProjectModal}
          >
            X
          </button>
          <div>
            <a href={this.props.projectUrl} className="Project-Modal-Icon">
              <FontAwesomeIcon icon={faEye} size={"3x"} />
            </a>
            <a href={this.props.githubUrl} className="Project-Modal-Icon">
              <FontAwesomeIcon icon={faGithub} size={"3x"} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectModal;
