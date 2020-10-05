import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section className="Contact">
        <h1>Contact Me!</h1>
        <form className="Contact-Form">
          <div className="Contact-Name-Div">
            <input
              type="text"
              placeholder="Enter Name"
              className="Contact-Name-Text"
            ></input>
          </div>
          <div className="Contact-Email-Div">
            <input
              className="Contact-Email-Text"
              type="text"
              placeholder="Enter Email"
            ></input>
          </div>
          <div className="Contact-Message-Div">
            <textarea
              className="Contact-Message-Text"
              placeholder="Enter Message"
            ></textarea>
          </div>
          <input type="submit" value="Submit"></input>
        </form>
      </section>
    );
  }
}

export default Contact;
