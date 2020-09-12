import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-Logo">
          <h1 className="Header-Logo-Left">
            {"<"}MIHIR{"/>"}
          </h1>
        </div>
        <nav className="Header-Navbar">
          <ol className="Header-Unordered-List">
            <li>
              HOME<div className="underline"></div>
            </li>
            <li>
              ABOUT<div className="underline"></div>
            </li>
            <li>
              SKILLS<div className="underline"></div>
            </li>
            <li>
              PROJECTS<div className="underline"></div>
            </li>
            <li>
              CONTACT<div className="underline"></div>
            </li>
            <li>
              RESUME<div className="underline"></div>
            </li>
          </ol>
          <FontAwesomeIcon
            className="Header-Hamburger"
            icon={faBars}
            size="2x"
          />
        </nav>
      </div>
    );
  }
}

export default Header;
