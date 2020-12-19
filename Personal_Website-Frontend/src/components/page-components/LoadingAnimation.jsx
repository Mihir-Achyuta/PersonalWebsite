import React from "react";

class LoadingAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pageTransition: false, showLoader: true };
  }
  componentDidMount() {
    setTimeout(() => {
      document.body.style.overflow = "visible";
      this.setState((state) => ({
        pageTransition: true,
      }));
    }, 3500);
    setTimeout(() => {
      document.body.style.overflow = "visible";
      this.setState((state) => ({
        pageTransition: false,
        showLoader: false,
      }));
    }, 5500);
  }
  render() {
    return (
      <div>
        <div className="LoadingAnimation-Scene">
          <h1 className="LoadingAnimation-Header">
            {"<"}MIHIR{"/>"}
          </h1>
          <div
            className="LoadingAnimation-Loader"
            style={{ display: this.state.showLoader ? "flex" : "none" }}
          >
            <div className="LoadingAnimation-Dot Dot-One"></div>
            <div className="LoadingAnimation-Dot Dot-Two"></div>
            <div className="LoadingAnimation-Dot Dot-Three"></div>
            <div className="LoadingAnimation-Dot Dot-Four"></div>
            <div className="LoadingAnimation-Dot Dot-Five"></div>
          </div>
        </div>
        <div
          className={
            this.state.pageTransition
              ? "LoadingAnimation-Transition LoadingAnimation-Transition-Left Transition-Left"
              : "LoadingAnimation-Transition LoadingAnimation-Transition-Left"
          }
        ></div>
        <div
          className={
            this.state.pageTransition
              ? "LoadingAnimation-Transition LoadingAnimation-Transition-Right Transition-Right"
              : "LoadingAnimation-Transition LoadingAnimation-Transition-Right"
          }
        ></div>
      </div>
    );
  }
}

export default LoadingAnimation;
