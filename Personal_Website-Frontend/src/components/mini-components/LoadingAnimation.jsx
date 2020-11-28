import React from "react";

class LoadingAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, headerLoaded: false };
  }
  componentDidMount() {
    setTimeout(
      () =>
        this.setState((state) => ({
          headerLoaded: true,
        })),
      (document.body.style.overflow = "hidden"),
      500
    );
    setTimeout(
      () =>
        this.setState((state) => ({
          isLoaded: true,
        })),
      2500
    );
  }
  render() {
    return (
      <div
        className={
          this.state.isLoaded
            ? "Initial-Scene Initial-Scene-Loaded"
            : "Initial-Scene"
        }
      >
        <h1
          className={
            this.state.headerLoaded
              ? "Initial-Header Initial-Header-Loaded"
              : "Initial-Header"
          }
        >
          {"<"}MIHIR{"/>"}
        </h1>
      </div>
    );
  }
}

export default LoadingAnimation;
