import React from "react";
import { Link } from "react-scroll";

interface IListItemProps {
  name: string,
  hidden?: boolean,
 }

class ListItem extends React.Component<IListItemProps> {
  handleClick(): string {
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
        >
          {this.props.name}
        </Link>
        <div className="underline"></div>
      </li>
    );
  }
}

export default ListItem;
