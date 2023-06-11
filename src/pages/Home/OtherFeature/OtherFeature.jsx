import { useEffect, useState } from "react";
import axios from "axios";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const OtherFeature = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await axios.get(
          "https://assignment-12-client-side-server.vercel.app/otherfeature"
        );
        setFeatures(response.data);
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <div>
      <section className="other-feature-area">
        <div className="container">
          <div className="feature-inner row">
            <SectionTitle
              heading="Features That"
              subHeading="Can Avail By Everyone"
              details="If you are looking at blank cassettes on the web, you may be
                  very confused at the difference in price. You may see some for
                  as low as $.17 each."
            ></SectionTitle>
            {features.map((feature) => (
              <div className="col-lg-4 col-md-6" key={feature._id}>
                <div className="other-feature-item">
                  <i className="ti-key"></i>
                  <h4>{feature.Heading}</h4>
                  <div>
                    <p>{feature.Details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherFeature;
