import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Lucas Bennett",
      position: "Yoga Enthusiast",
      message:
      "YogaBliss has transformed my practice. The classes are calming and the instructors are incredibly knowledgeable.",
      image:
      "https://www.getsweatgo.com/wp-content/uploads/sites/4/2024/04/179-posts.homepage_preview_lg.jpg",
    },
    {
      id: 2,
      name: "Ethan Parker",
      position: "Certified Instructor",
      message:
      "The community at YogaBliss is so supportive. I've learned so much from both students and teachers here.",
      image:
      "https://www.shutterstock.com/image-photo/positive-millennial-european-man-beard-260nw-2388432013.jpg",
    },
    {
      id: 3,
      name: "Soo-Jin",
      position: "Yoga Enthusiast",
      message:
      "The online classes are perfect for my schedule. I love how I can practice yoga from the comfort of my home.",
      image:
        "https://plus.unsplash.com/premium_photo-1682094596740-d351c12e6a73?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhY2UlMjB5b2dhfGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Ava Collins",
      position: "Yoga Practitioner",
      message:
      "YogaBliss offers a perfect blend of mindfulness and physicality. I highly recommend it to everyone!",
      image:"https://www.wellandgood.com/wp-content/uploads/2017/02/ashley-newsome.jpg",
    },
  ];
  return (
    <section className="testimonials">
      <h2>Hear From Our YogaBliss Community</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="" />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
