import React, { useState, useEffect } from "react";
import "./Courses.css";
import { Link, useParams} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Courses = () => {
  const [numOfCardsToShow, setNumOfCardsToShow] = useState(6);
  const [filteredJobData, setFilteredJobData] = useState([]);
  
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://assignment-12-client-side-server.vercel.app/classes"
        );
        const data = await response.json();
        setFilteredJobData(data);
      } catch (error) {
        console.log("Error fetching job data:", error);
      }
    };

    fetchData();
  }, []);

  const showMoreCards = () => {
    setNumOfCardsToShow(12);
  };

  const handleBuyClass = (classId) => {
    // Route to the payment page with the classId as a URL parameter
    window.location.replace(`/payment/${classId}`);
  };

  return (
    <div className="home-body bg-black pb-5 pt-5" style={{ marginTop: "83px" }}>
      <div className="container mb-5">
        <h3 className="text-center mt-5" id="title">
          All Classes
        </h3>
        <p className="text-center mb-5" id="description">
          Explore unique flavors and innovative techniques from our diverse
          range of chefs. Whether you're looking for a personal chef, catering
          for events, or cooking classes, our platform connects you with top
          culinary experts worldwide. Join our community of food enthusiasts and
          embark on a delicious journey today!
        </p>
        <div className="row">
          {filteredJobData.slice(0, numOfCardsToShow).map((card) => (
            <div
              className="col-lg-6 col-md-6 col-sm-12 mt-4 mt-2"
              key={card._id}
            >
              <div className="card h-100">
                <img
                  src={card.Image}
                  className="w-50 h-50"
                  alt={`Logo ${card._id}`}
                  id="images"
                />
                <div className="card-body text-center" id="card">
                  <h3 className="card-text text-center">{card.Name}</h3>
                  <div className="d-flex justify-content-between">
                    <h4>
                      Instructor: <span>{card.InstructorName}</span>
                    </h4>
                    <h4>
                      Available Seats: <span>{card.AvailableSeats}</span>
                    </h4>
                  </div>
                  <div className="d-flex gap-3 mt-2">
                    <p className="location">
                      <FontAwesomeIcon icon={faHeart} />
                      <span className="ms-3">{card.likes}</span>
                    </p>
                    <p className="salary">
                      <img src={card.dolarIcon} alt="" /> {card.Price}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-info"
                    id="view"
                    onClick={() => handleBuyClass(card._id)}
                  >
                    Buy Class
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {numOfCardsToShow < filteredJobData.length && (
          <div className="d-flex justify-content-center mt-4 mb-5">
            <button
              type="button"
              className="btn btn-info w-25 h-100"
              id="show"
              onClick={showMoreCards}
            >
              See All Class
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
