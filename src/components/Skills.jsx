import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <section className="Skills">
        <div className="Front-Back-Tool">
          <div className="Skills-Frontend">
            <h1 className="Skills-Frontend-Header">Frontend</h1>
            <ul className="Skills-Frontend-Unordered-List">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
              <li>Javscript</li>
              <li>jQuery</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="Skills-Backend">
            <h1 className="Skills-Backend-Header">Backend</h1>
            <ul className="Skills-Backend-Unordered-List">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>EJS</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Passport.js + OAuth</li>
              <li>REST</li>
            </ul>
          </div>
          <div className="Skills-Tools">
            <h1 className="Skills-Tools-Header">Tools</h1>
            <ul className="Skills-Tools-Unordered-List">
              <li>Git/Git-Bash</li>
              <li>Github</li>
              <li>Hyper</li>
              <li>Atom</li>
            </ul>
          </div>
        </div>
        <div className="Skills-Projects-Button-Div">
          <button className="Skills-Projects-Button">
            So What Have I Worked On?
          </button>
        </div>
      </section>
    );
  }
}

export default Skills;
