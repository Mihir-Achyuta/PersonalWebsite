import React from "react";

import Resume from "../../../documents/resume/resume.pdf";

import Zoom from "react-reveal/Zoom";
import { Link } from "react-scroll";

class BurgerNavLinks extends React.Component {
  render() {
    return (
      <nav className="Sandwich_Menu">
        <ol className="Sandwich_Menu-List">
          <Zoom delay={500}>
            <Link
              activeClass="active"
              to={"home"}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <li
                className="Sandwich-List-Item"
                onClick={this.props.dissapearMenu}
              >
                HOME<div className=""></div>
              </li>
            </Link>
          </Zoom>
          <Zoom delay={700}>
            <Link
              activeClass="active"
              to={"about"}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <li
                className="Sandwich-List-Item"
                onClick={this.props.dissapearMenu}
              >
                ABOUT<div className=""></div>
              </li>
            </Link>
          </Zoom>
          <Zoom delay={900}>
            <Link
              activeClass="active"
              to={"skills"}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <li
                className="Sandwich-List-Item"
                onClick={this.props.dissapearMenu}
              >
                SKILLS<div className=""></div>
              </li>
            </Link>
          </Zoom>
          <Zoom delay={1100}>
            <Link
              activeClass="active"
              to={"projects"}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <li
                className="Sandwich-List-Item"
                onClick={this.props.dissapearMenu}
              >
                PROJECTS<div className=""></div>
              </li>
            </Link>
          </Zoom>
          <Zoom delay={1300}>
            <Link
              activeClass="active"
              to={"contact"}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onSetActive={this.handleSetActive}
            >
              <li
                className="Sandwich-List-Item"
                onClick={this.props.dissapearMenu}
              >
                CONTACT<div className=""></div>
              </li>
            </Link>
          </Zoom>
          <Zoom delay={1500}>
            <li
              onClick={this.props.dissapearMenu}
              style={{ marginTop: "35px", color: "#92810c" }}
            >
              <a
                href={Resume}
                target="_blank"
                rel="noopener noreferrer"
                className="Sandwich-List-Item NavBar-Resume"
              >
                RESUME
              </a>
              <div className=""></div>
            </li>
          </Zoom>
        </ol>
      </nav>
    );
  }
}

export default BurgerNavLinks;
