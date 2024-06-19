import React from 'react';
import './Navbar.css'; // Import the CSS file for Navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Movie Search App</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
