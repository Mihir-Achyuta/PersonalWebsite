import React from "react";

class Cursor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
    this.changeMousePosition = this.changeMousePosition.bind(this);
  }
  componentDidMount() {
    this.addMouseEventListener();
  }
  componentWillUnmount() {
    return () => this.removeEventListener();
  }
  addMouseEventListener() {
    document.addEventListener("mousemove", this.changeMousePosition);
    console.log("Added");
  }
  removeMouseEventListener() {
    document.removeEventListener("mousemove", this.changeMousePosition);
    console.log("Removed");
  }
  changeMousePosition(e) {
    this.setState({ x: e.clientX, y: e.clientY });
  }
  render() {
    return (
      <div
        className="Cursor"
        style={{ left: this.state.x, top: this.state.y }}
      />
    );
  }
}

export default Cursor;
