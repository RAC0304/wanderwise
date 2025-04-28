import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Destinasi from "./pages/Destinasi";
import TourGuide from "./pages/TourGuide";
import Ulasan from "./pages/Ulasan";
import About from "./pages/About";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destinasi" element={<Destinasi />} />
            <Route path="/tour-guide" element={<TourGuide />} />
            <Route path="/ulasan" element={<Ulasan />} />
            <Route path="/tentang" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
