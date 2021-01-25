import React from "react";

import BurgerNavLinks from "./BurgerNavLinks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

interface ITopBurgerMenuProps { 
  dissapearBurgerMenu:any,
}

class TopBurgerMenu extends React.Component<ITopBurgerMenuProps> {
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
