import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NavbarAndHero() {
  const location = useLocation();
  const [activeHash, setActiveHash] = useState(location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/"
    }
  };

  return (
    <>
      {/* {<!-- Navbar & Hero Start --> */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
          <a href="/" className="navbar-brand p-0">
            <img src="/images/logo.png" alt="img" />
            {/* <img src="assets/img/img/logo.png" alt="Logo"/>  */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a
                href="#"
                className={`nav-item nav-link ${
                  activeHash === "" ? "active" : ""
                }`}
              >
                Home
              </a>
              <div
                onClick={() => scrollToSection("aboutUs")}
                href="#aboutUs"
                className={`nav-item nav-link ${
                  activeHash === "#aboutUs" ? "active" : ""
                }`}
              >
                About
              </div>
              <div
                onClick={() => scrollToSection("services")}
                className={`nav-item nav-link ${
                  activeHash === "#services" ? "active" : ""
                }`}
              >
                Services
              </div>

              <div className="nav-item dropdown">
                <a
                  href="#"
                  className={`nav-link dropdown-toggle ${
                    ["/courses"].includes(location.pathname) && "active"
                  }`}
                  data-bs-toggle="dropdown"
                >
                  Courses
                </a>
                <div className="dropdown-menu m-0">
                  {/* Available in Both Offline and Online */}
                  <div className="dropdown-header">
                    Available Offline & Online
                  </div>
                  <Link to="/ielts">
                    <a className="dropdown-item">IELTS Academic & General</a>
                  </Link>

                  {/* Offline Courses Only */}
                  <div className="dropdown-header">Offline Courses Only</div>
                  <Link to="/spoken-english">
                    <a className="dropdown-item">Spoken English</a>
                  </Link>
                  <Link to="/lifeskills">
                    <a className="dropdown-item">Lifeskills</a>
                  </Link>

                  {/* Online Courses Only */}
                  <div className="dropdown-header">Online Courses Only</div>
                  <Link to="/duolingo">
                    <a className="dropdown-item">Duolingo</a>
                  </Link>
                  <Link to="/leo">
                    <a className="dropdown-item">LEO</a>
                  </Link>
                  <Link to="/gre">
                    <a className="dropdown-item">GRE</a>
                  </Link>
                  <Link to="/lgo">
                    <a className="dropdown-item">LGO</a>
                  </Link>
                  <Link to="/french">
                    <a className="dropdown-item">French</a>
                  </Link>
                  <Link to="/gmat">
                    <a className="dropdown-item">GMAT</a>
                  </Link>
                  <Link to="/pte">
                    <a className="dropdown-item">PTE</a>
                  </Link>
                </div>
              </div>

              {/* <a
                href="#contact"
                className={`nav-item nav-link ${
                  activeHash === "#contact" ? "active" : ""
                }`}
              >
                Contact
              </a> */}
            </div>
            <a
              href="#contact"
              className="btn btn-primary rounded-pill py-2 px-4 ms-lg-4"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavbarAndHero;

// stop stop
