import React from 'react'
import ButtonComponent from '../components/ButtonComponent';

export default function Lgo() {
  return (
    <div className="container py-5 mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">LGO Test</h1>
        <ButtonComponent />
      </div>
      {/* What is LGO Test */}
      <section className="mb-5">
        <h2 className="text-primary">What is LGO Test?</h2>
        <p>
          The LGO (Language Generalized Online) test is designed to assess a candidate’s language proficiency in a variety of communication contexts. It’s often used by institutions and employers to determine a person's ability to communicate effectively in written and spoken English.
        </p>
      </section>

      {/* Why Choose LGO */}
      <section className="mb-5">
        <h2 className="text-primary">Why Choose LGO?</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-check-circle me-2 text-success"></i>
            <strong>Comprehensive Testing:</strong> Includes assessment of listening, speaking, reading, and writing skills.
          </li>
          <li className="list-group-item">
            <i className="bi bi-globe me-2 text-success"></i>
            <strong>Global Recognition:</strong> LGO scores are accepted by a wide range of organizations and educational institutions.
          </li>
        </ul>
      </section>

      {/* LGO Test Structure */}
      <section className="mb-5">
        <h2 className="text-primary">LGO Test Structure</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-headset me-2 text-info"></i>
            <strong>Listening:</strong> Understand and analyze audio content in various accents.
          </li>
          <li className="list-group-item">
            <i className="bi bi-pencil-square me-2 text-info"></i>
            <strong>Reading:</strong> Assess comprehension of written material.
          </li>
          <li className="list-group-item">
            <i className="bi bi-chat-square-dots me-2 text-info"></i>
            <strong>Speaking:</strong> Respond to prompts assessing fluency and pronunciation.
          </li>
          <li className="list-group-item">
            <i className="bi bi-file-earmark-text me-2 text-info"></i>
            <strong>Writing:</strong> Complete writing tasks that test clarity and coherence.
          </li>
        </ul>
      </section>
    </div>
  );
}
