const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

require("dotenv").config();


// CORS setup - allows frontend to talk to backend
app.use(cors({
  origin: "http://localhost:3000",  // frontend origin
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/communionDB")
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("DB Error:", err));

// Routes
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

const eventRoutes = require("./routes/event"); // ✅ NEW
app.use("/api", eventRoutes); // ✅ NEW

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
