import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center">
      <Link to="/">
        <img
          src="https://img.freepik.com/premium-vector/error-404-page-found-natural-concept-illustration-background-web-missing-landing-page_607751-174.jpg?w=740"
          alt=""
          className="img-fluid w-50 h-50"
        />
      </Link>
    </div>
  );
};

export default NotFound;
