import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://img.freepik.com/free-photo/frame-stationary-items-creativity-art-studio_23-2148660932.jpg?size=626&ext=jpg&ga=GA1.1.1845470195.1680205699&semt=ais",
    "https://img.freepik.com/premium-photo/creative-logo-with-pencil-surrounded-by-bright-feathers_780672-39.jpg?size=626&ext=jpg&ga=GA1.1.1845470195.1680205699&semt=ais",
    "https://img.freepik.com/free-photo/abstract-drawings-canvas-top-view_23-2148660935.jpg?size=626&ext=jpg&ga=GA1.1.1845470195.1680205699&semt=ais",
    "https://img.freepik.com/free-photo/abstract-eye-portrait-young-women-elegance-generated-by-ai_188544-9712.jpg?size=626&ext=jpg&ga=GA1.1.1845470195.1680205699&semt=ais",
    "https://img.freepik.com/free-photo/artist-props-table_23-2148929904.jpg?size=626&ext=jpg&ga=GA1.1.1845470195.1680205699&semt=ais",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div>
      <section className="home-banner-area">
        <div className="container">
          <div className="row justify-content-center fullscreen align-items-center">
            <div className="col-lg-5 col-md-8 home-banner-left">
              <h1 className="text-white">
                Take the first step <br />
                to learn with us
              </h1>
              <p className="mx-auto text-white  mt-20 mb-40">
                In the history of modern astronomy, there is probably no one
                greater leap forward than the building and launch of the space
                telescope known as the Hubble.
              </p>
            </div>
            <div className="offset-lg-2 col-lg-5 col-md-12 home-banner-right">
              <Image
                className="img-fluid "
                roundedCircle
                height="30"
                style={{ height: "500px", width: "532px" }}
                src={images[currentImage]}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
