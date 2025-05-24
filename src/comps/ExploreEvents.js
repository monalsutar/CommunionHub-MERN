import React, { useState, useEffect } from "react";
import axios from "axios";
import './explore-event.css';
import { useNavigate, useParams } from 'react-router-dom';

// import { useNavigate } from "react-router-dom";
import cardImg from "../assets/img11.jpg"

function ExploreEvent() {


    const [events, setEvents] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newEvent, setNewEvent] = useState({
        name: "",
        date: "",
        location: "",
        category: "",
        info: "",

    });
    const [filter, setFilter] = useState("All");
    const navigate = useNavigate();

    // 🔄 Fetch events on mount
    useEffect(() => {
        axios.get("http://localhost:5000/api/events")
            .then(res => setEvents(res.data))
            .catch(err => console.error("Failed to fetch events", err));
    }, []);

    // 🔄 Handle input
    const handleInputChange = (e) => {
        setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
    };

    // 🔄 Add new event
    const addEvent = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:5000/api/events", newEvent);
            setEvents([...events, res.data.event]); // Append new event from backend
            setShowForm(false);
            setNewEvent({ name: "", date: "", location: "", category: "", info: "", img: "E6" });
        } catch (err) {
            console.error("Failed to add event", err);
        }
    };

    // 🔄 Filter events based on the selected category
    const filteredEvents = filter === "All" ? events : events.filter(event => event.category === filter);


    //this is for update
    const handleEdit = (event) => {
        navigate("/add-event", { state: { event } });
    };

    // 🔄 Delete event by ID
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this event?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:5000/api/events/${id}`);
            setEvents(events.filter(event => event._id !== id)); // Remove from UI
        } catch (err) {
            console.error("Failed to delete event", err);
        }
    };



    return (
        <div className="explore-section">
            <div className="event-header">
                <h2 className="event-title">We Helped Communities Connect & Flourish</h2>
                <p className="event-title-second">✦ Upcoming Events</p>

                <div className="event-filter-section">
                    <div className="event-filter-content">Today</div>
                    <div className="event-filter-content">Tommorrow</div>
                    <div className="event-filter-content">This Week</div>
                    <div className="event-filter-content">Next Week</div>
                    <div className="event-filter-content">This Month</div>

                </div>
            </div>

            <div className="event-actions">
                {/* <select className="filter-dropdown" onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <option value="All">All Categories</option>
                    <option value="Religious">Religious</option>
                    <option value="Social">Social</option>
                    <option value="Charity">Charity</option>
                    <option value="Cultural">Cultural</option>
                </select> */}


                {/* //disabled button */}
                {localStorage.getItem("username") ? (
                    <div className="add-event-button" onClick={() => navigate("/add-event")}>Plan your next Big Event</div>

                ) : (
                    <div
                        className="add-btn disabled-btn"
                        onClick={() => {
                            alert("Please login to add events");
                            navigate("/login");
                        }}
                    >
                        Plan your next Big Event
                    </div>
                )}


            </div>



            <div className="db-event-grid">
                

                {events.map((event, index) => (
                    
                    <div key={index}  className="event-card-div" style={{
                        backgroundPosition: `${(index * 49) % 100}% ${(index * 50) % 100}%`
                      }}>
                        {/* ✅ Add this below */}

                        {/* {<img src={cardImg} alt={event.name} className="event-card-img" />} */}

                        <div className="event-card-container">

                            <h3 className="event-card-title">{event.name}</h3>
                            <div className="event-card-date"><strong>Date:</strong> {event.date}</div>
                            <div className="event-card-loc"><strong>Location:</strong> {event.location}</div>
                            <div className="event-card-category"><strong>Category:</strong> {event.category}</div>
                            <p className="event-card-info"> {event.info}</p>

                            {/* <p><strong>Created By:</strong> {event.createdBy}</p> */}


                            {/* Edit and Delete buttons */}
                            <div className="event-card-buttons">

                                <button onClick={() => handleEdit(event)} className="event-card-edit-button">✏️ Edit Event</button>

                                <button className="event-card-delete-button" onClick={() => handleDelete(event._id)}>🗑️ Delete Event</button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            <br></br>

        </div>
    );
}

export default ExploreEvent;