import React from "react";

function Services() {
  const services = [
    { title: "Student VISA", description: "Visa for students to study abroad. This visa allows individuals to pursue education in a foreign country." },
    { title: "Visit Visa", description: "Visa for visiting friends or family. This is granted to those traveling to visit relatives or acquaintances." },
    { title: "Tourist Visa", description: "Visa for tourism and leisure travel. Aimed at individuals traveling for holidays and sightseeing." },
    { title: "Tour packages", description: "All-inclusive travel packages for tours. Tailored packages to help you explore new destinations with ease." },
    { title: "Convocation Visa", description: "Visa for attending graduation ceremonies. This visa is designed for individuals attending educational ceremonies abroad." },
    { title: "Business Visa", description: "Visa for business-related travel. Facilitates entry for individuals attending meetings, conferences, or trade events." },
    { title: "Spouse Visa", description: "Visa for joining a spouse in another country. This allows the spouse of a resident or citizen to live together." },
  ];

  return (
    <>
      {/* <!-- Services Start --> */}
      <div id="services" className="container-fluid bg-light service py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center mb-5"
            style={{ maxWidth: "900px" }}
          >
            <h5 className="section-title px-3">Services</h5>
            <h1 className="mb-0">Our Services</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="row g-4">
                {services.map((service, index) => {
                  return (
                    <div key={index} className="col-lg-6 col-12">
                      <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                        <div className="service-content text-start">
                          <h5 className="mb-4">{service.title}</h5>
                          <p className="mb-0">{service.description}</p>
                        </div>
                        <div className="service-icon p-4">
                          <i className="fa fa-globe fa-4x text-primary"></i>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
