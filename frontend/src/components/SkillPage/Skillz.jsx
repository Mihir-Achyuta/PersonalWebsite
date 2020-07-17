import React from "react";
import FrontendTool from "./FrontendTool"
import BackendTool from "./BackendTool"
import ToolTool from "./ToolTool"
import DabbedTool from "./DabbedTool"
import SkillHeader from "./SkillHeader"
import "./Skills.css"

function Skillz(){
  return(
    <div>
      <SkillHeader/>
      <FrontendTool/>
      <BackendTool/>
      <ToolTool/>
      <DabbedTool/>
    </div>
  );
}

export default Skillz;
