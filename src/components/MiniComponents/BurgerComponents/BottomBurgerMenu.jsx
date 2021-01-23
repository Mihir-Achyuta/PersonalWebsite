import React from "react";

import BurgerNavLinks from "./BurgerNavLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

class BottomBurgerMenu extends React.Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon
          icon={faTimesCircle}
          size="2x"
          onClick={this.props.dissapearBottomMenu}
          className="X-Icon"
        />
        <BurgerNavLinks dissapearMenu={this.props.dissapearBottomMenu} />
      </div>
    );
  }
}

export default BottomBurgerMenu;
