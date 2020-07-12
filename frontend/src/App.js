import React, { Component } from "react";
import Navbar from "./components/FrontPage/Navbar";
import Introduction from "./components/FrontPage/Introduction";
import Transition from "./components/FrontPage/Transition";
import Header from "./components/FrontPage/Header";
import Front_Page from "./components/Front_Page"

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
        <Front_Page/>
        {
        //connects backend with frontend
        //<p className="App-intro">{this.state.apiResponse}</p>
        }
      </div>
    );
  }
}

export default App;
