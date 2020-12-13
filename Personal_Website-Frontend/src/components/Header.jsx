import React from "react";

import List_Item from "./mini-components/List_Item";
import Zoom from "react-reveal/Zoom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Header">
        <Zoom>
          <div className="Header-Logo">
            <a href="">
              <h1 className="Header-Logo-Left">
                {"<"}MIHIR{"/>"}
              </h1>
            </a>
          </div>
        </Zoom>
        <nav className="Header-Navbar">
          <ol className="Header-Unordered-List">
            <Zoom delay={100}>
              <li className="Header-List-Item" onClick={this.props.scrollTop}>
                HOME<div className="underline"></div>
              </li>
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
              <li className="Header-List-Item">
                RESUME<div className="underline"></div>
              </li>
            </Zoom>
          </ol>
          <Zoom delay={500}>
            <FontAwesomeIcon
              className="Header-Hamburger"
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

export default Header;
