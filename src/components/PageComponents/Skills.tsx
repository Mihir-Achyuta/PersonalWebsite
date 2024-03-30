import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLaptopCode,
    faServer,
    faTools,
} from "@fortawesome/free-solid-svg-icons";

class Skills extends React.Component {
    render() {
        return (
            <section className="Skills">
                <h1 className="Skills-Header">What I Work With</h1>
                <div className="Skills-List">
                    <div className="Skills-Category Skills-Left">
                        <div className="Skills-Category-Header">
                            <FontAwesomeIcon icon={faLaptopCode} size="3x" />
                        </div>
                        <h1 className="Skills-Category-Header">Frontend</h1>
                        <p>JavaScript, TypeScript</p>
                        <p>React : JS, Native(Expo), Next.js</p>
                        <p>Redux</p>
                        <p>JavaScript</p>
                        <p>TailwindCSS, Material UI, ChakraUI</p>
                        <p>CSS and SASS</p>
                        <p>HTML</p>
                    </div>
                    <div className="Skills-Category">
                        <div className="Skills-Category-Header">
                            <FontAwesomeIcon icon={faServer} size="3x" />
                        </div>
                        <h1 className="Skills-Category-Header">Backend</h1>
                        <p>Node</p>
                        <p>Java</p>
                        <p>Express</p>
                        <p>SQL(MySQL)</p>
                        <p>MongoDB</p>
                        <p>Firebase</p>
                        <p>Apollo GraphQL</p>
                        <p>ORMS: Mongoose, Prisma</p>
                    </div>
                    <div className="Skills-Category Skills-Right">
                        <div className="Skills-Category-Header">
                            <FontAwesomeIcon icon={faTools} size="3x" />
                        </div>
                        <h1 className="Skills-Category-Header">Tools</h1>
                        <p>Git</p>
                        <p>AWS(EC2, RDS)</p>
                        <p>Docker</p>
                        <p>Heroku</p>
                        <p>MongoDB Atlas</p>
                        <p>Jest</p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Skills;
