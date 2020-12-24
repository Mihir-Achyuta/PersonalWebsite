import React from "react";
import BurgerNavLinks from "./BurgerNavLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

class TopBurgerMenu extends React.Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon
          icon={faTimesCircle}
          size="2x"
          onClick={this.props.dissapearBurgerMenu}
          className="X-Burger-Icon"
        />
        <BurgerNavLinks dissapearMenu={this.props.dissapearBurgerMenu} />
      </div>
    );
  }
}

export default TopBurgerMenu;
