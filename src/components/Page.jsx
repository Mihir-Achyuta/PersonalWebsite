import React from "react";

import NavBar from "./PageComponents/NavBar";
import HiddenNavBar from "./PageComponents/HiddenNavBar";
import Homepage from "./PageComponents/Homepage";
import About from "./PageComponents/About";
import Skills from "./PageComponents/Skills";
import ProjectGallery from "./PageComponents/ProjectGallery";
import Contact from "./PageComponents/Contact";
import Footer from "./PageComponents/Footer";
import AbsoluteIcons from "./PageComponents/AbsoluteIcons";

import TopBurgerMenu from "./MiniComponents/BurgerComponents/TopBurgerMenu";
import BottomBurgerMenu from "./MiniComponents/BurgerComponents/BottomBurgerMenu";
import Cursor from "./MiniComponents/LinkComponents/Cursor";

import { Element } from "react-scroll";

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bottomMenuShown: false,
      burgerMenuShown: false,
    };
    this.showBottomMenu = this.showBottomMenu.bind(this);
    this.dissapearBottomMenu = this.dissapearBottomMenu.bind(this);
    this.showBurgerMenu = this.showBurgerMenu.bind(this);
    this.dissapearBurgerMenu = this.dissapearBurgerMenu.bind(this);
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
      <div className="App-Div">
        {this.state.bottomMenuShown ? (
          <div className="Menu Menu-Load">
            <BottomBurgerMenu dissapearBottomMenu={this.dissapearBottomMenu} />
          </div>
        ) : (
          <div className="Menu"></div>
        )}
        {this.state.burgerMenuShown ? (
          <div className="Burger-Menu Burger-Menu-Load">
            <TopBurgerMenu dissapearBurgerMenu={this.dissapearBurgerMenu} />
          </div>
        ) : (
          <div className="Burger-Menu"></div>
        )}
        <div className="Header-Homepage">
          <Cursor />
          <Element name="home">
            <NavBar showBurgerMenu={this.showBurgerMenu} />
          </Element>
          <HiddenNavBar showBurgerMenu={this.showBurgerMenu} />
          <Homepage />
        </div>
        <About />
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <ProjectGallery />
        </Element>
        <Element name="contact">
          <Contact />
          <Footer />
        </Element>
        <AbsoluteIcons showMenu={this.showBottomMenu} />
      </div>
    );
  }
}

export default Page;
