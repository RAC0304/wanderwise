import React, { useState, useEffect } from "react";
import "./Peta.css";

// Komponen untuk Peta Interaktif
const Peta = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("destinations");
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [showDirections, setShowDirections] = useState(false);
  const [facilities, setFacilities] = useState({
    restaurants: true,
    hotels: true,
    transports: true,
    attractions: false,
  });

  // Data destinasi wisata
  const destinations = [
    {
      id: 1,
      name: "Borobudur Temple",
      location: "Magelang, Central Java",
      coordinates: { lat: -7.6079, lng: 110.2038 },
      description: "The world's largest Buddhist temple.",
      image:
        "https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Prambanan Temple",
      location: "Yogyakarta, Central Java",
      coordinates: { lat: -7.752, lng: 110.4914 },
      description: "A 9th-century Hindu temple dedicated to the Trimurti.",
      image:
        "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Mount Bromo",
      location: "East Java",
      coordinates: { lat: -7.9425, lng: 112.953 },
      description:
        "An active volcano and one of Indonesia's most iconic landscapes.",
      image:
        "https://images.unsplash.com/photo-1589309736404-a037679dc67e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      name: "Komodo National Park",
      location: "East Nusa Tenggara",
      coordinates: { lat: -8.548, lng: 119.4543 },
      description: "Home to the world's largest lizard, the Komodo dragon.",
      image:
        "https://images.unsplash.com/photo-1583396618422-597b2755e31c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 5,
      name: "Raja Ampat",
      location: "West Papua",
      coordinates: { lat: -0.8456, lng: 130.825 },
      description: "A remote archipelago with incredible marine biodiversity.",
      image:
        "https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 6,
      name: "Bali",
      location: "Bali",
      coordinates: { lat: -8.3405, lng: 115.092 },
      description:
        "The famous Island of Gods with stunning beaches and cultural sites.",
      image:
        "https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    },
  ];

  // Data rute perjalanan
  const routes = [
    {
      id: 1,
      name: "Yogyakarta Heritage Tour",
      destinations: ["Borobudur Temple", "Prambanan Temple"],
      duration: "2 days",
      description:
        "Explore the ancient temples and cultural heritage of Yogyakarta.",
    },
    {
      id: 2,
      name: "East Java Adventure",
      destinations: ["Mount Bromo", "Ijen Crater"],
      duration: "3 days",
      description:
        "Experience the volcanic landscapes and natural wonders of East Java.",
    },
    {
      id: 3,
      name: "Bali Beach Hopping",
      destinations: ["Kuta Beach", "Uluwatu", "Sanur"],
      duration: "4 days",
      description:
        "Discover the beautiful beaches and coastal attractions of Bali.",
    },
    {
      id: 4,
      name: "Indonesia's Natural Wonders",
      destinations: ["Komodo National Park", "Raja Ampat"],
      duration: "7 days",
      description:
        "An epic journey to see some of Indonesia's most spectacular natural sites.",
    },
  ];

  const handleDestinationClick = (destination) => {
    setSelectedDestination(destination);
    // Ini seharusnya memindahkan peta ke lokasi destinasi yang dipilih
    // dalam implementasi nyata dengan Google Maps atau Mapbox
  };

  const toggleDirections = () => {
    setShowDirections(!showDirections);
    // Dalam implementasi nyata, kode di sini akan menampilkan arah ke destinasi
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleFacilityToggle = (facility) => {
    setFacilities({
      ...facilities,
      [facility]: !facilities[facility],
    });
    // Dalam implementasi nyata, ini akan memfilter tampilan fasilitas di peta
  };

  // Efek untuk simulasi loading peta (dalam implementasi nyata, ini akan memuat Google Maps atau Mapbox)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Render peta dan panel kontrol
  return (
    <div className="peta-page">
      <h1>Peta Interaktif</h1>

      <div className="map-container">
        <div className="map-panel">
          <div className="map-tabs">
            <button
              className={`tab-button ${
                activeTab === "destinations" ? "active" : ""
              }`}
              onClick={() => handleTabChange("destinations")}
            >
              Destinasi
            </button>
            <button
              className={`tab-button ${activeTab === "routes" ? "active" : ""}`}
              onClick={() => handleTabChange("routes")}
            >
              Rute Perjalanan
            </button>
            <button
              className={`tab-button ${activeTab === "nearby" ? "active" : ""}`}
              onClick={() => handleTabChange("nearby")}
            >
              Tempat Terdekat
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "destinations" && (
              <div className="destinations-tab">
                <input
                  type="text"
                  placeholder="Cari destinasi..."
                  className="search-input"
                />
                <div className="destinations-list">
                  {destinations.map((destination) => (
                    <div
                      key={destination.id}
                      className={`destination-item ${
                        selectedDestination?.id === destination.id
                          ? "selected"
                          : ""
                      }`}
                      onClick={() => handleDestinationClick(destination)}
                    >
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="destination-thumbnail"
                      />
                      <div className="destination-info">
                        <h3>{destination.name}</h3>
                        <p>{destination.location}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "routes" && (
              <div className="routes-tab">
                <div className="routes-list">
                  {routes.map((route) => (
                    <div key={route.id} className="route-item">
                      <h3>{route.name}</h3>
                      <div className="route-meta">
                        <span className="route-duration">{route.duration}</span>
                        <span className="route-stops">
                          {route.destinations.length} Stops
                        </span>
                      </div>
                      <p className="route-description">{route.description}</p>
                      <div className="route-waypoints">
                        {route.destinations.map((dest, idx) => (
                          <div className="waypoint" key={idx}>
                            <span className="waypoint-number">{idx + 1}</span>
                            <span className="waypoint-name">{dest}</span>
                          </div>
                        ))}
                      </div>
                      <button className="show-route-btn">Lihat Rute</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "nearby" && (
              <div className="nearby-tab">
                <h3>Tampilkan Fasilitas Terdekat</h3>
                <div className="facility-toggles">
                  <label className="facility-toggle">
                    <input
                      type="checkbox"
                      checked={facilities.restaurants}
                      onChange={() => handleFacilityToggle("restaurants")}
                    />
                    <span className="facility-label">Restoran & Kafe</span>
                  </label>
                  <label className="facility-toggle">
                    <input
                      type="checkbox"
                      checked={facilities.hotels}
                      onChange={() => handleFacilityToggle("hotels")}
                    />
                    <span className="facility-label">Hotel & Penginapan</span>
                  </label>
                  <label className="facility-toggle">
                    <input
                      type="checkbox"
                      checked={facilities.transports}
                      onChange={() => handleFacilityToggle("transports")}
                    />
                    <span className="facility-label">Transportasi</span>
                  </label>
                  <label className="facility-toggle">
                    <input
                      type="checkbox"
                      checked={facilities.attractions}
                      onChange={() => handleFacilityToggle("attractions")}
                    />
                    <span className="facility-label">Atraksi & Hiburan</span>
                  </label>
                </div>

                <div className="nearby-info">
                  <p>
                    Pilih destinasi pada peta atau tab Destinasi untuk melihat
                    fasilitas terdekat.
                  </p>
                </div>
              </div>
            )}
          </div>

          {selectedDestination && (
            <div className="destination-details">
              <h2>{selectedDestination.name}</h2>
              <p className="detail-location">{selectedDestination.location}</p>
              <p className="detail-description">
                {selectedDestination.description}
              </p>
              <div className="destination-actions">
                <button className="direction-btn" onClick={toggleDirections}>
                  {showDirections ? "Sembunyikan Rute" : "Tampilkan Rute"}
                </button>
                <button className="save-btn">Simpan ke Favorit</button>
              </div>
            </div>
          )}
        </div>

        <div className="map-view">
          {mapLoaded ? (
            <div className="map-placeholder">
              <div className="map-overlay">
                <h3>Peta Interaktif</h3>
                <p>
                  Dalam implementasi sebenarnya, ini adalah integrasi Google
                  Maps atau Mapbox.
                </p>
                <p>
                  Pilih destinasi di panel kiri untuk melihat lokasinya di peta.
                </p>
                <p className="map-note">
                  Catatan: Untuk integrasi peta nyata, diperlukan API Key dari
                  layanan peta seperti Google Maps atau Mapbox.
                </p>
              </div>
            </div>
          ) : (
            <div className="map-loading">
              <div className="loading-spinner"></div>
              <p>Memuat peta...</p>
            </div>
          )}

          {selectedDestination && showDirections && (
            <div className="directions-panel">
              <div className="direction-header">
                <h3>Rute ke {selectedDestination.name}</h3>
                <button className="close-directions" onClick={toggleDirections}>
                  ×
                </button>
              </div>
              <div className="direction-content">
                <div className="direction-step">
                  <span className="step-number">1</span>
                  <div className="step-instructions">
                    <p>Mulai dari lokasi Anda sekarang</p>
                    <p className="step-distance">Jarak total: ~20 km</p>
                  </div>
                </div>
                <div className="direction-step">
                  <span className="step-number">2</span>
                  <div className="step-instructions">
                    <p>Lanjutkan ke arah selatan menuju jalan raya</p>
                    <p className="step-distance">3.2 km</p>
                  </div>
                </div>
                <div className="direction-step">
                  <span className="step-number">3</span>
                  <div className="step-instructions">
                    <p>Belok kanan di perempatan</p>
                    <p className="step-distance">1.5 km</p>
                  </div>
                </div>
                <div className="direction-step">
                  <span className="step-number">4</span>
                  <div className="step-instructions">
                    <p>Lanjutkan ke arah barat menuju destinasi</p>
                    <p className="step-distance">8.7 km</p>
                  </div>
                </div>
                <div className="direction-step">
                  <span className="step-number">5</span>
                  <div className="step-instructions">
                    <p>Anda telah tiba di {selectedDestination.name}</p>
                    <p className="step-distance">Waktu perjalanan: ~45 menit</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="map-legend">
        <div className="legend-item">
          <span className="legend-marker destination-marker"></span>
          <span>Destinasi Wisata</span>
        </div>
        <div className="legend-item">
          <span className="legend-marker restaurant-marker"></span>
          <span>Restoran & Kafe</span>
        </div>
        <div className="legend-item">
          <span className="legend-marker hotel-marker"></span>
          <span>Hotel & Penginapan</span>
        </div>
        <div className="legend-item">
          <span className="legend-marker transport-marker"></span>
          <span>Transportasi</span>
        </div>
      </div>
    </div>
  );
};

export default Peta;
