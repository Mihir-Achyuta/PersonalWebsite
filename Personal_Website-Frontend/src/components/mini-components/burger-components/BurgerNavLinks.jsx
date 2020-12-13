import React from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-scroll";

class BurgerNavLinks extends React.Component {
  constructor(props) {
    super(props);
    this.homeClick = this.homeClick.bind(this);
  }
  homeClick() {
    this.props.dissapearMenu();
    this.props.scrollToTop();
  }
  render() {
    return (
      <nav className="Sandwich_Menu">
        <ol className="Sandwich_Menu-List">
          <Zoom delay={500}>
            <li className="" onClick={this.homeClick}>
              HOME<div className=""></div>
            </li>
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
              className="Sandwich-List-Item"
              onClick={this.props.dissapearMenu}
            >
              RESUME<div className=""></div>
            </li>
          </Zoom>
        </ol>
      </nav>
    );
  }
}

export default BurgerNavLinks;