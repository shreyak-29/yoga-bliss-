import React from "react";
import "./about.css";



const About = () => {
  return (
    <div className="about">
      <div className="about-content">
      <img src="/YogaGif.gif" alt="Women Doing Yoga" className="yoga-gif" />

        <h2>About Us</h2>
        <p>
          At <strong>YogaBliss</strong>, we believe in the transformative power of yoga to balance your body, mind, and spirit. Our mission is to foster a welcoming online community where people of all backgrounds can embark on their personal wellness journey, find inner peace, and achieve a healthier lifestyle.
        </p>
        
        <div className="box">
          <h3>Our Philosophy</h3>
          <p>
            At YogaBliss, we celebrate the uniqueness of every individual. Yoga is a journey of self-discovery, and we're here to guide you at every step. Whether you're a beginner looking to build a foundation or an experienced practitioner aiming to deepen your practice, our platform provides space for everyone to grow.
          </p>
        </div>

        <div className="box">
          <h3>What We Offer</h3>
          <ul>
            <li>
              <strong>Expert Instructors</strong>: Learn from our passionate certified instructors, with classes tailored to your level for natural progress.
            </li>
            <li>
              <strong>A Supportive Community</strong>: Connect with like-minded individuals through online forums and events.
            </li>
            <li>
              <strong>Accessible Learning</strong>: Enjoy the flexibility of practicing anytime, anywhere with our user-friendly platform.
            </li>
          </ul>
        </div>

        <div className="box">
          <h3>Join Us</h3>
          <p>
            Begin your journey toward greater self-awareness, improved health, and lasting happiness with YogaBliss. Whether you're here for relaxation, strength-building, or personal growth, we're excited to help you unlock your true potential through yoga.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
