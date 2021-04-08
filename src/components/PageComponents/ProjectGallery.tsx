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
            projectName="CalendWar"
            description=" An easy way to get world events on a specific day, month, and/or year and learn a bit of history on the side."
            stack={[
              "React.JS",
              "Material-UI",
              "Node.JS",
              "Express",
              "Firebase",
            ]}
            projectPicture={
              "https://camo.githubusercontent.com/a2351cf98cbb5bcc47eedd72b3aae3ded2eac233f394f47bd0d5d9a1b8626c17/68747470733a2f2f6368616c6c656e6765706f73742d73332d6368616c6c656e6765706f73742e6e6574646e612d73736c2e636f6d2f70686f746f732f70726f64756374696f6e2f736f6674776172655f70686f746f732f3030312f3432322f3336312f64617461732f6f726967696e616c2e504e47"
            }
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
            projectPicture={
              "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/440/953/datas/gallery.jpg"
            }
            projectUrl="https://openinder.netlify.app/"
            githubUrl="https://github.com/HackathonRepos/OpenInder"
          />
          <Project
            projectName="APPreciation"
            description="Helping small businesses out with a note or a donation link during the Covid 19 pandemic"
            stack={["React.JS", "Chakra-UI", "Firebase", "Firestore", "Flask"]}
            projectPicture={
              "https://camo.githubusercontent.com/deb3f94a6c1a0f582b947479dc1c9b5cf5005ce223a1c257d9f6ed203b252e40/68747470733a2f2f6368616c6c656e6765706f73742d73332d6368616c6c656e6765706f73742e6e6574646e612d73736c2e636f6d2f70686f746f732f70726f64756374696f6e2f736f6674776172655f70686f746f732f3030312f3436382f3739382f64617461732f67616c6c6572792e6a7067"
            }
            projectUrl="https://apppreciate.netlify.app/"
            githubUrl="https://github.com/HackathonRepos/APPreciation"
          />
        </div>
      </div>
    );
  }
}

export default ProjectGallery;
