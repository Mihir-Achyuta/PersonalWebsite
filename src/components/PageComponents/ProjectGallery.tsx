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
            projectUrl="https://mihirachyuta.netlify.app/"
            githubUrl="https://github.com/Mihir-Achyuta/PersonalWebsite"
          />
          <Project
            projectName="CalendWar"
            description=" An easy way to get world events on a specific day, month, and/or year and learn a bit of history on the side."
            stack={[
              "React.JS",
              "Material-UI",
              "Node.JS",
              "Express",
              "Firebase",
            ]}
            projectUrl="https://calendwar.netlify.app/"
            githubUrl="https://github.com/HackathonRepos/CalendWar"
          />
          <Project
            projectName="OpenInder"
            description="Combining Open Source and Tinder together to match up people with dream Open Source Projects."
            stack={[
              "React.JS",
              "Material-UI",
              "Firebase",
              "Firestore",
              "Python",
            ]}
            projectUrl="https://openinder.netlify.app/"
            githubUrl="https://github.com/HackathonRepos/OpenInder"
          />
          <Project
            projectName="APPreciation"
            description="Helping small businesses out with a note or a donation link during the Covid 19 pandemic"
            stack={["React.JS", "Chakra-UI", "Firebase", "Firestore", "Flask"]}
            projectUrl="https://apppreciate.netlify.app/"
            githubUrl="https://github.com/HackathonRepos/APPreciation"
          />
        </div>
      </div>
    );
  }
}

export default ProjectGallery;
