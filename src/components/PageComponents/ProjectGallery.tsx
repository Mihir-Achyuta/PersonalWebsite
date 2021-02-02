import React from "react";

import Project from "../MiniComponents/ProjectComponents/Project";
import ProfilePic from "../../documents/pictures/project-picture.png";

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
            projectPicture={ProfilePic}
            projectUrl="https://mihirachyuta.netlify.app/"
            githubUrl="https://github.com/Mihir-Achyuta/PersonalWebsite"
          />
          <Project
            projectName="FontBlurbs"
            description="This is a description of Project Name 2 and a brief function of what it does"
            stack={[
              "Pug",
              "SASS",
              "Javascript",
              "Node.JS",
              "Express.JS",
              "MongoDB",
            ]}
            projectPicture={ProfilePic}
            projectUrl="https://mihir-achyuta.netlify.app/"
            githubUrl="https://github.com/Mihir-Achyuta"
          />
          <Project
            projectName="Project Name 3"
            description="This is a description of Project Name 3 and a brief function of what it does"
            stack={[
              "React.JS",
              "SASS",
              "Node.JS",
              "Express.JS",
              "MongoDB",
              "Material-UI",
            ]}
            projectPicture={ProfilePic}
            projectUrl="https://mihir-achyuta.netlify.app/"
            githubUrl="https://github.com/Mihir-Achyuta"
          />
          <Project
            projectName="Project Name 4"
            description="This is a description of Project Name 4 and a brief function of what it does"
            stack={["Flutter", "Dart"]}
            projectPicture={ProfilePic}
            projectUrl="https://mihir-achyuta.netlify.app/"
            githubUrl="https://github.com/Mihir-Achyuta"
          />
        </div>
      </div>
    );
  }
}

export default ProjectGallery;
