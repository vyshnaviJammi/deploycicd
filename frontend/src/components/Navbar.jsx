import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, onLogout }) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px 20px",
      background: "#333",
      color: "white",
      position: "relative"
    }}>
      <h2 style={{ margin: 0 }}>Hotel Booking</h2>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
        {user ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              marginBottom: "5px",
            }}
            onClick={onLogout}
          >
            <img
              src={user.profilePic}
              alt="Profile"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <span>{user.name} (Logout)</span>
          </div>
        ) : (
          <div style={{ marginBottom: "5px" }}>
            <Link to="/signup" style={{ color: "white", marginRight: "10px" }}>
              Sign Up
            </Link>
            <Link to="/login" style={{ color: "white" }}>
              Log In
            </Link>
          </div>
        )}

        <div>
          <Link to="/" style={{ color: "white", marginRight: "15px" }}>
            Home
          </Link>
          <Link to="/about" style={{ color: "white", marginRight: "15px" }}>
            About Us
          </Link>
          <Link to="/contact" style={{ color: "white", marginRight: "15px" }}>
            Contact Us
          </Link>

          {/* ✅ Admin-only link */}
          {user?.role === "Admin" && (
            <Link to="/admin" style={{ color: "lightgreen", marginRight: "15px" }}>
              Admin Dashboard
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
