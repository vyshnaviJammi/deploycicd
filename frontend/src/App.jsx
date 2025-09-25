import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import HotelResults from "./components/HotelResults";
import HotelDetails from "./components/HotelDetails";
import BookingPage from "./components/BookingPage";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import AdminDashboard from "./Admin/AdminDashboard"; // ✅ import added

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    const storedUser = localStorage.getItem("user");

    if (loggedInStatus === "true" && storedUser) {
      setIsLoggedIn(true);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/book/:location/:hotelName" element={<BookingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* Admin Route */}
        {isLoggedIn && user?.role === "Admin" && (
          <Route path="/admin" element={<AdminDashboard />} />
        )}

        {/* Protected User Routes */}
        {!isLoggedIn ? (
          <Route path="*" element={<Navigate to="/login" />} />
        ) : (
          <>
            <Route path="/" element={<Home user={user} />} />
            <Route path="/hotels" element={<HotelResults />} />
            <Route path="/hotels/:location/:hotelName" element={<HotelDetails />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
