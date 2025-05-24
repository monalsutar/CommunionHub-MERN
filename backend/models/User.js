const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  mobile: Number,
  email: { type: String, unique: true },
  password: String,
  otp: String,
  otpExpiry: Date,

});

module.exports = mongoose.model("User", userSchema);
