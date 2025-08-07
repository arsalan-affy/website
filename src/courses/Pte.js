import React from 'react'
import ButtonComponent from '../components/ButtonComponent';

export default function Pte() {
  return (
    <div className="container py-5 mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">PTE Academic</h1>
        <ButtonComponent />
      </div>
      {/* What is PTE Academic */}
      <section className="mb-5">
        <h2 className="text-primary">What is PTE Academic?</h2>
        <p>
          PTE Academic is a computer-based academic English test for study abroad and immigration purposes. It assesses the four key language skills: listening, reading, speaking, and writing. The test is recognized by universities, governments, and employers worldwide.
        </p>
      </section>

      {/* Why Choose PTE */}
      <section className="mb-5">
        <h2 className="text-primary">Why Choose PTE Academic?</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-check-circle me-2 text-success"></i>
            <strong>Fast Results:</strong> PTE Academic provides results typically within 48 hours.
          </li>
          <li className="list-group-item">
            <i className="bi bi-globe me-2 text-success"></i>
            <strong>Global Recognition:</strong> Accepted by thousands of academic institutions worldwide.
          </li>
        </ul>
      </section>

      {/* PTE Test Structure */}
      <section className="mb-5">
        <h2 className="text-primary">PTE Test Structure</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-headset me-2 text-info"></i>
            <strong>Listening:</strong> Test-takers listen to audio clips and answer related questions.
          </li>
          <li className="list-group-item">
            <i className="bi bi-pencil-square me-2 text-info"></i>
            <strong>Reading:</strong> Read academic texts and respond to comprehension questions.
          </li>
          <li className="list-group-item">
            <i className="bi bi-chat-square-dots me-2 text-info"></i>
            <strong>Speaking:</strong> Respond to questions assessing spoken English.
          </li>
          <li className="list-group-item">
            <i className="bi bi-file-earmark-text me-2 text-info"></i>
            <strong>Writing:</strong> Complete writing tasks that assess written expression.
          </li>
        </ul>
      </section>
    </div>
  );
}
