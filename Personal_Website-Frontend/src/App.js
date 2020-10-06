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
import $ from "jquery";

import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contentLoaded: false, headerLoaded: false, isLoaded: false };
  }
  componentDidMount() {
    setTimeout(
      () =>
        this.setState((state) => ({
          headerLoaded: true,
        })),
      (document.body.style.overflow = "hidden"),
      500
    );
    setTimeout(
      () =>
        this.setState((state) => ({
          isLoaded: true,
        })),
      4500
    );
    setTimeout(() => {
      document.body.style.overflow = "visible";
      this.setState((state) => ({
        contentLoaded: true,
      }));
    }, 5000);
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.contentLoaded ? (
          <div className="App-Div">
            <div className="Header-Homepage">
              <Header scrollTop={this.scrollToTop} />
              <Homepage />
            </div>
            <Element name="about">
              {" "}
              <About />
            </Element>
            <Element name="skills">
              <Skills />
            </Element>
            <Element name="projects">
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
            </Element>
            <Element name="contact">
              <Contact />
            </Element>
            <Footer />
            <AbsoluteIcons scrollTop={this.scrollToTop} />
          </div>
        ) : (
          <div
            className={
              this.state.isLoaded
                ? "Initial-Scene Initial-Scene-Loaded"
                : "Initial-Scene"
            }
          >
            <h1
              className={
                this.state.headerLoaded
                  ? "Initial-Header Initial-Header-Loaded"
                  : "Initial-Header"
              }
            >
              {"<"}MIHIR{"/>"}
            </h1>
          </div>
        )}
      </div>
    );
  }
}

export default App;
