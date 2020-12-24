import React from "react";

import List_Item from "../mini-components/link-components/List_Item";
import Zoom from "react-reveal/Zoom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="NavBar">
        <Zoom>
          <div className="NavBar-Logo">
            <a href="">
              <h1 className="NavBar-Logo-Left">
                {"<"}MIHIR{"/>"}
              </h1>
            </a>
          </div>
        </Zoom>
        <nav className="NavBar-Links">
          <ol className="NavBar-Unordered-List">
            <Zoom delay={100}>
              <List_Item name="HOME" />
            </Zoom>
            <Zoom delay={200}>
              <List_Item name="ABOUT" />
            </Zoom>
            <Zoom delay={300}>
              <List_Item name="SKILLS" />
            </Zoom>
            <Zoom delay={400}>
              <List_Item name="PROJECTS" />
            </Zoom>
            <Zoom delay={500}>
              <List_Item name="CONTACT" />
            </Zoom>
            <Zoom delay={600}>
              <li className="NavBar-List-Item">
                RESUME<div className="underline"></div>
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
