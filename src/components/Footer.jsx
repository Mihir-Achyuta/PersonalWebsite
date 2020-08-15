import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section className="Footer">
        <p>Made by ©Mihir-Achyuta</p>
        <img
          src="https://img.icons8.com/material-sharp/24/000000/github.png"
          alt="Github"
        />
        <img
          src="https://img.icons8.com/android/24/000000/linkedin.png"
          alt="Linkedin"
        />
        <a href="mailto: achyutamihir@gmail.com">
          <img
            src="https://img.icons8.com/android/24/000000/filled-message.png"
            alt="Email"
          />
        </a>
      </section>
    );
  }
}

export default Footer;
