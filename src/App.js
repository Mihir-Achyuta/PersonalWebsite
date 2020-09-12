import React from "react";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AbsoluteIcons from "./components/AbsoluteIcons";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="Header-Homepage">
        <Header />
        <Homepage />
      </div>
      <About />
      <Skills />
      <Projects />
      <Learning />
      <Contact />
      <Footer />
      <AbsoluteIcons />
    </div>
  );
}

export default App;
