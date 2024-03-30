import React from "react";

import ListItem from "../MiniComponents/LinkComponents/ListItem";
//@ts-ignore
import resume from "../../documents/resume/resume.pdf";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface IHiddenNavBarProps {
  showBurgerMenu: any;
}

interface IHiddenNavBarState {
  visible: boolean;
  prevScrollPosition: number;
}

class HiddenNavBar extends React.Component<
  IHiddenNavBarProps,
  IHiddenNavBarState
> {
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
  popNavBar(): void {
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
        <div className="Hidden-NavBar-Logo">
          <a href="/">
            <h1 className="Hidden-NavBar-Logo-Left">
              {"<"}MIHIR{"/>"}
            </h1>
          </a>
        </div>
        <nav className="Hidden-NavBar-Links">
          <ol className="Hidden-NavBar-Unordered-List">
            <ListItem name="HOME" hidden />
            <ListItem name="EXPERIENCE" hidden />
            <ListItem name="PROJECTS" hidden />
            <ListItem name="SKILLS" hidden />
            <ListItem name="CONTACT" hidden />
            <li className="Hidden-NavBar-List-Item">
              <a
                className="HiddenNavBar-Resume"
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                RESUME
              </a>
              <div className="underline"></div>
            </li>
          </ol>
          <FontAwesomeIcon
            className="Hidden-NavBar-Hamburger"
            icon={faBars}
            size="2x"
            onClick={this.props.showBurgerMenu}
          />
        </nav>
      </div>
    );
  }
}

export default HiddenNavBar;
