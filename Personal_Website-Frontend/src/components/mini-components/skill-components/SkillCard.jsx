import React from "react";

import SkillWord from "./SkillWord";

class SkillCard extends React.Component {
  render() {
    const skillWords = this.props.technologies.map((technology, index) => (
      <SkillWord word={technology} key={index} />
    ));
    return (
      <div className="Skills-Card">
        <h1 className="Skills-Card-Header">{this.props.path} :</h1>
        <div className="Skills-Card-Holder">{skillWords}</div>
      </div>
    );
  }
}

export default SkillCard;
