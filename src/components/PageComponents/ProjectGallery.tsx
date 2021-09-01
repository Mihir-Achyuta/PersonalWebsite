import React from "react";

import Project from "../MiniComponents/ProjectComponents/Project";

class ProjectGallery extends React.Component {
  render() {
    return (
      <div className="Project-Gallery">
        <h1 className="Project-Gallery-Header">Projects</h1>
        <div className="Project-Gallery-Projects">
          <Project
            projectName="CATastrophe"
            description="Stay focused otherwise there'll be a CATastrophe!"
            stack={"TypeScript, AWS(EC2/RDS), GraphQL, React Native, Node, MySQL, UI Kitten, Jest".split(
              ","
            )}
            githubUrl="https://github.com/Mihir-Achyuta/_CATastrophe_"
          />
          <Project
            projectName="PaletteBuds"
            description="An easy way to create and view stylish color palettes and also lets you have fun making them!"
            stack={"TypeScript, React, Redux, Node, Express, MongoDB, Material-UI".split(
              ","
            )}
            githubUrl="https://github.com/Mihir-Achyuta/_PaletteBuds_"
          />
          <Project
            projectName="DSAPlayground"
            description="Making data structures and algorithms accessible via a Command Line Interface"
            stack={"TypeScript, Node, Express, Firebase, Docker, NPM, Qovery".split(
              ","
            )}
            githubUrl="https://github.com/Mihir-Achyuta/_DSAPlayground_"
          />
          <Project
            projectName="FontBlurbs"
            description="Easily choose you're next font pairings and save them for future use"
            stack={"TypeScript, Next.JS, MongoDB, Mongoose, Tailwind CSS".split(
              ","
            )}
            githubUrl="https://github.com/Mihir-Achyuta/_FontBlurbs_"
          />
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
