import React from "react";
import Arrow from "./down.svg"

function Transition(){
  return(
    <div class="TransitionAbout">
      <div class="TransitionQuestion">
        <p>So what do I know?</p>
      </div>
      <img src = {Arrow}></img>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="#F64C72" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"/>
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="18" y1="11" x2="12" y2="5" />
        <line x1="6" y1="11" x2="12" y2="5" />
      </svg>
    </div>
  );
}

export default Transition;
