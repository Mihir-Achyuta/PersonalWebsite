import React from "react";

function Header(){
  return(
    <div class="header">
      <ul>
      <div class = "LeftSideItems">
        <div class = "Hamburger">
          <div class = "HamburgerLines"></div>
          <div class = "HamburgerLines"></div>
          <div class = "HamburgerLines"></div>
        </div>
      </div>
        <div class="RightSideItems">
          <li>&lt; Mihir A. &gt;</li>
        </div>
      </ul>
    </div>
  );
}

export default Header;
