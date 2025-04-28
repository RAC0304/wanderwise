import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-top">
          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="auth-buttons">
            <Link to="/login" className="login-button">
              Login / Daftar
            </Link>
          </div>
        </div>

        <nav className={`navigation ${isMenuOpen ? "menu-open" : ""}`}>
          <ul className="nav-menu">
            <li>
              <Link
                to="/"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                to="/destinasi"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Destinasi
              </Link>
            </li>
            <li>
              <Link
                to="/tour-guide"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Tour Guide
              </Link>
            </li>
            <li>
              <Link
                to="/peta"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Peta Interaktif
              </Link>
            </li>
            <li>
              <Link
                to="/ulasan"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Ulasan
              </Link>
            </li>
            <li>
              <Link
                to="/tentang"
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                Tentang Kami
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
