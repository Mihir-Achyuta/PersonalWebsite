import React from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      text: "",
      formSent: false,
      formText: "",
    };
    this.changeText = this.changeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeText(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    axios
      .post("/api/email", {
        name: this.state.name,
        email: this.state.email,
        text: this.state.text,
      })
      .then((response) => {
        if (response.data.success) {
          this.setState({
            formSent: true,
            formText: "Email sent! I will get back to you as soon as possible",
          });
        } else {
          this.setState({
            formSent: true,
            formText:
              "Email not sent. Please email me directly at achyutamihir@gmail.com",
          });
        }
      })
      .catch((err) => {
        this.setState({
          formSent: true,
          formText:
            "Email not sent. Please email me directly at achyutamihir@gmail.com",
        });
      });
  }
  render() {
    return (
      <section className="Contact">
        <Fade big left>
          <div className="Contact-Div">
            <h1 className="Contact-Header">Contact Me!</h1>
            <form className="Contact-Form" onSubmit={this.handleSubmit}>
              <div className="Contact-Name-Div">
                <input
                  name="name"
                  type="text"
                  placeholder="Enter Name"
                  className="Contact-Name-Text Input-Field"
                  value={this.state.name}
                  onChange={this.changeText}
                ></input>
              </div>
              <div className="Contact-Email-Div">
                <input
                  name="email"
                  type="text"
                  placeholder="Enter Email"
                  className="Contact-Email-Text Input-Field"
                  value={this.state.email}
                  onChange={this.changeText}
                ></input>
              </div>
              <div className="Contact-Message-Div">
                <input
                  name="text"
                  className="Contact-Message-Text Input-Field"
                  type="text"
                  placeholder="Enter Message"
                  value={this.state.text}
                  onChange={this.changeText}
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
