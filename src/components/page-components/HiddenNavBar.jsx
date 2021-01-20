import React from "react";

import ListItem from "../mini-components/link-components/ListItem";
import Resume from "../../documents/resume/resume.pdf";

import Zoom from "react-reveal/Zoom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

class HiddenNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, prevScrollPosition: window.pageYOffset };
    this.popNavBar = this.popNavBar.bind(this);
  }
  componentDidMount() {
    window.addEventListener("scroll", this.popNavBar);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.popNavBar);
  }
  popNavBar() {
    let currentScrollPosition = window.pageYOffset;
    let navBarVisible =
      currentScrollPosition < this.state.prevScrollPosition &&
      currentScrollPosition >= 100;

    this.setState({
      visible: navBarVisible,
      prevScrollPosition: currentScrollPosition,
    });
  }
  render() {
    return (
      <div
        className={
          this.state.visible
            ? "Hidden-NavBar"
            : "Hidden-NavBar Hidden-NavBar-Scroll"
        }
      >
        <Zoom>
          <div className="Hidden-NavBar-Logo">
            <a href="/">
              <h1 className="Hidden-NavBar-Logo-Left">
                {"<"}MIHIR{"/>"}
              </h1>
            </a>
          </div>
        </Zoom>
        <nav className="Hidden-NavBar-Links">
          <ol className="Hidden-NavBar-Unordered-List">
            <Zoom delay={100}>
              <ListItem name="HOME" hidden />
            </Zoom>
            <Zoom delay={200}>
              <ListItem name="ABOUT" hidden />
            </Zoom>
            <Zoom delay={300}>
              <ListItem name="SKILLS" hidden />
            </Zoom>
            <Zoom delay={400}>
              <ListItem name="PROJECTS" hidden />
            </Zoom>
            <Zoom delay={500}>
              <ListItem name="CONTACT" hidden />
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
