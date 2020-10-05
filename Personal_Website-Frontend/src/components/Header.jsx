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
            <li className="Header-List-Item">
              HOME<div className="underline"></div>
            </li>
            <li className="Header-List-Item">
              ABOUT<div className="underline"></div>
            </li>
            <li className="Header-List-Item">
              SKILLS<div className="underline"></div>
            </li>
            <li className="Header-List-Item">
              PROJECTS<div className="underline"></div>
            </li>
            <li className="Header-List-Item">
              CONTACT<div className="underline"></div>
            </li>
            <li className="Header-List-Item">
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
