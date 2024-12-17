import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../../images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="FilmCity Logo" className="logo-image" />
      </div>

      {/* Menu Burger (Mobile only) */}
      <div className="nav-toggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation */}
      <nav className={`nav ${menuOpen ? "mobile-visible" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/series">Series</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Header Actions (Hidden in mobile) */}
      <div className="header-actions">
        <input type="text" className="search-bar" placeholder="Search" />
        <select className="language-selector">
          <option value="en">Language (En)</option>
          <option value="fr">French (Fr)</option>
          <option value="es">Spanish (Es)</option>
        </select>
        <button className="btn sign-in">Sign in</button>
        <button
          className="btn subscribe"
          onClick={() => (window.location.href = "/SignUp")}
        >
          Subscribe
        </button>
      </div>
    </header>
  );
};

export default Header;
