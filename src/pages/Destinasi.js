import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Destinasi.css";

const Destinasi = () => {
  // Sample destinations data
  const destinationsData = [
    {
      id: 1,
      name: "Borobudur Temple",
      location: "Magelang, Jawa Tengah",
      category: "Sejarah & Budaya",
      description:
        "Candi Budha terbesar di dunia yang dibangun pada abad ke-9. Memiliki relief Buddha yang indah dan pemandangan matahari terbit yang spektakuler.",
      rating: 4.8,
      price: 400000,
      image:
        "https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      facilities: ["Parkir", "Toilet", "Musholla", "Restoran"],
      activities: ["Fotografi", "Edukasi Sejarah", "Sightseeing"],
    },
    {
      id: 2,
      name: "Nusa Penida",
      location: "Klungkung, Bali",
      category: "Pantai",
      description:
        "Pulau dengan pemandangan tebing dan pantai yang menakjubkan. Keajaiban alam seperti Kelingking Beach dan Angel's Billabong menjadi daya tarik utama.",
      rating: 4.7,
      price: 250000,
      image:
        "https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      facilities: [
        "Penginapan",
        "Restoran",
        "Rental Kendaraan",
        "Transportasi Laut",
      ],
      activities: ["Snorkeling", "Diving", "Berenang", "Fotografi"],
    },
    {
      id: 3,
      name: "Gunung Bromo",
      location: "Jawa Timur",
      category: "Gunung & Petualangan",
      description:
        "Gunung berapi aktif dengan pemandangan kaldera vulkanik yang luar biasa. Populer dengan sunrise dan lautan pasir yang mempesona.",
      rating: 4.9,
      price: 350000,
      image:
        "https://images.unsplash.com/photo-1589309736404-a037679dc67e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      facilities: ["Jeep Tours", "Penginapan", "Warung Makan", "Toilet"],
      activities: ["Hiking", "Fotografi", "Berkuda", "Camping"],
    },
    {
      id: 4,
      name: "Raja Ampat",
      location: "Papua Barat",
      category: "Bahari",
      description:
        "Surga terakhir di bumi dengan keanekaragaman hayati laut tertinggi di dunia. Ideal untuk snorkeling, diving, dan menikmati keindahan pulau-pulau kecil.",
      rating: 4.9,
      price: 1500000,
      image:
        "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      facilities: ["Resort", "Restoran", "Boat Tours", "Diving Center"],
      activities: [
        "Diving",
        "Snorkeling",
        "Island Hopping",
        "Berenang",
        "Kayaking",
      ],
    },
    {
      id: 5,
      name: "Ubud",
      location: "Gianyar, Bali",
      category: "Budaya & Alam",
      description:
        "Pusat seni dan budaya Bali dengan keindahan alam berupa persawahan terasering, hutan monyet, dan sungai yang mengalir di ngarai.",
      rating: 4.6,
      price: 200000,
      image:
        "https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      facilities: ["Villa", "Spa", "Galeri Seni", "Rental Sepeda"],
      activities: ["Yoga", "Seni & Kerajinan", "Kuliner", "Trekking"],
    },
    {
      id: 6,
      name: "Danau Toba",
      location: "Sumatera Utara",
      category: "Danau & Alam",
      description:
        "Danau vulkanik terbesar di Indonesia dengan Pulau Samosir di tengahnya. Kaya akan budaya Batak dan panorama alam yang memukau.",
      rating: 4.7,
      price: 300000,
      image:
        "https://images.unsplash.com/photo-1594056113573-f8785cb64be7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      facilities: [
        "Penginapan",
        "Kapal Penyeberangan",
        "Restoran",
        "Pusat Informasi",
      ],
      activities: [
        "Menikmati Panorama",
        "Wisata Budaya",
        "Berenang",
        "Berkano",
      ],
    },
    {
      id: 7,
      name: "Taman Nasional Komodo",
      location: "Nusa Tenggara Timur",
      category: "Taman Nasional",
      description:
        "Habitat alami komodo, reptil terbesar di dunia. Memiliki pantai pink yang langka dan keanekaragaman hayati laut yang kaya.",
      rating: 4.8,
      price: 850000,
      image:
        "https://images.unsplash.com/photo-1518333648037-9e7a5281e138?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      facilities: ["Kapal Tour", "Guide Lokal", "Toilet", "Tempat Istirahat"],
      activities: ["Komodo Watching", "Trekking", "Snorkeling", "Diving"],
    },
    {
      id: 8,
      name: "Kawah Ijen",
      location: "Banyuwangi, Jawa Timur",
      category: "Gunung & Petualangan",
      description:
        "Gunung dengan fenomena blue fire dan danau kawah asam terbesar di dunia. Pemandangan matahari terbit yang spektakuler.",
      rating: 4.7,
      price: 150000,
      image:
        "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      facilities: ["Guide Pendakian", "Camping Area", "Warung", "P3K"],
      activities: [
        "Night Trekking",
        "Blue Fire Hunting",
        "Fotografi",
        "Pendakian",
      ],
    },
    {
      id: 9,
      name: "Labuan Bajo",
      location: "Nusa Tenggara Timur",
      category: "Bahari",
      description:
        "Pintu gerbang ke Taman Nasional Komodo dengan pantai, pulau kecil, dan sunset yang memukau. Surga bagi para pelaut dan penyelam.",
      rating: 4.6,
      price: 650000,
      image:
        "https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      facilities: ["Marina", "Hotel", "Restoran", "Diving Center"],
      activities: ["Island Hopping", "Sunset Cruise", "Diving", "Snorkeling"],
    },
  ];

  const [destinations, setDestinations] = useState(destinationsData);
  const [filters, setFilters] = useState({
    location: "",
    category: "",
    rating: "",
    priceRange: "",
    activity: "",
  });
  const [userPreferences, setUserPreferences] = useState({
    favCategories: [],
    favActivities: [],
    pricePreference: "",
  });
  const [showPreferenceModal, setShowPreferenceModal] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const categories = [
    "Sejarah & Budaya",
    "Pantai",
    "Gunung & Petualangan",
    "Bahari",
    "Budaya & Alam",
    "Danau & Alam",
    "Taman Nasional",
  ];

  const activities = [
    "Fotografi",
    "Hiking",
    "Snorkeling",
    "Diving",
    "Kuliner",
    "Seni & Kerajinan",
    "Berenang",
    "Pendakian",
    "Wisata Budaya",
  ];

  const ratings = ["5", "4", "3", "2", "1"];
  const priceRanges = [
    { label: "< Rp. 200.000", value: "0-200000" },
    { label: "Rp. 200.000 - Rp. 500.000", value: "200000-500000" },
    { label: "Rp. 500.000 - Rp. 1.000.000", value: "500000-1000000" },
    { label: "> Rp. 1.000.000", value: "1000000-999999999" },
  ];

  // Load user preferences from localStorage on component mount
  useEffect(() => {
    const savedPreferences = localStorage.getItem("userPreferences");
    if (savedPreferences) {
      setUserPreferences(JSON.parse(savedPreferences));
    }

    const savedHistory = localStorage.getItem("searchHistory");
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePreferenceChange = (e) => {
    const { name, value } = e.target;

    if (name === "favCategories" || name === "favActivities") {
      const isChecked = e.target.checked;
      setUserPreferences((prev) => {
        const updated = isChecked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value);

        return { ...prev, [name]: updated };
      });
    } else {
      setUserPreferences((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const savePreferences = () => {
    localStorage.setItem("userPreferences", JSON.stringify(userPreferences));
    setShowPreferenceModal(false);
    alert("Preferensi berhasil disimpan!");
  };

  const applyFilters = () => {
    let filteredDestinations = [...destinationsData];

    // Save search to history if there's a location or category filter
    if (filters.location || filters.category) {
      const searchTerm =
        filters.location || filters.category || "Pencarian baru";
      const newSearch = {
        id: Date.now(),
        term: searchTerm,
        timestamp: new Date().toISOString(),
      };
      const updatedHistory = [newSearch, ...searchHistory.slice(0, 4)]; // Keep only last 5
      setSearchHistory(updatedHistory);
      localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    }

    // Apply Location filter
    if (filters.location && filters.location.trim() !== "") {
      const searchTerms = filters.location.toLowerCase().split(" ");
      filteredDestinations = filteredDestinations.filter((dest) => {
        // Check if any search term exists in destination name or location
        return searchTerms.some(
          (term) =>
            dest.name.toLowerCase().includes(term) ||
            dest.location.toLowerCase().includes(term)
        );
      });
    }

    // Apply Category filter
    if (filters.category && filters.category !== "") {
      filteredDestinations = filteredDestinations.filter(
        (dest) => dest.category === filters.category
      );
    }

    // Apply Rating filter
    if (filters.rating && filters.rating !== "") {
      const minRating = parseFloat(filters.rating);
      filteredDestinations = filteredDestinations.filter(
        (dest) => dest.rating >= minRating
      );
    }

    // Apply Price Range filter
    if (filters.priceRange && filters.priceRange !== "") {
      const [min, max] = filters.priceRange.split("-").map(Number);
      filteredDestinations = filteredDestinations.filter(
        (dest) => dest.price >= min && dest.price <= max
      );
    }

    // Apply Activity filter
    if (filters.activity && filters.activity !== "") {
      filteredDestinations = filteredDestinations.filter(
        (dest) => dest.activities && dest.activities.includes(filters.activity)
      );
    }

    // If no results, provide a message (handled in the render)
    setDestinations(filteredDestinations);
  };

  const resetFilters = () => {
    setFilters({
      location: "",
      category: "",
      rating: "",
      priceRange: "",
      activity: "",
    });
    setDestinations(destinationsData);
  };

  // Apply user preferences to get personalized recommendations
  const applyUserPreferences = () => {
    // Create a scoring system for destinations based on user preferences
    const scoredDestinations = destinationsData.map((dest) => {
      let score = 0;

      // Score based on category preferences
      if (userPreferences.favCategories.includes(dest.category)) {
        score += 2;
      }

      // Score based on activity preferences
      dest.activities.forEach((activity) => {
        if (userPreferences.favActivities.includes(activity)) {
          score += 1;
        }
      });

      // Score based on price preference
      if (userPreferences.pricePreference) {
        const [min, max] = userPreferences.pricePreference
          .split("-")
          .map(Number);
        if (dest.price >= min && dest.price <= max) {
          score += 2;
        }
      }

      return { ...dest, score };
    });

    // Sort by score (highest first)
    const recommendations = [...scoredDestinations].sort(
      (a, b) => b.score - a.score
    );
    setDestinations(recommendations);

    alert("Rekomendasi wisata telah dipersonalisasi sesuai preferensi Anda!");
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
          </svg>
        );
      } else {
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
        );
      }
    }

    return (
      <div className="rating">
        {stars} <span className="rating-score">{rating}</span>
      </div>
    );
  };

  return (
    <div className="destinasi-page">
      <h1>Destinasi Wisata</h1>
      <p>
        Jelajahi berbagai destinasi wisata menarik di seluruh Indonesia untuk
        pengalaman liburan tak terlupakan.
      </p>

      {/* Search history section */}
      {searchHistory.length > 0 && (
        <div className="search-history">
          <h3>Pencarian Terakhir:</h3>
          <div className="history-items">
            {searchHistory.map((item) => (
              <button
                key={item.id}
                className="history-item"
                onClick={() => {
                  setFilters((prev) => ({ ...prev, location: item.term }));
                  applyFilters();
                }}
              >
                {item.term}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="filter-container">
        <div className="filter-item">
          <label htmlFor="location">Lokasi:</label>
          <input
            type="text"
            id="location"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
            placeholder="Cari lokasi..."
          />
        </div>
        <div className="filter-item">
          <label htmlFor="category">Kategori:</label>
          <select
            id="category"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
          >
            <option value="">Semua Kategori</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="rating">Rating Minimum:</label>
          <select
            id="rating"
            name="rating"
            value={filters.rating}
            onChange={handleFilterChange}
          >
            <option value="">Semua Rating</option>
            {ratings.map((rating, index) => (
              <option key={index} value={rating}>
                ⭐ {rating}+
              </option>
            ))}
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="priceRange">Rentang Harga:</label>
          <select
            id="priceRange"
            name="priceRange"
            value={filters.priceRange}
            onChange={handleFilterChange}
          >
            <option value="">Semua Harga</option>
            {priceRanges.map((range, index) => (
              <option key={index} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-item">
          <label htmlFor="activity">Aktivitas:</label>
          <select
            id="activity"
            name="activity"
            value={filters.activity}
            onChange={handleFilterChange}
          >
            <option value="">Semua Aktivitas</option>
            {activities.map((activity, index) => (
              <option key={index} value={activity}>
                {activity}
              </option>
            ))}
          </select>
        </div>
        <div
          className="filter-item"
          style={{ display: "flex", alignItems: "flex-end", gap: "10px" }}
        >
          <button className="filter-button" onClick={applyFilters}>
            Filter
          </button>
          <button
            className="filter-button"
            onClick={resetFilters}
            style={{ background: "#7f8c8d" }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="personalization-options">
        <button
          className="preference-button"
          onClick={() => setShowPreferenceModal(true)}
        >
          Atur Preferensi
        </button>
        <button
          className="recommendation-button"
          onClick={applyUserPreferences}
        >
          Rekomendasi Untuk Saya
        </button>
      </div>

      <div className="destinasi-grid">
        {destinations.length > 0 ? (
          destinations.map((destination) => (
            <div className="destinasi-card" key={destination.id}>
              <img
                src={destination.image}
                alt={destination.name}
                className="destinasi-image"
              />
              <div className="destinasi-info">
                <h3 className="destinasi-name">{destination.name}</h3>
                <div className="destinasi-location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <span>{destination.location}</span>
                </div>
                <span className="destinasi-category">
                  {destination.category}
                </span>
                <div className="destinasi-price">
                  <strong>Rp {destination.price.toLocaleString()}</strong>
                </div>
                <p className="destinasi-description">
                  {destination.description.length > 100
                    ? `${destination.description.substring(0, 100)}...`
                    : destination.description}
                </p>

                {destination.activities && (
                  <div className="activities-tags">
                    {destination.activities.slice(0, 3).map((activity, i) => (
                      <span key={i} className="activity-tag">
                        {activity}
                      </span>
                    ))}
                    {destination.activities.length > 3 && (
                      <span className="activity-tag">
                        +{destination.activities.length - 3}
                      </span>
                    )}
                  </div>
                )}

                <StarRating rating={destination.rating} />
                <Link
                  to={`/destinasi/${destination.id}`}
                  className="view-details"
                >
                  Lihat Detail
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>
            Tidak ada destinasi yang sesuai dengan filter Anda. Silakan coba
            filter lain.
          </p>
        )}
      </div>

      <div className="pagination">
        <a href="#" className="page-link active">
          1
        </a>
        <a href="#" className="page-link">
          2
        </a>
        <a href="#" className="page-link">
          3
        </a>
        <span className="page-link">...</span>
        <a href="#" className="page-link">
          5
        </a>
      </div>

      {/* Preference Modal */}
      {showPreferenceModal && (
        <div className="modal-overlay">
          <div className="preference-modal">
            <h2>Atur Preferensi Wisata</h2>

            <div className="preference-section">
              <h3>Kategori Favorit</h3>
              <div className="checkbox-group">
                {categories.map((category, index) => (
                  <div key={index} className="checkbox-item">
                    <input
                      type="checkbox"
                      id={`category-${index}`}
                      name="favCategories"
                      value={category}
                      checked={userPreferences.favCategories.includes(category)}
                      onChange={handlePreferenceChange}
                    />
                    <label htmlFor={`category-${index}`}>{category}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="preference-section">
              <h3>Aktivitas Favorit</h3>
              <div className="checkbox-group">
                {activities.map((activity, index) => (
                  <div key={index} className="checkbox-item">
                    <input
                      type="checkbox"
                      id={`activity-${index}`}
                      name="favActivities"
                      value={activity}
                      checked={userPreferences.favActivities.includes(activity)}
                      onChange={handlePreferenceChange}
                    />
                    <label htmlFor={`activity-${index}`}>{activity}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="preference-section">
              <h3>Kisaran Harga</h3>
              <select
                name="pricePreference"
                value={userPreferences.pricePreference}
                onChange={handlePreferenceChange}
              >
                <option value="">Tidak Ada Preferensi</option>
                {priceRanges.map((range, index) => (
                  <option key={index} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="modal-actions">
              <button
                className="cancel-button"
                onClick={() => setShowPreferenceModal(false)}
              >
                Batal
              </button>
              <button className="save-button" onClick={savePreferences}>
                Simpan Preferensi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Destinasi;
