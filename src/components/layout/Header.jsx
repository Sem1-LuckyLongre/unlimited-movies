import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const getNavLinkStyle = ({ isActive }) => ({
    color: isActive ? "#ff6347" : "white",
  });
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar">
      <div className="logo" onClick={() => navigate("/")}>Unlimited Movies</div>
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" style={getNavLinkStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={getNavLinkStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" style={getNavLinkStyle}>
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={getNavLinkStyle}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div
        className={`burger-icon ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
        <div className="burger-bar"></div>
      </div>
    </header>
  );
};
