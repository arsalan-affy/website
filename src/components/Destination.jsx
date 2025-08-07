import React from "react";
import Flag from "react-world-flags";

function Destination() {
    const countries = [
        { name: "USA", code: "US" },
        { name: "Canada", code: "CA" },
        { name: "Germany", code: "DE" },
        { name: "France", code: "FR" },
        { name: "Italy", code: "IT" },
        { name: "Australia", code: "AU" },
        { name: "Japan", code: "JP" },
        { name: "Spain", code: "ES" },
        { name: "Brazil", code: "BR" },
        { name: "India", code: "IN" },
        { name: "China", code: "CN" },
        { name: "Singapore", code: "SG" },
        { name: "Thailand", code: "TH" },
        { name: "Mexico", code: "MX" },
        { name: "Egypt", code: "EG" },
        { name: "Russia", code: "RU" },
        { name: "South Korea", code: "KR" },
        { name: "New Zealand", code: "NZ" },
        { name: "United Kingdom", code: "GB" },
        { name: "South Africa", code: "ZA" },
        // European countries
        { name: "Austria", code: "AT" },
        { name: "Belgium", code: "BE" },
        { name: "Switzerland", code: "CH" },
        { name: "Netherlands", code: "NL" },
        { name: "Sweden", code: "SE" },
        { name: "Norway", code: "NO" },
        { name: "Denmark", code: "DK" },
        { name: "Poland", code: "PL" },
        { name: "Portugal", code: "PT" },
        { name: "Greece", code: "GR" },
        { name: "Czech Republic", code: "CZ" },
        { name: "Finland", code: "FI" },
        { name: "Ireland", code: "IE" },
        { name: "Hungary", code: "HU" },
        { name: "Romania", code: "RO" },
        { name: "Bulgaria", code: "BG" },
        { name: "Croatia", code: "HR" },
        { name: "Slovakia", code: "SK" },
        { name: "Slovenia", code: "SI" },
        { name: "Estonia", code: "EE" },
        { name: "Latvia", code: "LV" },
        { name: "Lithuania", code: "LT" },
        // Gulf & Middle Eastern countries
        { name: "UAE", code: "AE" },
        { name: "Qatar", code: "QA" },
        { name: "Saudi Arabia", code: "SA" },
        { name: "Oman", code: "OM" },
        { name: "Bahrain", code: "BH" },
        { name: "Kuwait", code: "KW" },
        { name: "Jordan", code: "JO" },
        { name: "Lebanon", code: "LB" },
        { name: "Egypt", code: "EG" },
      ];
      

  return (
    <>
      <div id="destination" className="container-fluid destination pt-4">
        <div className="container">
          <div className="mx-auto text-center mb-5" style={{ maxWidth: "900px" }}>
            <h5 className="section-title px-3">Destination</h5>
            <h1 className="mb-0">Popular Destinations</h1>
          </div>
          <div className="tab-class text-center">
            <ul className="nav nav-pills d-flex flex-wrap justify-content-center mb-5 country-list">
              {countries.map((country, index) => (
                <li key={index} className="nav-item m-2">
                  <a
                    className="d-flex align-items-center py-3 px-4 border border-primary bg-light rounded-pill shadow-sm"
                    data-bs-toggle="pill"
                    href={`#tab-${index + 2}`}
                    style={{
                      width: "220px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Flag
                      code={country.code}
                      style={{
                        width: "30px",
                        height: "20px",
                        marginRight: "15px",
                      }}
                    />
                    <span
                      className="text-dark"
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                      }}
                    >
                      {country.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Destination;
