import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoomFilter() {
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [budget, setBudget] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/all-rooms", {
      state: { location, gender, budget }
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* Dropdown filters */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="">Location</option>
          <option value="Chennai">Chennai</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bengaluru">Bengaluru</option>
        </select>

        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Male/Female">Male/Female</option>
        </select>

        <select value={budget} onChange={(e) => setBudget(e.target.value)}>
          <option value="">Budget</option>
          <option value="5000-10000">5000 - 10000</option>
          <option value="10000-15000">10000 - 15000</option>
        </select>

        {/* Search Button */}
        <button style={btnStyle} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

const btnStyle = {
  background: "#004080",
  color: "#fff",
  padding: "8px 16px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  marginLeft: "10px"
};
