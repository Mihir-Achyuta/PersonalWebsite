import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

class AbsoluteIcons extends React.Component {
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
          className="Absolute-Icons-Hamburger"
          icon={faBars}
          size="2x"
        />
      </section>
    );
  }
}

export default AbsoluteIcons;
