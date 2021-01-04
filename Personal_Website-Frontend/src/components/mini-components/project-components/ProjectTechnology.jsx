import React from "react";

class ProjectTechnology extends React.Component {
  render() {
    return (
      <div className="Project-Technology-Div">
        <p className="Project-Technology">{this.props.technology}</p>
      </div>
    );
  }
}

export default ProjectTechnology;
