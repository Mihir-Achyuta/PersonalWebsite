import React from "react";

import ProjectTechnology from "./ProjectTechnology";

import Fade from "react-reveal/Fade";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectPreview: false };
  }
  render() {
    return (
      <Fade>
        <div className="Project">
          <div className="Project-Image-Div">
            <img
              className="Project-Image"
              src={this.props.projectPicture}
              alt="Profile Pic"
            />
          </div>
          <div className="Project-Information-Div">
            <h1>{this.props.projectName}</h1>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Project;
