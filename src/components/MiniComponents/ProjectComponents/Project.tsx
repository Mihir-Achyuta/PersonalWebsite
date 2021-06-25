import React from "react";

import Fade from "react-reveal/Fade";

interface IProjectProps {
  projectName: string;
  description: string;
  stack: string[];
  projectUrl: string;
  githubUrl: string;
}

interface IProjectState {
  projectPreview: boolean;
  modalShown: boolean;
}

class Project extends React.Component<IProjectProps, IProjectState> {
  render() {
    const technologyDescription = this.props.stack.map((technology, index) => (
      <p key={index}>{technology}</p>
    ));
    return (
      <Fade>
        <div className="Project">
          <h2 className="Project-Title">{this.props.projectName}</h2>
          <div className="Project-Tech">{technologyDescription}</div>
          <p className="Project-Description">{this.props.description}</p>
          <div className="Project-Links">
            <a href={this.props.projectUrl}>Website</a>
            <a href={this.props.githubUrl}>Github Repository</a>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Project;
