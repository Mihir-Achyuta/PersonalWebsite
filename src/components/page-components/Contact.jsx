import React from "react";
import Fade from "react-reveal/Fade";
import SubmitModal from "../mini-components/form-components/SubmitModal";
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
    this.removeModel = this.removeModel.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  changeText(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  removeModel() {
    this.setState({ formSent: false });
  }
  handleSubmit(ev) {
    ev.preventDefault();
    this.setState({
      formSent: true,
      formText: "Form Sent. I will get back to you as soon as possible.",
    });
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
      }
    };
    xhr.send(data);
  }
  render() {
    return (
      <section className="Contact">
        <Fade big left>
          <div className="Contact-Div">
            <h1 className="Contact-Header">Contact Me!</h1>
            <h3 className="Contact-Alternate">
              Email : achyutamihir@gmail.com
            </h3>
            <form
              className="Contact-Form"
              onSubmit={this.handleSubmit}
              action="https://formspree.io/f/moqprelo"
              method="POST"
            >
              <div className="Contact-Name-Div">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="Contact-Name-Text Input-Field"
                  value={this.state.name}
                  onChange={this.changeText}
                  required
                ></input>
              </div>
              <div className="Contact-Email-Div">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="Contact-Email-Text Input-Field"
                  value={this.state.email}
                  onChange={this.changeText}
                  required
                ></input>
              </div>
              <div className="Contact-Message-Div">
                <textarea
                  name="text"
                  className="Contact-Message-Text Input-Field"
                  type="text"
                  placeholder="Message"
                  value={this.state.text}
                  onChange={this.changeText}
                  required
                ></textarea>
              </div>
              <div className="Contact-Button-Div">
                <button type="submit" className="Contact-Button">
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </Fade>
        {this.state.formSent ? (
          <SubmitModal
            removeModel={this.removeModel}
            message={this.state.formText}
          />
        ) : null}
      </section>
    );
  }
}

export default Contact;
