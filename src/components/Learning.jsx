import React from "react";

class Learning extends React.Component {
  render() {
    return (
      <section className="Learning">
        <h1 className="Learning-Header">
          Where I've Learnt Programming and Web Dev
        </h1>
        <div className="Learning-Course-One">
          <div className="Learning-Course-One-Text">
            <h2>One Two Three Four</h2>
            <p>Lorem ipsum dolor sit amet</p>
            <p>Lorem ipsum dolor sit amet, consectetur</p>
            <img
              className="Learning-Course-One-Icon"
              src="https://img.icons8.com/material-sharp/24/000000/github.png"
              alt="Github"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Learning;
