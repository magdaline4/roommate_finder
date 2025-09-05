import React from "react";
import "./AboutUs.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const AboutUs = () => {
  return (
  <>
    <Navbar />
    <section className="about-us">
      <div className="about-container">
        <h1>About Roommate Finder</h1>
        <p className="intro">
          Roommate Finder is a platform designed to make your search for the perfect roommate simple,
          secure, and stress-free. Whether you're looking to share a space or find a reliable person
          to move in, we provide the tools and features to help you make the best choice.
        </p>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to connect people with compatible roommates and affordable living options
            while ensuring trust, safety, and transparency throughout the process.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✔ Verified profiles for your safety</li>
            <li>✔ Advanced filters for location, budget, and lifestyle preferences</li>
            <li>✔ Modern, user-friendly design for quick navigation</li>
            <li>✔ Dedicated support team to assist you anytime</li>
          </ul>
        </div>

        <div className="about-section team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="/images/team1.jpg" alt="Team Member" />
              <h3>Alex Johnson</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-card">
              <img src="/images/team2.jpg" alt="Team Member" />
              <h3>Sophia Lee</h3>
              <p>Product Manager</p>
            </div>
            <div className="team-card">
              <img src="/images/team3.jpg" alt="Team Member" />
              <h3>Michael Brown</h3>
              <p>Lead Developer</p>
            </div>
          </div>
        </div>

        <div className="about-section contact">
          <h2>Contact Us</h2>
          <p>
            Have questions or feedback? Email us at{" "}
            <a href="mailto:support@roommatefinder.com">support@roommatefinder.com</a>
          </p>
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};


export default AboutUs;
