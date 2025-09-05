// src/components/Card/RoomCard.jsx
import React from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import "/src/components/Card/RoomCard.scss";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  // helper function to clean location param
  const toParam = (s = "") =>
    s.toLowerCase().replace(/[,]/g, "").replace(/\s+/g, " ").trim();

  const handleExplore = () => {
    navigate(`/roomlisting/${encodeURIComponent(toParam(room.location))}`, {
      state: {
        mainImage: room.image,   // 👈 pass main image
        title: room.title,
        price: room.price,
        gender: room.gender,
        location: room.location
      },
    });
  };

return (
  <div className="roomCardContainer">
    <div className="card">
      <img src={room.image} alt={room.title} />
      <h3>{room.title}</h3>
      <p><strong>Price:</strong> ₹{room.price}</p>
      <p><strong>Gender:</strong> {room.gender}</p>
      <p><strong>Location:</strong> {room.location}</p>
      <Button text="Explore Now" onClick={handleExplore} />
    </div>
  </div>
);

};

export default RoomCard;
