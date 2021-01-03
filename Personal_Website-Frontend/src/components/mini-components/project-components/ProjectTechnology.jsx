import React from "react";

class ProjectStack extends React.Component {
  render() {
    return (
      <div className="Project-Technology-Div">
        <p className="Project-Technology">{this.props.technology}</p>
      </div>
    );
  }
}
