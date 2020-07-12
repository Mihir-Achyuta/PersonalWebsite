import React from "react";
import Arrow from "./down.svg"

function Transition(){
  return(
    <div class="TransitionAbout">
      <div class="TransitionQuestion">
        <p>So what do I know?</p>
      </div>
      <img src = {Arrow}></img>
    </div>
  );
}

export default Transition;
