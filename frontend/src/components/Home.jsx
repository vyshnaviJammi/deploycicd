import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home({ user }) {
    const [location, setLocation] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!location.trim()) {
            alert("Please enter a location!");
            return;
        }

        navigate(`/hotels?location=${encodeURIComponent(location.trim())}`);
    };

    return (
        <div className="home-wrapper">
            {/* Top Welcome Banner */}
            <div className="welcome-banner">
                <h1>Welcome to Hotel Booking</h1>
                <p>Find the best hotels at the best prices!</p>
            </div>

            {/* Background + Centered Search */}
            <div className="search-section">
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Enter a location..."
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <button onClick={handleSearch} disabled={!location}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
