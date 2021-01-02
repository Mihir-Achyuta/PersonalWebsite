import React from "react";

class SkillWord extends React.Component {
  render() {
    return (
      <div className="Skill-Word-Div">
        <p className="Skill-Word">{this.props.word}</p>
      </div>
    );
  }
}

export default SkillWord;
