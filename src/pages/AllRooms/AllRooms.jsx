import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomCard from "../../components/Card/RoomCard";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import ReactPaginate from "react-paginate";
import "../AllRooms/AllRoom.scss";

const AllRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const roomsPerPage = 10;

  const [locationFilter, setLocationFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [budgetFilter, setBudgetFilter] = useState("");

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    const locValue = params.get("location") || params.get("city") || "";
    setLocationFilter(locValue);
    setGenderFilter(params.get("gender") || "");
    setBudgetFilter(params.get("budget") || "");
  }, [location.search]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("/Jsonfile/Card.json");
        const data = Array.isArray(res.data) ? res.data : res.data.rooms || [];
        setRooms(data);
      } catch (err) {
        console.error("Error fetching rooms:", err);
      }
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    const filtered = rooms.filter((room) => {
      const matchesLocation = locationFilter
        ? room.location?.toLowerCase() === locationFilter.toLowerCase()
        : true;

      const matchesGender = genderFilter
        ? room.gender?.toLowerCase().includes(genderFilter.toLowerCase())
        : true;

      const matchesBudget = budgetFilter
        ? (budgetFilter === "5000-10000" &&
            room.price >= 5000 &&
            room.price <= 10000) ||
          (budgetFilter === "10000-15000" &&
            room.price > 10000 &&
            room.price <= 15000) ||
            (budgetFilter === "15000-20000" &&
            room.price > 15000 &&
            room.price <= 20000)
        : true;

      return matchesLocation && matchesGender && matchesBudget;
    });

    setFilteredRooms(filtered);
    setCurrentPage(0);
  }, [rooms, locationFilter, genderFilter, budgetFilter]);

  const offset = currentPage * roomsPerPage;
  const currentRooms = filteredRooms.slice(offset, offset + roomsPerPage);
  const pageCount = Math.max(1, Math.ceil(filteredRooms.length / roomsPerPage));

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <> 
    <div  className="allrooms-container">
      <Navbar />
      <div className="container">
        {/* Filters */}
        <div className="mainbox">
          <div className="filters">
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              {" "}
              <option value="" disabled hidden>
                Location
              </option>
              <option value="Chennai">Chennai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>

            <select
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
            >
              <option value="" disabled hidden>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Male/Female">Male/Female</option>
            </select>

            <select
              value={budgetFilter}
              onChange={(e) => setBudgetFilter(e.target.value)}
            >
              <option value="" disabled hidden>
                Budget
              </option>
              <option value="5000-10000">5000 - 10000</option>
              <option value="10000-15000">10000 - 15000</option>
              <option value="15000-20000">15000 - 20000</option>
            </select>
          </div>
        </div>

        {/* Room cards */}
     <div className="containers">
         <div className="grid">
          {currentRooms.length > 0 ? (
            currentRooms.map((room) => <RoomCard key={room.id} room={room} />)
          ) : (
            <p>No rooms found</p>
          )}
        </div>
     </div>

        {/* Pagination */}
        {filteredRooms.length > roomsPerPage && (
          <ReactPaginate
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            previousLabel={null}
            nextLabel={null}
          />
        )}
      </div>
      </div>
    </>
  );
};

export default AllRooms;
