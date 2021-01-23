import React from "react";

import ProjectModal from "./ProjectModal";
import ProjectTechnology from "./ProjectTechnology";

import Fade from "react-reveal/Fade";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectPreview: false, modalShown: false };
    this.showProjectPreview = this.showProjectPreview.bind(this);
    this.removeProjectPreview = this.removeProjectPreview.bind(this);
    this.showProjectModal = this.showProjectModal.bind(this);
    this.removeProjectModal = this.removeProjectModal.bind(this);
  }
  showProjectPreview() {
    this.setState({ projectPreview: true });
  }
  removeProjectPreview() {
    this.setState({ projectPreview: false });
  }
  showProjectModal() {
    this.setState({ modalShown: true });
  }
  removeProjectModal() {
    this.setState({ modalShown: false });
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
        <div
          className="Project"
          onMouseMove={this.showProjectPreview}
          onMouseLeave={this.removeProjectPreview}
        >
          <div
            className={
              this.state.projectPreview
                ? "Project-Image-Div Project-Image-Div-Hovered"
                : "Project-Image-Div"
            }
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
                ? "Project-Information-Div Project-Information-Div-Hovered"
                : "Project-Information-Div"
            }
          >
            <h1 className="Project-Information-Name">
              {this.props.projectName}
            </h1>
            <div className={"Project-Information-Technologies"}>
              {technologyDescription}
            </div>
            <button
              className="Project-Information-Button"
              onClick={this.showProjectModal}
            >
              More Details
            </button>
          </div>
        </div>
        <div
          className={
            this.state.modalShown
              ? "Project-Modal-Visible"
              : "Project-Modal-Hidden"
          }
        >
          <ProjectModal
            projectName={this.props.projectName}
            description={this.props.description}
            technologyDescription={technologyDescription}
            technologyDescriptionModal={technologyDescriptionModal}
            projectPicture={this.props.projectPicture}
            projectUrl={this.props.projectUrl}
            githubUrl={this.props.githubUrl}
            removeProjectModal={this.removeProjectModal}
          />
        </div>
      </Fade>
    );
  }
}

export default Project;
