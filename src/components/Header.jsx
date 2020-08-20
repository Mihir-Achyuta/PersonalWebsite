import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <div className="Header-Logo">
          <h1 className="Header-Logo-Left">Mihir</h1>
        </div>
        <nav className="Header-Navbar">
          <ul className="Header-Unordered-List">
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
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
