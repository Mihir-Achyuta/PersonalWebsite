import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

class Projects extends React.Component {
  render() {
    let styles = {
      backgroundColor: this.props.backColor,
      color: this.props.textColor,
      borderTop: "5px solid " + this.props.topBorder,
    };
    return (
      <section className="Projects" style={styles}>
        <h1 className="Projects-One-Name">{this.props.projectName}</h1>
        <div className="Projects-One-Div">
          <div className="Projects-One-Text">
            <div className="Projects-One-Description-Div">
              <h2 className="Projects-One-Description-Header">Description:</h2>
              <p className="Projects-One-Description-Text">
                {this.props.description}
              </p>
            </div>
            <div className="Projects-One-Stack-Div">
              <h2 className="Projects-One-Stack-Header">Tech Stack:</h2>
              <p className="Projects-One-Stack-Text">{this.props.stack}</p>
            </div>
          </div>
          <div className="Projects-One-Images">
            <div className="Projects-One-Image">
              <img src={this.props.imgUrl} alt="Project"></img>
            </div>
            <div className="Projects-One-Icons">
              <FontAwesomeIcon
                className="Projects-One-Icon"
                icon={faGithub}
                size="2x"
              />
              <FontAwesomeIcon
                className="Projects-One-Icon"
                icon={faEye}
                size="2x"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;