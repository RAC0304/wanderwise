import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />

      <div className="main-content">
        <div className="title-section">
          <h2>
            Aplikasi Web Tour Guide Digital untuk Memban-tuma Wisatawan
            Menemukan Destinasi Ter-baik dengan Panduan Lokal Terpercaya
            (WanderWise)
          </h2>
        </div>

        <div className="features-grid">
          <div className="feature-box">
            <h3>Cari Destinasi</h3>
            <Link to="/destinasi" className="feature-button">
              Tombol Cepat
            </Link>
          </div>

          <div className="feature-box">
            <h3>Peta Interaktif</h3>
            <div className="map-placeholder"></div>
          </div>

          <div className="feature-box">
            <h3>Tour Guide</h3>
            <Link to="/tour-guide" className="feature-button">
              Tombol Cepat
            </Link>
          </div>

          <div className="feature-box">
            <h3>Ulasan</h3>
            <div className="review-placeholder"></div>
          </div>
        </div>
      </div>

      <footer className="bottom-navigation">
        <nav>
          <ul>
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
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
