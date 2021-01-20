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
    this.handleSubmitAxios = this.handleSubmitAxios.bind(this);
  }
  changeText(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  removeModel() {
    this.setState({ formSent: false });
  }
  handleSubmitAxios(evt) {
    evt.preventDefault();
    const form = evt.target;
    axios({
      method: "post",
      url: "https://formspree.io/f/moqprelo",
      data: new FormData(form),
    })
      .then((r) => {
        this.setState({
          formSent: true,
          formText: "Form Sent. I will get back to you as soon as possible.",
          name: "",
          email: "",
          text: "",
        });
      })
      .catch((r) => {
        this.setState({
          formSent: true,
          formText:
            "There was an error with the form submission. Please contact me at achyutamihir@gmail.com",
        });
      });
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
            <form className="Contact-Form" onSubmit={this.handleSubmitAxios}>
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
