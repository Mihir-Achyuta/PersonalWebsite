import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section className="Contact">
        <form>
          <div className="Contact-Name-Div">
            <label className="Contact-Name">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="Contact-Name-Text"
            ></input>
          </div>
          <div className="Contact-Email-Div">
            <label className="Contact-Email">Email</label>
            <input
              className="Contact-Email-Text"
              type="text"
              placeholder="Enter Email"
            ></input>
          </div>
          <div className="Contact-Message-Div">
            <label className="Contact-Message">Message</label>
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
