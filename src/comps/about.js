import React, { useState } from "react";
import About1 from "../assets/about1.png";
import About2 from "../assets/about2.png";
import About3 from "../assets/about3.png";

function About() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent("");
    };

    return (
        <div>
            <div className="about">
                <p className="title">
               
                    Why Communion Rocks! <br></br>
                        
                    ✦ Communion is more than just a platform — it's a vibrant space that unites people across faiths and beliefs. By fostering connection and collaboration, we turn differences into strengths, building a world where unity thrives.</p>

                <p className="content">
               
                    

                    <div className="slogan">
                        <p>"Together, we rise — stronger, united, and inspired."</p>
                    </div>

                    <div className="about-logos">
                        <div className="about-card1">
                            <img src={About1} alt="Unifying Communities" />
                            <p>Unifying Communities</p>
                            <p onClick={() => handleModal(
                                "Discover a platform where different faiths come together in harmony. Our community features:\n" +
                                "• Regular interfaith dialogues and discussions\n" +
                                "• Shared celebration of festivals and traditions\n" +
                                "• Cultural exchange programs and events\n" +
                                "• Collaborative community service projects\n" +
                                "• Educational resources about different faiths\n\n" +
                                "Join us in building bridges across religious boundaries and creating lasting connections."
                            )} className="learn-button">
                                Learn More ➔
                            </p>
                        </div>

                        <div className="about-card1">
                            <img src={About2} alt="Innovative and Fun" />
                            <p>Innovative and Fun</p>
                            <p onClick={() => handleModal(
                                `Explore spirituality through cutting-edge technology and engaging features:
                                • Interactive virtual prayer rooms
                                • Live-streamed religious ceremonies
                                • Faith-based social networking
                                • Gamified learning experiences
                                • Mobile-first spiritual tools

                                Experience the perfect blend of tradition and technology in your spiritual journey.`
                            )} className="learn-button">
                            Learn More ➔
                        </p>
                    </div>

                    <div className="about-card1">
                        <img src={About3} alt="Promoting Unity" />
                        <p>Promoting Unity</p>
                        <p onClick={() => handleModal(
                                `Be part of a movement that celebrates unity in diversity:
                                • Cross-cultural meditation sessions
                                • Interfaith peace initiatives
                                • Community outreach programs
                                • Youth leadership development
                                • Global spiritual networking

                                Together, we're creating a world where all faiths thrive in harmony.`
                            )} className="learn-button">
                            Learn More ➔
                        </p>
                    </div>
            </div>
        </p>
            </div >

        {/* Modal Section */ }
    {
        isModalOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <p>{modalContent}</p>
                    <button onClick={closeModal} className="close-btn">Show less</button>
                </div>
            </div>
        )
    }
        </div >
    );
}

export default About;
