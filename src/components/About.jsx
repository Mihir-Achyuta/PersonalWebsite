import React from "react";

class About extends React.Component {
  render() {
    return (
      <section className="About">
        <div className="About-Header-Div">
          <h1 className="About-Header">Who am I :</h1>
        </div>
        <div className="About-Statement-Div">
          <p className="About-Statement">
            I'm a senior attending Evergreen Valley High School that is planning
            to major in Computer Science in college. I started programming
            junior year and chose the web development path since I briefly
            dabbed in HTML and CSS years ago. Since then I've been developing
            with Fullstack Javascript with the MERN stack.
          </p>
        </div>
        <div className="About-Technology-Button-Div">
          <button className="About-Technology-Button">
            WHAT TECH DO I WORK WITH?
          </button>
        </div>
      </section>
    );
  }
}

export default About;
