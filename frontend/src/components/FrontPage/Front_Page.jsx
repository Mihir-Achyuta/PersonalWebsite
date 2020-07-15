import React from "react";
import BurgerArrow from "./BurgerArrow";
import Introduction from "./Introduction";
import Transition from "./Transition";
import Header from "./Header";
import "./FrontPage.css"

function Front_Page(){
  return(
    <div class = "FP">
      <Header/>
      <Introduction/>
      <Transition/>
      <BurgerArrow/>
    </div>
  );
}

export default Front_Page;
