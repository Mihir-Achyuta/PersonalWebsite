import React from "react";

interface ISkillTechnologyProps { 
  technology: string,
}

class SkillTechnology extends React.Component<ISkillTechnologyProps, {}> {
  render() {
    const { technology } = this.props;
    return (
      <div className="Skill-Technology-Div">
        <p className="Skill-Technology">{technology}</p>
      </div>
    );
  }
}

export default SkillTechnology;
