import React from "react";

class Learning extends React.Component {
  render() {
    return (
      <section className="Learning">
        <h1 className="Learning-Header">
          Where I've Learnt Programming and Web Dev
        </h1>
        <div className="Learning-Course-One">
          <p>Lorem ipsum dolor sit amet</p>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <img
            className="Learning-Course-One-Picture"
            src="https://picsum.photos/200/200"
            alt="Project"
          />
          <img
            className="Learning-Course-One-Icon"
            src="https://img.icons8.com/material-sharp/24/000000/github.png"
            alt="Github"
          />
        </div>
      </section>
    );
  }
}

export default Learning;
