import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <section className="Projects">
        <div className="Projects-One-Div">
          <div className="Projects-One-Text">
            <h1 className="Projects-One-Name">Project Name</h1>
            <div className="Projects-One-Description-Div">
              <h2 className="Projects-One-Description-Header">Description:</h2>
              <p className="Projects-One-Description-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="Projects-One-Purpose-Div">
              <h2 className="Projects-One-Purpose-Header">Purpose:</h2>
              <p className="Projects-One-Purpose-Text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="Projects-One-Stack-Div">
              <h2 className="Projects-One-Stack-Header">Tech Stack:</h2>
              <p className="Projects-One-Stack-Text">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
          <div className="Projects-One-Image">
            <img src="https://picsum.photos/300/200" alt="Project"></img>
          </div>
          <div className="Projects-One-Icons">
            <img
              className="Projects-One-Icon"
              src="https://img.icons8.com/material-sharp/24/000000/github.png"
              alt="Github"
            />
            <img
              className="Projects-One-Icon"
              src="https://img.icons8.com/material-sharp/24/000000/visible.png"
              alt="Eye"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
