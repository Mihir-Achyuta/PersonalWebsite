import React from "react";

class ProjectModal extends React.Component {
  render() {
    return (
      <div>
        <h1 className="Project-Modal-Name">Project Name</h1>
        <button onClick={this.props.removeProjectModal}>Close Modal</button>
      </div>
    );
  }
}

export default ProjectModal;
