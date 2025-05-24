import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import '../comps/verifyotp.css'

export default function VerifyOTP() {
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const email = localStorage.getItem("resetEmail");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/verify-otp", { email, otp });
            setMessage(res.data.message);
            setTimeout(() => navigate("/reset-password"), 2000);
        } catch (err) {
            setMessage("Invalid or expired OTP");
            console.error(err);
        }
    };

    return (
        <div className="verify-otp-body">

            <div className="verify-otp-container">

                <h2 className="verify-otp-title">Verify OTP</h2>

                <form onSubmit={handleSubmit} className="verify-otp-form">
                    <input
                        type="text"
                        placeholder="Enter OTP"
                        required
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                    />

                    <p>Please Enter Correct OTP</p>

                    <button type="submit" className="verify-otp-button">Verify</button>
                    {message && <p>{message}</p>}

                </form>
            </div>
        </div>
    );
}
