import React from "react";

interface IProjectProps {
  projectName: string;
  description: string;
  stack: string[];
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
      <div className="Project">
        <h2 className="Project-Title">{this.props.projectName}</h2>
        <div className="Project-Tech">{technologyDescription}</div>
        <p className="Project-Description">{this.props.description}</p>
        <div className="Project-Links">
          <a
            href={this.props.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Repository
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
