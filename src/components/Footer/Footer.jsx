// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.scss";
import { FaFacebookF, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbBrandThreads } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/saved">Saved</a></li>
          <li><a href="/enquiry">Enquiry</a></li>
          <li><a href="/room-bookings">Room Bookings</a></li>
        </ul>
      </div>

    
      <div className="footer-section">
        <h4>Available on</h4>
        <ul>
          <li><a href="/chennai">Chennai</a></li>
          <li><a href="/coimbatore">Coimbatore</a></li>
          <li><a href="/bengaluru">Bengaluru</a></li>
          <li><a href="/mumbai">Mumbai</a></li>
          <li><a href="/hyderabad">Hyderabad</a></li>
          <li><a href="/pune">Pune</a></li>
        </ul>
      </div>

      
      <div className="footer-section about">
        <h4>About us</h4>
        <p>
          Roommate Finder is a web platform that helps users find compatible
          roommates or available rooms by using filters like gender, location,
          budget, and availability, making shared living simple and hassle-free.
        </p>
      </div>

      
      <div className="footer-section">
        <h4>Contact us</h4>
        <p>
          <a href="tel:+919876543210">
            <FaPhoneAlt /> +91 9876543210
          </a>
        </p>
        <p>
          <a href="mailto:xyz@gmail.com">
            <MdEmail /> xyz@gmail.com
          </a>
        </p>
      </div>

      
      <div className="footer-section social">
        <h4>Follow us on</h4>
        <p>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF /> Facebook
          </a>
        </p>
        <p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
        </p>
        <p>
          <a href="https://threads.net" target="_blank" rel="noopener noreferrer">
            <TbBrandThreads /> Threads
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
