import React from 'react';

const Feature = () => {
    return (
      <div>
        <section className="feature-area">
          <div className="container-fluid">
            <div className="feature-inner row">
              <div className="col-lg-2 col-md-6">
                <div className="feature-item d-flex">
                  <i className="ti-book"></i>
                  <div className="ml-20">
                    <h4>New classNamees</h4>
                    <p>
                      In the history of modern astronomy, there is probably no
                      one greater leap forward.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="feature-item d-flex">
                  <i className="ti-cup"></i>
                  <div className="ml-20">
                    <h4>Top Courses</h4>
                    <p>
                      In the history of modern astronomy, there is probably no
                      one greater leap forward.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="feature-item d-flex border-right-0">
                  <i className="ti-desktop"></i>
                  <div className="ml-20">
                    <h4>Full E-Books</h4>
                    <p>
                      In the history of modern astronomy, there is probably no
                      one greater leap forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Feature;