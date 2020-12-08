import React from "react";
import SandwichNavigation from "./SandwichNavigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

class BottomMenu extends React.Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon
          icon={faTimesCircle}
          size="2x"
          onClick={this.props.dissapearBottomMenu}
          className="X-Icon"
          color="#18252e"
        />
        <SandwichNavigation
          scrollToTop={this.props.scrollTop}
          dissapearMenu={this.props.dissapearBottomMenu}
        />
      </div>
    );
  }
}

export default BottomMenu;
