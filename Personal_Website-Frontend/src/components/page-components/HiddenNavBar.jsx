import React from "react";

import List_Item from "../mini-components/link-components/List_Item";
import Resume from "../../documents/resume.pdf";

import Zoom from "react-reveal/Zoom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class HiddenNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }
  render() {
    return (
      <div
        className={
          this.state.visible ? "Hidden-NavBar" : "Hidden-NavBar-Scroll"
        }
      >
        <Zoom>
          <div className="Hidden-NavBar-Logo">
            <a href="">
              <h1 className="Hidden-NavBar-Logo-Left">
                {"<"}MIHIR{"/>"}
              </h1>
            </a>
          </div>
        </Zoom>
        <nav className="Hidden-NavBar-Links">
          <ol className="Hidden-NavBar-Unordered-List">
            <Zoom delay={100}>
              <List_Item name="HOME" hidden />
            </Zoom>
            <Zoom delay={200}>
              <List_Item name="ABOUT" hidden />
            </Zoom>
            <Zoom delay={300}>
              <List_Item name="SKILLS" hidden />
            </Zoom>
            <Zoom delay={400}>
              <List_Item name="PROJECTS" hidden />
            </Zoom>
            <Zoom delay={500}>
              <List_Item name="CONTACT" hidden />
            </Zoom>
            <Zoom delay={600}>
              <li className="Hidden-NavBar-List-Item">
                <a
                  className="HiddenNavBar-Resume"
                  href={Resume}
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
              className="Hidden-NavBar-Hamburger"
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

export default HiddenNavBar;
