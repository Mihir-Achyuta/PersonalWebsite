import React from "react";

import ProjectTechnology from "./ProjectTechnology";

import Fade from "react-reveal/Fade";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectPreview: false };
    this.showProjectPreview = this.showProjectPreview.bind(this);
    this.removeProjectPreview = this.removeProjectPreview.bind(this);
  }
  showProjectPreview() {
    this.setState({ projectPreview: true });
  }
  removeProjectPreview() {
    this.setState({ projectPreview: false });
  }
  render() {
    const technologyDescription = this.props.stack.map((technology, index) => (
      <p key={index}>{technology}</p>
    ));
    return (
      <Fade>
        <div className="Project">
          <div
            className={
              this.state.projectPreview
                ? "Project-Image-Div-Hovered"
                : "Project-Image-Div"
            }
            onMouseEnter={this.showProjectPreview}
            onMouseOut={this.removeProjectPreview}
          >
            <img
              className="Project-Image"
              src={this.props.projectPicture}
              alt="Profile Pic"
            />
          </div>
          <div
            className={
              this.state.projectPreview
                ? "Project-Information-Div-Hovered"
                : "Project-Information-Div"
            }
          >
            <h1 className="Project-Information-Name">
              {this.props.projectName}
            </h1>
            <div className={"Project-Information-Technologies"}>
              {technologyDescription}
            </div>
            <button className="Project-Information-Button">More Details</button>
          </div>
        </div>
      </Fade>
    );
  }
}

export default Project;
