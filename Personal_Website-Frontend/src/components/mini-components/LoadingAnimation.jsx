import React from "react";

class LoadingAnimation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={"LoadingAnimation-Scene"}>
        <h1 className={"LoadingAnimation-Header"}>
          {"<"}MIHIR{"/>"}
        </h1>
      </div>
    );
  }
}

export default LoadingAnimation;
