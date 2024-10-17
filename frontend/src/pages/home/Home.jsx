import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const YogaBlissHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to YogaBliss: Your Pathway to Inner Peace and Wellness</h1>
          <p>Join a Journey of Mindfulness and Strength and Unleash Your Inner Calm</p>
          <div className="button-container">
          <button onClick={() => navigate("/courses")} className="common-btn">
            Start Your Journey
          </button>
          </div>
        </div>
      </div>
      <Testimonials />
    </div>
  );
};

export default YogaBlissHome;

