const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  img: String, // image filename or URL
  name: String,
  date: String,
  location: String,
  category: String,
  info: String,
  // createdBy: String, // optional: who created the event
});

module.exports = mongoose.model("Event", eventSchema);
