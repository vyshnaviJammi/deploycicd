import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login({ setIsLoggedIn, setUser }) {
  const [formData, setFormData] = useState({
    role: "User",
    id: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dummy auth logic — Replace with actual API calls later
    const { role, id, password } = formData;
    if (!id || !password) {
      alert("Please enter both ID and password.");
      return;
    }

    const userData = {
      name: role === "Admin" ? "Admin" : "User",
      role,
      profilePic: "/default-profile.png", // optional
    };

    // Save to localStorage
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", "true");

    // Update state
    setIsLoggedIn(true);
    setUser(userData);

    // Redirect based on role
    if (role === "Admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-title">LOGIN</div>
        <form onSubmit={handleSubmit}>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="User">User</option>
            <option value="Admin">Admin</option>
          </select>

          <input
            type="text"
            name="id"
            placeholder={formData.role === "Admin" ? "Admin ID*" : "User ID*"}
            value={formData.id}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password*"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="auth-links">
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <button type="submit" className="auth-button">Sign In</button>
        </form>

        <div className="auth-footer">
          <span>Don't have an account?</span>{" "}
          <a href="/signup" className="signup-link">SIGN UP NOW</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
