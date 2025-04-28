import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>WanderWise</h3>
          <p>
            Aplikasi Tour Guide Digital untuk pengalaman wisata terbaik dengan
            panduan lokal terpercaya.
          </p>
        </div>

        <div className="footer-section">
          <h3>Navigasi</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Beranda</Link>
            </li>
            <li>
              <Link to="/destinasi">Destinasi</Link>
            </li>
            <li>
              <Link to="/tour-guide">Tour Guide</Link>
            </li>
            <li>
              <Link to="/ulasan">Ulasan</Link>
            </li>
            <li>
              <Link to="/tentang">Tentang Kami</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Kontak</h3>
          <p>Email: info@wanderwise.id</p>
          <p>Phone: +62 123 4567 890</p>
          <p>Alamat: Jl. Example No. 123, Jakarta</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} WanderWise. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
