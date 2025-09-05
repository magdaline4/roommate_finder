import React, { useState } from "react";
import "../Navbar/Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar">
      {/* ✅ Logo */}
      <h2 className="logo">RF</h2>

      {/* ✅ Hamburger Icon */}
      <div
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* ✅ Navigation Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
        </li>
        <li>
          <a href="#register" onClick={() => setIsOpen(false)}>Login / SignUp</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
