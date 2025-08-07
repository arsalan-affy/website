import React from "react";

function About() {
  return (
    <>
      {/* <!-- About Start --> */}
      <div id="aboutUs" className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div
                className="h-100"
                style={{
                  border: "50px solid",
                  borderColor: "transparent #13357B transparent #13357B",
                }}
              >
                <img
                  src="assets/img/img/about-img-new.jpg"
                  className="img-fluid w-100 h-100"
                  alt="Education, Visa, and Immigration"
                />
              </div>
            </div>
            <div
              className="col-lg-7"
              style={{
                background:
                  "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(assets/img/img/about-img-1.png)",
              }}
            >
              <h5 className="section-about-title pe-3">About Us</h5>
              <h1 className="mb-4">
                Welcome to <span className="text-primary">Wings</span>
              </h1>
              <p className="mb-4">
                At <strong>Wings</strong>, we are dedicated to empowering
                individuals by providing top-tier services in education, visa
                processing, and immigration. Whether you are looking to study
                abroad, migrate to a new country, or need assistance with visa
                applications, we are here to help you at every step of the
                journey.
              </p>
              <p className="mb-4">
                Our team offers expert guidance in both online and offline
                education, ensuring that you receive the best opportunities for
                learning. Additionally, we specialize in visa services and
                immigration solutions, making your move to your desired
                destination as smooth and stress-free as possible.
              </p>
              <div className="row gy-2 gx-4 mb-4">
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Comprehensive Online & Offline Education
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Expert Visa Assistance
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Reliable Immigration Solutions
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Personalized Consultation Services
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Tailored Solutions for Students and Professionals
                  </p>
                </div>
                <div className="col-sm-6">
                  <p className="mb-0">
                    <i className="fa fa-arrow-right text-primary me-2"></i>
                    Comprehensive Support Throughout Your Journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  );
}

export default About;
