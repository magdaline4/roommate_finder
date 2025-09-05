import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import "./RoomListing.scss";

const RoomListing = () => {
  const { location } = useParams();
  const { state } = useLocation();
  const [data, setData] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showContact, setShowContact] = useState(false); // ✅ state for popup

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/Jsonfile/data.json");
        const payload = res.data;
        const target = location.toLowerCase();

        let roomData = payload.find(
          (item) => item?.roomDetails?.location?.toLowerCase() === target
        );

        if (roomData) {
          setImages(roomData.images || []);
          setMainImage(
            state?.mainImage || roomData.mainImage || roomData.images[0]
          );
          setData(roomData);
        }
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [location, state]);

  if (loading) return <div>Loading...</div>;
  if (!data) return <div>No rooms found for “{location}”.</div>;

  const { roomDetails = {}, roommateDetails = {} } = data;

  return (
    <div className="room-listing-container">
      <div className="room-listing">
        {/* Left Images */}
        <div className="image-gallery">
          <div className="thumbnails">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                className={mainImage === img ? "active" : ""}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <div className="main-image">
            <img src={mainImage} alt="main room" />
          </div>
        </div>

        {/* Details */}
        <div className="details">
          <div className="card">
            <div className="Details-container">
                          <h2>Room Details</h2>

              <p>
                <strong>Location:</strong> {roomDetails.location}
              </p>
              <p>
                <strong>Type:</strong> {roomDetails.type}
              </p>
              <p>
                <strong>Rent:</strong> {roomDetails.rent}
              </p>
              <p>
                <strong>Available From:</strong> {roomDetails.availableFrom}
              </p>
              <p>
                <strong>Looking For:</strong> {roomDetails.lookingFor}
              </p>
            </div>
            
            <div className="Details-container">
              <h2>Roommate Details</h2>
              <p>
                <strong>Name:</strong> {roommateDetails.name}
              </p>
              <p>
                <strong>Age:</strong> {roommateDetails.age}
              </p>
              <p>
                <strong>Profession:</strong> {roommateDetails.profession}
              </p>
              <p>
                <strong>Lifestyle:</strong> {roommateDetails.lifestyle}
              </p>
              
            </div>
            {/* Contact Button */}
            <button
              className="contact-btn"
              onClick={() => setShowContact(true)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Show ContactUs popup */}
      {showContact && (
        <ContactUs
          roommate={{
            name: roommateDetails.name,
            location: roomDetails.location,
            phone: roommateDetails.phone,
            image: roommateDetails.image,
          }}
          onClose={() => setShowContact(false)}
        />
      )}
    </div>
  );
};

export default RoomListing;
