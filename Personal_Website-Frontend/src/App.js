import React from "react";

import "./styles/App.css";

import LoadingAnimation from "./components/mini-components/LoadingAnimation";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/mini-components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AbsoluteIcons from "./components/AbsoluteIcons";

import TopBurgerMenu from "./components/mini-components/burger-components/TopBurgerMenu";
import BottomBurgerMenu from "./components/mini-components/burger-components/BottomBurgerMenu";
import Cursor from "./components/mini-components/Cursor";

import { Element } from "react-scroll";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentLoaded: false,
      bottomMenuShown: false,
      burgerMenuShown: false,
    };
    this.showBottomMenu = this.showBottomMenu.bind(this);
    this.dissapearBottomMenu = this.dissapearBottomMenu.bind(this);
    this.showBurgerMenu = this.showBurgerMenu.bind(this);
    this.dissapearBurgerMenu = this.dissapearBurgerMenu.bind(this);
  }

  componentDidMount() {
    // disables scrollbar and shows loading animation at start
    setTimeout(() => {
      document.body.style.overflow = "visible";
      this.setState((state) => ({
        contentLoaded: true,
      }));
    }, 2500);
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  showBottomMenu() {
    this.setState({ bottomMenuShown: true });
  }

  dissapearBottomMenu() {
    this.setState({ bottomMenuShown: false });
  }

  showBurgerMenu() {
    this.setState({ burgerMenuShown: true });
  }

  dissapearBurgerMenu() {
    this.setState({ burgerMenuShown: false });
  }

  render() {
    return (
      <div className="App">
        {this.state.contentLoaded ? (
          <div className="App-Div">
            {this.state.bottomMenuShown ? (
              <div className="Menu Menu-Load">
                <BottomBurgerMenu
                  scrollTop={this.scrollToTop}
                  dissapearBottomMenu={this.dissapearBottomMenu}
                />
              </div>
            ) : (
              <div className="Menu"></div>
            )}
            {this.state.burgerMenuShown ? (
              <div className="Burger-Menu Burger-Menu-Load">
                <TopBurgerMenu
                  scrollTop={this.scrollToTop}
                  dissapearBurgerMenu={this.dissapearBurgerMenu}
                />
              </div>
            ) : (
              <div className="Burger-Menu"></div>
            )}
            <div className="Header-Homepage">
              <Cursor />
              <Header
                scrollTop={this.scrollToTop}
                showBurgerMenu={this.showBurgerMenu}
              />
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
                fadeLeft
              />
              <Project
                projectName="Project Name 2"
                description="Lorem ipsum dolor sit amet, consectetur"
                stack="Lorem ipsum dolor sit amet, consectetur"
                imgUrl="https://picsum.photos/300/200"
              />
              <Project
                projectName="Project Name 3"
                description="Lorem ipsum dolor sit amet, consectetur"
                stack="Lorem ipsum dolor sit amet, consectetur"
                imgUrl="https://picsum.photos/300/200"
                fadeLeft
              />
              <Project
                projectName="Project Name 4"
                description="Lorem ipsum dolor sit amet, consectetur"
                stack="Lorem ipsum dolor sit amet, consectetur"
                imgUrl="https://picsum.photos/300/200"
              />
            </Element>
            <Element name="contact">
              <Contact />
            </Element>
            <Footer />
            <AbsoluteIcons
              showMenu={this.showBottomMenu}
              scrollTop={this.scrollToTop}
            />
          </div>
        ) : (
          <LoadingAnimation />
        )}
      </div>
    );
  }
}

export default App;
