import React from "react";
import Navbar from "./FrontPage/Navbar";
import Introduction from "./FrontPage/Introduction";
import Transition from "./FrontPage/Transition";
import Header from "./FrontPage/Header";

function Front_Page(){
  return(
    <div>
      <Header/>
      <Introduction/>
      <Navbar/>
      <Transition/>
    </div>
  );
}

export default Front_Page;
