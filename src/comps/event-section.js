import React from "react";
import './all.css'
import { Link } from "react-router-dom";
import img1 from '../assets/event (1).jpg'
import img2 from '../assets/event (3).jpg'
import img3 from '../assets/event (4).jpg'
import img4 from '../assets/event-moment1.jpg'
import img5 from '../assets/event-moment2.jpg'


function Events() {



    return (
        <div className="event-section-main">

            <div className="main-banner">
                <p className="banner-title">
                    🌟 Unlock Unforgettable Moments with Every Event! 🌟
                </p>

                <p className="banner-text">
                    Every event is more than just a gathering 🤝 — it's a journey of growth, inspiration, and connection. Whether you're here to spark ideas, build meaningful relationships, or celebrate achievements, there's a place for you✨
                    
                    <div className="explore-events-button">
                        <Link to="/explore" className="explore-link">Explore Events ➔</Link>
                    </div>
                </p>

                <div className="image-grid">
                    <p className="grid-title"> Moments to Remember ❤️</p>

                    <div className="grid-images">
                        <img src={img3} className="image1" />
                        <img src={img5} className="image2" />
                        <img src={img4} className="image3" />


                    </div>
                </div>


            </div>



        </div>
    )
}

export default Events