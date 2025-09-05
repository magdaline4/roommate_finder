import React from "react";
import "./ContactUs.scss";

const ContactUs = ({ roommate, onClose }) => {
  if (!roommate) return null;

  return (
    <div className="contactus-overlay">
      <div className="contactus-card">
        {/* Close button */}
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h3>Contact Your Roommate</h3>
        <div className="profile">
          <img src={roommate.image} alt={roommate.name} />

          <div>
            <p>
              <strong>{roommate.name}</strong>
            </p>
            <p>{roommate.location}</p>
            <p>{roommate.phone}</p>
          </div>
        </div>

        <button
          className="call-btn"
          onClick={() => (window.location.href = `tel:${roommate.phone}`)}
        >
          Call Now
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
