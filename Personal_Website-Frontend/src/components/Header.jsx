import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import List_Item from "./mini-components/List_Item";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <div className="Header">
        <div className="Header-Logo">
          <a href="">
            <h1 className="Header-Logo-Left">
              {"<"}MIHIR{"/>"}
            </h1>
          </a>
        </div>
        <nav className="Header-Navbar">
          <ol className="Header-Unordered-List">
            <li className="Header-List-Item" onClick={this.scrollToTop}>
              HOME<div className="underline"></div>
            </li>
            <List_Item name="ABOUT" />
            <List_Item name="SKILLS" />
            <List_Item name="PROJECTS" />
            <List_Item name="CONTACT" />
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
