import React from "react";
import Arrow from "./Projects/down.svg"

function Project(){
  return(
    <div>
      <h2>My Projects</h2>
      <img src = "https://picsum.photos/200"></img>
      <br/>
      <img src = {Arrow}></img>
    </div>
  );
}

export default Project;
