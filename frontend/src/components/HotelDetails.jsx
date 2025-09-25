import { useParams, Link } from "react-router-dom";
import "./hotelDetails.css";

const dummyHotels = {
  Vijayawada: [
    {
      name: "Novotel",
      image: "/novotel.jpg",
      rating: 4.8,
      price: 4200,
      availability: true,
      members: 2,
      address: "M G Road, Vijayawada, AP",
      contact: "+91 12345 67890",
    },
    {
      name: "Vivanta",
      image: "/vivanta.jpg",
      rating: 4.6,
      price: 3900,
      availability: true,
      members: 4,
      address: "Benz Circle, Vijayawada, AP",
      contact: "+91 98765 43210",
    },
  ],
  Hyderabad: [
    {
      name: "Lemon Tree",
      image: "/lemon_Tree.jpg",
      rating: 5,
      price: 6000,
      availability: false,
      members: 3,
      address: "HITEC City, Hyderabad, TS",
      contact: "+91 91234 56789",
    },
    {
      name: "Novotel HICC",
      image: "/novotel.jpg",
      rating: 4,
      price: 5200,
      availability: true,
      members: 3,
      address: "HICC Complex, Hyderabad, TS",
      contact: "+91 99887 66554",
    },
  ],
  Bengaluru: [
    {
      name: "The Oberoi",
      image: "/oberoi.jpeg",
      rating: 5,
      price: 7000,
      availability: true,
      members: 2,
      address: "MG Road, Bengaluru, KA",
      contact: "+91 88888 77777",
    },
    {
      name: "ITC Gardenia",
      image: "/gardenia.jpeg",
      rating: 4,
      price: 5500,
      availability: true,
      members: 4,
      address: "Residency Road, Bengaluru, KA",
      contact: "+91 90000 11223",
    },
  ],
  Punjab: [
    {
      name: "Hyatt Amritsar",
      image: "/Hyatt Amritsar.jpg",
      rating: 4.7,
      price: 4800,
      availability: true,
      members: 3,
      address: "GT Road, Amritsar, Punjab",
      contact: "+91 98765 22110",
    },
    {
      name: "Holiday Inn Ludhiana",
      image: "/Holiday Inn Ludhiana.avif",
      rating: 4.3,
      price: 4300,
      availability: true,
      members: 4,
      address: "Ferozepur Road, Ludhiana, Punjab",
      contact: "+91 87654 32109",
    },
  ],
  Delhi: [
    {
      name: "The Leela Palace",
      image: "/The Leela Palace.jpg",
      rating: 5.0,
      price: 9500,
      availability: true,
      members: 2,
      address: "Chanakyapuri, New Delhi",
      contact: "+91 93123 45678",
    },
    {
      name: "Taj Palace",
      image: "/Taj Palace.jpeg",
      rating: 4.8,
      price: 8900,
      availability: false,
      members: 2,
      address: "Sardar Patel Marg, New Delhi",
      contact: "+91 99887 66554",
    },
  ],
  Kerala: [
    {
      name: "The Zuri Kumarakom",
      image: "/The Zuri Kumarakom.jpg",
      rating: 4.9,
      price: 7500,
      availability: true,
      members: 2,
      address: "Kumarakom, Kerala",
      contact: "+91 99889 33445",
    },
    {
      name: "Taj Malabar Resort",
      image: "/Taj Malabar Resort.jpeg",
      rating: 4.7,
      price: 7200,
      availability: true,
      members: 3,
      address: "Willingdon Island, Kochi, Kerala",
      contact: "+91 87788 11223",
    },
  ],
  TamilNadu: [
    {
      name: "The Residency Towers",
      image: "/he Residency Towers.jpeg",
      rating: 4.6,
      price: 4700,
      availability: true,
      members: 3,
      address: "T. Nagar, Chennai, TN",
      contact: "+91 99885 22334",
    },
    {
      name: "Courtyard by Marriott",
      image: "/Courtyard by Marriott.jpeg",
      rating: 4.4,
      price: 4500,
      availability: false,
      members: 2,
      address: "Anna Salai, Chennai, TN",
      contact: "+91 91234 55667",
    },
  ],
  Goa: [
    {
      name: "Taj Exotica Resort",
      image: "/Taj Exotica Resort.jpeg",
      rating: 5.0,
      price: 10500,
      availability: true,
      members: 2,
      address: "Benaulim Beach, Goa",
      contact: "+91 70000 88888",
    },
    {
      name: "Cidade de Goa",
      image: "/Cidade de Goa.jpeg",
      rating: 4.5,
      price: 8700,
      availability: true,
      members: 4,
      address: "Vainguinim Beach, Goa",
      contact: "+91 72222 33445",
    },
  ],
  Agra: [
    {
      name: "ITC Mughal",
      image: "/ITC Mughal.jpeg",
      rating: 4.8,
      price: 7800,
      availability: true,
      members: 2,
      address: "Taj Ganj, Agra",
      contact: "+91 84444 55667",
    },
    {
      name: "Hotel Clarks Shiraz",
      image: "/Hotel Clarks Shiraz.jpeg",
      rating: 4.2,
      price: 5200,
      availability: true,
      members: 3,
      address: "Fatehabad Road, Agra",
      contact: "+91 85555 77889",
    },
  ]
};

function HotelDetails() {
  const { location, hotelName } = useParams();
  const hotels = dummyHotels[location] || [];
  const hotel = hotels.find(h => h.name === hotelName);

  if (!hotel) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Hotel not found</h2>;

  return (
    <div className="hotel-detail-container">
      <h1>{hotel.name}</h1>

      <div className="image-gallery">
        <img src={hotel.image} alt={hotel.name} />
        <img src="/room1.jpg" alt="Room 1" />
        <img src="/room2.jpg" alt="Room 2" />
        <img src="/room3.jpg" alt="Room 3" />
      </div>

      <div className="hotel-info">
        <h3>₹{hotel.price} / night</h3>
        <p className="rating">Rating: ⭐ {hotel.rating}</p>
        <p><strong>Address:</strong> {hotel.address}</p>
        <p><strong>Contact:</strong> {hotel.contact}</p>

        <p className="description">
          Welcome to <strong>{hotel.name}</strong>, a luxury hotel in <strong>{location}</strong>. Enjoy an unforgettable stay with:
        </p>

        <ul className="features-list">
          <li>✅ Free High-Speed Wi-Fi</li>
          <li>✅ Multi-cuisine Restaurant</li>
          <li>✅ Swimming Pool & Fitness Center</li>
          <li>✅ Spa and Wellness Services</li>
          <li>✅ 24/7 Room Service</li>
          <li>✅ Business & Conference Halls</li>
          <li>✅ Airport Shuttle</li>
          <li>✅ Family-friendly Environment</li>
        </ul>

        <Link to={`/book/${location}/${hotel.name}`}>
          <button className="book-button">Book Room</button>
        </Link>
      </div>
    </div>
  );
}

export default HotelDetails;
