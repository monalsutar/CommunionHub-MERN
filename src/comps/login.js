import React, { useState } from "react";
import "./login.css";
import logo from "../assets/logo.png";
import sideImg from "../assets/img11.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/login", formData);
      if (res.data.success) {
        localStorage.setItem("username", res.data.username);
        navigate("/body");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong during login");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-box">
          <div className="logo">
            <img src={logo} alt="Communion logo" />
          </div>
          <h2 className="title">Login</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                name="email"
                type="email"
                placeholder="   Email or username"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group input-eye">
              <input
                name="password"
                type="password"
                placeholder="   Password"
                required
                onChange={handleChange}
              />
            </div>
            <div className="options">
              <div className="remember-me">
                <input id="remember_me" type="checkbox" />
                <label htmlFor="remember_me">Remember me</label>
              </div>
              <div className="forgot-password">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </div>
            <button type="submit" className="sign-in-btn">
              <i className="fas fa-sign-in-alt" style={{ marginRight: "8px" }}></i>
              Login
            </button>
            <div className="register-link">
              Don't have an account yet? <Link to="/signup">Sign In</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="login-right">
        <img src={sideImg} alt="Decorative" />
      </div>
    </div>
  );
}
