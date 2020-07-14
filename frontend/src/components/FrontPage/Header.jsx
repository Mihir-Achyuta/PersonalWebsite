import React from "react";

function Header() {
  return (
    <div class="header">
      <ul>
        <div class="LeftSideItems">
          <li>&lt; Mihir A. &gt;</li>
        </div>
        <div class="RightSideItems">
          <div class="TransitionNavbar">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>Skills</li>
            </a>
            <a href="#">
              <li>Projects</li>
            </a>
            <a href="#">
              <li>Learning</li>
            </a>
            <a href="#">
              <li> Contact </li>
            </a>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default Header;
