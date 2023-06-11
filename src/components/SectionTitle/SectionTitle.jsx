const SectionTitle = ({ heading, subHeading, details }) => {
  return (
    <div className="col-lg-12">
      <div className="section-title text-left">
        <h2>
          {heading} <br />
          {subHeading}
        </h2>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
