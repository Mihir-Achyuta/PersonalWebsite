import React, { Component } from "react";

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
        <div class="header">
          <ul>
            <div class="RightSideItems">
              <li>&lt; Mihir A. &gt;</li>
            </div>
          </ul>
        </div>

        <div class="Introduction">
          <div class="IntroductionName">
            <p>Hey I'm Mihir: A guy who likes building things</p>
          </div>
        </div>

        <div class="TransitionNavbar">
          <a href="#">
            <li>Home</li>
          </a>
          <a href="#">
            <li>About</li>
          </a>
          <a href="#">
            <li>Skills</li>
          </a>
          <a href="#">
            <li>Projects</li>
          </a>
          <a href="#">
            <li> Contact </li>
          </a>
        </div>

        <div class="TransitionAbout">
          <div class="TransitionQuestion">
            <p>So what do I know?</p>
          </div>
        </div>
        <p className="App-intro">{this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
