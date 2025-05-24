import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../comps/forgotpass.css'

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/forgot-password", { email });
            setMessage(res.data.message);
            localStorage.setItem("resetEmail", email); // store email for OTP step
            setTimeout(() => navigate("/verify-otp"), 2000);
        } catch (err) {
            setMessage("Error sending OTP. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className="forgot-pass-body">

            <div className="forgot-pass-container">

                <h2 className="forgot-pass-title">Forgot Password</h2>
                <form onSubmit={handleSubmit} className="forgot-pass-form">
                    <input
                        type="email"
                        placeholder="Enter your registered email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <p>Please Keep Patience, we are trying...</p>

                    <button type="submit" className="forgot-pass-button">Send OTP</button>
                    {message && <p>{message}</p>}

                    
                </form>
            </div>
        </div>
    );
}
