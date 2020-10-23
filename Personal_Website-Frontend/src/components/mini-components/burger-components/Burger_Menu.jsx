import React from "react";
import Sandwich_Navigation from "./Sandwich_Navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

class Burger_Menu extends React.Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon
          icon={faTimesCircle}
          size="2x"
          onClick={this.props.dissapearBurgerMenu}
          className="X-Burger-Icon"
          color="#7ae2dd"
        />
        <Sandwich_Navigation
          scrollToTop={this.props.scrollTop}
          dissapearMenu={this.props.dissapearBurgerMenu}
        />
      </div>
    );
  }
}

export default Burger_Menu;
