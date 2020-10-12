import React from "react";

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
          <p>{this.props.message}Message</p>
          <button className="Submit_Modal-Button" onClick={this.handleClick}>
            Close Notification
          </button>
        </div>
      </div>
    );
  }
}

export default Submit_Modal;
