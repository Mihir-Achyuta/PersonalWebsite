import React from "react";

interface ISubmitModalProps { 
  removeModel: any,
  message: string,
}

class Submit_Modal extends React.Component<ISubmitModalProps> {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(): void {
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
