import React, { Component } from "react";
import Front_Page from "./components/Front_Page";
import Skillz from "./components/Skillz";
import Project from "./components/Project";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
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
        <Skillz/>
        <Project/>
        <Learning/>
        <Contact/>
        {
        //connects backend with frontend
        //<p className="App-intro">{this.state.apiResponse}</p>
        }
      </div>
    );
  }
}

export default App;
