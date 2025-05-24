import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../comps/resetpass.css'

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const email = localStorage.getItem("resetEmail");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {
            const res = await axios.post("http://localhost:5000/api/reset-password", {
                email,
                password,
            });
            setMessage(res.data.message);
            setTimeout(() => {
                localStorage.removeItem("resetEmail");
                navigate("/login");
            }, 2000);
        } catch (err) {
            setMessage("Failed to reset password");
            console.error(err);
        }
    };

    return (
        <div className="reset-pass-body">

            <div className="reset-pass-container">

                <h2 className="reset-pass-title">Reset Password</h2>
                <form onSubmit={handleSubmit} className="reset-pass-form">
                    <input
                        type="password"
                        placeholder="New password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit" className="reset-pass-button">Update Password</button>
                    {message && <p>{message}</p>}
                </form>
            </div>
        </div>
    );
}
