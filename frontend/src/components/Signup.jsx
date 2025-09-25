import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Auth.css";

const API_BASE = "http://localhost:8080"; // ✅ backend URL

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("User");
  const [username, setUsername] = useState("");
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");

  const handleSignup = async () => {
    if (
      (role === "Admin" && !adminId) ||
      (role === "User" && !username) ||
      !password ||
      !mobile ||
      !address
    ) {
      alert("Please fill all fields!");
      return;
    }

    // Backend expects an "email" field, not "name"
    const newUser = {
      role,
      email: role === "Admin" ? adminId : username,
      password,
      mobile,
      address,
      profilePic: "/user.png",
    };

    try {
      const res = await fetch(`${API_BASE}/api/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Registration failed");
        return;
      }

      alert("✅ Account created successfully! Please log in.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("❌ Error connecting to backend.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">SIGN UP</h2>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>

        {role === "Admin" ? (
          <input
            type="text"
            placeholder="Admin Email*"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />
        ) : (
          <input
            type="text"
            placeholder="Email*"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        )}

        <input
          type="password"
          placeholder="Password*"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile Number*"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address*"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <button onClick={handleSignup} className="auth-button">
          Create Account
        </button>

        <p className="auth-footer">
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} className="signup-link">
            LOGIN
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
