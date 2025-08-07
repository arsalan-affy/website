import React from "react";

export default function UniqueOffering() {
  const offerings = [
    { title: "University Admission SOP", description: "Craft a compelling Statement of Purpose to help secure your university admission." },
    { title: "Student Visa Application SOP", description: "Get a professionally written SOP to strengthen your student visa application." },
    { title: "Visa Extension SOP", description: "Prepare an effective SOP for extending your visa and ensuring approval." },
    { title: "Justification Letters for Visa Refusal", description: "Create persuasive justification letters to address and overcome visa refusals." },
    { title: "Visitor Visa Application SOP", description: "Write a strong SOP for your visitor visa application, ensuring a higher chance of approval." },
    { title: "Tourist Visa Application SOP", description: "Prepare a detailed and convincing SOP for your tourist visa application." },
    { title: "Resume Writing", description: "Create a professional resume that highlights your skills and experience for potential employers." },
    { title: "Spouse Visa SOP", description: "Write a compelling SOP to support your spouse visa application and reunite with your loved one." },
    { title: "Scholarship Application Letters", description: "Draft impactful scholarship application letters to increase your chances of winning a scholarship." },
  ];

  return (
    <div id="unique-offering" className="container-fluid bg-light py-5">
      <div className="container">
        <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
          <h5 className="section-title px-3">Our Unique Offering</h5>
          <h1 className="mb-0">What We Offer</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              {offerings.map((offering, index) => (
                <div key={index} className="col-lg-6 col-12">
                  <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
                    <div className="service-content text-start">
                      <h5 className="mb-4">{offering.title}</h5>
                      <p className="mb-0">{offering.description}</p>
                    </div>
                    <div className="service-icon p-4">
                      <i className="fa fa-pen fa-3x text-primary"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
