import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Transition from "./components/Transition";
import Header from "./components/Header";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Introduction/>
        <Navbar/>
        <Transition/>
        {
        //connects backend with frontend
        //<p className="App-intro">{this.state.apiResponse}</p>
        }
      </div>
    );
  }
}

export default App;
