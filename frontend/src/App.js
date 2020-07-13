import React, { Component } from "react";
import Front_Page from "./components/Front_Page"
import Skillz from "./components/Skillz"
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
        {
        //connects backend with frontend
        //<p className="App-intro">{this.state.apiResponse}</p>
        }
      </div>
    );
  }
}

export default App;
