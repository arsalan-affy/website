import React from "react";
import ButtonComponent from "../components/ButtonComponent";

export default function Ielts() {
  return (
    <div className="container py-5 mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">IELTS Academic & General</h1>
        <ButtonComponent />
      </div>

      {/* What is IELTS */}
      <section className="mb-5">
        <h2 className="text-primary">What is IELTS?</h2>
        <p>
          The International English Language Testing System (IELTS) is a
          standardized test that evaluates the English proficiency of non-native
          speakers. It is recognized by universities, employers, immigration
          authorities, and professional organizations worldwide. The test
          assesses skills in listening, reading, writing, and speaking.
        </p>
      </section>

      {/* Why is IELTS Important */}
      <section className="mb-5">
        <h2 className="text-primary">Why is IELTS Important?</h2>
        <ul className="list-group">
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-globe me-3 text-success"></i>
            <strong>International Recognition:</strong> IELTS is accepted by
            over 10,000 organizations worldwide, including universities,
            employers, and immigration authorities.
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-file-earmark-person me-3 text-success"></i>
            <strong>University Admissions:</strong> Many universities,
            especially in English-speaking countries, require a certain IELTS
            band score for admission.
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-person-check me-3 text-success"></i>
            <strong>Job Opportunities:</strong> A good IELTS score can help you
            qualify for jobs that require English proficiency.
          </li>
          <li className="list-group-item d-flex align-items-center">
            <i className="bi bi-globe2 me-3 text-success"></i>
            <strong>Immigration:</strong> IELTS scores are required for visa
            applications in countries like Australia, Canada, the UK, and New
            Zealand.
          </li>
        </ul>
      </section>

      {/* IELTS Exam Pattern */}
      <section className="mb-5">
        <h2 className="text-primary">IELTS Exam Pattern</h2>
        <p>
          The IELTS exam consists of four sections:
          <ul className="list-group mt-2">
            <li className="list-group-item">
              <i className="bi bi-mic me-2 text-info"></i>
              <strong>Listening:</strong> 30 minutes - 4 audio recordings
              followed by questions.
            </li>
            <li className="list-group-item">
              <i className="bi bi-book me-2 text-info"></i>
              <strong>Reading:</strong> 60 minutes - 3 reading passages with a
              total of 40 questions.
            </li>
            <li className="list-group-item">
              <i className="bi bi-pencil-square me-2 text-info"></i>
              <strong>Writing:</strong> 60 minutes - 2 tasks: one descriptive
              and one argumentative.
            </li>
            <li className="list-group-item">
              <i className="bi bi-chat-dots me-2 text-info"></i>
              <strong>Speaking:</strong> 11-14 minutes - face-to-face interview
              with an examiner.
            </li>
          </ul>
        </p>
      </section>

      {/* IELTS Syllabus */}
      <section className="mb-5">
        <h2 className="text-primary">IELTS Syllabus</h2>
        <p>
          The syllabus focuses on evaluating your ability to use English in
          academic and professional settings. The test assesses:
          <ul className="list-group mt-2">
            <li className="list-group-item">
              <i className="bi bi-file-earmark-text me-2 text-warning"></i>
              <strong>Listening:</strong> Understanding conversations and
              discussions in English.
            </li>
            <li className="list-group-item">
              <i className="bi bi-bookmark me-2 text-warning"></i>
              <strong>Reading:</strong> Understanding written texts, including
              advertisements, articles, and passages.
            </li>
            <li className="list-group-item">
              <i className="bi bi-pencil me-2 text-warning"></i>
              <strong>Writing:</strong> Developing written arguments, essays,
              and reports.
            </li>
            <li className="list-group-item">
              <i className="bi bi-person me-2 text-warning"></i>
              <strong>Speaking:</strong> Expressing ideas clearly and
              effectively in a conversation.
            </li>
          </ul>
        </p>
      </section>

      {/* IELTS Academic & General Differences Table */}
      <section className="mb-5">
        <h2 className="text-primary">IELTS Academic vs IELTS General</h2>
        <p>Here is the comparison between IELTS Academic and IELTS General:</p>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Feature</th>
              <th>IELTS Academic</th>
              <th>IELTS General</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Purpose</td>
              <td>For higher education and professional registration</td>
              <td>For migration and work experience</td>
            </tr>
            <tr>
              <td>Reading Section</td>
              <td>Includes academic texts</td>
              <td>Includes general interest topics</td>
            </tr>
            <tr>
              <td>Writing Section</td>
              <td>
                Task 1: Data interpretation (graphs/charts); Task 2:
                Argumentative essay
              </td>
              <td>Task 1: Letter writing; Task 2: Essay writing</td>
            </tr>
            <tr>
              <td>Test Duration</td>
              <td>2 hours 45 minutes</td>
              <td>2 hours 45 minutes</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* IELTS Band System */}
      <section className="mb-5">
        <h2 className="text-primary">IELTS Band System</h2>
        <p>
          IELTS scores are reported on a scale from 0 to 9, where each band
          corresponds to a level of proficiency:
          <ul className="list-group mt-2">
            <li className="list-group-item">
              <strong>Band 9:</strong> Expert user
            </li>
            <li className="list-group-item">
              <strong>Band 8:</strong> Very good user
            </li>
            <li className="list-group-item">
              <strong>Band 7:</strong> Good user
            </li>
            <li className="list-group-item">
              <strong>Band 6:</strong> Competent user
            </li>
            <li className="list-group-item">
              <strong>Band 5:</strong> Modest user
            </li>
            <li className="list-group-item">
              <strong>Band 4:</strong> Limited user
            </li>
            <li className="list-group-item">
              <strong>Band 3:</strong> Extremely limited user
            </li>
            <li className="list-group-item">
              <strong>Band 2:</strong> Intermittent user
            </li>
            <li className="list-group-item">
              <strong>Band 1:</strong> Non-user
            </li>
            <li className="list-group-item">
              <strong>Band 0:</strong> Did not attempt the test
            </li>
          </ul>
        </p>
      </section>

      {/* Countries that Accept IELTS Scores */}
      <section className="mb-5">
        <h2 className="text-primary">Countries that Accept IELTS Scores</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-globe me-2 text-info"></i>
            <strong>United Kingdom</strong> - IELTS is widely accepted for
            university admissions, immigration, and professional purposes.
          </li>
          <li className="list-group-item">
            <i className="bi bi-globe2 me-2 text-info"></i>
            <strong>Australia</strong> - Required for immigration and university
            admissions.
          </li>
          <li className="list-group-item">
            <i className="bi bi-globe2 me-2 text-info"></i>
            <strong>Canada</strong> - Accepted for university applications,
            immigration, and employment.
          </li>
          <li className="list-group-item">
            <i className="bi bi-globe2 me-2 text-info"></i>
            <strong>New Zealand</strong> - Required for immigration and academic
            purposes.
          </li>
          <li className="list-group-item">
            <i className="bi bi-globe me-2 text-info"></i>
            <strong>United States</strong> - Some universities and institutions
            accept IELTS scores for admission.
          </li>
          <li className="list-group-item">
            <i className="bi bi-globe2 me-2 text-info"></i>
            <strong>Germany</strong> - Accepts IELTS for university admissions.
          </li>
        </ul>
      </section>

      {/* Benefits of IELTS Coaching */}
      <section className="mb-5">
        <h2 className="text-primary">Benefits of IELTS Coaching</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-lightning me-2 text-danger"></i>
            Expert guidance to understand the exam format and techniques for
            each section.
          </li>
          <li className="list-group-item">
            <i className="bi bi-pencil-square me-2 text-danger"></i>
            Customized practice sessions for improving weak areas.
          </li>
          <li className="list-group-item">
            <i className="bi bi-check-circle me-2 text-danger"></i>
            Regular mock tests to build confidence and time management skills.
          </li>
          <li className="list-group-item">
            <i className="bi bi-chat-square-dots me-2 text-danger"></i>
            Interactive speaking sessions to refine communication skills.
          </li>
          <li className="list-group-item">
            <i className="bi bi-calendar-check me-2 text-danger"></i>
            Flexible class schedules to suit your availability.
          </li>
        </ul>
      </section>

      {/* Why Choose Us for IELTS Coaching */}
      <section className="mb-5">
        <h2 className="text-primary">Why Choose Us for IELTS Coaching?</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-person-check me-2 text-info"></i>
            <strong>Experienced Trainers:</strong> Our trainers have a proven
            track record of helping students achieve their desired scores.
          </li>
          <li className="list-group-item">
            <i className="bi bi-people-fill me-2 text-info"></i>
            <strong>Interactive Learning:</strong> Engage in real-world practice
            with personalized feedback.
          </li>
          <li className="list-group-item">
            <i className="bi bi-lightning-charge me-2 text-info"></i>
            <strong>Proven Results:</strong> We have a history of high success
            rates with our students.
          </li>
          <li className="list-group-item">
            <i className="bi bi-clipboard-check me-2 text-info"></i>
            <strong>Structured Curriculum:</strong> Our syllabus is designed to
            cover all aspects of the IELTS exam comprehensively.
          </li>
        </ul>
      </section>
    </div>
  );
}
