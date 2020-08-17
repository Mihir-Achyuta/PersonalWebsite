import React from "react";

class Homepage extends React.Component {
  render() {
    return (
      <section className="Homepage">
        <div className="Homepage-Text-Div">
          <h1 className="Homepage-Greeting Homepage-Grid">Hi</h1>
          <h2 className="Homepage-Description Homepage-Grid">
            A Fullstack Developer
          </h2>
          <h1 className="Homepage-Name Homepage-Grid">I'm Mihir</h1>
          <p className="Homepage-Technology Homepage-Grid">(In Javascript)</p>
        </div>
        <div className="Homepage-Icons">
          <img
            className="Homepage-Icon"
            src="https://img.icons8.com/material-sharp/24/000000/github.png"
            alt="Github"
          />
          <img
            className="Homepage-Icon"
            src="https://img.icons8.com/android/24/000000/linkedin.png"
            alt="Linkedin"
          />
          <img
            className="Homepage-Icon"
            src="https://img.icons8.com/material-sharp/24/000000/open-resume.png"
            alt="Resume"
          />
        </div>
        <div className="Homepage-Identification-Div">
          <button className="Homepage-Identification">So who am I?</button>
        </div>
      </section>
    );
  }
}

export default Homepage;
