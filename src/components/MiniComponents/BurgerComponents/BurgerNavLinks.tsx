import React from "react";

//@ts-ignore
import resume from "../../../documents/resume/resume.pdf";

import { Link } from "react-scroll";

interface IBurgerNavLinksProps {
  dissapearMenu: any;
}

class BurgerNavLinks extends React.Component<IBurgerNavLinksProps> {
  render() {
    return (
      <nav className="Sandwich_Menu">
        <ol className="Sandwich_Menu-List">
          <Link
            activeClass="active"
            to={"home"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li
              className="Sandwich-List-Item"
              onClick={this.props.dissapearMenu}
            >
              HOME<div className=""></div>
            </li>
          </Link>
          <Link
            activeClass="active"
            to={"experience"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li
              className="Sandwich-List-Item"
              onClick={this.props.dissapearMenu}
            >
              EXPERIENCE<div className=""></div>
            </li>
          </Link>
          <Link
            activeClass="active"
            to={"skills"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li
              className="Sandwich-List-Item"
              onClick={this.props.dissapearMenu}
            >
              SKILLS<div className=""></div>
            </li>
          </Link>
          <Link
            activeClass="active"
            to={"projects"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li
              className="Sandwich-List-Item"
              onClick={this.props.dissapearMenu}
            >
              PROJECTS<div className=""></div>
            </li>
          </Link>
          <Link
            activeClass="active"
            to={"contact"}
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <li
              className="Sandwich-List-Item"
              onClick={this.props.dissapearMenu}
            >
              CONTACT<div className=""></div>
            </li>
          </Link>
          <li
            onClick={this.props.dissapearMenu}
            style={{ marginTop: "35px", color: "#92810c" }}
          >
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="Sandwich-List-Item NavBar-Resume"
            >
              RESUME
            </a>
            <div className=""></div>
          </li>
        </ol>
      </nav>
    );
  }
}

export default BurgerNavLinks;
