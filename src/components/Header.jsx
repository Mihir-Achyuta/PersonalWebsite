import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-Logo">
          <h1 className="Header-Logo-Left">
            {"<"}MIHIR{"/>"}
          </h1>
        </div>
        <nav className="Header-Navbar">
          <ol className="Header-Unordered-List">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SKILLS</li>
            <li>PROJECTS</li>
            <li>CONTACT</li>
            <li>RESUME</li>
          </ol>
          <img
            className="Header-Hamburger"
            src="https://img.icons8.com/android/24/000000/menu.png"
            alt="Hamburger Menu"
          />
        </nav>
      </div>
    );
  }
}

export default Header;
