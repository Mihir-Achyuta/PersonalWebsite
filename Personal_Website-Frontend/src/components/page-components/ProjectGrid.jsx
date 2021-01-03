import React from "react";

class ProjectGrid extends React.Component {
  render() {
    return (
      <div className="Project-Grid">
        <img
          className="Project-Grid-Photo"
          src="https://picsum.photos/300/300"
        ></img>
        <img
          className="Project-Grid-Photo"
          src="https://picsum.photos/300/300"
        ></img>
        <img
          className="Project-Grid-Photo"
          src="https://picsum.photos/300/300"
        ></img>
        <img
          className="Project-Grid-Photo"
          src="https://picsum.photos/300/300"
        ></img>
      </div>
    );
  }
}

export default ProjectGrid;
