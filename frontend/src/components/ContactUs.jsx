import React from "react";

function ContactUs() {
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
            <h2>Contact Us</h2>
            <p style={{ fontSize: "18px", marginTop: "20px" }}>
                We'd love to hear from you! Reach out to us anytime if you need help or have suggestions.
            </p>
            <div style={{ fontSize: "16px", marginTop: "20px", lineHeight: "2" }}>
                <p><strong>Email:</strong> support@stayez.com</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Office Hours:</strong> Monday - Saturday, 9 AM - 6 PM</p>
                <p><strong>Address:</strong> 3rd Floor, StayEZ Towers, Mumbai, India</p>
            </div>
        </div>
    );
}

export default ContactUs;
