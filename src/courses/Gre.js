import React from 'react'
import ButtonComponent from '../components/ButtonComponent';

export default function Gre() {
  return (
    <div className="container py-5 mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">GRE Test</h1>
        <ButtonComponent />
      </div>
      {/* What is GRE */}
      <section className="mb-5">
        <h2 className="text-primary">What is GRE?</h2>
        <p>
          The Graduate Record Examination (GRE) is a standardized test used for admissions to graduate programs worldwide. The GRE is designed to measure verbal reasoning, quantitative reasoning, critical thinking, and analytical writing skills that are important for success in graduate school.
        </p>
      </section>

      {/* Why Choose GRE */}
      <section className="mb-5">
        <h2 className="text-primary">Why Choose GRE?</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-check-circle me-2 text-success"></i>
            <strong>Widely Accepted:</strong> GRE scores are accepted by thousands of graduate programs across various disciplines.
          </li>
          <li className="list-group-item">
            <i className="bi bi-globe me-2 text-success"></i>
            <strong>Global Recognition:</strong> It is accepted by institutions around the world, including in the US, UK, and Canada.
          </li>
          <li className="list-group-item">
            <i className="bi bi-bar-chart me-2 text-success"></i>
            <strong>Comprehensive Assessment:</strong> GRE tests verbal reasoning, quantitative reasoning, and analytical writing.
          </li>
          <li className="list-group-item">
            <i className="bi bi-lightning me-2 text-success"></i>
            <strong>Flexible Test Dates:</strong> GRE offers multiple test dates throughout the year, giving you flexibility to choose the one that suits your schedule.
          </li>
        </ul>
      </section>

      {/* GRE Test Structure */}
      <section className="mb-5">
        <h2 className="text-primary">GRE Test Structure</h2>
        <p>
          The GRE consists of three main sections:
        </p>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-pencil-square me-2 text-info"></i>
            <strong>Verbal Reasoning:</strong> Measures your ability to analyze and evaluate written material, understand relationships among words, and reason through text.
          </li>
          <li className="list-group-item">
            <i className="bi bi-calculator me-2 text-info"></i>
            <strong>Quantitative Reasoning:</strong> Assesses basic mathematical skills, understanding of elementary concepts, and the ability to reason quantitatively.
          </li>
          <li className="list-group-item">
            <i className="bi bi-file-earmark-text me-2 text-info"></i>
            <strong>Analytical Writing:</strong> Tests your ability to articulate complex ideas clearly and effectively in writing.
          </li>
        </ul>
      </section>

      {/* GRE Scoring */}
      <section className="mb-5">
        <h2 className="text-primary">GRE Scoring</h2>
        <p>
          The GRE is scored as follows:
        </p>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-bar-chart me-2 text-warning"></i>
            <strong>Verbal Reasoning:</strong> Scored between 130 and 170.
          </li>
          <li className="list-group-item">
            <i className="bi bi-bar-chart me-2 text-warning"></i>
            <strong>Quantitative Reasoning:</strong> Scored between 130 and 170.
          </li>
          <li className="list-group-item">
            <i className="bi bi-file-earmark-check me-2 text-warning"></i>
            <strong>Analytical Writing:</strong> Scored between 0 and 6 in half-point increments.
          </li>
        </ul>
      </section>

      {/* Benefits of Taking the GRE */}
      <section className="mb-5">
        <h2 className="text-primary">Benefits of Taking the GRE</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-globe me-2 text-danger"></i>
            <strong>Global Reach:</strong> Accepted by universities and colleges worldwide.
          </li>
          <li className="list-group-item">
            <i className="bi bi-calendar-check me-2 text-danger"></i>
            <strong>Test Flexibility:</strong> Multiple test dates and locations throughout the year.
          </li>
          <li className="list-group-item">
            <i className="bi bi-cart me-2 text-danger"></i>
            <strong>Cost-Effective:</strong> GRE has a relatively affordable test fee compared to other exams like GMAT.
          </li>
          <li className="list-group-item">
            <i className="bi bi-check-circle me-2 text-danger"></i>
            <strong>Easy Score Reporting:</strong> GRE offers free score reporting to a selected number of schools.
          </li>
        </ul>
      </section>
    </div>
  );
}
