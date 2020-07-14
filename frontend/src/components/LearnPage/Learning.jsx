import React from "react";
import Arrow from "./down.svg"

function Learning(){
  return(
    <div>
      <h2>What I've been Learning</h2>
      <img src = "https://picsum.photos/200"></img>
      <br/>
      <img src = {Arrow}></img>
    </div>
  );
}

export default Learning;
