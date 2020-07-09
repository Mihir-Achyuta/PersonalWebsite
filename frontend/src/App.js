import React, { Component } from "react";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
              <div class="header">
              <ul>
                <a href="#" class = "LeftSideHeader" style = {{float:"left"}}>
                  <li>&lt; Mihir A. &gt;</li>
                </a>
                <div class = "RightSideItems" style = {{float:"right"}}>
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
              </ul>
            </div>
            <div class="Introduction">
              <div class="IntroductionName">
                <p>Hey I'm Mihir</p>
              </div>
              <div class="IntroductionProfession">
                <p>A guy who likes building things</p>
              </div>
            </div>
            <div class="ScrollToTopArrow">
              <button class = "Arrow" type="button" name="ScrollUp"><span class="jam jam-arrow-circle-up"></span></button>
            </div>
            <div class="TransitionAbout">
              <div class="TransitionQuestion">
                <p>So who am I?</p>
              </div>
            </div>
            <header className="App-header">
              <h1 className="App-title">Test App</h1>
            </header>
              <p className="App-intro">{this.state.apiResponse}</p>
          </div>
        );
    }
}

export default App;
