import React from 'react';

const ProvidingServices = ({ title, description }) => {
  return (
    <>
      <div className="col-lg-6 col-12">
        <div className="service-content-inner d-flex align-items-center bg-white border border-primary rounded p-4 pe-0">
          <div className="service-content text-start">
            <h5 className="mb-4">{title}</h5>
            <p className="mb-0">{description}</p>
          </div>
          <div className="service-icon p-4">
            <i className="fa fa-globe fa-4x text-primary"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProvidingServices;
