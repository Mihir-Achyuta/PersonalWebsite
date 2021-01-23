import React from "react";

class SkillTechnology extends React.Component {
  render() {
    return (
      <div className="Skill-Technology-Div">
        <p className="Skill-Technology">{this.props.technology}</p>
      </div>
    );
  }
}

export default SkillTechnology;
