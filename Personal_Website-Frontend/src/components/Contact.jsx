import React from "react";
import Fade from "react-reveal/Fade";

class Contact extends React.Component {
  render() {
    return (
      <section className="Contact">
        <Fade big left>
          <div className="Contact-Div">
            <h1 className="Contact-Header">Contact Me!</h1>
            <form className="Contact-Form">
              <div className="Contact-Name-Div">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="Contact-Name-Text Input-Field"
                ></input>
              </div>
              <div className="Contact-Email-Div">
                <input
                  className="Contact-Email-Text Input-Field"
                  type="text"
                  placeholder="Enter Email"
                ></input>
              </div>
              <div className="Contact-Message-Div">
                <input
                  className="Contact-Message-Text Input-Field"
                  placeholder="Enter Message"
                  type="text"
                ></input>
              </div>
              <button className="Contact-Button">SUBMIT</button>
            </form>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Contact;
