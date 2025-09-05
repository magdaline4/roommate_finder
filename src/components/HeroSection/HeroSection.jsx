import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./HeroSection.scss";

const HeroSection = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearchClick = () => {
    const trimmed = query.trim();
    if (trimmed) {
      onSearch(trimmed); 
    }
  };

  return (
    <section className="hero">
      <h1>Find A Roommate/ Flatmate</h1>
      <div className="overlay">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search now"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-btn" onClick={handleSearchClick}>
            <FaSearch />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;