import React from "react";

import "./styles/App.css";

import Loading_Animation from "./components/mini-components/Loading_Animation";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/mini-components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AbsoluteIcons from "./components/AbsoluteIcons";
import Burger_Menu from "./components/mini-components/burger-components/Burger_Menu";
import Bottom_Menu from "./components/mini-components/burger-components/Bottom_Menu";

import { Element } from "react-scroll";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contentLoaded: true,
      bottomMenuShown: false,
      burgerMenuShown: false,
    };
    this.showBottomMenu = this.showBottomMenu.bind(this);
    this.dissapearBottomMenu = this.dissapearBottomMenu.bind(this);
    this.showBurgerMenu = this.showBurgerMenu.bind(this);
    this.dissapearBurgerMenu = this.dissapearBurgerMenu.bind(this);
  }
  componentDidMount() {
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
                <Bottom_Menu
                  scrollTop={this.scrollToTop}
                  dissapearBottomMenu={this.dissapearBottomMenu}
                />
              </div>
            ) : (
              <div className="Menu"></div>
            )}
            {this.state.burgerMenuShown ? (
              <div className="Burger-Menu Burger-Menu-Load">
                <Burger_Menu
                  scrollTop={this.scrollToTop}
                  dissapearBurgerMenu={this.dissapearBurgerMenu}
                />
              </div>
            ) : (
              <div className="Burger-Menu"></div>
            )}
            <div className="Header-Homepage">
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
              showMenu={this.showBottomMenu}
              scrollTop={this.scrollToTop}
            />
          </div>
        ) : (
          <Loading_Animation />
        )}
      </div>
    );
  }
}

export default App;
