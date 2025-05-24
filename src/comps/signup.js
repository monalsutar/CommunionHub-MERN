import React, { useState } from "react";
import axios from "axios";
import "./signup.css";
import logo from "../assets/logo.png";
import sideImg from "../assets/img11.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/signup", formData);
            alert(res.data.message);
            navigate("/login");

        } catch (err) {
            console.error(err);
            alert("Email already exists....");
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-left">
                <div className="signup-box">
                    <div className="logo">
                        <img src={logo} alt="Communion logo" />
                    </div>
                    <h2 className="title">Sign Up</h2>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your Full Name"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="mobile"
                                type="number"
                                placeholder="Enter your mobile number"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group input-eye">
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                required
                                onChange={handleChange}
                            />
                        </div><hr></hr>
                        <button type="submit" className="sign-btn">
                            Sign Up
                        </button>
                    </form>
                    <div className="register-link">
                        Already have an account? <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
            <div className="signup-right">
                <img src={sideImg} alt="Decorative" />
            </div>
        </div>
    );
}
