import React from "react";

import ProjectModal from "./ProjectModal";
import ProjectTechnology from "./ProjectTechnology";

import Fade from "react-reveal/Fade";

interface IProjectProps {
  projectName: string;
  description: string;
  stack: string[];
  projectPicture: any;
  projectUrl: string;
  githubUrl: string;
}

interface IProjectState {
  projectPreview: boolean;
  modalShown: boolean;
}

class Project extends React.Component<IProjectProps, IProjectState> {
  constructor(props) {
    super(props);
  }
  render() {
    const technologyDescription = this.props.stack.map((technology, index) => (
      <p key={index}>{technology}</p>
    ));
    const technologyDescriptionModal = this.props.stack.map(
      (technology, index) => (
        <ProjectTechnology key={index} technology={technology} />
      )
    );
    return (
      <Fade>
        <div className="Project">
          <h2 className="Project-Title">{this.props.projectName}</h2>
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
