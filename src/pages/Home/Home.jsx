import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "/src/components/HeroSection/HeroSection.jsx";
import Navbar from "/src/components/Navbar/Navbar.jsx";
import Roomdisplay from "/src/components/Card/Roomdisplay";
import Footer from "/src/components/Footer/Footer.jsx";
import UserFeedback from "../../components/UserFeedback/UserFeedback";
import Ben from "../../assets/images/Ben.jpg";
import Chenn from "../../assets/images/chenn.jpg";
import Hyber from "../../assets/images/Hyber.jpg";
import Mum from "../../assets/images/Mum.jpg";
import "../Home/Home.scss";
import RoomListing from "../../components/RoomListing/RoomListing";

const Home = () => {
  const navigate = useNavigate();

  const handleSearch = (location) => {
    navigate(`/all-rooms?location=${encodeURIComponent(location)}`);
  };

    const handleCityClick = (city) => {
    navigate(`/all-rooms?location=${city}`);
  };

  return (
    <div>
      <Navbar />
      <HeroSection onSearch={handleSearch} />

    <div className="box">
   <h1 className="Cities">Popular Cities</h1>

    <div className="img">
  <div className="city-card" onClick={() => handleCityClick("Bengaluru")}>
    <h2>Bengaluru</h2>
    <img src={Ben} alt="Bengaluru" />
  </div>

  <div className="city-card" onClick={() => handleCityClick("Chennai")}>
    <h2>Chennai</h2>
    <img src={Chenn} alt="Chennai" />
  </div>

  <div className="city-card" onClick={() => handleCityClick("Hyderabad")}>
    <h2>Hyderabad</h2>
    <img src={Hyber} alt="Hyderabad" />
  </div>

  <div className="city-card" onClick={() => handleCityClick("Mumbai")}>
    <h2>Mumbai</h2>
    <img src={Mum} alt="Mumbai" />
  </div>
</div>

    </div>
      <Roomdisplay />
     
      <UserFeedback />
      <Footer />
     
    </div>
  );
};

export default Home;
