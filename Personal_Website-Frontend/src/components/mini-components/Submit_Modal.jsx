import React from "react";
import Fade from "react-reveal/Fade";

class Submit_Modal extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.removeModel();
  }
  render() {
    return (
      <div className="Submit_Modal">
        <div className="Submit_Modal-Text">
          <p className="Submit_Modal-Paragraph">{this.props.message}</p>
          <button className="Submit_Modal-Button" onClick={this.handleClick}>
            X
          </button>
        </div>
      </div>
    );
  }
}

export default Submit_Modal;
