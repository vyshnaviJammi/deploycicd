import React from "react";

function AboutUs() {
    return (
        <div style={{
            padding: "40px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "white",
            textAlign: "center",
            position: "absolute",
            top: "120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "80%",
            borderRadius: "10px"
        }}>
            <h2>About Us</h2>
            <p style={{ fontSize: "18px", marginTop: "20px" }}>
                Welcome to <strong>StayEZ (Hotel Booking)</strong>, your trusted companion for discovering the perfect place to stay. 
                Whether you're traveling for business or leisure, we simplify your experience by providing:
            </p>
            <ul style={{ fontSize: "16px", marginTop: "20px", textAlign: "left", paddingLeft: "20px", lineHeight: "1.8" }}>
                <li>Easy-to-use search and booking functionality</li>
                <li>Carefully curated listings with detailed descriptions and reviews</li>
                <li>Personalized hotel recommendations based on your preferences</li>
                <li>Secure and hassle-free booking process</li>
                <li>24/7 customer support to assist you throughout your journey</li>
            </ul>
            <p style={{ fontSize: "18px", marginTop: "20px" }}>
                At StayEZ, we believe in turning your travel dreams into reality—one booking at a time.
            </p>
        </div>
    );
}

export default AboutUs;
