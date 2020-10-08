import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/mini-components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AbsoluteIcons from "./components/AbsoluteIcons";
import Sandwich_Menu from "./components/mini-components/Sandwich_Menu";
import "./styles/App.css";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentLoaded: true,
      headerLoaded: true,
      isLoaded: true,
      menuShown: false,
    };
    this.showMenu = this.showMenu.bind(this);
    this.dissapearMenu = this.dissapearMenu.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
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
  showMenu() {
    this.setState({ menuShown: true });
  }
  dissapearMenu() {
    this.setState({ menuShown: false });
  }
  render() {
    return (
      <div className="App">
        {this.state.contentLoaded ? (
          <div className="App-Div">
            {this.state.menuShown ? (
              <div className="Menu Menu-Load">
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  size="2x"
                  onClick={this.dissapearMenu}
                  className="X-Icon"
                  color="#7ae2dd"
                />
                <Sandwich_Menu
                  dissapearMenu={this.dissapearMenu}
                  scrollToTop={this.scrollToTop}
                />
              </div>
            ) : (
              <div className="Menu"></div>
            )}
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
              <Project
                projectName="Project Name 1"
                description="Lorem ipsum dolor sit amet, consectetur"
                stack="Lorem ipsum dolor sit amet, consectetur"
                imgUrl="https://picsum.photos/300/200"
                backColor="#2f4858"
                textColor="#7ae2dd"
                topBorder="#14bdad"
                fadeLeft
              />
              <Project
                projectName="Project Name 2"
                description="Lorem ipsum dolor sit amet, consectetur"
                stack="Lorem ipsum dolor sit amet, consectetur"
                imgUrl="https://picsum.photos/300/200"
                backColor="#7ae2dd"
                textColor="#2f4858"
                topBorder="#2f4858"
              />
              <Project
                projectName="Project Name 3"
                description="Lorem ipsum dolor sit amet, consectetur"
                stack="Lorem ipsum dolor sit amet, consectetur"
                imgUrl="https://picsum.photos/300/200"
                backColor="#2f4858"
                textColor="#14bdad"
                topBorder="#7ae2dd"
                fadeLeft
              />
              <Project
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
            <AbsoluteIcons
              showMenu={this.showMenu}
              scrollTop={this.scrollToTop}
            />
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
