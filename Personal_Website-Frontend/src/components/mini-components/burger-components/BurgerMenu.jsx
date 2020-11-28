import React from "react";
import SandwichNavigation from "./SandwichNavigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

class BurgerMenu extends React.Component {
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
        <SandwichNavigation
          scrollToTop={this.props.scrollTop}
          dissapearMenu={this.props.dissapearBurgerMenu}
        />
      </div>
    );
  }
}

export default BurgerMenu;
