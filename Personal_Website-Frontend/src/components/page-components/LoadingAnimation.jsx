import React from "react";

class LoadingAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageTransition: false };
  }
  componentDidMount() {
    setTimeout(() => {
      document.body.style.overflow = "visible";
      this.setState((state) => ({
        pageTransition: true,
      }));
      console.log("transitioned");
    }, 2500);
    setTimeout(() => {
      document.body.style.overflow = "visible";
      this.setState((state) => ({
        pageTransition: false,
      }));
      console.log("transitioned");
    }, 4500);
  }
  render() {
    return (
      <div>
        <div className="LoadingAnimation-Scene">
          <h1 className="LoadingAnimation-Header">
            {"<"}MIHIR{"/>"}
          </h1>
        </div>
        <div
          className={
            this.state.pageTransition
              ? "LoadingAnimation LoadingAnimation-Left Transition-Left"
              : "LoadingAnimation LoadingAnimation-Left"
          }
        ></div>
        <div
          className={
            this.state.pageTransition
              ? "LoadingAnimation LoadingAnimation-Right Transition-Right"
              : "LoadingAnimation LoadingAnimation-Right"
          }
        ></div>
      </div>
    );
  }
}

export default LoadingAnimation;
