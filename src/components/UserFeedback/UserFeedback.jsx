import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserFeedback.scss";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function UserFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
      
        const response = await axios.get("/Jsonfile/feedback.json");
        setFeedbacks(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchData();
  }, []);

  const renderStars = (rating) => {
    return (
      <>
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <FaStar key={i} color="#f5a623" />
          ) : (
            <FaRegStar key={i} color="#f5a623" />
          )
        )}
      </>
    );
  };

  return (
    <div>
        <h1>User Feedback</h1>
    <div className="feedback-container">
      {feedbacks.map((item, index) => (
        <div className="feedback-card" key={index}>
          <h3>{item.name}</h3>
          <div className="stars">{renderStars(item.rating)}</div>
          <p>{item.feedback}</p>
        </div>
      ))}
    </div>
    </div>
  );
}
