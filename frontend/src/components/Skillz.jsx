import React from "react";
import FrontendTool from "./Skills/FrontendTool"
import BackendTool from "./Skills/BackendTool"
import ToolTool from "./Skills/ToolTool"
import DabbedTool from "./Skills/DabbedTool"
import SkillHeader from "./Skills/SkillHeader"

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
