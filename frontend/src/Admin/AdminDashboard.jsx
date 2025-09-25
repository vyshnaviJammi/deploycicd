import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './AdminDashboard.css'; // Make sure this is imported

function AdminDashboard() {
  const [bookings, setBookings] = useState([]);
  const [hotels, setHotels] = useState([
    { id: 1, name: "The Residency Towers", location: "TamilNadu" },
    { id: 2, name: "Taj Palace", location: "Delhi" },
    { id: 3, name: "The Oberoi", location: "Bengaluru" },
  ]);

  useEffect(() => {
    // Simulate bookings fetch if needed in future
  }, []);

  return (
    <div className="admin-dashboard">
      <h1 className="dashboard-heading">Admin Dashboard</h1>

      {/* Hotels Section */}
      <section>
        <h2 className="section-title">Manage Hotels</h2>
        <div className="hotel-list">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-item">
              <p className="highlighted-text">
                <strong>{hotel.location}:</strong> {hotel.name}
              </p>
              <Link to={`/edit-hotel/${hotel.id}`}>
                <button className="edit-button">Edit Hotel</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section>
        <h2 className="section-title">Booking Records</h2>
        {bookings.length === 0 ? (
          <p className="highlighted-text" style={{ textAlign: 'center' }}>
            No bookings available. Please check back later.
          </p>
        ) : (
          bookings.map((booking) => (
            <div key={booking.id} className="booking-item">
              <p className="highlighted-text">
                <strong>Booking ID:</strong> {booking.id}
              </p>
              <p className="highlighted-text">
                <strong>Customer Name:</strong> {booking.customerName}
              </p>
              <p className="highlighted-text">
                <strong>Hotel:</strong> {booking.hotelName}
              </p>
              <p className="highlighted-text">
                <strong>Date:</strong> {booking.date}
              </p>
              <Link to={`/edit-booking/${booking.id}`}>
                <button className="edit-button">Edit Booking</button>
              </Link>
            </div>
          ))
        )}
      </section>
    </div>
  );
}

export default AdminDashboard;
