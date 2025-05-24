import React, { useEffect, useState } from "react";
import './header.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [username, setUsername] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const name = localStorage.getItem("username");
        if (name) setUsername(name);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("username");
        setUsername(null);
        navigate("/home"); // Redirect to login page
    };

    return (
        <header>
            <img src={logo} alt="Logo" />
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <Link to="/" className="nav-item">Home</Link>
                <Link to="/" className="nav-item">About ›</Link>
                <Link to="/events" className="nav-item">Events ›</Link>
                <Link to="/contact" className="nav-item">Contact Us ›</Link>

            </nav>
            <div className="header-right">
                {username ? (
                    <div className="user-actions">
                        <span className="logged-in-username">Hi, {username}</span>
                        <button className="logout-button" onClick={handleLogout}>Logout</button>
                    </div>

                ) : (
                    <Link to="/login" className="sign-in-button">Sign In</Link>
                )}

            </div>

        </header>
    );
}

export default Header;
