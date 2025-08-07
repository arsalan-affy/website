import React from "react";

function Footer() {
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div id="footer" className="container-fluid footer py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Get In Touch</h4>
                <a className="my-3" href="">
                  <i className="fas fa-home me-2"></i> T6, Prayosa Complex,{" "}
                  <br /> At Po Chikhli, Dist : Navsari, Gujarat, 396521.
                </a>
                <a className="my-3" href="">
                  <i className="fas fa-envelope me-2"></i>{" "}
                  info@mywingsacademy.com
                </a>
                <a className="my-3" href="">
                  <i className="fas fa-phone me-2"></i> +91 97237 16163
                </a>

                <div className="d-flex align-items-center">
                  <i className="fas fa-share fa-2x text-white me-2"></i>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    className="btn-square btn btn-primary rounded-circle mx-1"
                    href=""
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white">Company</h4>
                <a href="/#about">
                  <i className="fas fa-angle-right me-2"></i> About
                </a>
              </div>
            </div> */}
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white"> Online Courses</h4>
                <a href="/spoken-english">
                  <i className="fas fa-angle-right me-2"></i> Spoken English
                </a>
                <a href="/ielts">
                  <i className="fas fa-angle-right me-2"></i> IELTS
                </a>
                <a href="/lifeskills">
                  <i className="fas fa-angle-right me-2"></i> Life Skills
                </a>
                <a href="/duolingo">
                  <i className="fas fa-angle-right me-2"></i> Duolingo
                </a>
                <a href="/leo">
                  <i className="fas fa-angle-right me-2"></i> Leo
                </a>
                <a href="/gre">
                  <i className="fas fa-angle-right me-2"></i> GRE
                </a>
                <a href="/lgo">
                  <i className="fas fa-angle-right me-2"></i> LGO
                </a>
                <a href="/french">
                  <i className="fas fa-angle-right me-2"></i> French
                </a>
                <a href="/gmat">
                  <i className="fas fa-angle-right me-2"></i> GMAT
                </a>
                <a href="/pte">
                  <i className="fas fa-angle-right me-2"></i> PTE
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-3">
              <div className="footer-item d-flex flex-column">
                <h4 className="mb-4 text-white"> Offline Courses</h4>
                <a href="/spoken-english">
                  <i className="fas fa-angle-right me-2"></i> Spoken English
                </a>
                <a href="/ielts">
                  <i className="fas fa-angle-right me-2"></i> IELTS
                </a>
                <a href="/lifeskills">
                  <i className="fas fa-angle-right me-2"></i> Life Skills
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
