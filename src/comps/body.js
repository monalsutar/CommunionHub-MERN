import React from "react";
import { motion } from "framer-motion";
import "./body.css";


// Replace these with your actual image imports
import P1 from "../assets/p1.jpg";
import P2 from "../assets/p2.jpg";
import P3 from "../assets/p3.jpg";
import P4 from "../assets/p4.png";

import img1 from "../assets/comm-2part-1.png";
import img2 from "../assets/comm-2part-2.png";


import FullImg from '../assets/full-img.png'

export default function Body() {
    return (
        <div className="body-wrapper">


            {/* TOP SECTION: Centered heading and subheading */}
            <div className="top-section">
                <motion.h1
                    className="main-heading"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Connect Communities
                </motion.h1>

                <motion.p
                    className="subheading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Bridging gaps between faiths with tech and a dash of fun!
                </motion.p>
            </div>

            {/* MIDDLE SECTION: Two-column layout for content on left, images on right */}
            <div className="middle-section">
                {/* LEFT COLUMN */}
                <div className="left-col">
                    {/* Badge: '✔ Unlimited Advantages' */}
                    <motion.div
                        className="advantages-badge"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        &#10004; Unlimited Advantages
                    </motion.div>

                    {/* Secondary Titles (two lines) */}

                    <motion.h2
                        className="secondary-title"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div className="unite-box">
                            Unite, Innovate,<img src={P1} alt="People 1" className="profile-pic" /> Connect, Inspires Together<img src={P2} alt="People 2" className="profile-pic" /><div className="people-badge">+8 peoples</div>
                        </div>

                    </motion.h2>
                    {/*   */}

                    {/* Row of small circular images + '+8 peoples' */}
                    <motion.div
                        className="profile-row"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >



                    </motion.div>

                    {/* Descriptive paragraph */}
                    <motion.p
                        className="description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                    >
                        Join us to be part of a community where spirituality meets
                        innovation. Together, we'll build a world that's more inclusive,
                        engaging, and connected than ever before!
                    </motion.p>

                    {/* Button: 'View Our Services →' */}
                    <motion.button
                        className="services-button"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        View Our Services &rarr;
                    </motion.button>
                </div>





                {/* RIGHT COLUMN: Elliptical images side by side */}
                <div className="right-col">
                    <motion.div
                        className="ellipse-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2 }}
                    >
                        <img
                            src={P4}
                            alt="Ellipse"
                            className="ellipse-img"
                        />
                    </motion.div>
                </div>

            </div>

            {/* body another part */}
            <div className="join-con-div-main">

                <div className="join-con-div-first">

                    <div className="join-con-div-title">
                        <p>Join the Conversation </p>
                        <p id="blue-title">✨Bulid Connections</p>    
                    </div>

                    <div className="join-con-div-side-text">
                        <p>Discover vibrant community, share your thoughts, and connect with like-minded individuals. Together, we grow.</p>
                        <button className="join-con-button">Join Conversation →</button>
                    </div>
                </div>

                <div className="join-con-div-middle">
                    <img src={img1} className="join-con-img1"/>
                    <img src={img2} className="join-con-img2"/>
                </div>

                <div className="join-con-div-last">
                    <div className="join-con-div-last-title">
                    <p>
                        Where Connections Thrive <br /> and Ideas Flourish ✨ <b>2×</b>
                    </p>
                    </div>

                    <div className="join-con-div-last-side-radio">
                        <div className="join-con-radio">⦿ Happy Community </div>
                        <div className="join-con-radio">⦿ 210% Boost in Engagement</div>
                        <div className="join-con-radio">⦿ 172+ ranked communities</div>

                    </div>
                </div>

            </div>

        </div>
    );
}
