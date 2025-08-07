import React from 'react'
import ButtonComponent from '../components/ButtonComponent';

export default function French() {
  return (
    <div className="container py-5 mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">French Language Test</h1>
        <ButtonComponent />
      </div>
      {/* What is French Language Test */}
      <section className="mb-5">
        <h2 className="text-primary">What is French Language Test?</h2>
        <p>
          The French Language Test evaluates a candidate’s proficiency in French. It covers speaking, listening, reading, and writing skills, and is commonly required for academic programs and professional opportunities in French-speaking countries.
        </p>
      </section>

      {/* Why Choose French Language Test */}
      <section className="mb-5">
        <h2 className="text-primary">Why Choose French Language Test?</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-check-circle me-2 text-success"></i>
            <strong>Recognized Globally:</strong> Accepted by various institutions and businesses worldwide.
          </li>
          <li className="list-group-item">
            <i className="bi bi-person-lines-fill me-2 text-success"></i>
            <strong>Comprehensive Assessment:</strong> It covers all language skills—speaking, reading, writing, and listening.
          </li>
        </ul>
      </section>

      {/* French Test Structure */}
      <section className="mb-5">
        <h2 className="text-primary">French Test Structure</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-headset me-2 text-info"></i>
            <strong>Listening:</strong> Listen to recordings and answer questions based on comprehension.
          </li>
          <li className="list-group-item">
            <i className="bi bi-pencil-square me-2 text-info"></i>
            <strong>Reading:</strong> Read texts and respond to comprehension questions.
          </li>
          <li className="list-group-item">
            <i className="bi bi-chat-square-dots me-2 text-info"></i>
            <strong>Speaking:</strong> Engage in conversation to test pronunciation and fluency.
          </li>
          <li className="list-group-item">
            <i className="bi bi-file-earmark-text me-2 text-info"></i>
            <strong>Writing:</strong> Complete writing tasks to assess grammar and writing ability.
          </li>
        </ul>
      </section>
    </div>
  );
}
