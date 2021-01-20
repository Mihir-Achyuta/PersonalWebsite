import React from "react";

import SkillTechnology from "./SkillTechnology";

class SkillCard extends React.Component {
  render() {
    const SkillTechnologies = this.props.technologies.map(
      (technology, index) => (
        <SkillTechnology technology={technology} key={index} />
      )
    );
    return (
      <div className="Skills-Card">
        <h1 className="Skills-Card-Header">{this.props.path} :</h1>
        <div className="Skills-Card-Holder">{SkillTechnologies}</div>
      </div>
    );
  }
}

export default SkillCard;
