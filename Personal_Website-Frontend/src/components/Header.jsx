import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import List_Item from "./mini-components/List_Item";
import Zoom from "react-reveal/Zoom";

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
              <h1 className="Header-Logo-Left" style={{ color: "#2f4858" }}>
                {"<"}MIHIR{"/>"}
              </h1>
            </a>
          </div>
        </Zoom>

        <nav className="Header-Navbar">
          <ol className="Header-Unordered-List">
            <Zoom delay={500}>
              <li className="Header-List-Item" onClick={this.props.scrollTop}>
                HOME<div className="underline"></div>
              </li>
            </Zoom>
            <Zoom delay={700}>
              <List_Item name="ABOUT" />
            </Zoom>
            <Zoom delay={900}>
              <List_Item name="SKILLS" />
            </Zoom>
            <Zoom delay={1100}>
              <List_Item name="PROJECTS" />
            </Zoom>
            <Zoom delay={1300}>
              <List_Item name="CONTACT" />
            </Zoom>
            <Zoom delay={1500}>
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
