import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AbsoluteIcons from "./components/AbsoluteIcons";
import "./styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <div className="Header-Homepage">
          <Header />
          <Homepage />
        </div>
        <About />
        <Skills />
        <Projects
          projectName="Project Name 1"
          description="Lorem ipsum dolor sit amet, consectetur"
          stack="Lorem ipsum dolor sit amet, consectetur"
          imgUrl="https://picsum.photos/300/200"
          backColor="#2f4858"
          textColor="#7ae2dd"
          topBorder="#14bdad"
        />
        <Projects
          projectName="Project Name 2"
          description="Lorem ipsum dolor sit amet, consectetur"
          stack="Lorem ipsum dolor sit amet, consectetur"
          imgUrl="https://picsum.photos/300/200"
          backColor="#7ae2dd"
          textColor="#2f4858"
          topBorder="#2f4858"
        />
        <Projects
          projectName="Project Name 3"
          description="Lorem ipsum dolor sit amet, consectetur"
          stack="Lorem ipsum dolor sit amet, consectetur"
          imgUrl="https://picsum.photos/300/200"
          backColor="#2f4858"
          textColor="#14bdad"
          topBorder="#7ae2dd"
        />
        <Projects
          projectName="Project Name 4"
          description="Lorem ipsum dolor sit amet, consectetur"
          stack="Lorem ipsum dolor sit amet, consectetur"
          imgUrl="https://picsum.photos/300/200"
          backColor="#14bdad"
          textColor="#2f4858"
          topBorder="#2f4858"
        />
        <Contact />
        <Footer />
        <AbsoluteIcons />
      </div>
    );
  }
}

export default App;
