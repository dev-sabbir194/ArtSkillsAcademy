import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect, useState } from "react";

const PopularCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://assignment-12-client-side-server.vercel.app/classes")
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <section className="popular-course-area section-gap">
        <div className="container-fluid">
          <div className="row justify-content-center section-title">
            <SectionTitle
              heading="Popular Courses"
              subHeading="Available Right Now"
              details=" In the history of modern astronomy, there is probably no one
                  greater leap forward than the building and launch of the space
                  telescope known as the Hubble."
            ></SectionTitle>
          </div>

          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {courses.map((course) => (
              <SwiperSlide key={course._id}>
                <div className="single-popular-course">
                  <div className="thumb">
                    <img
                      className="img-fluid f-img w-100"
                      style={{ height: "250px" }}
                      src={`${course.Image}`}
                      alt=""
                    />
                  </div>
                  <div className="details">
                    <div className="d-flex justify-content-between mb-20">
                      <p className="name">{course.Name}</p>
                      <p className="value">${course.Price}</p>
                    </div>
                    <a href="#">
                      <h4>{course.InstructorName}</h4>
                    </a>
                    <div className="bottom d-flex mt-15">
                      <ul className="list">
                       
                      </ul>
                      <p className="ml-20">{course.AvailableSeats} Reviews</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default PopularCourses;
