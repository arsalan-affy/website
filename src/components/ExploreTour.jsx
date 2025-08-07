import React from "react";

function ExploreTour() {
  return (
    <>
      {/* Explore Tour Start */}
      <div id="exploreTour" className="container-fluid ExploreTour">
        <div className="container">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Explore Tour</h5>
            <h1 className="mb-4">The World</h1>
            <p className="mb-0">
              Discover the most popular national and international tour
              categories. We offer a variety of trips to explore different
              destinations, be it a road trip or a holiday getaway, tailored to
              your preferences.
            </p>
          </div>
          <div className="tab-className text-center">
            {/* <ul className="nav nav-pills d-inline-flex justify-content-center mb-5">
              <li className="nav-item">
                <a
                  className="d-flex mx-3 py-2 border border-primary bg-light rounded-pill active"
                  data-bs-toggle="pill"
                  href="#NationalTab-1"
                >
                  <span className="text-dark" style={{ width: "250px" }}>
                    National Tour Category
                  </span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="d-flex py-2 mx-3 border border-primary bg-light rounded-pill"
                  data-bs-toggle="pill"
                  href="#InternationalTab-2"
                >
                  <span className="text-dark" style={{ width: "250px" }}>
                    International Tour Category
                  </span>
                </a>
              </li>
            </ul> */}
            <div className="tab-content">
              <div id="NationalTab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-4">
                    <div className="national-item">
                      <img
                        src="assets/img/img/explore-tour-1.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Weekend Tour"
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Weekend Tour
                          </h5>
                          <p className="text-white">
                            Escape for a refreshing weekend getaway to scenic
                            destinations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="national-item">
                      <img
                        src="assets/img/img/explore-tour-2.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Holiday Tour"
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Holiday Tour
                          </h5>
                          <p className="text-white">
                            Plan your perfect holiday with family or friends to
                            your dream destinations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="national-item">
                      <img
                        src="assets/img/img/explore-tour-3.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Road Trip"
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Road Trip
                          </h5>
                          <p className="text-white">
                            Take an adventurous road trip to explore hidden
                            gems across the country.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="national-item">
                      <img
                        src="assets/img/img/explore-tour-4.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Historical Trip"
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Historical Trip
                          </h5>
                          <p className="text-white">
                            Discover the rich history and culture of various
                            historical landmarks and monuments.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="national-item">
                      <img
                        src="assets/img/img/explore-tour-5.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Family Tour"
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Family Tour
                          </h5>
                          <p className="text-white">
                            Plan a memorable family vacation with activities
                            suitable for all ages.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="national-item">
                      <img
                        src="assets/img/img/explore-tour-6.jpg"
                        className="img-fluid w-100 rounded"
                        alt="Beach Tour"
                      />
                      <div className="national-content">
                        <div className="national-info">
                          <h5 className="text-white text-uppercase mb-2">
                            Beach Tour
                          </h5>
                          <p className="text-white">
                            Relax and unwind on beautiful beaches with scenic
                            views and refreshing waves.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="InternationalTab-2" className="tab-pane fade show p-0">
                <div className="InternationalTour-carousel owl-carousel">
                  <div className="international-item">
                    <img
                      src="assets/img/img/explore-tour-1.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Australia"
                    />
                    <div className="international-content">
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Australia
                        </h5>
                        <p className="text-white">
                          Explore 8 cities and over 143 tour destinations in
                          Australia.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="international-item">
                    <img
                      src="assets/img/img/explore-tour-2.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Germany"
                    />
                    <div className="international-content">
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Germany
                        </h5>
                        <p className="text-white">
                          Discover 12 cities and 21+ tour places across
                          Germany.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="international-item">
                    <img
                      src="assets/img/img/explore-tour-3.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Spain"
                    />
                    <div className="international-content">
                      <div className="tour-offer bg-warning">45% Off</div>
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Spain
                        </h5>
                        <p className="text-white">
                          Explore 9 cities and over 133+ places in Spain.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="international-item">
                    <img
                      src="assets/img/img/explore-tour-4.jpg"
                      className="img-fluid w-100 rounded"
                      alt="Japan"
                    />
                    <div className="international-content">
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          Japan
                        </h5>
                        <p className="text-white">
                          Discover 8 cities and 137+ tour destinations across
                          Japan.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="international-item">
                    <img
                      src="assets/img/img/explore-tour-5.jpg"
                      className="img-fluid w-100 rounded"
                      alt="London"
                    />
                    <div className="international-content">
                      <div className="tour-offer bg-info">70% Off</div>
                      <div className="international-info">
                        <h5 className="text-white text-uppercase mb-2">
                          London
                        </h5>
                        <p className="text-white">
                          Explore 17 cities and over 26 tour destinations in
                          London.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Explore Tour End */}
    </>
  );
}

export default ExploreTour;
