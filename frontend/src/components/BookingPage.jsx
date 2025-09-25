import { useParams } from "react-router-dom";
import { useState } from "react";
import "./BookingPage.css";

function BookingPage() {
  const { location, hotelName } = useParams();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    paymentMethod: "Credit Card",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (new Date(formData.checkInDate) >= new Date(formData.checkOutDate)) {
      alert("❌ Check-out date must be after check-in date.");
      return;
    }

    alert(
      `✅ Your room at ${hotelName} in ${location} has been successfully booked!\n
👤 Guest: ${formData.fullName}
📅 Stay: ${formData.checkInDate} to ${formData.checkOutDate}
💳 Payment Method: ${formData.paymentMethod}

Thank you for visiting. Enjoy your stay! 🏨✨`
    );

    const userInfo = JSON.parse(localStorage.getItem("user")) || {};
    const newBooking = {
      ...formData,
      user: userInfo.name || "Guest",
      role: userInfo.role || "User",
      hotelName,
      location,
      timestamp: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("bookings")) || [];
    existing.push(newBooking);
    localStorage.setItem("bookings", JSON.stringify(existing));

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      checkInDate: "",
      checkOutDate: "",
      paymentMethod: "Credit Card",
      specialRequests: "",
    });
  };

  return (
    <div className="booking-container">
      <h2>Book Room at {hotelName} in {location}</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>
        <label>Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <label>Check-in Date:
          <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required />
        </label>
        <label>Check-out Date:
          <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required />
        </label>
        <label>Payment Method:
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
            <option>Credit Card</option>
            <option>Debit Card</option>
            <option>UPI</option>
            <option>Net Banking</option>
            <option>Pay at Hotel</option>
          </select>
        </label>
        <label>Special Requests:
          <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Any special instructions or preferences?"
          />
        </label>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingPage;
