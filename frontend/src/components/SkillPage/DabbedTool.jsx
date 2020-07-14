import React from "react";
import Arrow from "./down.svg";

function DabbedTool(){
  return(
    <div>
      <div class = "DabbedThings">
        <h2>Things I've Dabbed In</h2>
        <p>Java</p>
        <p>Python</p>
      </div>
      <img src = {Arrow}></img>
    </div>
  );
}

export default DabbedTool;
