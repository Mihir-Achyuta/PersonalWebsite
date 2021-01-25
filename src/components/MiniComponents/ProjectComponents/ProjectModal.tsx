import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface IProjectModalProps { 
  projectName: string,
  description: string,
  technologyDescriptionModal: React.ReactNode,
  projectPicture: any,
  removeProjectModal: any,
  projectUrl: string,
  githubUrl:string,
}

class ProjectModal extends React.Component<IProjectModalProps, {}> {
  render() {
    const {projectName, description, technologyDescriptionModal, projectPicture, removeProjectModal, projectUrl,githubUrl } = this.props;
    return (
      <div className="Project-Modal-Contents">
        <img
          className="Project-Modal-Image"
          src={projectPicture}
          alt="Project Homepage"
        />
        <h1 className="Project-Modal-Name">{projectName}</h1>
        <p className="Project-Modal-Description">{description}</p>
        <div className="Project-Modal-Technologies">
          {technologyDescriptionModal}
        </div>
        <div className="Project-Modal-Footer">
          <button
            className="Project-Modal-Close"
            onClick={removeProjectModal}
          >
            X
          </button>
          <div>
            <a href={projectUrl} className="Project-Modal-Icon">
              <FontAwesomeIcon icon={faEye} size={"3x"} />
            </a>
            <a href={githubUrl} className="Project-Modal-Icon">
              <FontAwesomeIcon icon={faGithub} size={"3x"} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectModal;
