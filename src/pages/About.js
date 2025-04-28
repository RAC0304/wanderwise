import React from "react";
import "./About.css";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Andi Wijaya",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      description:
        "Memulai WanderWise dengan visi menghubungkan wisatawan dengan pemandu lokal terbaik di Indonesia.",
    },
    {
      id: 2,
      name: "Maya Putri",
      role: "Chief Travel Officer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      description:
        "Pengalaman lebih dari 10 tahun di industri pariwisata, fokus pada pengembangan konten dan jaminan kualitas destinasi.",
    },
    {
      id: 3,
      name: "Reza Hidayat",
      role: "Tech Lead",
      image: "https://randomuser.me/api/portraits/men/36.jpg",
      description:
        "Ahli teknologi dengan pengalaman mengembangkan platform digital di industri travel.",
    },
    {
      id: 4,
      name: "Lina Santoso",
      role: "Marketing Director",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      description:
        "Spesialis marketing digital dengan fokus pada strategi promosi destinasi wisata lokal.",
    },
  ];

  const history = [
    {
      year: "2022",
      event:
        "WanderWise didirikan dengan misi menghubungkan wisatawan dan pemandu lokal di destinasi populer Indonesia.",
    },
    {
      year: "2023",
      event:
        "Ekspansi layanan mencakup lebih dari 100+ destinasi wisata dan 500+ pemandu wisata terverifikasi.",
    },
    {
      year: "2024",
      event:
        "Pengembangan fitur peta interaktif dan sistem ulasan untuk meningkatkan pengalaman pengguna.",
    },
    {
      year: "2025",
      event:
        "WanderWise menjadi platform tour guide digital terdepan di Indonesia dengan lebih dari 50.000 pengguna aktif bulanan.",
    },
  ];

  return (
    <div className="about-page">
      <h1>Tentang Kami</h1>
      <div className="about-content">
        <p>
          WanderWise adalah aplikasi web tour guide digital yang menghubungkan
          wisatawan dengan destinasi terbaik dan pemandu lokal yang terpercaya.
          Didirikan pada tahun 2022, kami telah membantu ribuan wisatawan
          menemukan pengalaman perjalanan yang autentik dan tak terlupakan di
          seluruh Indonesia.
        </p>

        <p>
          Misi kami adalah memberikan pengalaman wisata yang berkesan dengan
          panduan lokal yang memahami setiap sudut destinasi wisata. Kami
          percaya bahwa perjalanan terbaik adalah yang dipandu oleh mereka yang
          benar-benar mengenal dan mencintai daerahnya.
        </p>

        <div className="about-section">
          <h2>Visi Kami</h2>
          <p>
            Menjadi platform tour guide terpercaya yang memudahkan wisatawan
            menemukan destinasi dan pengalaman terbaik di seluruh Indonesia.
          </p>
          <p>
            WanderWise berkomitmen untuk mendukung ekonomi lokal dengan
            memberdayakan pemandu wisata setempat dan mempromosikan destinasi
            wisata yang kurang terjamah namun memiliki potensi besar.
          </p>
        </div>

        <div className="about-section">
          <h2>Tim Kami</h2>
          <p>
            Kami adalah tim yang berdedikasi untuk menghubungkan wisatawan
            dengan pengalaman perjalanan terbaik melalui teknologi. Setiap
            anggota tim kami membawa keahlian unik dan semangat untuk industri
            pariwisata.
          </p>

          <div className="team-members">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-image"
                />
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="company-history">
          <h2>Perjalanan Kami</h2>
          <p>
            Sejak berdiri, WanderWise terus berkembang dan berinovasi untuk
            memberikan layanan terbaik bagi para wisatawan dan pemandu wisata.
          </p>

          <div className="history-timeline">
            {history.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-event">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
