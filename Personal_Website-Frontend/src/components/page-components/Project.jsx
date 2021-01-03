import React from "react";

class Project extends React.Component {
  render() {
    return (
      <div className="Project">
        <div className="Project-Image">
          <img
            src={this.props.projectPicture}
            alt="Profile Pic"
            width={300}
            height={200}
          />
        </div>
        <div className="Project-Information">
          <div className="Project-Information-Introduction">
            <h1>{this.props.projectName}</h1>
            <div className="Project-Information-Tech-Stack"></div>
          </div>
          <h2>{this.props.description}</h2>
        </div>
      </div>
    );
  }
}

export default Project;
