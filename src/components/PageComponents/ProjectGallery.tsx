import React from "react";

import Project from "../MiniComponents/ProjectComponents/Project";

class ProjectGallery extends React.Component {
  render() {
    return (
      <div className="Project-Gallery">
        <h1 className="Project-Gallery-Header">Projects</h1>
        <div className="Project-Gallery-Projects">
          <Project
            projectName="Personal Website"
            description="My Personal Website showcasing all my Web Development projects."
            stack={["React.JS", "Typescript", "SASS"]}
            githubUrl="https://github.com/Mihir-Achyuta/PersonalWebsite"
          />
        </div>
      </div>
    );
  }
}

export default ProjectGallery;
