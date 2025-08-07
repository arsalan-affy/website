import React from 'react'
import ButtonComponent from '../components/ButtonComponent';

export default function Gmat() {
  return (
    <div className="container py-5 mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">GMAT Exam</h1>
        <ButtonComponent />
      </div>
      {/* What is GMAT */}
      <section className="mb-5">
        <h2 className="text-primary">What is GMAT?</h2>
        <p>
          The Graduate Management Admission Test (GMAT) is a standardized test used for admissions to business schools around the world. It assesses your verbal, mathematical, and analytical writing skills to determine your potential for success in graduate management programs.
        </p>
      </section>

      {/* Why Choose GMAT */}
      <section className="mb-5">
        <h2 className="text-primary">Why Choose GMAT?</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-check-circle me-2 text-success"></i>
            <strong>Global Recognition:</strong> The GMAT is accepted by thousands of business schools worldwide.
          </li>
          <li className="list-group-item">
            <i className="bi bi-bar-chart-line me-2 text-success"></i>
            <strong>Accurate Assessment:</strong> Measures the skills most predictive of success in business school.
          </li>
        </ul>
      </section>

      {/* GMAT Test Structure */}
      <section className="mb-5">
        <h2 className="text-primary">GMAT Test Structure</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-puzzle me-2 text-info"></i>
            <strong>Analytical Writing:</strong> Analyze and evaluate an argument in writing.
          </li>
          <li className="list-group-item">
            <i className="bi bi-graph-up me-2 text-info"></i>
            <strong>Integrated Reasoning:</strong> Solve complex problems using data analysis.
          </li>
          <li className="list-group-item">
            <i className="bi bi-currency-dollar me-2 text-info"></i>
            <strong>Quantitative Reasoning:</strong> Measure mathematical skills and reasoning.
          </li>
          <li className="list-group-item">
            <i className="bi bi-chat-left-text me-2 text-info"></i>
            <strong>Verbal Reasoning:</strong> Assess reading comprehension and critical reasoning.
          </li>
        </ul>
      </section>
    </div>
  );
}
