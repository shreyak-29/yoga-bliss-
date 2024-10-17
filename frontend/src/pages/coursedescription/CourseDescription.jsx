import React, { useEffect, useState } from "react";
import "./coursedescription.css";
import { useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { UserData } from "../../context/UserContext";
import Loading from "../../components/loading/Loading";

const CourseDescription = ({ user }) => {
  const params = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [paymentError , setPaymentError] = useState(null)

  const { fetchUser } = UserData();

  const { fetchCourse, course, fetchCourses, fetchMyCourse } = CourseData();

  useEffect(() => {
    fetchCourse(params.id.trim()); // Trim whitespace/newline characters
  }, [params.id]); // Add params.id to dependency array
  

  const handlePayment = async (e,amount) => {
    e.preventDefault();
    setIsLoading(true);
    setPaymentError("");

    try {
        // Step 1: Make a request to create the payment order
        const response = await axios.post(
            `${server}/api/v1/payment`,
            { amount }, // Amount in rupees
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${JSON.parse(
                        localStorage.getItem("accessToken")
                    )}`,
                },
            }
        );

        // Step 2: Check if the backend response was successful
        if (response.data.success) {
            let options = {
                key: response.data.key_id,
                amount: response.data.amount,
                currency: "INR",
                name: "Yoga Bliss",
                description: "Buying/Selling yogo",
                image: "/your_logo.png", // Optional logo
                handler: function (paymentResponse) {
                    alert(`Payment successful! Payment ID: ${paymentResponse.razorpay_payment_id}`);
                },
                prefill: {
                    name: "Riddhi Patel",
                    email: "riddhi@razorpay.com",
                },
                notes: {
                    address: "Yoga Bliss",
                },
                theme: {
                    color: "#1A202C", // Dark theme color
                },
                // Step 3: Handle payment closure or cancellation
                onClose: function () {
                    console.log("Payment popup closed by the user.");
                    setPaymentError("Payment was not completed.");
                },
            };

            // Step 4: Open Razorpay payment form
            const rzp = new window.Razorpay(options);
            rzp.open();
        } else {
            // Handle failure response from the backend
            setPaymentError(response.data.message || "Payment order creation failed");
        }
    } catch (error) {
        // Log error details for debugging
        console.error("Error creating Razorpay order:", error);
        setPaymentError("There was an issue processing the payment. Please try again.");
    } finally {
        // Reset loading state after the process is complete
        setIsLoading(false);
    }
};
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {course && (
            <div className="course-description">
              <div className="course-header">
                <img
                  src={`${server}/${course.image}`}
                  alt=""
                  className="course-image"
                />
                <div className="course-info">
                  <h2>{course.title}</h2>
                  <p>Instructor: {course.createdBy}</p>
                  <p>Duration: {course.duration} weeks</p>
                </div>
              </div>

              <p>{course.description}</p>

              <p>Let's get started with course At ₹{course.price}</p>

              {user && user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn"
                >
                  Study
                </button>
              ) : (
                <button onClick={(e) => handlePayment(e,course.price)} className="common-btn">
                  Buy Now
                </button>
              )}
            </div>
          )}
          {paymentError && (
              <div className="mt-4 text-sm text-red-600">
                  {paymentError}
              </div>
          )}
        </>
      )}
    </>
  );
};

export default CourseDescription;
