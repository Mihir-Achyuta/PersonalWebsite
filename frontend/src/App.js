import React, { Component } from "react";
import Front_Page from "./components/FrontPage/Front_Page";
import Skillz from "./components/SkillPage/Skillz";
import Project from "./components/ProjectPage/Project";
import Learning from "./components/LearnPage/Learning";
import Contact from "./components/ContactPage/Contact";
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
