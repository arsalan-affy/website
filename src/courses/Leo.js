import React from 'react'
import ButtonComponent from '../components/ButtonComponent';

export default function Leo() {
  return (
    <div className="container py-5 mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">LEO English Test</h1>
        <ButtonComponent />
      </div>
      {/* What is LEO English Test */}
      <section className="mb-5">
        <h2 className="text-primary">What is LEO English Test?</h2>
        <p>
          The LEO English Test is a comprehensive language proficiency test designed to assess the English communication skills of non-native speakers. This test is widely used by organizations, academic institutions, and immigration authorities to evaluate an individual's English language ability for academic or professional purposes.
        </p>
      </section>

      {/* Why Choose LEO English Test */}
      <section className="mb-5">
        <h2 className="text-primary">Why Choose LEO English Test?</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-check-circle me-2 text-success"></i>
            <strong>Global Recognition:</strong> LEO is recognized by universities and institutions across the world.
          </li>
          <li className="list-group-item">
            <i className="bi bi-globe me-2 text-success"></i>
            <strong>Accessible Anywhere:</strong> The LEO English Test can be taken from anywhere with a stable internet connection.
          </li>
          <li className="list-group-item">
            <i className="bi bi-clock me-2 text-success"></i>
            <strong>Flexible Timing:</strong> You can choose when to take the test according to your convenience.
          </li>
          <li className="list-group-item">
            <i className="bi bi-gear me-2 text-success"></i>
            <strong>Comprehensive Assessment:</strong> The test assesses speaking, listening, reading, and writing skills in real-life scenarios.
          </li>
        </ul>
      </section>

      {/* LEO Test Structure */}
      <section className="mb-5">
        <h2 className="text-primary">LEO Test Structure</h2>
        <p>
          The LEO test is divided into four main sections:
        </p>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-headset me-2 text-info"></i>
            <strong>Listening:</strong> Test-takers listen to a series of audio clips and respond to related questions.
          </li>
          <li className="list-group-item">
            <i className="bi bi-pencil-square me-2 text-info"></i>
            <strong>Reading:</strong> The reading section includes various written texts, and candidates must answer comprehension questions.
          </li>
          <li className="list-group-item">
            <i className="bi bi-chat-square-dots me-2 text-info"></i>
            <strong>Speaking:</strong> This section involves spoken responses to prompts designed to assess fluency and clarity.
          </li>
          <li className="list-group-item">
            <i className="bi bi-file-earmark-text me-2 text-info"></i>
            <strong>Writing:</strong> Candidates write essays or responses to prompts to demonstrate their writing proficiency.
          </li>
        </ul>
      </section>

      {/* Benefits of Taking LEO English Test */}
      <section className="mb-5">
        <h2 className="text-primary">Benefits of Taking LEO English Test</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-globe me-2 text-danger"></i>
            <strong>Widely Accepted:</strong> LEO scores are accepted by a range of universities, immigration authorities, and employers.
          </li>
          <li className="list-group-item">
            <i className="bi bi-lightning me-2 text-danger"></i>
            <strong>Fast Results:</strong> Get your results within a short time frame, usually within 48 hours.
          </li>
          <li className="list-group-item">
            <i className="bi bi-calendar-check me-2 text-danger"></i>
            <strong>Convenient Scheduling:</strong> Choose your test time and date to fit your personal schedule.
          </li>
          <li className="list-group-item">
            <i className="bi bi-cart me-2 text-danger"></i>
            <strong>Cost-Effective:</strong> The LEO English Test is competitively priced compared to other English proficiency tests.
          </li>
        </ul>
      </section>
    </div>
  );
}
