import React from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";

function Courses() {
  const courses = [
    {
      title: "Spoken English",
      path: "/spoken-english",
      description:
        "Improve your speaking skills with our comprehensive spoken English course. Read More",
    },
    {
      title: "IELTS",
      path: "/ielts",
      description:
        "Prepare for the IELTS exam with expert guidance and practice. Read More",
    },
    {
      title: "Life Skills",
      path: "/lifeskills",
      description:
        "Develop essential life skills for personal and professional growth. Read More",
    },
    {
      title: "Duolingo",
      path: "/duolingo",
      description:
        "Boost your language skills with our engaging Duolingo course. Read More",
    },
    {
      title: "LEO",
      path: "/leo",
      description:
        "Learn English Online with LEO's interactive language lessons. Read More",
    },
    {
      title: "GRE",
      path: "/gre",
      description:
        "Prepare for the GRE with focused strategies and practice sessions. Read More",
    },
    {
      title: "LGO",
      path: "/lgo",
      description:
        "Improve your General English with our LGO course. Read More",
    },
    {
      title: "French",
      path: "/french",
      description:
        "Master French with lessons for beginners to advanced learners. Read More",
    },
    {
      title: "GMAT",
      path: "/gmat",
      description:
        "Ace the GMAT exam with our expert-led preparation courses. Read More",
    },
    {
      title: "PTE",
      path: "/pte",
      description:
        "Prepare for the PTE exam with comprehensive modules and practice. Read More",
    },
  ];

  return (
    <div id="courses" className="container-fluid bg-light">
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Courses</h5>
          <h1 className="mb-0">Our Courses</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              {courses.map((course, index) => (
                <div key={index} className="col-lg-6 col-12">
                  <Link to={course.path} style={{ textDecoration: "none" }}>
                    <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                      <div className="service-content text-start">
                        <h5 className="mb-4">{course.title}</h5>
                        <p className="mb-2">{course.description}</p>
                        <ButtonComponent />
                      </div>
                      <div className="service-icon p-4">
                        <i className="fa fa-book fa-4x text-primary"></i>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
