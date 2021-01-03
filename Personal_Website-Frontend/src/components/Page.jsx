import React from "react";

import NavBar from "./page-components/NavBar";
import HiddenNavBar from "./page-components/HiddenNavBar";
import Homepage from "./page-components/Homepage";
import About from "./page-components/About";
import Skills from "./page-components/Skills";
import ProjectInfoModal from "./page-components/ProjectInfoModal";
import ProjectGrid from "./page-components/ProjectGrid";
import Contact from "./page-components/Contact";
import Footer from "./page-components/Footer";
import AbsoluteIcons from "./page-components/AbsoluteIcons";

import TopBurgerMenu from "./mini-components/burger-components/TopBurgerMenu";
import BottomBurgerMenu from "./mini-components/burger-components/BottomBurgerMenu";
import Cursor from "./mini-components/link-components/Cursor";

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
          <ProjectGrid />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
        <AbsoluteIcons showMenu={this.showBottomMenu} />
      </div>
    );
  }
}

export default Page;

//Old project design kept for future reference
// {
//   <ProjectInfoModal
//   projectName="Project Name 1"
//   description="Lorem ipsum dolor sit amet, consectetur"
//   stack="Lorem ipsum dolor sit amet, consectetur"
//   imgUrl="https://picsum.photos/300/200"
//   projectUrl="https://mihir-achyuta.netlify.app/"
//   fadeLeft
// />;
// }
