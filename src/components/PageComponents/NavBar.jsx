import React from "react";

import ListItem from "../mini-components/LinkComponents/ListItem";
import Resume from "../../documents/resume/resume.pdf";

import Zoom from "react-reveal/Zoom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class NavBar extends React.Component {
  render() {
    return (
      <div className="NavBar">
        <Zoom>
          <div className="NavBar-Logo">
            <a href="/">
              <h1 className="NavBar-Logo-Left">
                {"<"}MIHIR{"/>"}
              </h1>
            </a>
          </div>
        </Zoom>
        <nav className="NavBar-Links">
          <ol className="NavBar-Unordered-List">
            <Zoom delay={100}>
              <ListItem name="HOME" />
            </Zoom>
            <Zoom delay={200}>
              <ListItem name="ABOUT" />
            </Zoom>
            <Zoom delay={300}>
              <ListItem name="SKILLS" />
            </Zoom>
            <Zoom delay={400}>
              <ListItem name="PROJECTS" />
            </Zoom>
            <Zoom delay={500}>
              <ListItem name="CONTACT" />
            </Zoom>
            <Zoom delay={600}>
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
            </Zoom>
          </ol>
          <Zoom delay={500}>
            <FontAwesomeIcon
              className="NavBar-Hamburger"
              icon={faBars}
              size="2x"
              onClick={this.props.showBurgerMenu}
            />
          </Zoom>
        </nav>
      </div>
    );
  }
}

export default NavBar;
