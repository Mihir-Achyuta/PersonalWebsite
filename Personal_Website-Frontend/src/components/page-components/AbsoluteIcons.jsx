import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowUp } from "@fortawesome/free-solid-svg-icons";

class AbsoluteIcons extends React.Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <section className="Absolute-Icons">
        <FontAwesomeIcon
          className="Absolute-Icons-Arrow-Up"
          icon={faArrowUp}
          size="2x"
          onClick={this.props.scrollTop}
        />
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
