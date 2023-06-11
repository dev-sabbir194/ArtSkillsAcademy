import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./NewCourse.css"; // Import custom CSS file for styling

const NewCourse = () => {
  const [currentDeal, setCurrentDeal] = useState(0);
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await fetch(
          "https://assignment-12-client-side-server.vercel.app/classes"
        );
        const data = await response.json();
        setDeals(data);
      } catch (error) {
        console.log("Error fetching deals:", error);
      }
    };

    fetchDeals();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDeal((prevDeal) => (prevDeal + 1) % deals.length);
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [deals]);

  const currentDealData = deals[currentDeal];

  return (
    <div className="banner">
      <Container>
        <h1 className="text-center mb-5 bg-black" id="header-text">
          New Courses
        </h1>
        <div className="mt-5">
          <div className="deals pt-2 pb-2 ps-5 pe-5">
            <Row className="mt-5 mb-5">
              <Col
                md={6}
                className={`left-side animated ${
                  currentDeal === 0 ? "slideInLeft" : "slideInRight"
                }`}
              >
                <div
                  className="text-wrapper pb-3 pt-3 ps-2 pe-2"
                  id="offer-sec"
                >
                  <h1 id="offer">{currentDealData?.Name}</h1>
                  <h3 id="offer-name">{currentDealData?.InstructorName}</h3>
                  <h4 id="offer-code">
                    Available Seats: {currentDealData?.AvailableSeats}
                  </h4>
                  <h4 id="offer-system">Price: ${currentDealData?.Price}</h4>
                  <button id="buy-offer">Buy Now</button>
                </div>
              </Col>
              <Col
                md={6}
                className={`right-side animated ${
                  currentDeal === 0 ? "slideInRight" : "slideInLeft"
                }`}
              >
                <div className="image-container">
                  <img
                    src={currentDealData?.Image}
                    alt="Header Image"
                    className="header-image"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewCourse;
