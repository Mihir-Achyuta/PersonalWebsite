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
            I'm a senior attending Evergreen Valley High School that is planning
            to major in Computer Science in college.
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
