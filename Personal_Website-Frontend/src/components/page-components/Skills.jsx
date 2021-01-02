import React from "react";

import SkillWord from "../mini-components/skill-components/SkillWord";
import SkillCard from "../mini-components/skill-components/SkillCard";

import Fade from "react-reveal/Fade";

class Skills extends React.Component {
  render() {
    return (
      <section className="Skills">
        <Fade left>
          <h1 className="Skills-Header">What I Work With :</h1>
        </Fade>
        <div className="Front-Back-Tool">
          <Fade>
            <SkillCard />
          </Fade>
          <Fade>
            <SkillCard />
          </Fade>
          <Fade>
            <SkillCard />
          </Fade>
        </div>
      </section>
    );
  }
}

export default Skills;

//frontend
// <li>HTML</li>
{
  /* <li>CSS</li>
<li>SASS</li>
<li>Bootstrap</li>
<li>Javscript</li>
<li>jQuery</li>
<li>React.js</li>
<li>Flutter</li> */
}

//backend
// <li>Node.js</li>
{
  /* <li>Aqueduct</li>
<li>Express.js</li>
<li>EJS</li>
<li>PostgresSQL</li>
<li>MongoDB</li>
<li>Mongoose</li>
<li>Passport.js + OAuth</li>
<li>REST</li> */
}

//tools
{
  /* <li>Git/Git-Bash</li>
<li>Github</li>
<li>Hyper</li>
<li>Atom</li>
<li>MongoDB Atlas</li> */
}
