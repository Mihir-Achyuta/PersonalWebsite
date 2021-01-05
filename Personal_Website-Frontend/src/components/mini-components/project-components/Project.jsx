import React from "react";

import ProjectTechnology from "./ProjectTechnology";

import Fade from "react-reveal/Fade";

class Project extends React.Component {
  render() {
    const projectTechnologies = this.props.stack.map((technology, index) => (
      <ProjectTechnology technology={technology} key={index} />
    ));
    return (
      <Fade>
        <div className="Project">
          <div className="Project-Border-Top"></div>
          <div className="Project-Image-Div">
            <img
              className="Project-Image"
              src={this.props.projectPicture}
              alt="Profile Pic"
            />
          </div>
          <div className="Project-Information">
            <h1 className="Project-Information-Name">
              {this.props.projectName}
            </h1>
            <p className="Project-Information-Description">
              {this.props.description}
            </p>
            <div className="Project-Information-Tech-Stack">
              {projectTechnologies}
            </div>
            <div className="Project-Information-View">
              <a
                className="Project-Information-Live"
                href={this.props.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Site
              </a>
              <a
                className="Project-Information-Github"
                href={this.props.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Project;
