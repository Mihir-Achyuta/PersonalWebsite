import React from "react";

class ProjectModal extends React.Component {
  render() {
    return (
      <div className="Project-Modal-Contents">
        <div className="Project-Modal-Image">
          <img
            src={this.props.projectPicture}
            alt="Project Homepage"
            width="300"
            height="200"
          />
        </div>
        <h1 className="Project-Modal-Name">{this.props.projectName}</h1>
        <p className="Project-Modal-Description">{this.props.description}</p>
        <div className="Project-Modal-Technologies">
          {this.props.technologyDescription}
        </div>
        <div className="Project-Modal-Icons">
          <a href={this.props.projectUrl}>View Site</a>
          <a href={this.props.githubUrl}>Github Repository</a>
        </div>
        <button onClick={this.props.removeProjectModal}>Close Modal</button>
      </div>
    );
  }
}

export default ProjectModal;
