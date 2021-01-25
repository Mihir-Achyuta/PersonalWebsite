import React from "react";

interface IProjectTechnologyProps { 
  technology: string,
}

class ProjectTechnology extends React.Component<IProjectTechnologyProps, {}> {
  render() {
    return (
      <div className="Project-Technology-Div">
        <p className="Project-Technology">{this.props.technology}</p>
      </div>
    );
  }
}

export default ProjectTechnology;
