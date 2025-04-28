import React, { useEffect, useState, useRef } from "react";
import "./Hero.css";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  // Counter states for stats
  const [destinationCount, setDestinationCount] = useState(0);
  const [guideCount, setGuideCount] = useState(0);
  const [touristCount, setTouristCount] = useState(0);

  const heroRef = useRef(null);
  const statsRef = useRef(null);

  // Untuk efek parallax
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Untuk mengamati kapan stats terlihat
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true);

    // Auto-focus pada input pencarian setelah komponen dimuat
    const timer = setTimeout(() => {
      const searchInput = document.querySelector(".search-input");
      if (searchInput) {
        searchInput.focus();
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Handle counter animation when stats become visible
  useEffect(() => {
    if (!statsVisible) return;

    // Animation for destination count
    let startDestination = 0;
    const endDestination = 100;
    const durationDestination = 2000;
    let startTimestampD = null;

    const stepDestination = (timestamp) => {
      if (!startTimestampD) startTimestampD = timestamp;
      const progress = Math.min(
        (timestamp - startTimestampD) / durationDestination,
        1
      );
      setDestinationCount(
        Math.floor(
          progress * (endDestination - startDestination) + startDestination
        )
      );
      if (progress < 1) {
        window.requestAnimationFrame(stepDestination);
      }
    };

    // Animation for guide count
    let startGuide = 0;
    const endGuide = 50;
    const durationGuide = 2000;
    let startTimestampG = null;

    const stepGuide = (timestamp) => {
      if (!startTimestampG) startTimestampG = timestamp;
      const progress = Math.min(
        (timestamp - startTimestampG) / durationGuide,
        1
      );
      setGuideCount(
        Math.floor(progress * (endGuide - startGuide) + startGuide)
      );
      if (progress < 1) {
        window.requestAnimationFrame(stepGuide);
      }
    };

    // Animation for tourist count
    let startTourist = 0;
    const endTourist = 1000;
    const durationTourist = 2000;
    let startTimestampT = null;

    const stepTourist = (timestamp) => {
      if (!startTimestampT) startTimestampT = timestamp;
      const progress = Math.min(
        (timestamp - startTimestampT) / durationTourist,
        1
      );
      setTouristCount(
        Math.floor(progress * (endTourist - startTourist) + startTourist)
      );
      if (progress < 1) {
        window.requestAnimationFrame(stepTourist);
      }
    };

    // Start all animations
    window.requestAnimationFrame(stepDestination);
    window.requestAnimationFrame(stepGuide);
    window.requestAnimationFrame(stepTourist);
  }, [statsVisible]);

  return (
    <div className="hero-section" ref={heroRef}>
      <div className="hero-overlay"></div>
      <div className={`hero-content ${isLoaded ? "fade-in" : ""}`}>
        <h1 className="hero-title">Temukan Pengalaman Wisata Terbaik</h1>
        <p className="hero-subtitle">
          Jelajahi destinasi wisata menarik dengan panduan lokal terpercaya
        </p>

        <div className={`search-container ${searchFocus ? "focused" : ""}`}>
          <input
            type="text"
            placeholder="Cari destinasi wisata..."
            className="search-input"
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
          />
          <button className="search-button pulse">
            <span>Cari</span>
            <i className="search-icon">&#128269;</i>
          </button>
        </div>

        <div className="hero-stats" ref={statsRef}>
          <div className="stat-item slide-up">
            <span className="stat-number">{destinationCount}+</span>
            <span className="stat-label">Destinasi</span>
          </div>
          <div
            className="stat-item slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="stat-number">{guideCount}+</span>
            <span className="stat-label">Tour Guide</span>
          </div>
          <div
            className="stat-item slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="stat-number">{touristCount}+</span>
            <span className="stat-label">Wisatawan</span>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow-down"></div>
      </div>
    </div>
  );
};

export default Hero;
