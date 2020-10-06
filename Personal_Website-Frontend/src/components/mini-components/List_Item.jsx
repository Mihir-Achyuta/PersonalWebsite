import React from "react";
import { Link } from "react-scroll";

class List_Item extends React.Component {
  handleClick() {
    return this.props.name.toLowerCase();
  }
  render() {
    return (
      <li className="Header-List-Item">
        {" "}
        <Link
          activeClass="active"
          to={this.handleClick()}
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          onSetActive={this.handleSetActive}
        >
          {this.props.name}
        </Link>{" "}
        <div className="underline"></div>
      </li>
    );
  }
}

export default List_Item;
