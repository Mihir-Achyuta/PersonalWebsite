import React from "react";

class About extends React.Component {
  render() {
    return (
      <section className="About">
        <div className="About-Header-Div">
          <h1 className="About-Header">Who am I</h1>
        </div>
        <div className="About-Statement-Div">
          <p className="About-Statement">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="About-Technology-Button-Div">
          <button className="About-Technology-Button">
            What Technologies Do I Work With?
          </button>
        </div>
      </section>
    );
  }
}

export default About;
