import React from "react";

class SkillCard extends React.Component {
  render() {
    return (
      <div className="Skills-Card">
        <h1 className="Skills-Card-Header">Frontend :</h1>
        <ul className="Skills-Frontend-Unordered-List">
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>Bootstrap</li>
          <li>Javscript</li>
          <li>jQuery</li>
          <li>React.js</li>
          <li>Flutter</li>
        </ul>
      </div>
    );
  }
}

export default SkillCard;
