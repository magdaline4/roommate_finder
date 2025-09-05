import React, { useEffect, useState } from "react";
import axios from "axios";
import RoomCard from "./RoomCard";
import { useNavigate } from "react-router-dom";
import "/src/components/Card/Roomdisplay.scss";

const Roomdisplay = () => {
  const [rooms, setRooms] = useState([]);
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [budget, setBudget] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/Jsonfile/Card.json").then((res) => {
      setRooms(res.data);
    });
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (gender) params.set("gender", gender);
    if (budget) params.set("budget", budget);
    navigate(`/all-rooms?${params.toString()}`);
  };

  const handleViewMore = () => {
    handleSearch(); // passes the filters as well
  };

  return (
    <div className="container">
      {/* Filters */}
      <div className="mainbox">
        <div className="filters1">
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="" disabled hidden>
              Location
            </option>
            <option value="Chennai">Chennai</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Hyderabad">Hyderabad</option>
          </select>

          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="" disabled hidden>
              Gender
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Male/Female">Male/Female</option>
          </select>

          <select value={budget} onChange={(e) => setBudget(e.target.value)}>
            <option value="" disabled hidden>
              Budget
            </option>
            <option value="5000-10000">5000 - 10000</option>
            <option value="10000-15000">10000 - 15000</option>
            <option value="15000-20000">15000 - 20000</option>
          </select>

          <button className="btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      {/* Selected Filters Pills - moved outside mainbox */}
      <div className="selectedFilters">
        {location && (
          <>
            <div className="filterPill">{location}</div>
            <button onClick={() => setLocation("")}>Clear</button>
          </>
        )}
        {gender && (
          <>
            <div className="filterPill">{gender}</div>
            <button onClick={() => setGender("")}>Clear</button>
          </>
        )}
        {budget && (
          <>
            <div className="filterPill">{budget}</div>
            <button onClick={() => setBudget("")}>Clear</button>
          </>
        )}
      </div>

      {/* Rooms Preview */}
      <div className="grid">
        {rooms.slice(0, 6).map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>

      {/* View More Button */}
      <div className="viewMoreWrapper">
        <button className="btn" onClick={handleViewMore}>
          View More
        </button>
      </div>
    </div>
  );
};

export default Roomdisplay;
