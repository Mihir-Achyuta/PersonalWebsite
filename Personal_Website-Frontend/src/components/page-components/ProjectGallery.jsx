import React from "react";
import Project from "./Project";
import ProfilePic from "../../documents/pictures/project-picture.png";

class ProjectGallery extends React.Component {
  render() {
    return (
      <div>
        <Project
          projectName="Portfolio Website"
          description="My website where you can view my web and mobile application projects utilizing various technologies."
          stack={["React", "Node"]}
          projectPicture={ProfilePic}
          projectUrl="https://mihir-achyuta.netlify.app/"
          fadeLeft
        />
      </div>
    );
  }
}

export default ProjectGallery;
