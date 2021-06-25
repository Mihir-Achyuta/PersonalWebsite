import React from "react";

import "./styles/App.css";

import Page from "./components/Page";
import LoadingAnimation from "./components/PageComponents/LoadingAnimation";

interface AppState {
  contentLoaded: boolean;
}

class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      contentLoaded: false,
    };
  }

  componentDidMount() {
    // disables scrollbar and shows loading animation at start
    //controls how long the animation goes for to regular screen
    // setTimeout(() => {
    //   document.body.style.overflow = "visible";
    //   this.setState((state) => ({
    //     contentLoaded: true,
    //   }));
    // }, 7500);
  }

  render() {
    return (
      <div className="App">
        <Page />
      </div>
    );
  }
}

export default App;
