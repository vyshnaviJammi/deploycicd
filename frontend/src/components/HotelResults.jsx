import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./HotelResults.css";

const dummyHotels = {
  Vijayawada: [
    { name: "Novotel", image: "/novotel.jpg", rating: 4.8, price: 4200, availability: true, address: "M G Road, Vijayawada, AP" },
    { name: "Vivanta", image: "/vivanta.jpg", rating: 4.6, price: 3900, availability: true, address: "Benz Circle, Vijayawada, AP" },
  ],
  Hyderabad: [
    { name: "Lemon Tree", image: "/lemon_Tree.jpg", rating: 5, price: 6000, availability: false, address: "HITEC City, Hyderabad, TS" },
    { name: "Novotel HICC", image: "/novotel.jpg", rating: 4, price: 5200, availability: true, address: "HICC Complex, Hyderabad, TS" },
  ],
  Bengaluru: [
    { name: "The Oberoi", image: "/oberoi.jpeg", rating: 5, price: 7000, availability: true, address: "MG Road, Bengaluru, KA" },
    { name: "ITC Gardenia", image: "/gardenia.jpeg", rating: 4, price: 5500, availability: true, address: "Residency Road, Bengaluru, KA" },
  ],
  Punjab: [
    { name: "Hyatt Amritsar", image: "/Hyatt Amritsar.jpg", rating: 4.7, price: 4800, availability: true, address: "GT Road, Amritsar, Punjab" },
    { name: "Holiday Inn Ludhiana", image: "/Holiday Inn Ludhiana.avif", rating: 4.3, price: 4300, availability: true, address: "Ferozepur Road, Ludhiana, Punjab" },
  ],
  Delhi: [
    { name: "The Leela Palace", image: "/The Leela Palace.jpg", rating: 5.0, price: 9500, availability: true, address: "Chanakyapuri, New Delhi" },
    { name: "Taj Palace", image: "/Taj Palace.jpeg", rating: 4.8, price: 8900, availability: false, address: "Sardar Patel Marg, New Delhi" },
  ],
  Kerala: [
    { name: "The Zuri Kumarakom", image: "/The Zuri Kumarakom.jpg", rating: 4.9, price: 7500, availability: true, address: "Kumarakom, Kerala" },
    { name: "Taj Malabar Resort", image: "/Taj Malabar Resort.jpeg", rating: 4.7, price: 7200, availability: true, address: "Willingdon Island, Kochi, Kerala" },
  ],
  TamilNadu: [
    { name: "The Residency Towers", image: "/he Residency Towers.jpeg", rating: 4.6, price: 4700, availability: true, address: "T. Nagar, Chennai, TN" },
    { name: "Courtyard by Marriott", image: "/Courtyard by Marriott.jpeg", rating: 4.4, price: 4500, availability: false, address: "Anna Salai, Chennai, TN" },
  ],
  Goa: [
    { name: "Taj Exotica Resort", image: "/Taj Exotica Resort.jpeg", rating: 5.0, price: 10500, availability: true, address: "Benaulim Beach, Goa" },
    { name: "Cidade de Goa", image: "/Cidade de Goa.jpeg", rating: 4.5, price: 8700, availability: true, address: "Vainguinim Beach, Goa" },
  ],
  Agra: [
    { name: "ITC Mughal", image: "/ITC Mughal.jpeg", rating: 4.8, price: 7800, availability: true, address: "Taj Ganj, Agra" },
    { name: "Hotel Clarks Shiraz", image: "/Hotel Clarks Shiraz.jpeg", rating: 4.2, price: 5200, availability: true, address: "Fatehabad Road, Agra" },
  ],
};

function HotelResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchLocation = searchParams.get("location");

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    if (searchLocation) {
      const results = dummyHotels[searchLocation] || [];
      setHotels(results);
    }
  }, [searchLocation]);

  return (
    <div className="results-container">
      <h2>Hotels in {searchLocation}</h2>
      {hotels.length === 0 ? (
        <p>No hotels found for this location.</p>
      ) : (
        <div className="hotel-list">
          {hotels.map((hotel, index) => (
            <Link
              to={`/hotels/${searchLocation}/${hotel.name}`}
              key={index}
              className="hotel-card-link"
            >
              <div className="hotel-card-flex">
                <img src={hotel.image} alt={hotel.name} className="hotel-img-side" />
                <div className="hotel-info-side">
                  <div className="hotel-title-row">
                    <h3>{hotel.name}</h3>
                    <span className="rating-box">⭐ {hotel.rating}</span>
                  </div>
                  <p className="location-text">{hotel.address}</p>
                  <p className="distance">~Approx from center</p>
                  <p className="desc">
                    A premium hotel in {searchLocation} offering exceptional comfort, perfect for business and leisure travelers.
                  </p>
                  <div className="hotel-meta-row">
                    <p className="price">₹{hotel.price} / night</p>
                    <p className={hotel.availability ? "available" : "not-available"}>
                      {hotel.availability ? "Available" : "Not Available"}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default HotelResults;
