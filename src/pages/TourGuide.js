import React, { useState } from "react";
import "./TourGuide.css";

const TourGuide = () => {
  // State untuk pemesanan guide
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    date: "",
    duration: "",
    numPeople: "",
    message: "",
  });

  // Sample tour guide data
  const guides = [
    {
      id: 1,
      name: "Budi Santoso",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      speciality: "Wisata Budaya & Sejarah",
      description:
        "Berpengalaman lebih dari 8 tahun sebagai pemandu wisata di area Yogyakarta dan sekitarnya. Menguasai sejarah candi-candi dan budaya Jawa dengan mendalam.",
      languages: ["Indonesia", "English", "Japanese"],
      contact: "+62812345678",
      rate: "Rp. 600.000 / hari",
      rating: 4.8,
      experience: "8 tahun",
      location: "Yogyakarta",
      availability: ["Senin", "Selasa", "Kamis", "Jumat", "Sabtu", "Minggu"],
    },
    {
      id: 2,
      name: "Dewi Rahmawati",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      speciality: "Wisata Kuliner & Pasar Tradisional",
      description:
        "Ahli kuliner tradisional dan modern. Dapat membantu wisatawan menemukan kuliner terbaik dan tersembunyi di setiap daerah.",
      languages: ["Indonesia", "English", "Mandarin"],
      contact: "+62823456789",
      rate: "Rp. 500.000 / hari",
      rating: 4.7,
      experience: "5 tahun",
      location: "Jakarta, Bandung",
      availability: ["Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
    },
    {
      id: 3,
      name: "Ahmad Ridwan",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      speciality: "Petualangan & Alam",
      description:
        "Spesialis wisata alam, hiking, dan aktivitas petualangan outdoor. Menguasai jalur pendakian gunung dan wisata air di Indonesia.",
      languages: ["Indonesia", "English"],
      contact: "+62834567890",
      rate: "Rp. 700.000 / hari",
      rating: 4.9,
      experience: "10 tahun",
      location: "Lombok, Bali",
      availability: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"],
    },
    {
      id: 4,
      name: "Sari Indah",
      image: "https://randomuser.me/api/portraits/women/23.jpg",
      speciality: "Fotografi & Wisata Kota",
      description:
        "Pemandu wisata dengan keahlian fotografi. Akan membawa Anda ke spot-spot indah untuk berfoto dan mengabadikan momen tak terlupakan.",
      languages: ["Indonesia", "English", "Korean"],
      contact: "+62845678901",
      rate: "Rp. 650.000 / hari",
      rating: 4.6,
      experience: "6 tahun",
      location: "Bali, Jakarta",
      availability: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"],
    },
  ];

  const handleGuideSelect = (guide) => {
    setSelectedGuide(guide);
    setShowBookingModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingForm({
      ...bookingForm,
      [name]: value,
    });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();

    // Simulasi proses pemesanan
    alert(
      `Pemesanan tour guide ${selectedGuide.name} berhasil! Kami akan menghubungi Anda untuk konfirmasi.`
    );

    // Reset form dan tutup modal
    setBookingForm({
      date: "",
      duration: "",
      numPeople: "",
      message: "",
    });
    setShowBookingModal(false);
  };

  // Component untuk rating bintang
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
            className="star-filled"
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
            className="star-half"
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
            className="star-empty"
          >
            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
          </svg>
        );
      }
    }

    return (
      <div className="guide-rating">
        {stars} <span>({rating})</span>
      </div>
    );
  };

  return (
    <div className="tour-guide-page">
      <h1>Tour Guide</h1>

      <div className="intro-text">
        <p>
          Temukan pemandu wisata lokal terpercaya untuk menemani perjalanan
          Anda. Para pemandu wisata kami telah terverifikasi dan memiliki
          pengetahuan mendalam tentang destinasi lokal.
        </p>
      </div>

      <div className="search-filter">
        <div className="search-box">
          <input
            type="text"
            placeholder="Cari tour guide berdasarkan nama, lokasi, atau keahlian..."
          />
          <button className="search-button">Cari</button>
        </div>
        <div className="filter-options">
          <select name="location" className="filter-select">
            <option value="">Semua Lokasi</option>
            <option value="Yogyakarta">Yogyakarta</option>
            <option value="Bali">Bali</option>
            <option value="Jakarta">Jakarta</option>
            <option value="Lombok">Lombok</option>
          </select>
          <select name="speciality" className="filter-select">
            <option value="">Semua Keahlian</option>
            <option value="Wisata Budaya & Sejarah">
              Wisata Budaya & Sejarah
            </option>
            <option value="Wisata Kuliner">Wisata Kuliner</option>
            <option value="Petualangan & Alam">Petualangan & Alam</option>
            <option value="Fotografi">Fotografi</option>
          </select>
          <select name="language" className="filter-select">
            <option value="">Semua Bahasa</option>
            <option value="Indonesia">Indonesia</option>
            <option value="English">English</option>
            <option value="Japanese">Japanese</option>
            <option value="Mandarin">Mandarin</option>
            <option value="Korean">Korean</option>
          </select>
        </div>
      </div>

      <div className="tour-guide-list">
        {guides.length > 0 ? (
          guides.map((guide) => (
            <div className="guide-card" key={guide.id}>
              <div className="guide-card-content">
                <img
                  src={guide.image}
                  alt={`Tour guide ${guide.name}`}
                  className="guide-image"
                />
                <div className="guide-details">
                  <div className="guide-header">
                    <h3 className="guide-name">{guide.name}</h3>
                    <StarRating rating={guide.rating} />
                  </div>

                  <p className="guide-speciality">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    <span>{guide.location}</span>
                  </p>

                  <p className="guide-speciality">{guide.speciality}</p>
                  <p className="guide-description">{guide.description}</p>

                  <div className="guide-meta">
                    <div className="guide-meta-item">
                      <strong>Pengalaman:</strong> {guide.experience}
                    </div>
                    <div className="guide-meta-item">
                      <strong>Tarif:</strong> {guide.rate}
                    </div>
                  </div>

                  <p className="guide-languages">
                    <strong>Bahasa:</strong> {guide.languages.join(", ")}
                  </p>

                  <div className="guide-availability">
                    <div className="availability-label">Tersedia pada:</div>
                    <div className="availability-days">
                      {[
                        "Senin",
                        "Selasa",
                        "Rabu",
                        "Kamis",
                        "Jumat",
                        "Sabtu",
                        "Minggu",
                      ].map((day) => (
                        <span
                          key={day}
                          className={`day-badge ${
                            guide.availability.includes(day)
                              ? "available"
                              : "unavailable"
                          }`}
                        >
                          {day.substring(0, 2)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="guide-actions">
                <button
                  className="book-guide-btn"
                  onClick={() => handleGuideSelect(guide)}
                >
                  Pesan Guide
                </button>
                <a href={`tel:${guide.contact}`} className="contact-guide-btn">
                  Hubungi
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>Daftar tour guide akan ditampilkan di sini.</p>
        )}
      </div>

      {/* Modal Pemesanan */}
      {showBookingModal && selectedGuide && (
        <div className="booking-modal-overlay">
          <div className="booking-modal">
            <button
              className="close-modal"
              onClick={() => setShowBookingModal(false)}
            >
              &times;
            </button>
            <h2>Pesan Tour Guide</h2>

            <div className="guide-info-summary">
              <img
                src={selectedGuide.image}
                alt={selectedGuide.name}
                className="guide-mini-image"
              />
              <div className="guide-summary-details">
                <h3>{selectedGuide.name}</h3>
                <p>{selectedGuide.speciality}</p>
                <p>
                  <strong>Tarif:</strong> {selectedGuide.rate}
                </p>
              </div>
            </div>

            <form onSubmit={handleBookingSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="date">Tanggal Tur:</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={bookingForm.date}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="duration">Durasi (hari):</label>
                <select
                  id="duration"
                  name="duration"
                  value={bookingForm.duration}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Pilih durasi</option>
                  <option value="1">1 hari</option>
                  <option value="2">2 hari</option>
                  <option value="3">3 hari</option>
                  <option value="4">4 hari</option>
                  <option value="5">5 hari</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="numPeople">Jumlah Orang:</label>
                <input
                  type="number"
                  id="numPeople"
                  name="numPeople"
                  min="1"
                  max="20"
                  value={bookingForm.numPeople}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Pesan (opsional):</label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={bookingForm.message}
                  onChange={handleInputChange}
                  placeholder="Berikan detail tambahan tentang kebutuhan tur Anda"
                ></textarea>
              </div>

              <div className="booking-summary">
                <h4>Ringkasan Biaya</h4>
                {bookingForm.duration && (
                  <div className="cost-calculation">
                    <div className="cost-item">
                      <span>Biaya per hari</span>
                      <span>
                        Rp.{" "}
                        {parseInt(
                          selectedGuide.rate.match(/\d+/g)[0]
                        ).toLocaleString()}
                      </span>
                    </div>
                    <div className="cost-item">
                      <span>Durasi</span>
                      <span>{bookingForm.duration} hari</span>
                    </div>
                    <div className="cost-item total">
                      <span>Total</span>
                      <span>
                        Rp.{" "}
                        {(
                          parseInt(selectedGuide.rate.match(/\d+/g)[0]) *
                          parseInt(bookingForm.duration || 0)
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowBookingModal(false)}
                >
                  Batal
                </button>
                <button type="submit" className="submit-btn">
                  Pesan Sekarang
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TourGuide;
