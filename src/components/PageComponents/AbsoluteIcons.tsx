import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

interface IAbsoluteIconsProps { 
  showMenu:any,
}

class AbsoluteIcons extends React.Component<IAbsoluteIconsProps> {
  render() {
    return (
      <section className="Absolute-Icons">
        <Link
          activeClass="active"
          to={"home"}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <FontAwesomeIcon
            className="Absolute-Icons-Arrow-Up"
            icon={faArrowUp}
            size="2x"
          />
        </Link>
        <FontAwesomeIcon
          onClick={this.props.showMenu}
          className="Absolute-Icons-Hamburger"
          icon={faBars}
          size="2x"
        />
      </section>
    );
  }
}

export default AbsoluteIcons;
