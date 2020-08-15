import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="Header">
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
        </nav>
      </header>
    );
  }
}

export default Header;
