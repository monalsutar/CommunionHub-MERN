const express = require("express");
const router = express.Router();
const Event = require("../models/Event");

// Create a new event (POST)
router.post("/events", async (req, res) => {
    try {
      const { img, name, date, location, category, info, createdBy } = req.body;
  
      const newEvent = new Event({ img, name, date, location, category, info, createdBy });
      await newEvent.save();
  
      res.status(201).json({ message: "Event created successfully", event: newEvent });
    } catch (error) {
      res.status(500).json({ message: "Failed to create event", error });
    }
  });

// Get all events (GET)
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events", error });
  }
});

// Update an existing event (PUT)
router.put("/events/:id", async (req, res) => {
  try {
      const { name, date, location, category, info } = req.body;
      const { id } = req.params;

      // Validate the incoming data
      if (!name || !date || !location || !category || !info) {
          return res.status(400).json({ message: "Missing required fields" });
      }
      

      const updatedEvent = await Event.findByIdAndUpdate(
          id,
          {  name, date, location, category, info},
          { new: true } // Return the updated document
      );

      if (!updatedEvent) {
          return res.status(404).json({ message: "Event not found" });
      }

      res.status(200).json({ message: "Event updated successfully", event: updatedEvent });
  } catch (error) {
      res.status(500).json({ message: "Failed to update event-DB", error });
  }
});


// Delete an event (DELETE)
router.delete("/events/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);

    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete event", error });
  }
});


module.exports = router;
