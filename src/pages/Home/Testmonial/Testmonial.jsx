import  { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "https://assignment-12-client-side-server-dev-sabbir194.vercel.app/reviews"
        );
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.log("Error fetching testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 4000);

    return () => {
      clearInterval(timer);
    };
  }, [testimonials]);

  return (
    <Container>
      <div>
        <h1 className="text-center mb-5 bg-black" id="header-text">
          Testmonial
        </h1>
        <section className="testimonials-area section-gap">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="item">
                  <div className="testi-item">
                    <img src="img/quote.png" alt="" />
                    <div className="mt-40 text">
                      <p>{testimonials[currentTestimonial]?.details}</p>
                    </div>
                    <h4>{testimonials[currentTestimonial]?.name}</h4>
                    <p>{testimonials[currentTestimonial]?.position}</p>
                  </div>
                </div>
              </div>

              <div className="offset-lg-1 col-lg-6">
                <img
                  className="img-fluid"
                  src={testimonials[currentTestimonial]?.image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Testimonial;
