import React from "react";
import { Link } from "react-scroll";

class ListItem extends React.Component {
  handleClick() {
    return this.props.name.toLowerCase();
  }
  render() {
    return (
      <li
        className={
          this.props.hidden ? "Hidden-NavBar-List-Item" : "NavBar-List-Item"
        }
      >
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
        </Link>
        <div className="underline"></div>
      </li>
    );
  }
}

export default ListItem;
