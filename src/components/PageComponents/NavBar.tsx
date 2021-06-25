import React from "react";

import ListItem from "../MiniComponents/LinkComponents/ListItem";

import Fade from "react-reveal/Fade";

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
            <Fade bottom delay={150}>
              <ListItem name="HOME" />
            </Fade>
            <Fade bottom delay={300}>
              <ListItem name="EXPERIENCE" />
            </Fade>
            <Fade bottom delay={450}>
              <ListItem name="PROJECTS" />
            </Fade>
            <Fade bottom delay={600}>
              <ListItem name="SKILLS" />
            </Fade>
            <Fade bottom delay={750}>
              <ListItem name="CONTACT" />
            </Fade>
            <Fade bottom delay={900}>
              <li className="NavBar-List-Item">
                <a
                  className="NavBar-Resume"
                  href={"/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RESUME
                </a>
                <div className="underline"></div>
              </li>
            </Fade>
          </ol>
          <Fade delay={500}>
            <FontAwesomeIcon
              className="NavBar-Hamburger"
              icon={faBars}
              size="2x"
              onClick={this.props.showBurgerMenu}
            />
          </Fade>
        </nav>
      </div>
    );
  }
}

export default NavBar;
