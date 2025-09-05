import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import RoomListing from "../../components/RoomListing/RoomListing";
import Footer from "../../components/Footer/Footer";
import "./Description.scss";

const Description = () => {
  const { location } = useParams();
  const [mapInfo, setMapInfo] = useState(null);

  useEffect(() => {
    // Replace '/api/maps' with your actual API endpoint
    axios.get("/Jsonfile/Map.json")
      .then((res) => {
        // Find the map matching the URL location
        const map = res.data.find(
          (m) => m.location.toLowerCase() === location.toLowerCase()
        );
        setMapInfo(map);
      })
      .catch((err) => {
        console.error("Error fetching map data:", err);
      });
  }, [location]);

  return (
    <>
      <Navbar />
      <RoomListing />

       <div className="description-container">
      <h2 className="Description">Description</h2><br></br><br></br><br></br>
      <p>
        Roommate Finder is a user-friendly platform for finding roommates and
        shared rooms. It connects people looking to rent out rooms with those
        searching for accommodation. Users can apply filters such as location,
        budget, gender, and lifestyle preferences. The site supports detailed
        listings with room photos, bios, and availability dates. Each profile
        is verified to ensure a safer and more reliable experience.
    <br></br>
        A map view feature allows users to search by proximity and neighborhood.
        Real-time chat and contact options simplify communication between
        users. Whether you’re moving cities or want to share your space, it’s
        fast and convenient. The clean interface and smart filters make
        browsing effortless. Roommate Finder helps you find not just a room—but
        the right person to live with.
      </p>
    </div>

      <div className="location-container">
        <h2>Location</h2><br></br> <br></br><br></br>
        {mapInfo ? (
          <iframe
            src={mapInfo.src}
            width={mapInfo.width}
            height={mapInfo.height}
            style={{ border: 0 }}
            allowFullScreen={mapInfo.allowFullScreen}
            loading={mapInfo.loading}
            referrerPolicy={mapInfo.referrerPolicy}
          ></iframe>
        ) : (
          <p>Loading map...</p>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Description;
