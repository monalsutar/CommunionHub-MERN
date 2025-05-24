const express = require("express");
const router = express.Router();
const User = require("../models/User");

const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto"); // For generating OTP
// const User = require("../models/User");



router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.json({ success: false, message: "Invalid credentials" });
    }
    res.json({ success: true, username: user.name });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { name, mobile, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, mobile, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error" });
  }
});


//password
router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiry = new Date(Date.now() + 10 * 60 * 1000); // 10 mins from now

  user.otp = otp;
  user.otpExpiry = expiry;
  await user.save();

  await sendEmail(
    email,
    "Your OTP for Password Reset",
    `Your OTP is ${otp}. It is valid for 10 minutes.`
  );

  res.json({ message: "OTP sent to email" });
});


router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.otp !== otp || user.otpExpiry < new Date()) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  res.json({ message: "OTP verified successfully" });
});


router.post("/reset-password", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(404).json({ message: "User not found" });

  user.password = password;
  user.otp = undefined;
  user.otpExpiry = undefined;

  await user.save();
  res.json({ message: "Password updated successfully" });
});


module.exports = router;
