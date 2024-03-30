import React from "react";

//@ts-ignore
import resume from "../../documents/resume/resume.pdf";

class Contact extends React.Component {
    render() {
        return (
            <section className="Contact">
                <h1 className="Contact-Header">Contact Me</h1>
                <div className="Contact-Row">
                    <div className="Contact-Method">
                        <h2>Email</h2>
                        <a href="mailto::achyutamihir@gmail.com">
                            achyutamihir@gmail.com
                        </a>
                    </div>
                    {/* <div className="Contact-Method">
              <h2>LinkedIn</h2>
              <a
                href="https://linkedin.com/in/mihirachyuta"
                target="_blank"
                rel="noopener noreferrer"
              >
                /mihirachyuta
              </a>
            </div> */}
                </div>
                <div className="Contact-Row">
                    <div className="Contact-Method">
                        <h2>Github</h2>
                        <a
                            href="https://github.com/Mihir-Achyuta"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            /mihir-achyuta
                        </a>
                    </div>
                    <div className="Contact-Method">
                        <h2>Resume</h2>
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            resume
                        </a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
