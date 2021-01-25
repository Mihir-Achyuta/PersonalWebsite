import React from "react";

import BurgerNavLinks from "./BurgerNavLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

interface IBottomBurgerMenuProps { 
  dissapearBottomMenu:any,
}

class BottomBurgerMenu extends React.Component<IBottomBurgerMenuProps> {
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
