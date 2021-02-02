import React from "react";

import SkillCard from "../MiniComponents/SkillComponents/SkillCard";

import Fade from "react-reveal/Fade";

class Skills extends React.Component {
  render() {
    return (
      <section className="Skills">
        <Fade left>
          <h1 className="Skills-Header">What I Work With :</h1>
        </Fade>
        <div className="Front-Back-Tool">
          <Fade delay={500}>
            <SkillCard
              path="Frontend"
              technologies={[
                "HTML",
                "CSS",
                "Sass",
                "Bootstrap",
                "Javascript",
                "jQuery",
                "React.js",
              ]}
            />
          </Fade>
          <Fade delay={1000}>
            <SkillCard
              path="Backend"
              technologies={[
                "Node.js",
                "Express.js",
                "EJS",
                "Postgres-SQL",
                "MongoDB",
                "Mongoose",
                "Passport.js + OAuth",
                "REST",
              ]}
            />
          </Fade>
          <Fade delay={1500}>
            <SkillCard
              path="Tools"
              technologies={[
                "Git/Git-Bash",
                "Github",
                "Hyper",
                "Atom",
                "MongoDB Atlas",
              ]}
            />
          </Fade>
        </div>
      </section>
    );
  }
}

export default Skills;
