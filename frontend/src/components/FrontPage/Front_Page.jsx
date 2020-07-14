import React from "react";
import Navbar from "./Navbar";
import Introduction from "./Introduction";
import Transition from "./Transition";
import Header from "./Header";
import "./FrontPage.css"

function Front_Page(){
  return(
    <div class = "FP">
      <Header/>
      <Introduction/>
      <Navbar/>
      <Transition/>
    </div>
  );
}

export default Front_Page;
