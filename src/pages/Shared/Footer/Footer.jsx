import { FaFacebook, FaInstagram, FaTwitter, FaGithub} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-area section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Top Products</h4>
            <ul>
              <li>
                <a href="#">Managed Website</a>
              </li>
              <li>
                <a href="#">Manage Reputation</a>
              </li>
              <li>
                <a href="#">Power Tools</a>
              </li>
              <li>
                <a href="#">Marketing Service</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Brand Assets</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Features</h4>
            <ul>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Brand Assets</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 single-footer-widget">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Guides</a>
              </li>
              <li>
                <a href="#">Research</a>
              </li>
              <li>
                <a href="#">Experts</a>
              </li>
              <li>
                <a href="#">Agencies</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 single-footer-widget">
            <h4>Newsletter</h4>
            <p>You can trust us. We only send promo offers.</p>
            <div className="form-wrap" id="mc_embed_signup">
              <form
                target="_blank"
                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                method="get"
                className="form-inline"
              >
                <input
                  className="form-control"
                  name="EMAIL"
                  placeholder="Your Email Address"
                  required=""
                  type="email"
                />
                <button className="click-btn btn btn-default text-uppercase mt-2 ms-5">
                  subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer-bottom row align-items-center">
          <div className="col-lg-4 col-md-12 footer-social">
            <a href="#">
              <i >
                <FaFacebook />
              </i>
            </a>
            <a href="#">
              <i ><FaInstagram/></i>
            </a>
            <a href="#">
              <i><FaTwitter/></i>
            </a>
            <a href="#">
              <i > <FaGithub/></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
