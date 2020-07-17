import React from "react";
//imports library and icons from font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faBootstrap } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'


function FrontendTool(){
  return(
    <div class = "FrontendSkills">
      <h2>Frontend</h2>
      <FontAwesomeIcon icon={faHtml5} />
      <br/>
      <FontAwesomeIcon icon={faCss3Alt} />
      <br/>
      <FontAwesomeIcon icon={faJs} />
      <br/>
      <FontAwesomeIcon icon={faBootstrap} />
      <br/>
      <FontAwesomeIcon icon={faReact} />
      <p>JQuery</p>
    </div>
  );
}

export default FrontendTool;
