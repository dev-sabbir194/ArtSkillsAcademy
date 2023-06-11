import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const BlogPost = () => {
    return (
      <div>
        <section className="blog-post-area section-gap">
          <div className="container-fluid">
            <div className="feature-inner row">
              <div className="col-lg-12">
                <SectionTitle
                  heading="Take the first step"
                  subHeading="to learn with us"
                  details=" In the history of modern astronomy, there is probably no one
                  greater leap forward than the building and launch of the space
                  telescope known as the Hubble."
                ></SectionTitle>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <img
                    src="img/blog-post/b1.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="top-text">
                    <p>29th, oct, 2018</p>
                    <p>121 likes</p>
                    <p>05 comments</p>
                  </div>
                  <div className="text">
                    <h4 className="text-white">Smart Kitchen Setup</h4>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet consec tetur adipisicing
                        elit, sed do.
                      </p>
                    </div>
                    <a href="#" className="primary-btn">
                      View Details
                      <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt--160">
                <div className="single-blog-post">
                  <img
                    src="img/blog-post/b2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="top-text">
                    <p>29th, oct, 2018</p>
                    <p>121 likes</p>
                    <p>05 comments</p>
                  </div>
                  <div className="text">
                    <h4 className="text-white">Smart Kitchen Setup</h4>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet consec tetur adipisicing
                        elit, sed do.
                      </p>
                    </div>
                    <a href="#" className="primary-btn">
                      View Details
                      <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mt--260">
                <div className="single-blog-post">
                  <img
                    src="img/blog-post/b3.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="overlay"></div>
                  <div className="top-text">
                    <p>29th, oct, 2018</p>
                    <p>121 likes</p>
                    <p>05 comments</p>
                  </div>
                  <div className="text">
                    <h4 className="text-white">Smart Kitchen Setup</h4>
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet consec tetur adipisicing
                        elit, sed do.
                      </p>
                    </div>
                    <a href="#" className="primary-btn">
                      View Details
                      <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default BlogPost;