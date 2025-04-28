import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      console.log("Logging in with:", formData.email, formData.password);
      // Here you would handle authentication with a backend
      alert("Login berhasil! Selamat datang.");
    } else {
      // Registration logic
      if (formData.password !== formData.confirmPassword) {
        alert("Password dan konfirmasi password tidak cocok!");
        return;
      }
      console.log(
        "Registering with:",
        formData.name,
        formData.email,
        formData.password
      );
      // Here you would handle registration with a backend
      alert("Registrasi berhasil! Silakan login.");
      setIsLogin(true);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    // Reset form data when toggling
    setFormData({
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>{isLogin ? "Login" : "Daftar"}</h1>

        <div className="login-form">
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Masukkan nama lengkap"
                  required
                />
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Masukkan email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Masukkan password"
                required
              />
            </div>

            {!isLogin && (
              <div className="form-group">
                <label htmlFor="confirmPassword">Konfirmasi Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Konfirmasi password"
                  required
                />
              </div>
            )}

            <button type="submit" className="login-button">
              {isLogin ? "Masuk" : "Daftar"}
            </button>

            <div className="form-footer">
              <p>
                {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
                <a href="#" onClick={toggleForm}>
                  {isLogin ? "Daftar" : "Login"}
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
