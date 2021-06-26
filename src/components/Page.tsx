import React from "react";

import NavBar from "./PageComponents/NavBar";
import HiddenNavBar from "./PageComponents/HiddenNavBar";
import Homepage from "./PageComponents/Homepage";
import Experience from "./PageComponents/Experience";
import Skills from "./PageComponents/Skills";
import ProjectGallery from "./PageComponents/ProjectGallery";
import Contact from "./PageComponents/Contact";
import Footer from "./PageComponents/Footer";
import AbsoluteIcons from "./PageComponents/AbsoluteIcons";

import TopBurgerMenu from "./MiniComponents/BurgerComponents/TopBurgerMenu";
import BottomBurgerMenu from "./MiniComponents/BurgerComponents/BottomBurgerMenu";

import AnimatedCursor from "react-animated-cursor";
import { Element } from "react-scroll";

interface IPageState {
  bottomMenuShown: boolean;
  burgerMenuShown: boolean;
}

class Page extends React.Component<{}, IPageState> {
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

  showBottomMenu(): void {
    this.setState({ bottomMenuShown: true });
  }

  dissapearBottomMenu(): void {
    this.setState({ bottomMenuShown: false });
  }

  showBurgerMenu(): void {
    this.setState({ burgerMenuShown: true });
  }

  dissapearBurgerMenu(): void {
    this.setState({ burgerMenuShown: false });
  }
  render() {
    return (
      <div className="App-Div">
        <AnimatedCursor color="255, 255, 255" />
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
          <Element name="home">
            <NavBar showBurgerMenu={this.showBurgerMenu} />
          </Element>
          {/* <HiddenNavBar showBurgerMenu={this.showBurgerMenu} /> */}
          <Homepage />
        </div>
        <Element name="experience">
          <Experience />
        </Element>
        <Element name="projects">
          <ProjectGallery />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="contact">
          <Contact />
          {/* <Footer /> */}
        </Element>
        {/* <AbsoluteIcons showMenu={this.showBottomMenu} /> */}
      </div>
    );
  }
}

export default Page;
