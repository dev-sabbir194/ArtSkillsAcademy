import { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [navbarBg, setNavbarBg] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userPhotoUrl, setUserPhotoUrl] = useState("");

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setNavbarBg("navbar-scroll");
      } else {
        setNavbarBg("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const isLoggedInUser = localStorage.getItem("userEmail") !== null;

    if (isLoggedInUser) {
      setIsLoggedIn(true);
      setUserPhotoUrl(localStorage.getItem("photoUrl"));
    } else {
      setIsLoggedIn(false);
      setUserPhotoUrl("");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");
    localStorage.removeItem("photoUrl");

    window.location.replace("/");
  };

  return (
    <div >
      <header className={`default-header ${navbarBg}`}>
        <nav
          className={`navbar navbar-expand-lg navbar-light ${navbarBg} fixed-top bg-black`}
        >
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="img/logo.png" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleLinks}
              aria-label="Toggle navigation"
            >
              <span className="lnr lnr-menu"></span>
            </button>

            <div
              className={`collapse navbar-collapse justify-content-end align-items-center ${
                showLinks ? "show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <a>
                    <Link to="/courses">Courses</Link>
                  </a>
                </li>

                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="elements.html">
                      Elements
                    </a>
                    <a className="dropdown-item" href="course-details.html">
                      Course Details
                    </a>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    className="dropdown-toggle"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Blog
                  </a>
                  <div className="dropdown-menu">
                    <a className="dropdown-item" href="blog-home.html">
                      Blog Home
                    </a>
                    <a className="dropdown-item" href="blog-single.html">
                      Blog Details
                    </a>
                  </div>
                </li>
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                      <Image
                        src={userPhotoUrl}
                        alt="User"
                        roundedCircle
                        height="30"
                      />
                    </li>

                    <li>
                      <Link onClick={handleLogout}>LogOut</Link>
                    </li>
                  </>
                ) : (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
