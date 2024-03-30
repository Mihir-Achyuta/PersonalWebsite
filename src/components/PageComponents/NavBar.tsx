import React from "react";

import ListItem from "../MiniComponents/LinkComponents/ListItem";
// @ts-ignore
import resume from "../../documents/resume/resume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface INavBarProps {
  showBurgerMenu: any;
}

class NavBar extends React.Component<INavBarProps> {
  render() {
    return (
      <div className="NavBar">
        <nav className="NavBar-Links">
          <ol className="NavBar-Unordered-List">
            <ListItem name="HOME" />
            <ListItem name="EXPERIENCE" />
            <ListItem name="PROJECTS" />
            <ListItem name="SKILLS" />
            <ListItem name="CONTACT" />
            <li className="NavBar-List-Item">
              <a
                className="NavBar-Resume"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME
              </a>
              <div className="underline"></div>
            </li>
          </ol>
          <div className="NavBar-Hamburger-Div">
            <FontAwesomeIcon
              className="NavBar-Hamburger"
              icon={faBars}
              size="3x"
              onClick={this.props.showBurgerMenu}
            />
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
