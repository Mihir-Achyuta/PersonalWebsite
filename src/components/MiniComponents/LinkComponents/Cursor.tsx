import React from "react";

interface ICursorState { 
  x: number,
  y:number,
}

class Cursor extends React.Component<{},ICursorState> {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
    this.changeMousePosition = this.changeMousePosition.bind(this);
  }
  componentDidMount() : void {
    this.addMouseEventListener();
  }
  addMouseEventListener() : void {
    document.addEventListener("mousemove", this.changeMousePosition);
  }
  changeMousePosition(e) : void {
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
