import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Destinasi from "./pages/Destinasi";
import TourGuide from "./pages/TourGuide";
import Ulasan from "./pages/Ulasan";
import About from "./pages/About";
import Login from "./pages/Login";
import Peta from "./pages/Peta";
import "./assets/css/styles.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinasi" element={<Destinasi />} />
            <Route path="/tour-guide" element={<TourGuide />} />
            <Route path="/peta" element={<Peta />} />
            <Route path="/ulasan" element={<Ulasan />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
