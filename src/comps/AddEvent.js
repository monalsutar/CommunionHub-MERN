import React, { useState } from "react";
import "./addEventForm.css";
import axios from "axios";
import E5 from '../assets/event (5).jpg'; // default image
import event_image from '../assets/La-Petite-Ferme-13.png';
import { useLocation, useNavigate } from "react-router-dom";

function AddEvent() {
    const navigate = useNavigate();
    const location = useLocation(); // Get event data passed through navigate
    const eventToEdit = location.state?.event;


    const [newEvent, setNewEvent] = useState({
        _id: eventToEdit ? eventToEdit._id : undefined,
        name: eventToEdit ? eventToEdit.name : "",
        date: eventToEdit ? eventToEdit.date : "",
        location: eventToEdit ? eventToEdit.location : "",
        category: eventToEdit ? eventToEdit.category : "",
        info: eventToEdit ? eventToEdit.info : "",
        // img: eventToEdit ? eventToEdit.img : E5,
    });
    

    const handleChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (eventToEdit) {
                // If editing an event, make a PUT request
                

                const res = await axios.put(`http://localhost:5000/api/events/${eventToEdit._id}`, newEvent);

                console.log("Event updated:", res.data);
                alert("Event updated successfully!");

                console.log("Event ID:"); // Log the ID to check

            } else {
                // Otherwise, make a POST request to add a new event
                const res = await axios.post("http://localhost:5000/api/events", newEvent);
                console.log("Event saved:", res.data);
                alert("Event added successfully!");

            }

            setNewEvent({
                name: "",
                date: "",
                location: "",
                category: "",
                info: "",
                img: E5,
            });
        } catch (err) {
            console.error("Failed to add or update event:", err.response?.data || err.message);
            alert("Failed to add or update event! " + (err.response?.data?.message || err.message));
            console.log("Updating event with ID:", eventToEdit._id);

        }
    };

   



    return (
        <div className="add-event-section">

            <div className="add-event-form-header">
                <p className="add-event-form-title">Create a New Event</p>
                <p className="add-event-form-title2">Fill in the details to create your event</p>

                <div className="content-div">
                    <p className="add-event-form-p-tag">Fill out the form below with the key details about your event, including date, location, and highlights. Make it engaging to attract your audience and ensure everything is set for a successful launch.</p>

                    <button className="add-event-explore-button">Explore Events → </button>
                </div>

            </div>

            <form className="add-event-form" onSubmit={handleSubmit}>

                {/* Basic details */}

                <p className="add-event-form-basic-details">Basic Details*</p>

                <p className="add-event-form-event-type">Event Title*</p>
                <input className="add-event-form-event-title" type="text" name="name" placeholder="Give your event a name" value={newEvent.name} onChange={handleChange} required />

                <p className="add-event-form-event-type">Event Format*</p>
                <select className="add-event-form-category" name="format" required>
                    <option value="">In Person</option>
                    <option value="Online">Online</option>
                    <option value="Hybrid">Hybrid</option>
                    
                </select>



                <p className="add-event-form-basic-details">Date and Time*</p>

                <div className="add-event-form-date-time">

                    <input className="add-event-form-date" type="date" name="date" value={newEvent.date} onChange={handleChange} required />

                    <input className="add-event-form-time" type="time" name="time" required />
                </div>


                <p className="add-event-form-basic-details">Location*</p>

                <input className="add-event-form-comps" type="text" name="location" placeholder="Location" value={newEvent.location} onChange={handleChange} required />

                

                {/* Event Details */}

                <hr></hr>

                <p className="add-event-form-basic-details">Event Details*</p>
                <p className="add-event-form-event-type">Event Type*</p>


                <div className="add-event-form-radio-group">

                    <div>

                    <input type="radio" id="option1" name="choice" value="option1" />
                    <label htmlFor="option1"> Free</label>
                    </div>

                    <div>

                    <input type="radio" id="option2" name="choice" value="option1" />
                    <label htmlFor="option2"> Paid</label>
                    </div>

                    <div>

                    <input type="radio" id="option3" name="choice" value="option1" />
                    <label htmlFor="option3"> Donation</label>
                    </div>

                </div>

                <p className="add-event-form-basic-details">Event Capacity*</p>

                <div className="add-event-form-radio-group">

                    <div>

                    <input type="radio" id="option1" name="choice" value="option1" />
                    <label htmlFor="option1"> Unlimited</label>
                    </div>

                    <div>

                    <input type="radio" id="option2" name="choice" value="option1" />
                    <label htmlFor="option2"> Limited</label>
                    </div>


                </div>


                <p className="add-event-form-basic-details">Category*</p>
                <select className="add-event-form-category" name="category" value={newEvent.category} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Charity">Charity</option>
                </select>

                <p className="add-event-form-basic-details">Tell us more about Event*</p>

                <textarea className="add-event-form-desc" name="info" placeholder="Event Description" value={newEvent.info} onChange={handleChange} required></textarea>
                

                <div className="add-event-form-buttons">

                    <button type="submit" className="add-event-form-submit-button">{eventToEdit ? "Update Event" : "Add Event"}</button>

                    <button type="button" className="add-event-form-view-event-button" onClick={() => navigate("/events")}>Back to Events</button>
                </div>

                

            </form>

            <br></br>
        </div>


    );
}

export default AddEvent;
