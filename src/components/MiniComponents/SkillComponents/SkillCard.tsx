import React from "react";

import SkillTechnology from "./SkillTechnology";

interface ISkillCardProps {
  technologies: string[],
  path: string,
}

class SkillCard extends React.Component<ISkillCardProps, {}> {
  render() {
    const { technologies, path } = this.props;
    const skillTechnologies = technologies.map(
      (technology, index) => (
        <SkillTechnology technology={technology} key={index} />
      )
    );
    return (
      <div className="Skills-Card">
        <h1 className="Skills-Card-Header">{path} :</h1>
        <div className="Skills-Card-Holder">{skillTechnologies}</div>
      </div>
    );
  }
}

export default SkillCard;
