import React from 'react'
import ButtonComponent from '../components/ButtonComponent'

export default function Lifeskills() {
  return (
    <div className="container py-5 mt-5">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-center">IELTS Life Skills</h1>
        <ButtonComponent />
      </div>
      {/* What is IELTS Life Skills */}
      <section className="mb-5">
        <h2 className="text-primary">What is IELTS Life Skills?</h2>
        <p>
          IELTS Life Skills is a test designed to assess the English language proficiency of individuals who are seeking to apply for a UK visa and immigration (UKVI) purposes. It tests speaking and listening skills only, and is available at two levels: A1 and B1. The test is for those who need to prove their English-speaking ability as part of their visa or immigration process.
        </p>
      </section>

      {/* IELTS Life Skills Test Structure */}
      <section className="mb-5">
        <h2 className="text-primary">IELTS Life Skills Test Structure</h2>
        <p>
          The IELTS Life Skills test is specifically designed to meet the requirements of UK Visas and Immigration (UKVI). There are two levels:
        </p>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>IELTS Life Skills A1:</strong> This test is for individuals applying for a visa or immigration to the UK, typically for family reunification purposes or those applying for a visa under the Spouse Visa category.
          </li>
          <li className="list-group-item">
            <strong>IELTS Life Skills B1:</strong> This is for applicants who are applying for Indefinite Leave to Remain (ILR) or UK citizenship. It tests a higher level of speaking and listening.
          </li>
        </ul>
      </section>

      {/* IELTS Life Skills A1 vs B1 */}
      <section className="mb-5">
        <h2 className="text-primary">Difference Between IELTS Life Skills A1 and B1</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Test Level</th>
              <th>A1</th>
              <th>B1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Purpose</td>
              <td>For visa applications like Spouse Visa or Family Visa</td>
              <td>For ILR (Indefinite Leave to Remain) or UK Citizenship</td>
            </tr>
            <tr>
              <td>Test Focus</td>
              <td>Basic conversational skills, understanding common English in everyday contexts</td>
              <td>More advanced conversation, ability to discuss complex topics and opinions</td>
            </tr>
            <tr>
              <td>Length of Test</td>
              <td>Approximately 16-18 minutes</td>
              <td>Approximately 22 minutes</td>
            </tr>
            <tr>
              <td>Number of Test Sections</td>
              <td>1 section: Speaking and Listening</td>
              <td>1 section: Speaking and Listening</td>
            </tr>
            <tr>
              <td>Test Format</td>
              <td>You will engage in conversation with another candidate and the examiner, focusing on basic communication skills</td>
              <td>You will engage in a more detailed discussion, demonstrating your ability to express opinions and understand different situations</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* IELTS Life Skills Results */}
      <section className="mb-5">
        <h2 className="text-primary">IELTS Life Skills Results</h2>
        <p>
          The results of the IELTS Life Skills test are available in a few days and are either <strong>pass</strong> or <strong>fail</strong>. You will receive a result within 7 days of the test. For both A1 and B1 tests, the assessment is based on your ability to communicate effectively in English, including listening to the instructions and responding clearly. No band score is given like in the standard IELTS exam.
        </p>
      </section>

      {/* Why Choose IELTS Life Skills */}
      <section className="mb-5">
        <h2 className="text-primary">Why Choose IELTS Life Skills?</h2>
        <ul className="list-group">
          <li className="list-group-item">
            <i className="bi bi-check-circle me-2 text-success"></i>
            <strong>Approved by UKVI:</strong> IELTS Life Skills is an approved test for UK visa and immigration applications.
          </li>
          <li className="list-group-item">
            <i className="bi bi-people-fill me-2 text-success"></i>
            <strong>Quick Results:</strong> Results are available within a few days, making the process faster for visa applications.
          </li>
          <li className="list-group-item">
            <i className="bi bi-lightning me-2 text-success"></i>
            <strong>Short Test Duration:</strong> The test lasts around 16 to 22 minutes, making it less time-consuming than other IELTS formats.
          </li>
          <li className="list-group-item">
            <i className="bi bi-chat-dots me-2 text-success"></i>
            <strong>Focused on Communication:</strong> This test focuses on real-life communication skills, ensuring that you are prepared to communicate effectively in English in everyday situations.
          </li>
        </ul>
      </section>

      {/* Preparing for IELTS Life Skills */}
      <section className="mb-5">
        <h2 className="text-primary">How to Prepare for IELTS Life Skills</h2>
        <p>
          Preparation for the IELTS Life Skills test should focus on enhancing your speaking and listening skills in real-life contexts. Here are some tips:
        </p>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Practice Conversations:</strong> Engage in regular conversations with native speakers or fluent English speakers to improve your confidence and fluency.
          </li>
          <li className="list-group-item">
            <strong>Listen to English:</strong> Practice listening to various English accents through podcasts, movies, and TV shows to familiarize yourself with different speech patterns.
          </li>
          <li className="list-group-item">
            <strong>Take Mock Tests:</strong> Take practice tests to simulate the exam experience, improving your ability to perform under timed conditions.
          </li>
          <li className="list-group-item">
            <strong>Work on Pronunciation:</strong> Clear pronunciation is essential for effective communication. Practice speaking clearly and slowly.
          </li>
        </ul>
      </section>
    </div>
  )
}
