import React from "react";

import Project from "../mini-components/project-components/Project";
import ProfilePic from "../../documents/pictures/project-picture.png";

class ProjectGallery extends React.Component {
  render() {
    return (
      <div className="Project-Gallery">
        <h1 className="Project-Gallery-Header">Portfolio</h1>
        <div className="Project-Gallery-Projects">
          <Project
            projectName="Portfolio Website"
            description="My website where you can view my web and mobile application projects utilizing various technologies."
            stack={["React.JS", "Node.JS"]}
            projectPicture={ProfilePic}
            projectUrl="https://mihir-achyuta.netlify.app/"
            githubUrl="https://github.com/Mihir-Achyuta"
            fadeLeft
          />
          <Project
            projectName="Portfolio Website"
            description="My website where you can view my web and mobile application projects utilizing various technologies."
            stack={["HTML", "CSS", "JavaScript", "React", "Node", "Express"]}
            projectPicture={ProfilePic}
            projectUrl="https://mihir-achyuta.netlify.app/"
            githubUrl="https://github.com/Mihir-Achyuta"
            fadeLeft
          />
          <Project
            projectName="Portfolio Website"
            description="My website where you can view my web and mobile application projects utilizing various technologies."
            stack={["React.JS", "Node.JS"]}
            projectPicture={ProfilePic}
            projectUrl="https://mihir-achyuta.netlify.app/"
            githubUrl="https://github.com/Mihir-Achyuta"
            fadeLeft
          />
          <Project
            projectName="Portfolio Website"
            description="My website where you can view my web and mobile application projects utilizing various technologies."
            stack={["HTML", "CSS", "JavaScript", "React", "Node", "Express"]}
            projectPicture={ProfilePic}
            projectUrl="https://mihir-achyuta.netlify.app/"
            githubUrl="https://github.com/Mihir-Achyuta"
            fadeLeft
          />
        </div>
      </div>
    );
  }
}

export default ProjectGallery;
