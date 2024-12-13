import React from "react";
import { Link } from "react-router-dom"; // Importer Link de react-router-dom
import "./header.css";
import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="FilmCity Logo" className="logo-image" />
      </div>

      {/* Navigation */}
      <nav className="nav">
        <Link to="/">Home</Link> {/* Redirige vers la page d'accueil */}
        <Link to="/movie">Movie</Link> {/* Redirige vers la page des films */}
        <Link to="/series">Series</Link> {/* Redirige vers la page des séries */}
        <Link to="/about">About</Link> {/* Redirige vers la page À propos */}
        <Link to="/contact">Contact</Link> {/* Redirige vers la page Contact */}
      </nav>

      {/* Header Actions */}
      <div className="header-actions">
        <input type="text" className="search-bar" placeholder="Search" />
        <select className="language-selector">
          <option value="en">Language (En)</option>
          <option value="fr">French (Fr)</option>
          <option value="es">Spanish (Es)</option>
        </select>
        <button className="btn sign-in">Sign in</button>
        <button className="btn subscribe">Subscribe</button>
      </div>
    </header>
  );
};

export default Header;
