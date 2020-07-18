import React from "react";
import Arrow from "./down.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava } from '@fortawesome/free-brands-svg-icons'
import { faPython } from '@fortawesome/free-brands-svg-icons'

function DabbedTool(){
  return(
    <div>
      <div class = "DabbedThings">
        <h2>Things I've Dabbed In</h2>
        <FontAwesomeIcon icon={faJava} class = "fa" /><br/>
        <FontAwesomeIcon icon={faPython} class = "fa" /><br/>
      </div>
      <img src = {Arrow}></img>
    </div>
  );
}

export default DabbedTool;
