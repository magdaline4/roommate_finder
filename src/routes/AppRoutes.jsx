import React from "react";
import { Routes, Route } from "react-router-dom";   // ✅ react-router-dom
import Roomdisplay from "../components/Card/Roomdisplay.jsx";
import AllRooms from "../pages/AllRooms/AllRooms.jsx";
import Home from "../pages/Home/Home.jsx";
import Description from "../pages/Description/Description.jsx";   // ✅ add this
import AboutUs from "../pages/AboutUs/AboutUs.jsx";



const AppRoutes = () => {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      

       <Route path="/about" element={<AboutUs />} />


    
      <Route path="/rooms" element={<Roomdisplay />} />

    
      <Route path="/all-rooms" element={<AllRooms />} />



      
     <Route path="/roomlisting/:location" element={<Description />} />



      <Route path="/description/:location" element={<Description />} />

    </Routes>
  );
};

export default AppRoutes;
